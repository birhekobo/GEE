"""Project 09 - Policy Support & Planning (land cover).

Page:   Projects & Collaboration -> Land Use Monitoring Project
Data:   ESA WorldCover v200 (2021) land cover
Source: ee.ImageCollection("ESA/WorldCover/v200")
Output: public/images/Policy Support.png

Run:
    python gee_figures/projects/09_policy_support.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee  # noqa: E402

from gee_figures import common, config  # noqa: E402
from gee_figures.figures.projects.palettes import WORLDCOVER_PALETTE  # noqa: E402


def main():
    common.init()
    worldcover = ee.ImageCollection("ESA/WorldCover/v200").first().select("Map")
    vis = {"min": 10, "max": 100, "palette": WORLDCOVER_PALETTE}
    common.render_map(
        worldcover,
        vis,
        config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Policy Support.png",
        "Policy Support & Planning - Land Cover (ESA WorldCover 2021) - Ethiopia",
    )


if __name__ == "__main__":
    main()
