"""FIG15.png - Aerosol optical depth (dust/harmattan season, distinct from FIG5).

Uses the MERRA-2 total aerosol extinction at 550 nm for an independent date
window and a different palette so the gallery image is clearly distinct from
FIG5. Showcases one representative one-month plot (January 2020) next to the
full dusty-season composite (Dec 2019-Feb 2020).

MERRA-2 aer/2 is an hourly product, so a raw median over a month invokes
~700 images and exceeds the EE thumbnail memory limit. We therefore reduce
each day to a daily mean first and then average the daily means.
"""

import sys
from datetime import date, timedelta
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common

AOD2_PALETTE = [
    "#2b83ba", "#abd9e9", "#ffffbf", "#fdae61", "#d7191c",
]


def _merra2():
    return ee.ImageCollection("NASA/GSFC/MERRA/aer/2").select("TOTEXTTAU")


def _daily_dates(start, end):
    """Every date string in [start, end)."""
    out, cur = [], date.fromisoformat(start)
    stop = date.fromisoformat(end)
    while cur < stop:
        out.append(cur.isoformat())
        cur += timedelta(days=1)
    return out


def _aod(start, end, label, afar):
    """Mean of daily-mean TOTEXTTAU over the window (hourly -> daily -> mean),
    clipped and masked so everything outside the Afar polygon is masked out."""
    daily = [
        _merra2().filterDate(ee.Date(d), ee.Date(d).advance(1, "day")).mean()
        for d in _daily_dates(start, end)
    ]
    img = ee.ImageCollection(daily).mean().rename(label).float()
    mask = ee.Image.constant(1).clip(afar).rename("mask")
    return img.clip(afar).updateMask(mask)


def generate():
    common.init()

    afar = common.region_geometry("Afar")
    month = _aod("2020-01-01", "2020-01-31", "AOD_550", afar)
    season = _aod("2019-12-01", "2020-02-28", "AOD_550", afar)

    vis = {"min": 0.0, "max": 0.4, "palette": AOD2_PALETTE}
    out = config.OUTPUT_DIR / "FIG15.png"
    common.render_dual(
        month, season, vis, config.REGION_AFAR, out,
        "Aerosol Optical Depth 550 nm (MERRA-2) - January 2020, Afar",
        "Aerosol Optical Depth 550 nm (MERRA-2) - Dec 2019-Feb 2020, Afar",
        legend_label="Aerosol optical depth at 550 nm",
    )
    print("FIG15  - aerosol month vs season (Afar) FINE")


if __name__ == "__main__":
    generate()