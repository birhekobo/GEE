"""FIG16.png - Drought early warning: CHIRPS rainfall 2021 vs 2015 (El Nino).

Positive = wetter than the 2015 drought / negative (brown) = rainfall deficit.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common

DIFF_PALETTE = [
    "#8c2d04", "#cc4c02", "#ec7014", "#fe9929", "#fec44f", "#fee391",
    "#d1e5f0", "#92c5de", "#4393c3", "#2166ac",
]


def generate():
    common.init()

    ch = ee.ImageCollection("UCSB-CHG/CHIRPS/DAILY").select("precipitation")
    inundated = (
        ch.filterDate("2021-06-01", "2021-09-30")
        .filterBounds(config.bbox(config.REGION_WOLLO))
        .sum()
    )
    dry = (
        ch.filterDate("2015-06-01", "2015-09-30")
        .filterBounds(config.bbox(config.REGION_WOLLO))
        .sum()
    )
    diff = inundated.subtract(dry).rename("diff_mm")

    vis = {"min": -600.0, "max": 600.0, "palette": DIFF_PALETTE}
    out = config.OUTPUT_DIR / "FIG16.png"
    common.render_map(
        diff, vis, config.REGION_WOLLO, out,
        "Drought Early Warning - CHIRPS rainfall 2021 minus 2015 (mm), Wollo",
        legend_label="Rainfall difference (mm)",
    )
    print("FIG16  - drought ASYP warning (Wollo) FINE")


if __name__ == "__main__":
    generate()