"""Mineral Exploration Project - 3 thematic map figures (South Wollo).

Cards: Mineral Mapping, Geological Structure Analysis,
Exploration Site Assessment.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3]))

from gee_figures import config, common  # noqa: E402
from gee_figures.figures.projects.data import landsat8_swir  # noqa: E402
from gee_figures.figures.projects.palettes import RELIEF_PALETTE  # noqa: E402


def generate_mineral_mapping():
    """Mineral Mapping - Landsat 8 SWIR alteration composite (South Wollo)."""
    common.init()
    swir = landsat8_swir(config.REGION_SOUTH_WOLLO)
    vis = {"min": [0.0, 0.0, 0.0], "max": [0.35, 0.35, 0.35]}
    common.render_map(
        swir, vis, config.REGION_SOUTH_WOLLO,
        config.OUTPUT_DIR / "Mineral Mapping.png",
        "Mineral Mapping & Identification - Landsat 8 SWIR (B7-B6-B4) - South Wollo",
        labels=False,
    )


def generate_geological_structure():
    """Geological Structure Analysis - SRTM slope relief (South Wollo)."""
    common.init()
    elev, hillshade, slope = common.srtm_elevation()
    relief = (
        slope.visualize(min=0, max=30, palette=RELIEF_PALETTE)
        .multiply(hillshade.divide(255))
    )
    vis = {"min": 0.0, "max": 255.0}
    common.render_map(
        relief, vis, config.REGION_SOUTH_WOLLO,
        config.OUTPUT_DIR / "Geological Structure Analysis.png",
        "Geological Structure Analysis - SRTM Slope Relief (DEM) - South Wollo",
        labels=False,
    )


def generate_exploration_site_assessment():
    """Exploration Site Assessment - hillshade + SWIR dual (South Wollo)."""
    common.init()
    _, hillshade, slope = common.srtm_elevation()
    relief = hillshade.rename("hillshade")
    vis_relief = {"min": 0.0, "max": 255.0}
    vis_swir = {"bands": ["SWIR1", "SWIR2", "red"],
                "min": [0.0, 0.0, 0.0], "max": [0.35, 0.35, 0.35]}
    common.render_dual(
        relief,
        landsat8_swir(config.REGION_SOUTH_WOLLO),
        vis_relief, config.REGION_SOUTH_WOLLO,
        config.OUTPUT_DIR / "Exploration Site Assessment.png",
        "Exploration Site - SRTM Hillshade",
        "Exploration Site - Landsat 8 SWIR Alteration",
        labels=False,
        vis_right=vis_swir,
    )


GENERATORS = {
    "Mineral Mapping": generate_mineral_mapping,
    "Geological Structure Analysis": generate_geological_structure,
    "Exploration Site Assessment": generate_exploration_site_assessment,
}