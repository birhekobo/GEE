"""FIG18.png - NDVI over Amhara (crop/vegetation condition, green season)."""

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

    amhara = common.region_geometry("Amhara")
    ndvi = (
        ee.ImageCollection("MODIS/061/MOD13Q1")
        .select("NDVI")
        .filterDate("2022-09-01", "2022-11-15")
        .filterBounds(config.bbox(config.REGION_AMHARA))
        .mean()
        .multiply(0.0001)
        .rename("NDVI")
        .clip(amhara)
        .updateMask(ee.Image.constant(1).clip(amhara).rename("mask"))
    )

    vis = {"min": 0.0, "max": 0.85, "palette": NDVI_PALETTE}
    out = config.OUTPUT_DIR / "FIG18.png"
    common.render_map(
        ndvi, vis, config.REGION_AMHARA, out,
        "Vegetation Condition (MODIS NDVI) - Sep-Nov 2022, Amhara",
    )
    print("FIG18  - NDVI vegetation condition (Amhara) FINE")


if __name__ == "__main__":
    generate()