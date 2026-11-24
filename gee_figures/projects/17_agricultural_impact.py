"""Project 17 - Agricultural Impact Assessment.

Page:   Projects & Collaboration -> Drought Monitoring Project
Data:   MODIS MOD13Q1 Vegetation Condition Index, Kiremt 2022 (Amhara)
Source: ee.ImageCollection("MODIS/061/MOD13Q1")
Output: public/images/Agricultural Impact.png

Run:
    python gee_figures/projects/17_agricultural_impact.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee  # noqa: E402

from gee_figures import common, config  # noqa: E402
from gee_figures.figures.projects.palettes import VCI_PALETTE  # noqa: E402


def vegetation_condition_index(start, end):
    """VCI relative to the 2000-2020 June-November climatology."""
    ndvi = (
        ee.ImageCollection("MODIS/061/MOD13Q1")
        .select("NDVI")
        .filterBounds(config.bbox(config.REGION_AMHARA))
    )
    climatology = ndvi.filterDate("2000-01-01", "2020-12-31").filter(
        ee.Filter.calendarRange(6, 11, "month")
    )
    return (
        ndvi.filterDate(start, end)
        .mean()
        .multiply(0.0001)
        .subtract(climatology.min().multiply(0.0001))
        .divide(
            climatology.max().multiply(0.0001)
            .subtract(climatology.min().multiply(0.0001))
        )
        .rename("VCI")
        .clamp(0, 1)
    )


def main():
    common.init()
    vis = {"min": 0.0, "max": 1.0, "palette": VCI_PALETTE}
    common.render_map(
        vegetation_condition_index("2022-06-01", "2022-09-30"),
        vis,
        config.REGION_AMHARA,
        config.OUTPUT_DIR / "Agricultural Impact.png",
        "Agricultural Impact - Vegetation Condition Index (VCI) - Kiremt 2022, Amhara",
        legend_label="Vegetation Condition Index",
    )


if __name__ == "__main__":
    main()
