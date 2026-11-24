"""FIG28.png - MODIS Enhanced Vegetation Index, growing season 2022 (vegetation).

Mean Enhanced Vegetation Index (EVI) from MODIS MOD13Q1 (250 m, 16-day,
Collection 6.1) for the Sep-Nov 2022 growing season over Amhara. EVI is
less saturated than NDVI in dense vegetation and better tracks greenness.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common

EVI_PALETTE = [
    "#d73027", "#f46d43", "#fdae61", "#fee08b", "#d9f0a3",
    "#a6d96a", "#1a9850", "#006837",
]


def generate():
    common.init()

    evi = (
        ee.ImageCollection("MODIS/061/MOD13Q1")
        .filterDate("2022-09-01", "2022-11-30")
        .select("EVI")
        .mean()
        .multiply(0.0001)
        .rename("EVI")
        .clip(common.region_geometry("Amhara"))
    )

    vis = {"min": -0.1, "max": 0.9, "palette": EVI_PALETTE}
    out = config.OUTPUT_DIR / "FIG28.png"
    common.render_map(
        evi, vis, config.REGION_AMHARA, out,
        "Enhanced Vegetation Index (MODIS MOD13Q1) - Sep-Nov 2022, Amhara",
        draw_regions=False, draw_woredas=True, boundary_source="local",
        legend_label="EVI",
    )
    print("FIG28  - EVI (Amhara) FINE")


if __name__ == "__main__":
    generate()
