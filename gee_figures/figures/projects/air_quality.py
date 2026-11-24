"""Air Quality Projection Project - 3 thematic map figures (Ethiopia).

Cards: Air Quality Forecasting, Pollution Source Analysis,
Health Impact Assessment.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3]))

import ee  # noqa: E402

from gee_figures import config, common  # noqa: E402
from gee_figures.figures.projects.data import s5p_median  # noqa: E402
from gee_figures.figures.projects.palettes import (  # noqa: E402
    AOD_PALETTE,
    NO2_PALETTE,
    PM25_PALETTE,
    POP_PALETTE,
    SO2_PALETTE,
)


def generate_air_quality_forecasting():
    """Air Quality Forecasting - CAMS PM2.5 forecast hours H00/H21 (Ethiopia)."""
    common.init()
    col = (
        ee.ImageCollection("ECMWF/CAMS/NRT")
        .filterDate("2023-01-01", "2023-01-31")
        .filter("model_initialization_hour == 0")
        .filterBounds(config.bbox(config.REGION_ETHIOPIA))
        .select("particulate_matter_d_less_than_25_um_surface")
    )
    h00 = col.filter("model_forecast_hour == 0").mean().rename("PM2_5_H00")
    h21 = col.filter("model_forecast_hour == 21").mean().rename("PM2_5_H21")
    vis = {"min": 0.0, "max": 100.0, "palette": PM25_PALETTE}
    common.render_dual(
        h00, h21,
        vis, config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Air Quality Forecasting.png",
        "Air Quality Forecasting - CAMS PM2.5 (ug/m3) H00 - Jan 2023, Ethiopia",
        "Air Quality Forecasting - CAMS PM2.5 (ug/m3) H21 - Jan 2023, Ethiopia",
        legend_label="PM2.5 (ug/m3)",
    )


def generate_pollution_source_analysis():
    """Pollution Source Analysis - NO2 vs SO2 dual map (Ethiopia)."""
    common.init()
    no2 = s5p_median(
        "COPERNICUS/S5P/OFFL/L3_NO2",
        "tropospheric_NO2_column_number_density",
        "2021-01-01", "2021-12-31", config.REGION_ETHIOPIA,
    )
    so2 = s5p_median(
        "COPERNICUS/S5P/OFFL/L3_SO2",
        "SO2_column_number_density",
        "2021-01-01", "2021-12-31", config.REGION_ETHIOPIA,
    )
    vis_no2 = {"min": 0.0, "max": 0.0002, "palette": NO2_PALETTE}
    vis_so2 = {"min": -0.0005, "max": 0.0005, "palette": SO2_PALETTE}
    common.render_dual(
        no2, so2,
        vis_no2, config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Pollution Source Analysis.png",
        "Pollution Source - Tropospheric NO2 (Sentinel-5P) - 2021",
        "Pollution Source - SO2 (Sentinel-5P) - 2021",
    )


def generate_health_impact_assessment():
    """Health Impact Assessment - population + AOD exposure (Ethiopia)."""
    common.init()
    aod = (
        ee.ImageCollection("MODIS/061/MCD19A2_GRANULES")
        .select("Optical_Depth_047")
        .filterDate("2021-01-01", "2021-12-31")
        .filterBounds(config.bbox(config.REGION_ETHIOPIA))
        .median()
        .rename("AOD")
        .float()
    )
    pop = (
        ee.ImageCollection("WorldPop/GP/100m/pop")
        .filter(ee.Filter.eq("year", 2020))
        .filterBounds(config.bbox(config.REGION_ETHIOPIA))
        .mosaic()
        .select("population")
        .rename("pop")
    )
    vis_aod = {"min": 0.0, "max": 1.2, "palette": AOD_PALETTE}
    vis_pop = {"min": 0.0, "max": 250.0, "palette": POP_PALETTE}
    common.render_dual(
        aod, pop,
        vis_aod, config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Health Impact Assessment.png",
        "Health Impact - AOD exposure (MCD19A2) - 2021",
        "Health Impact - Population (WorldPop) - 2021",
    )


GENERATORS = {
    "Air Quality Forecasting": generate_air_quality_forecasting,
    "Pollution Source Analysis": generate_pollution_source_analysis,
    "Health Impact Assessment": generate_health_impact_assessment,
}


if __name__ == "__main__":
    for _name, _fn in GENERATORS.items():
        print(f"\n=== {_name} ===")
        _fn()
    print("\nAll 3 Air Quality Projection figures generated.")