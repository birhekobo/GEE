"""FIG6.png - Global population distribution clipped to Ethiopia (WorldPop)."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common

POP_PALETTE = [
    "#1b7837", "#2f8f4e", "#49a668", "#6fbf7d", "#9ad493",
    "#c4e3a9", "#f0e8b0", "#d9bc83", "#bc9560", "#9a7042",
    "#7a552f", "#8a8a8a", "#f2f2f2",
]


def generate():
    common.init()

    pop = (
        ee.ImageCollection("WorldPop/GP/100m/pop")
        .filter(ee.Filter.eq("country", "ETH"))
        .filterDate("2020-01-01", "2021-01-01")
        .first()
        .select("population")
        .rename("pop")
    )

    vis = {"min": 0.0, "max": 250.0, "palette": POP_PALETTE}
    out = config.OUTPUT_DIR / "FIG6.png"
    common.render_map(
        pop, vis, config.REGION_ETHIOPIA, out,
        "Population Distribution (WorldPop, 100 m) - Ethiopia",
    )
    print("FIG6  - Population distribution (Ethiopia) FINE")


if __name__ == "__main__":
    generate()