"""Project 07 - Air Quality Prediction.

Page:   Projects & Collaboration -> Land Use Monitoring Project
Data:   CAMS aerosol optical depth at 550 nm, forecast hours H00 vs H21, Feb 2023
Source: ee.ImageCollection("ECMWF/CAMS/NRT")
Output: public/images/Air Quality Prediction.png

Run:
    python gee_figures/projects/07_air_quality_prediction.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee  # noqa: E402

from gee_figures import common, config  # noqa: E402
from gee_figures.figures.projects.palettes import CAMS_AOD_PALETTE  # noqa: E402


def main():
    common.init()
    col = (
        ee.ImageCollection("ECMWF/CAMS/NRT")
        .filterDate("2023-02-01", "2023-02-28")
        .filter("model_initialization_hour == 0")
        .filterBounds(config.bbox(config.REGION_ETHIOPIA))
        .select("total_aerosol_optical_depth_at_550nm_surface")
    )
    h00 = col.filter(ee.Filter.eq("model_forecast_hour", 0)).mean().rename("CAMS_AOD_H00")
    h21 = col.filter(ee.Filter.eq("model_forecast_hour", 21)).mean().rename("CAMS_AOD_H21")
    vis = {"min": 0.0, "max": 3.6, "palette": CAMS_AOD_PALETTE}
    common.render_dual(
        h00,
        h21,
        vis,
        config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Air Quality Prediction.png",
        "Air Quality Prediction - CAMS AOD 550 nm H00 - Feb 2023, Ethiopia",
        "Air Quality Prediction - CAMS AOD 550 nm H21 - Feb 2023, Ethiopia",
        legend_label="CAMS AOD at 550 nm",
    )


if __name__ == "__main__":
    main()
