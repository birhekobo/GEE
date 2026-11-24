"""FIG30.png - GPM IMERG satellite rainfall, Kiremt season 2021 (satellite rainfall).

Total rainfall (mm) for the June-September 2021 long-rains season from the
Integrated Multi-satellite Retrievals for GPM (IMERG, Level-3 monthly, V07).
Each monthly mean precipitation rate (mm/hr) is multiplied by the hours in
that month and the four months are summed to give the seasonal total.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common

RAIN_PALETTE = [
    "#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6",
    "#4292c6", "#2171b5", "#08519c", "#08306b",
]


def _to_month_total(img):
    start = ee.Date(img.get("system:time_start"))
    hours = start.advance(1, "month").difference(start, "hour")
    return img.multiply(hours).rename("precip_mm")


def generate():
    common.init()

    gpm = (
        ee.ImageCollection("NASA/GPM_L3/IMERG_MONTHLY_V07")
        .filterDate("2021-06-01", "2021-09-30")
        .select("precipitation")
        .map(_to_month_total)
        .sum()
        .rename("rainfall_mm")
        .clip(common.ethiopia_geometry())
        .updateMask(ee.Image.constant(1).clip(common.ethiopia_geometry()).rename("mask"))
    )

    vis = {"min": 0.0, "max": 1200.0, "palette": RAIN_PALETTE}
    out = config.OUTPUT_DIR / "FIG30.png"
    common.render_map(
        gpm, vis, config.REGION_ETHIOPIA, out,
        "Satellite Rainfall (GPM IMERG) - Jun-Sep 2021, Ethiopia",
        boundary_source="local",
        legend_label="Total rainfall (mm)",
    )
    print("FIG30  - GPM rainfall (Ethiopia) FINE")


if __name__ == "__main__":
    generate()
