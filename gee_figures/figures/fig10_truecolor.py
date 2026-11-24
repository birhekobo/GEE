"""FIG10.png - LANDSAT natural-colour composite of Ethiopia."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common


def generate():
    common.init()

    eth = common.ethiopia_geometry()
    l8 = common.landsat8_c2_sr(
        region=config.REGION_ETHIOPIA, start="2021-11-01", end="2022-02-28"
    )
    rgb = (
        l8.select(["SR_B4", "SR_B3", "SR_B2"])
        .multiply(0.0000275).add(-0.2)
        .clip(eth)
        .updateMask(ee.Image.constant(1).clip(eth).rename("mask"))
    )

    vis = {"min": [0.0, 0.0, 0.0], "max": [0.25, 0.25, 0.25]}
    out = config.OUTPUT_DIR / "FIG10.png"
    common.render_map(
        rgb, vis, config.REGION_ETHIOPIA, out,
        "LANDSAT Natural-Colour Composite (2021-22 dry season) - Ethiopia",
    )
    print("FIG10  - Landsat true colour (Ethiopia) FINE")


if __name__ == "__main__":
    generate()