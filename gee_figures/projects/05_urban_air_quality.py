"""Project 05 - Urban Air Quality Management.

Page:   Projects & Collaboration -> Land Use Monitoring Project
Data:   Sentinel-5P tropospheric NO2, January-March 2022
Source: ee.ImageCollection("COPERNICUS/S5P/OFFL/L3_NO2")
Output: public/images/Urban Air Quality.png

Run:
    python gee_figures/projects/05_urban_air_quality.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee  # noqa: E402

from gee_figures import common, config  # noqa: E402
from gee_figures.figures.projects.palettes import NO2_PALETTE  # noqa: E402


def main():
    common.init()
    no2 = (
        ee.ImageCollection("COPERNICUS/S5P/OFFL/L3_NO2")
        .select("tropospheric_NO2_column_number_density")
        .filterDate("2022-01-01", "2022-03-31")
        .filterBounds(config.bbox(config.REGION_ETHIOPIA))
        .median()
        .rename("NO2")
    )
    vis = {"min": 0.0, "max": 0.0002, "palette": NO2_PALETTE}
    common.render_map(
        no2,
        vis,
        config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Urban Air Quality.png",
        "Urban Air Quality - Tropospheric NO2 (Sentinel-5P) - Jan-Mar 2022, Ethiopia",
    )


if __name__ == "__main__":
    main()
