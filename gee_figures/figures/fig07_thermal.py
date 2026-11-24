"""FIG7.png - Landsat 8 thermal infrared (surface temperature) over Ethiopia."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from gee_figures import config, common

THERMAL_PALETTE = [
    "#000004", "#1b0c41", "#4a0c6b", "#781c6d", "#a52c60",
    "#cf4446", "#ed6925", "#fb9b06", "#f7d13d", "#fcffa4",
]


def generate():
    common.init()

    l8 = common.landsat8_c2_sr(
        region=config.REGION_ETHIOPIA, start="2022-03-01", end="2022-05-31"
    )
    st = (
        l8.select("ST_B10").multiply(0.00341802).add(149.0)
        .subtract(273.15).rename("ST_C")
    )

    vis = {"min": 5.0, "max": 45.0, "palette": THERMAL_PALETTE}
    out = config.OUTPUT_DIR / "FIG7.png"
    common.render_map(
        st, vis, config.REGION_ETHIOPIA, out,
        "Land Surface Temperature (Landsat 8 Thermal Infrared, deg C) - Ethiopia",
    )
    print("FIG7  - Landsat thermal (Ethiopia) FINE")


if __name__ == "__main__":
    generate()