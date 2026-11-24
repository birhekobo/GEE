"""FIG9.png - Agricultural land / crop health via Landsat NDVI (South Wollo)."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common

NDVI_PALETTE = [
    "#ffffcc", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443",
    "#005a32",
]


def generate():
    common.init()

    sw = common.zone_geometry("South Wollo")
    col = common.landsat8_c2_sr(
        region=config.REGION_SOUTH_WOLLO,
        start="2022-09-15", end="2022-11-15",
    )
    ndvi = (
        col.normalizedDifference(["SR_B5", "SR_B4"])
        .rename("NDVI")
        .clip(sw)
        .updateMask(ee.Image.constant(1).clip(sw).rename("mask"))
    )

    vis = {"min": -0.1, "max": 0.85, "palette": NDVI_PALETTE}
    out = config.OUTPUT_DIR / "FIG9.png"
    common.render_map(
        ndvi, vis, config.REGION_SOUTH_WOLLO, out,
        "Agricultural Land & Crop Health (Landsat NDVI) - South Wollo, Ethiopia",
        labels=True,
        legend_label="NDVI",
    )
    print("FIG9  - NDVI agriculture (South Wollo) FINE")


if __name__ == "__main__":
    generate()