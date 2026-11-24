"""Project 10 - Air Quality Forecasting.

Page:   Projects & Collaboration -> Air Quality Projection
Data:   CAMS PM2.5 surface forecast hours H00 vs H21, January 2023
Source: ee.ImageCollection("ECMWF/CAMS/NRT")
Output: public/images/Air Quality Forecasting.png

Run:
    python gee_figures/projects/10_air_quality_forecasting.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee  # noqa: E402

from gee_figures import common, config  # noqa: E402
from gee_figures.figures.projects.palettes import PM25_PALETTE  # noqa: E402


def main():
    common.init()
    col = (
        ee.ImageCollection("ECMWF/CAMS/NRT")
        .filterDate("2023-01-01", "2023-01-31")
        .filter("model_initialization_hour == 0")
        .filterBounds(config.bbox(config.REGION_ETHIOPIA))
        .select("particulate_matter_d_less_than_25_um_surface")
    )
    h00 = col.filter(ee.Filter.eq("model_forecast_hour", 0)).mean().rename("PM2_5_H00")
    h21 = col.filter(ee.Filter.eq("model_forecast_hour", 21)).mean().rename("PM2_5_H21")
    vis = {"min": 0.0, "max": 100.0, "palette": PM25_PALETTE}
    common.render_dual(
        h00,
        h21,
        vis,
        config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Air Quality Forecasting.png",
        "Air Quality Forecasting - CAMS PM2.5 (ug/m3) H00 - Jan 2023, Ethiopia",
        "Air Quality Forecasting - CAMS PM2.5 (ug/m3) H21 - Jan 2023, Ethiopia",
        legend_label="PM2.5 (ug/m3)",
    )


if __name__ == "__main__":
    main()
