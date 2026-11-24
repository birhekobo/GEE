"""FIG20.png - TCI (Temperature Condition Index) for Amhara.

TCI = (LST_max - LST_now) / (LST_max - LST_min) computed against a
2000-2020 green-season climatological min/max. Low TCI means abnormally
high land-surface temperature (thermal stress); high TCI means cool/wet.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common

TCI_PALETTE = [
    "#8b0000", "#f46d43", "#fee08b", "#ffffbf", "#d9f0a3",
    "#a6d96a", "#4393c3", "#053061",
]


def _tci(target_start, target_end):
    lst = (
        ee.ImageCollection("MODIS/061/MOD11A2")
        .select("LST_Day_1km")
        .filterBounds(config.bbox(config.REGION_AMHARA))
    )
    clim = lst.filterDate("2000-01-01", "2020-12-31").filter(
        ee.Filter.calendarRange(6, 11, "month")
    )
    # scale the aggregated images (Kelvin*50 -> deg C) instead of mapping the
    # whole collection, otherwise date filters after .map() fail on the server
    lst_min = clim.min().multiply(0.02).subtract(273.15).rename("LST_min")
    lst_max = clim.max().multiply(0.02).subtract(273.15).rename("LST_max")
    lst_now = lst.filterDate(target_start, target_end).mean().multiply(0.02).subtract(273.15).rename("LST_now")
    tci = lst_max.subtract(lst_now).divide(lst_max.subtract(lst_min))
    return tci.rename("TCI").clamp(0, 1)


def generate():
    common.init()

    vis = {"min": 0.0, "max": 1.0, "palette": TCI_PALETTE}
    out = config.OUTPUT_DIR / "FIG20.png"
    common.render_dual(
        _tci("2021-06-01", "2021-09-30"),
        _tci("2022-06-01", "2022-09-30"),
        vis, config.REGION_AMHARA, out,
        "TCI Temperature Condition Index - Kiremt rains 2021, Amhara",
        "TCI Temperature Condition Index - Kiremt rains 2022, Amhara",
    )
    print("FIG20  - TCI (Amhara) FINE")


if __name__ == "__main__":
    generate()