"""Water Resource Monitoring Project - 3 thematic map figures (Ethiopia).

Cards: Surface Water Monitoring, Groundwater Assessment,
Water Resource Management.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3]))

import ee  # noqa: E402

from gee_figures import config, common  # noqa: E402
from gee_figures.figures.projects.palettes import (  # noqa: E402
    OCCURRENCE_PALETTE,
    TWS_PALETTE,
    WATER_PALETTE,
)


def generate_surface_water_monitoring():
    """Surface Water Monitoring - JRC occurrence (Ethiopia)."""
    common.init()
    occ = ee.Image("JRC/GSW1_4/GlobalSurfaceWater").select("occurrence")
    vis = {"min": 0.0, "max": 100.0, "palette": OCCURRENCE_PALETTE}
    common.render_map(
        occ, vis, config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Surface Water Monitoring.png",
        "Surface Water Monitoring - Water Occurrence (JRC Global Surface Water) - Ethiopia",
    )


def generate_groundwater_assessment():
    """Groundwater Assessment - GRACE storage anomaly (Ethiopia)."""
    common.init()
    tws = (
        ee.ImageCollection("NASA/GRACE/MASS_GRIDS_V04/MASCON_CRI")
        .select("lwe_thickness")
        .filterDate("2021-01-01", "2022-12-31")
        .mean()
        .rename("TWSA_cm")
    )
    vis = {"min": -25.0, "max": 25.0, "palette": TWS_PALETTE}
    common.render_map(
        tws, vis, config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Groundwater Assessment.png",
        "Groundwater Assessment - GRACE Water Storage Anomaly 2021-2022 (cm) - Ethiopia",
    )


def generate_water_resource_management():
    """Water Resource Management - Landsat NDWI (Ethiopia)."""
    common.init()
    col = common.landsat8_c2_sr(
        region=config.REGION_ETHIOPIA, start="2022-01-01", end="2022-03-31"
    )
    ndwi = col.normalizedDifference(["SR_B3", "SR_B5"]).rename("NDWI")
    vis = {"min": -0.3, "max": 0.6, "palette": WATER_PALETTE}
    common.render_map(
        ndwi, vis, config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Water Resource Management.png",
        "Water Resource Management - Landsat NDWI - Ethiopia",
    )


GENERATORS = {
    "Surface Water Monitoring": generate_surface_water_monitoring,
    "Groundwater Assessment": generate_groundwater_assessment,
    "Water Resource Management": generate_water_resource_management,
}