"""FIG1.png - Land-use change: forest cover 2000 and loss/gain to 2023.

Hansen Global Forest Change composite. Green = tree cover 2000, red = loss,
blue = gain. Distinct land-use figure for the gallery.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common


def generate():
    common.init()

    gfc = ee.Image("UMD/hansen/global_forest_change_2025_v1_13")
    img = gfc.select(["treecover2000", "loss", "gain"])

    vis = {
        "bands": ["treecover2000", "loss", "gain"],
        "min": [0, 0, 0],
        "max": [100, 1, 1],
    }
    out = config.OUTPUT_DIR / "FIG1.png"
    common.render_map(
        img, vis, config.REGION_ETHIOPIA, out,
        "Land-Use Change - Tree Cover 2000, Loss & Gain (Hansen GFC) - Ethiopia",
        clip_country=True,
    )
    print("FIG1  - Land-use / forest change (Ethiopia) FINE")


if __name__ == "__main__":
    generate()