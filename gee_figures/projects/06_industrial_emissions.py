"""Project 06 - Industrial Air Quality Control.

Page:   Projects & Collaboration -> Land Use Monitoring Project
Data:   Sentinel-5P SO2, January-March 2022
Source: ee.ImageCollection("COPERNICUS/S5P/OFFL/L3_SO2")
Output: public/images/Industrial Emissions.png

Run:
    python gee_figures/projects/06_industrial_emissions.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee  # noqa: E402

from gee_figures import common, config  # noqa: E402
from gee_figures.figures.projects.palettes import SO2_PALETTE  # noqa: E402


def main():
    common.init()
    so2 = (
        ee.ImageCollection("COPERNICUS/S5P/OFFL/L3_SO2")
        .select("SO2_column_number_density")
        .filterDate("2022-01-01", "2022-03-31")
        .filterBounds(config.bbox(config.REGION_ETHIOPIA))
        .median()
        .rename("SO2")
    )
    vis = {"min": -0.0005, "max": 0.0005, "palette": SO2_PALETTE}
    common.render_map(
        so2,
        vis,
        config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Industrial Emissions.png",
        "Industrial Emissions - Sulfur Dioxide SO2 (Sentinel-5P) - Jan-Mar 2022, Ethiopia",
    )


if __name__ == "__main__":
    main()
