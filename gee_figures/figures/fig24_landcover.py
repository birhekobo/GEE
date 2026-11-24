"""FIG24.png - ESA WorldCover land-cover classification 2021 (land-cover project).

Categorical land-cover map from ESA WorldCover v200 (10 m, 2021) for Ethiopia.
Classes: 10 tree, 20 shrubland, 30 grassland, 40 cropland, 50 built-up,
60 bare, 70 water, 80 wetland, 90 mangrove, 100 moss.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common
from gee_figures.figures.projects.palettes import WORLDCOVER_PALETTE


def generate():
    common.init()

    lc = (
        ee.ImageCollection("ESA/WorldCover/v200")
        .filterDate("2021-01-01", "2021-12-31")
        .first()
        .select("Map")
        .clip(common.ethiopia_geometry())
    )

    vis = {"min": 10, "max": 100, "palette": WORLDCOVER_PALETTE}
    out = config.OUTPUT_DIR / "FIG24.png"
    common.render_map(
        lc, vis, config.REGION_ETHIOPIA, out,
        "Land Cover Classification (ESA WorldCover v200, 10 m) - Ethiopia",
        boundary_source="local",
        legend_label="Land cover class",
    )
    print("FIG24  - Land cover (Ethiopia) FINE")


if __name__ == "__main__":
    generate()
