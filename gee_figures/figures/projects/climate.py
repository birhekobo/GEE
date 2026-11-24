"""Climate Impact Assessment - NDVI change figure (Ethiopia).

Card: Climate Impact Assessment (Land Use Monitoring Project).
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3]))

import ee  # noqa: E402

from gee_figures import config, common  # noqa: E402
from gee_figures.figures.projects.palettes import (  # noqa: E402
    NDVI_CHANGE_PALETTE,
)


def _kiremt_ndvi(collection, year):
    """Mean MODIS NDVI for the June-September growing season of ``year``."""
    return (
        collection.filterDate(f"{year}-06-01", f"{year}-09-30")
        .mean()
        .multiply(0.0001)
        .rename("NDVI")
    )


def generate_climate_impact_assessment():
    """Climate Impact Assessment - MODIS NDVI change 2024 vs 2015 (Ethiopia)."""
    common.init()
    ndvi = (
        ee.ImageCollection("MODIS/061/MOD13Q1")
        .select("NDVI")
        .filterBounds(config.bbox(config.REGION_ETHIOPIA))
    )
    change = (
        _kiremt_ndvi(ndvi, 2024)
        .subtract(_kiremt_ndvi(ndvi, 2015))
        .rename("NDVI_change")
    )
    vis = {"min": -0.3, "max": 0.3, "palette": NDVI_CHANGE_PALETTE}
    common.render_map(
        change, vis, config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Climate Impact Assessment.png",
        "Climate Impact Assessment - MODIS NDVI change, Kiremt 2024 vs 2015 - Ethiopia",
        legend_label="NDVI change (2024 - 2015)",
    )


GENERATORS = {
    "Climate Impact Assessment": generate_climate_impact_assessment,
}
