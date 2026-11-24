"""FIG17.png - Surface water resources via Landsat Normalized Difference
Water Index (NDWI) over Ethiopia."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from gee_figures import config, common

WATER_PALETTE = [
    "#f0e8d0", "#e2d6a8", "#d5dfc0", "#a5c8a0",
    "#7fb6c9", "#3f8fc0", "#1b5f9e", "#0b3d66",
]


def generate():
    common.init()

    col = common.landsat8_c2_sr(
        region=config.REGION_ETHIOPIA, start="2022-01-01", end="2022-03-31"
    )
    ndwi = col.normalizedDifference(["SR_B3", "SR_B5"]).rename("NDWI")

    vis = {"min": -0.3, "max": 0.6, "palette": WATER_PALETTE}
    out = config.OUTPUT_DIR / "FIG17.png"
    common.render_map(
        ndwi, vis, config.REGION_ETHIOPIA, out,
        "Surface Water Resources (Landsat NDWI) - Ethiopia",
    )
    print("FIG17  - water resources NDWI (Ethiopia) FINE")


if __name__ == "__main__":
    generate()