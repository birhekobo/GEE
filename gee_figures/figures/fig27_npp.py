"""FIG27.png - MODIS net primary productivity 2021 (carbon / productivity).

Annual net primary production (kg C / m2 / yr) from MODIS MOD17A3HGF
(500 m, Collection 6.1) for 2021 over Ethiopia. High NPP marks the dense
highland forests of the southwest and the wet western slopes.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common

NPP_PALETTE = [
    "#1b7837", "#2f8f4e", "#49a668", "#6fbf7d", "#9ad493",
    "#c4e3a9", "#f0e8b0", "#d9bc83", "#bc9560", "#9a7042",
    "#7a552f", "#8a8a8a", "#f2f2f2",
]


def generate():
    common.init()

    npp = (
        ee.ImageCollection("MODIS/061/MOD17A3HGF")
        .filterDate("2021-01-01", "2022-01-01")
        .first()
        .select("Npp")
        .multiply(0.0001)
        .rename("NPP_kgC_m2_yr")
        .updateMask(ee.Image.constant(1).clip(common.ethiopia_geometry()).rename("mask"))
    )

    vis = {"min": 0.0, "max": 2.5, "palette": NPP_PALETTE}
    out = config.OUTPUT_DIR / "FIG27.png"
    common.render_map(
        npp, vis, config.REGION_ETHIOPIA, out,
        "Net Primary Productivity (MODIS MOD17A3HGF) - 2021, Ethiopia",
        boundary_source="local",
        legend_label="NPP (kg C / m2 / yr)",
    )
    print("FIG27  - NPP (Ethiopia) FINE")


if __name__ == "__main__":
    generate()
