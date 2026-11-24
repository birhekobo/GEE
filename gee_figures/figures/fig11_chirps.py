"""FIG11.png - CHIRPS rainfall for the Ethiopian long-rains season."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common

RAIN_PALETTE = [
    "#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6",
    "#4292c6", "#2171b5", "#08519c", "#08306b",
]


def generate():
    common.init()

    eth = common.ethiopia_geometry()
    rain = (
        ee.ImageCollection("UCSB-CHG/CHIRPS/DAILY")
        .select("precipitation")
        .filterDate("2021-06-01", "2021-09-30")
        .filterBounds(config.bbox(config.REGION_ETHIOPIA))
        .sum()
        .rename("rainfall_mm")
        .clip(eth)
        .updateMask(ee.Image.constant(1).clip(eth).rename("mask"))
    )

    vis = {"min": 0.0, "max": 1200.0, "palette": RAIN_PALETTE}
    out = config.OUTPUT_DIR / "FIG11.png"
    common.render_map(
        rain, vis, config.REGION_ETHIOPIA, out,
        "Precipitation (CHIRPS) - Jun-Sep 2021, Ethiopia",
        legend_label="Total rainfall (mm)",
    )
    print("FIG11  - CHIRPS precipitation (Ethiopia) FINE")


if __name__ == "__main__":
    generate()