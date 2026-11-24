"""Land Use Monitoring Project - 8 thematic map figures (Ethiopia).

Cards: Land Use Change, Urban Growth, Air Quality Monitoring, Urban Air Quality,
Industrial Emissions, Air Quality Prediction, Health Impact Analysis,
Policy Support & Planning.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3]))

import ee  # noqa: E402

from gee_figures import config, common  # noqa: E402
from gee_figures.figures.projects.data import s5p_median  # noqa: E402
from gee_figures.figures.projects.palettes import (  # noqa: E402
    AOD_PALETTE,
    CAMS_AOD_PALETTE,
    LIGHTS_PALETTE,
    NO2_PALETTE,
    POP_PALETTE,
    SO2_PALETTE,
    WORLDCOVER_PALETTE,
)


def generate_land_use_change():
    """Land Use Change Monitoring - Hansen forest change (Ethiopia)."""
    common.init()
    gfc = ee.Image("UMD/hansen/global_forest_change_2025_v1_13")
    img = gfc.select(["treecover2000", "loss", "gain"])
    vis = {"bands": ["treecover2000", "loss", "gain"],
           "min": [0, 0, 0], "max": [100, 1, 1]}
    common.render_map(
        img, vis, config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Land Use Change Monitoring.png",
        "Land Use Change Monitoring - Tree Cover 2000, Loss & Gain (Hansen) - Ethiopia",
    )


def generate_urban_growth():
    """Urban Growth Analysis - VIIRS night-time lights (Ethiopia)."""
    common.init()
    lights = (
        ee.ImageCollection("NOAA/VIIRS/DNB/MONTHLY_V1/VCMSLCFG")
        .filterDate("2021-01-01", "2022-01-01")
        .select("avg_rad")
        .max()
        .rename("nightlight")
    )
    vis = {"min": 0.0, "max": 20.0, "palette": LIGHTS_PALETTE}
    common.render_map(
        lights, vis, config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Urban Growth Analysis.png",
        "Urban Growth Analysis - VIIRS Night-Time Lights (2021) - Ethiopia",
    )


def generate_air_quality_monitoring():
    """Air Quality Monitoring - MCD19A2 MAIAC AOD, June vs July 2020 (Ethiopia)."""
    common.init()
    aod = (
        ee.ImageCollection("MODIS/061/MCD19A2_GRANULES")
        .select("Optical_Depth_047")
        .filterBounds(config.bbox(config.REGION_ETHIOPIA))
    )
    june = aod.filterDate("2020-06-01", "2020-06-30").median().rename("AOD").float()
    july = aod.filterDate("2020-07-01", "2020-07-31").median().rename("AOD").float()
    vis = {"min": 0.0, "max": 1.2, "palette": AOD_PALETTE}
    common.render_dual(
        june, july,
        vis, config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Air Quality Monitoring.png",
        "Air Quality Monitoring - Aerosol Optical Depth (MCD19A2) - June 2020, Ethiopia",
        "Air Quality Monitoring - Aerosol Optical Depth (MCD19A2) - July 2020, Ethiopia",
        legend_label="Aerosol Optical Depth",
    )


def generate_urban_air_quality():
    """Urban Air Quality - Sentinel-5P tropospheric NO2 (Ethiopia)."""
    common.init()
    no2 = s5p_median(
        "COPERNICUS/S5P/OFFL/L3_NO2",
        "tropospheric_NO2_column_number_density",
        "2022-01-01", "2022-03-31", config.REGION_ETHIOPIA,
    )
    vis = {"min": 0.0, "max": 0.0002, "palette": NO2_PALETTE}
    common.render_map(
        no2, vis, config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Urban Air Quality.png",
        "Urban Air Quality - Tropospheric NO2 (Sentinel-5P) - Jan-Mar 2022, Ethiopia",
    )


def generate_industrial_emissions():
    """Industrial Emissions - Sentinel-5P SO2 (Ethiopia)."""
    common.init()
    so2 = s5p_median(
        "COPERNICUS/S5P/OFFL/L3_SO2",
        "SO2_column_number_density",
        "2022-01-01", "2022-03-31", config.REGION_ETHIOPIA,
    )
    vis = {"min": -0.0005, "max": 0.0005, "palette": SO2_PALETTE}
    common.render_map(
        so2, vis, config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Industrial Emissions.png",
        "Industrial Emissions - Sulfur Dioxide SO2 (Sentinel-5P) - Jan-Mar 2022, Ethiopia",
    )


def generate_air_quality_prediction():
    """Air Quality Prediction - CAMS AOD 550 nm forecast hours H00/H21 (Ethiopia)."""
    common.init()
    col = (
        ee.ImageCollection("ECMWF/CAMS/NRT")
        .filterDate("2023-02-01", "2023-02-28")
        .filter("model_initialization_hour == 0")
        .filterBounds(config.bbox(config.REGION_ETHIOPIA))
        .select("total_aerosol_optical_depth_at_550nm_surface")
    )
    h00 = col.filter("model_forecast_hour == 0").mean().rename("CAMS_AOD_H00")
    h21 = col.filter("model_forecast_hour == 21").mean().rename("CAMS_AOD_H21")
    vis = {"min": 0.0, "max": 3.6, "palette": CAMS_AOD_PALETTE}
    common.render_dual(
        h00, h21,
        vis, config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Air Quality Prediction.png",
        "Air Quality Prediction - CAMS AOD 550 nm H00 - Feb 2023, Ethiopia",
        "Air Quality Prediction - CAMS AOD 550 nm H21 - Feb 2023, Ethiopia",
        legend_label="CAMS AOD at 550 nm",
    )


def generate_health_impact_analysis():
    """Health Impact Analysis - population exposure (WorldPop)."""
    common.init()
    pop = (
        ee.ImageCollection("WorldPop/GP/100m/pop")
        .filter(ee.Filter.eq("year", 2020))
        .filterBounds(config.bbox(config.REGION_ETHIOPIA))
        .mosaic()
        .select("population")
        .rename("pop")
    )
    vis = {"min": 0.0, "max": 250.0, "palette": POP_PALETTE}
    common.render_map(
        pop, vis, config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Health Impact Analysis.png",
        "Health Impact Analysis - Population Exposure (WorldPop, 100 m) - Ethiopia",
    )


def generate_policy_support():
    """Policy Support & Planning - ESA WorldCover land cover (Ethiopia)."""
    common.init()
    wc = ee.ImageCollection("ESA/WorldCover/v200").first().select("Map")
    vis = {"min": 10, "max": 100, "palette": WORLDCOVER_PALETTE}
    common.render_map(
        wc, vis, config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Policy Support.png",
        "Policy Support & Planning - Land Cover (ESA WorldCover) - Ethiopia",
    )


GENERATORS = {
    "Land Use Change Monitoring": generate_land_use_change,
    "Urban Growth Analysis": generate_urban_growth,
    "Air Quality Monitoring": generate_air_quality_monitoring,
    "Urban Air Quality": generate_urban_air_quality,
    "Industrial Emissions": generate_industrial_emissions,
    "Air Quality Prediction": generate_air_quality_prediction,
    "Health Impact Analysis": generate_health_impact_analysis,
    "Policy Support": generate_policy_support,
}