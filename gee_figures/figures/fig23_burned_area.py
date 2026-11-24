"""FIG23.png - MODIS MCD64A1 burned area, 2021 (wildfire monitoring, Ethiopia).

Burned-area day of year (1-365) from the MODIS MCD64A1 Collection-6.1 product.
Only pixels that burned during 2021 are shown, coloured by burn date.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common

FIRE_PALETTE = [
    "#feedde", "#fdd0a2", "#fdae6b", "#fd8d3c",
    "#f16913", "#d94801", "#a63603", "#7f2704",
]


def generate():
    common.init()

    eth = common.ethiopia_geometry()
    burn = (
        ee.ImageCollection("MODIS/061/MCD64A1")
        .filterDate("2021-01-01", "2021-12-31")
        .select("BurnDate")
        .max()
        .rename("burn_date")
        .clip(eth)
        .updateMask(ee.Image.constant(1).clip(eth).rename("mask"))
    )
    burned_only = burn.updateMask(burn.gt(0))

    vis = {"min": 1.0, "max": 365.0, "palette": FIRE_PALETTE}
    out = config.OUTPUT_DIR / "FIG23.png"
    common.render_map(
        burned_only, vis, config.REGION_ETHIOPIA, out,
        "Burned Area (MODIS MCD64A1) - 2021, Ethiopia",
        boundary_source="local",
        legend_label="Burn date (day of year)",
    )
    print("FIG23  - Burned area (Ethiopia) FINE")


if __name__ == "__main__":
    generate()
