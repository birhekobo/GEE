"""Project 12 - Health Impact Assessment.

Page:   Projects & Collaboration -> Air Quality Projection
Data:   MODIS MAIAC AOD 2021 (left) vs WorldPop 2020 population (right)
Sources: ee.ImageCollection("MODIS/061/MCD19A2_GRANULES")
         ee.ImageCollection("WorldPop/GP/100m/pop")
Output: public/images/Health Impact Assessment.png

Run:
    python gee_figures/projects/12_health_impact_assessment.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee  # noqa: E402

from gee_figures import common, config  # noqa: E402
from gee_figures.figures.projects.palettes import (  # noqa: E402
    AOD_PALETTE,
    POP_PALETTE,
)


def main():
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
        .rename("population")
    )
    vis_aod = {"min": 0.0, "max": 1.2, "palette": AOD_PALETTE}
    vis_pop = {"min": 0.0, "max": 250.0, "palette": POP_PALETTE}
    common.render_dual(
        aod,
        pop,
        vis_aod,
        config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Health Impact Assessment.png",
        "Health Impact - AOD exposure (MCD19A2) - 2021",
        "Health Impact - Population (WorldPop) - 2020",
        vis_right=vis_pop,
    )


if __name__ == "__main__":
    main()
