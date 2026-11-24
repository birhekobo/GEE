"""Project 08 - Health Impact Analysis (population exposure).

Page:   Projects & Collaboration -> Land Use Monitoring Project
Data:   WorldPop 100 m population, 2020 mosaic
Source: ee.ImageCollection("WorldPop/GP/100m/pop")
Output: public/images/Health Impact Analysis.png

Run:
    python gee_figures/projects/08_health_impact_analysis.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee  # noqa: E402

from gee_figures import common, config  # noqa: E402
from gee_figures.figures.projects.palettes import POP_PALETTE  # noqa: E402


def main():
    common.init()
    pop = (
        ee.ImageCollection("WorldPop/GP/100m/pop")
        .filter(ee.Filter.eq("year", 2020))
        .filterBounds(config.bbox(config.REGION_ETHIOPIA))
        .mosaic()
        .select("population")
        .rename("population")
    )
    vis = {"min": 0.0, "max": 250.0, "palette": POP_PALETTE}
    common.render_map(
        pop,
        vis,
        config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Health Impact Analysis.png",
        "Health Impact Analysis - Population Exposure (WorldPop, 100 m, 2020) - Ethiopia",
    )


if __name__ == "__main__":
    main()
