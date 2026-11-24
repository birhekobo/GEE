"""FIG8.png - SMAP surface soil moisture over Ethiopia."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common

SOIL_PALETTE = [
    "#a6611a", "#dfc27d", "#f5f5f5", "#80cdc1", "#018571",
]


def generate():
    common.init()

    eth = common.ethiopia_geometry()
    sm = (
        ee.ImageCollection("NASA/SMAP/SPL4SMGP/008")
        .select("sm_surface")
        .filterDate("2021-07-01", "2021-07-15")
        .mean()
        .rename("soil_moisture")
        .clip(eth)
        .updateMask(ee.Image.constant(1).clip(eth).rename("mask"))
    )

    vis = {"min": 0.0, "max": 0.5, "palette": SOIL_PALETTE}
    out = config.OUTPUT_DIR / "FIG8.png"
    common.render_map(
        sm, vis, config.REGION_ETHIOPIA, out,
        "Surface Soil Moisture (SMAP, m3 m-3) - July 2021, Ethiopia",
        legend_label="Soil moisture (m3 m-3)",
    )
    print("FIG8  - SMAP soil moisture (Ethiopia) FINE")


if __name__ == "__main__":
    generate()