"""FIG25.png - MODIS MOD10A1 snow cover frequency, Dec-Feb 2021/22 (cryosphere).

Mean snow-cover percentage from MODIS MOD10A1 (500 m) over the boreal winter
window Dec 2021 - Feb 2022 for the Amhara highlands (incl. Ras Dashen, the
tallest peak in Ethiopia, which is seasonally snow-capped).
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common

SNOW_PALETTE = [
    "#e8f1ff", "#bdd8f2", "#8fbae8", "#5a95cf", "#2f6fb2", "#174a8c",
]


def generate():
    common.init()

    snow = (
        ee.ImageCollection("MODIS/061/MOD10A1")
        .filterDate("2021-12-01", "2022-02-28")
        .select("NDSI_Snow_Cover")
        .filterBounds(config.bbox(config.REGION_AMHARA))
        .mean()
        .rename("snow_cover_pct")
        .clip(common.region_geometry("Amhara"))
    )

    vis = {"min": 0.0, "max": 100.0, "palette": SNOW_PALETTE}
    out = config.OUTPUT_DIR / "FIG25.png"
    common.render_map(
        snow, vis, config.REGION_AMHARA, out,
        "Snow Cover Frequency (MODIS MOD10A1) - Dec 2021 to Feb 2022, Amhara",
        draw_regions=False, draw_woredas=True, boundary_source="local",
        legend_label="Mean snow cover (%)",
    )
    print("FIG25  - Snow cover (Amhara) FINE")


if __name__ == "__main__":
    generate()
