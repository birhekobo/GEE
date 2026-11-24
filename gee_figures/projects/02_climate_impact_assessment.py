"""Project 02 - Climate Impact Assessment.

Page:   Projects & Collaboration -> Land Use Monitoring Project
Data:   MODIS MOD13Q1 NDVI, Kiremt (Jun-Sep) 2024 minus Kiremt 2015
Source: ee.ImageCollection("MODIS/061/MOD13Q1")
Output: public/images/Climate Impact Assessment.png

Run:
    python gee_figures/projects/02_climate_impact_assessment.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee  # noqa: E402

from gee_figures import common, config  # noqa: E402
from gee_figures.figures.projects.palettes import (  # noqa: E402
    NDVI_CHANGE_PALETTE,
)


def kiremt_ndvi(collection, year):
    """Mean NDVI for the June-September growing season of ``year``."""
    return (
        collection.filterDate(f"{year}-06-01", f"{year}-09-30")
        .mean()
        .multiply(0.0001)
        .rename("NDVI")
    )


def main():
    common.init()
    ndvi = (
        ee.ImageCollection("MODIS/061/MOD13Q1")
        .select("NDVI")
        .filterBounds(config.bbox(config.REGION_ETHIOPIA))
    )
    change = (
        kiremt_ndvi(ndvi, 2024)
        .subtract(kiremt_ndvi(ndvi, 2015))
        .rename("NDVI_change")
    )
    vis = {"min": -0.3, "max": 0.3, "palette": NDVI_CHANGE_PALETTE}
    common.render_map(
        change,
        vis,
        config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Climate Impact Assessment.png",
        "Climate Impact Assessment - MODIS NDVI change, Kiremt 2024 vs 2015 - Ethiopia",
        legend_label="NDVI change (2024 - 2015)",
    )


if __name__ == "__main__":
    main()
