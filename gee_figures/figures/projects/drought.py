"""Drought Monitoring Project - 3 thematic map figures (Amhara / Ethiopia).

Cards: Drought Early Warning, Agricultural Impact, Water Resource Impact.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3]))

import ee  # noqa: E402

from gee_figures import config, common  # noqa: E402
from gee_figures.figures.projects.data import vci  # noqa: E402
from gee_figures.figures.projects.palettes import (  # noqa: E402
    RAIN_DIFF_PALETTE,
    SOIL_PALETTE,
    VCI_PALETTE,
)


def generate_drought_early_warning():
    """Drought Early Warning - CHIRPS rainfall 2021 vs 2015 (Ethiopia)."""
    common.init()
    ch = ee.ImageCollection("UCSB-CHG/CHIRPS/DAILY").select("precipitation")
    wet = (ch.filterDate("2021-06-01", "2021-09-30")
           .filterBounds(config.bbox(config.REGION_ETHIOPIA)).sum())
    dry = (ch.filterDate("2015-06-01", "2015-09-30")
           .filterBounds(config.bbox(config.REGION_ETHIOPIA)).sum())
    diff = wet.subtract(dry).rename("diff_mm")
    vis = {"min": -600.0, "max": 600.0, "palette": RAIN_DIFF_PALETTE}
    common.render_map(
        diff, vis, config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Drought Early Warning.png",
        "Drought Early Warning - CHIRPS Rainfall 2021 minus 2015 (mm), Ethiopia",
    )


def generate_agricultural_impact():
    """Agricultural Impact - MODIS VCI crop stress (Amhara)."""
    common.init()
    vis = {"min": 0.0, "max": 1.0, "palette": VCI_PALETTE}
    common.render_map(
        vci("2022-06-01", "2022-09-30"), vis, config.REGION_AMHARA,
        config.OUTPUT_DIR / "Agricultural Impact.png",
        "Agricultural Impact - Vegetation Condition Index (VCI) - Kiremt 2022, Amhara",
    )


def generate_water_resource_impact():
    """Water Resource Impact - SMAP soil moisture (2015 El Nino, Ethiopia)."""
    common.init()
    sm = (
        ee.ImageCollection("NASA/SMAP/SPL4SMGP/008")
        .select("sm_surface")
        .filterDate("2015-06-01", "2015-09-30")
        .mean()
        .rename("soil_moisture")
    )
    vis = {"min": 0.0, "max": 0.5, "palette": SOIL_PALETTE}
    common.render_map(
        sm, vis, config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Water Resource Impact.png",
        "Water Resource Impact - SMAP Surface Soil Moisture (m3 m-3) - Jun-Sep 2015, Ethiopia",
    )


GENERATORS = {
    "Drought Early Warning": generate_drought_early_warning,
    "Agricultural Impact": generate_agricultural_impact,
    "Water Resource Impact": generate_water_resource_impact,
}