"""FIG21.png - Water Use Efficiency (WUE) for North Wollo.

WUE = GPP / ET  (g carbon gained per kg water transpired/evaporated).
Uses MODIS MOD17A2H GPP and MOD16A2 ET over the 2022 green season.
Higher WUE = more productive crops per unit water (drought resilience).
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common

WUE_PALETTE = [
    "#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c",
    "#fc4e2a", "#e31a1c", "#b10026",
]


def generate():
    common.init()

    gpp = (
        ee.ImageCollection("MODIS/061/MOD17A2H")
        .select("Gpp")
        .filterBounds(config.bbox(config.REGION_NORTH_WOLLO))
        .filterDate("2022-07-01", "2022-10-31")
        .mean()
        .multiply(0.0001)
        .rename("GPP_kgCm2")
    )
    et = (
        ee.ImageCollection("MODIS/061/MOD16A2")
        .select("ET")
        .filterBounds(config.bbox(config.REGION_NORTH_WOLLO))
        .filterDate("2022-07-01", "2022-10-31")
        .mean()
        .multiply(0.1)          # kg H2O / m2 / 8-days
        .rename("ET_kgH2Om2")
    )
    wue = gpp.divide(et).multiply(1000.0).rename("WUE_gC_kgH2O")

    nw = common.zone_geometry("North Wollo")
    mask = ee.Image.constant(1).clip(nw).rename("mask")
    wue = wue.clip(nw).updateMask(mask)

    vis = {"min": 0.0, "max": 3.5, "palette": WUE_PALETTE}
    out = config.OUTPUT_DIR / "FIG21.png"
    common.render_map(
        wue, vis, config.REGION_NORTH_WOLLO, out,
        "Water Use Efficiency (GPP / ET) - Jul-Oct 2022, North Wollo",
        legend_label="Water use efficiency (g C / kg H2O)",
    )
    print("FIG21  - WUE (North Wollo) FINE")


if __name__ == "__main__":
    generate()