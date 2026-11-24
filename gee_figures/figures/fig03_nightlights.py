"""FIG3.png - Urban growth: VIIRS night-time lights over Ethiopia."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common

LIGHTS_PALETTE = [
    "#000004", "#1d0c46", "#4a0c6b", "#781c6d", "#a52c60",
    "#cf4446", "#ed6925", "#fb9b06", "#f7d13d", "#fcffa4",
]


def generate():
    common.init()

    lights = (
        ee.ImageCollection("NOAA/VIIRS/DNB/MONTHLY_V1/VCMSLCFG")
        .filterDate("2021-01-01", "2022-01-01")
        .select("avg_rad")
        .max()
        .rename("nightlight")
    )

    vis = {"min": 0.0, "max": 20.0, "palette": LIGHTS_PALETTE}
    out = config.OUTPUT_DIR / "FIG3.png"
    common.render_map(
        lights, vis, config.REGION_ETHIOPIA, out,
        "Urban Growth - VIIRS Night-Time Lights (2021) - Ethiopia",
    )
    print("FIG3  - Night-time lights / urban (Ethiopia) FINE")


if __name__ == "__main__":
    generate()