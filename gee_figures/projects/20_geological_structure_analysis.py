"""Project 20 - Geological Structure Analysis.

Page:   Projects & Collaboration -> Mineral Exploration Project
Data:   SRTM 30 m slope relief (South Wollo)
Source: ee.Image("USGS/SRTMGL1_003")
Output: public/images/Geological Structure Analysis.png

Run:
    python gee_figures/projects/20_geological_structure_analysis.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee  # noqa: E402

from gee_figures import common, config  # noqa: E402
from gee_figures.figures.projects.palettes import RELIEF_PALETTE  # noqa: E402


def srtm_terrain():
    elevation = ee.Image("USGS/SRTMGL1_003").select("elevation")
    return elevation, ee.Terrain.hillshade(elevation), ee.Terrain.slope(elevation)


def main():
    common.init()
    _, hillshade, slope = srtm_terrain()
    relief = (
        slope.visualize(min=0, max=30, palette=RELIEF_PALETTE)
        .multiply(hillshade.divide(255))
    )
    vis = {"min": 0.0, "max": 255.0}
    common.render_map(
        relief,
        vis,
        config.REGION_SOUTH_WOLLO,
        config.OUTPUT_DIR / "Geological Structure Analysis.png",
        "Geological Structure Analysis - SRTM Slope Relief (DEM) - South Wollo",
        labels=False,
    )


if __name__ == "__main__":
    main()
