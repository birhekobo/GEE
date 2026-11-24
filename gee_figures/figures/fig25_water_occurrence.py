"""FIG25.png - JRC Global Surface Water Occurrence, 1984-2021 (surface water).

Percentage of time each pixel was covered by water between 1984 and 2021
(JRC/GSW1_4/GlobalSurfaceWater). Ethiopia-wide view with local zone
boundaries, highlighting the Tekeze, Blue Nile, Awash, Omo and Rift Valley
lakes.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common

WATER_PALETTE = [
    "#f0e8d0", "#e2d6a8", "#d5dfc0", "#a5c8a0",
    "#7fb6c9", "#3f8fc0", "#1b5f9e", "#0b3d66",
]


def generate():
    common.init()

    water = (
        ee.Image("JRC/GSW1_4/GlobalSurfaceWater")
        .select("occurrence")
        .rename("occurrence_pct")
        .updateMask(ee.Image.constant(1).clip(common.ethiopia_geometry()).rename("mask"))
    )

    vis = {"min": 0.0, "max": 100.0, "palette": WATER_PALETTE}
    out = config.OUTPUT_DIR / "FIG25.png"
    common.render_map(
        water, vis, config.REGION_ETHIOPIA, out,
        "Surface Water Occurrence (JRC GSW 1984-2021) - Ethiopia",
        boundary_source="local",
        legend_label="Water occurrence (%)",
    )
    print("FIG25  - Surface water occurrence (Ethiopia) FINE")


if __name__ == "__main__":
    generate()
