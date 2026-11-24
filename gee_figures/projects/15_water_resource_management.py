"""Project 15 - Water Resource Management.

Page:   Projects & Collaboration -> Water Resource Monitoring Project
Data:   Landsat 8 Collection-2 surface reflectance NDWI, Jan-Mar 2022
Source: ee.ImageCollection("LANDSAT/LC08/C02/T1_L2")
Output: public/images/Water Resource Management.png

Run:
    python gee_figures/projects/15_water_resource_management.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee  # noqa: E402

from gee_figures import common, config  # noqa: E402
from gee_figures.figures.projects.palettes import WATER_PALETTE  # noqa: E402


def main():
    common.init()
    composite = (
        ee.ImageCollection("LANDSAT/LC08/C02/T1_L2")
        .filterDate("2022-01-01", "2022-03-31")
        .filterBounds(config.bbox(config.REGION_ETHIOPIA))
        .filter(ee.Filter.lt("CLOUD_COVER", 20))
        .select(["SR_B2", "SR_B3", "SR_B4", "SR_B5", "ST_B10"])
        .median()
    )
    ndwi = composite.normalizedDifference(["SR_B3", "SR_B5"]).rename("NDWI")
    vis = {"min": -0.3, "max": 0.6, "palette": WATER_PALETTE}
    common.render_map(
        ndwi,
        vis,
        config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Water Resource Management.png",
        "Water Resource Management - Landsat 8 NDWI (Jan-Mar 2022) - Ethiopia",
        legend_label="NDWI",
    )


if __name__ == "__main__":
    main()
