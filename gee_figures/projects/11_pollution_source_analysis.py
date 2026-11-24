"""Project 11 - Pollution Source Analysis.

Page:   Projects & Collaboration -> Air Quality Projection
Data:   Sentinel-5P tropospheric NO2 and SO2, 2021 annual median
Sources: ee.ImageCollection("COPERNICUS/S5P/OFFL/L3_NO2")
         ee.ImageCollection("COPERNICUS/S5P/OFFL/L3_SO2")
Output: public/images/Pollution Source Analysis.png

Run:
    python gee_figures/projects/11_pollution_source_analysis.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee  # noqa: E402

from gee_figures import common, config  # noqa: E402
from gee_figures.figures.projects.palettes import (  # noqa: E402
    NO2_PALETTE,
    SO2_PALETTE,
)


def s5p_median(product, band, start, end, region):
    return (
        ee.ImageCollection(product)
        .select(band)
        .filterDate(start, end)
        .filterBounds(config.bbox(region))
        .median()
        .rename(band.split("_")[0])
    )


def main():
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
        no2,
        so2,
        vis_no2,
        config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Pollution Source Analysis.png",
        "Pollution Source - Tropospheric NO2 (Sentinel-5P) - 2021",
        "Pollution Source - SO2 (Sentinel-5P) - 2021",
        vis_right=vis_so2,
    )


if __name__ == "__main__":
    main()
