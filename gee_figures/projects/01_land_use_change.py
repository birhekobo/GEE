"""Project 01 - Land Use Change Monitoring.

Page:   Projects & Collaboration -> Land Use Monitoring Project
Data:   Hansen Global Forest Change v1.13 (UMD)
Source: ee.Image("UMD/hansen/global_forest_change_2025_v1_13")
Output: public/images/Land Use Change Monitoring.png

Run:
    python gee_figures/projects/01_land_use_change.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee  # noqa: E402

from gee_figures import common, config  # noqa: E402


def main():
    common.init()
    gfc = ee.Image("UMD/hansen/global_forest_change_2025_v1_13")
    image = gfc.select(["treecover2000", "loss", "gain"])
    vis = {
        "bands": ["treecover2000", "loss", "gain"],
        "min": [0, 0, 0],
        "max": [100, 1, 1],
    }
    common.render_map(
        image,
        vis,
        config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Land Use Change Monitoring.png",
        "Land Use Change Monitoring - Tree Cover 2000, Loss & Gain (Hansen) - Ethiopia",
    )


if __name__ == "__main__":
    main()
