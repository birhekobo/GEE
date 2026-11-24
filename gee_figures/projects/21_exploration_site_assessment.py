"""Project 21 - Exploration Site Assessment.

Page:   Projects & Collaboration -> Mineral Exploration Project
Data:   SRTM hillshade (left) vs Landsat 8 SWIR alteration (right), South Wollo
Sources: ee.Image("USGS/SRTMGL1_003")
         ee.ImageCollection("LANDSAT/LC08/C02/T1_L2")
Output: public/images/Exploration Site Assessment.png

Run:
    python gee_figures/projects/21_exploration_site_assessment.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee  # noqa: E402

from gee_figures import common, config  # noqa: E402


def landsat8_swir(region, start="2022-01-01", end="2022-12-31"):
    composite = (
        ee.ImageCollection("LANDSAT/LC08/C02/T1_L2")
        .filterDate(start, end)
        .filterBounds(config.bbox(region))
        .filter(ee.Filter.lt("CLOUD_COVER", 20))
        .select(["SR_B7", "SR_B6", "SR_B4"])
        .median()
    )
    return composite.multiply(0.0000275).add(-0.2).rename(["SWIR1", "SWIR2", "red"])


def main():
    common.init()
    elevation = ee.Image("USGS/SRTMGL1_003").select("elevation")
    hillshade = ee.Terrain.hillshade(elevation).rename("hillshade")
    vis_relief = {"min": 0.0, "max": 255.0}
    vis_swir = {"bands": ["SWIR1", "SWIR2", "red"],
                "min": [0.0, 0.0, 0.0], "max": [0.35, 0.35, 0.35]}
    common.render_dual(
        hillshade,
        landsat8_swir(config.REGION_SOUTH_WOLLO),
        vis_relief,
        config.REGION_SOUTH_WOLLO,
        config.OUTPUT_DIR / "Exploration Site Assessment.png",
        "Exploration Site - SRTM Hillshade",
        "Exploration Site - Landsat 8 SWIR Alteration",
        labels=False,
        vis_right=vis_swir,
    )


if __name__ == "__main__":
    main()
