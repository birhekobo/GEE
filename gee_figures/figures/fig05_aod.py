"""FIG5.png - MODIS MAIAC total AOD at 550 nm over Ethiopia."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common

AOD_PALETTE = [
    "#2c7bb6", "#abd9e9", "#ffffbf", "#fee08b", "#fdae61", "#f46d43",
    "#d7191c", "#a50026",
]


def generate():
    common.init()

    aod = (
        ee.ImageCollection("MODIS/061/MCD19A2_GRANULES")
        .select("Optical_Depth_055")
        .filterDate("2020-07-01", "2020-07-31")
        .filterBounds(config.bbox(config.REGION_ETHIOPIA))
        .mean()
        .multiply(0.001)
        .float()
    )

    vis = {"min": 0.0, "max": 0.5, "palette": AOD_PALETTE}
    out = config.OUTPUT_DIR / "FIG5.png"
    common.render_map(
        aod, vis, config.REGION_ETHIOPIA, out,
        "Total Aerosol Optical Depth at 550 nm (MODIS MAIAC MCD19A2, ~1 km) - July 2020, Ethiopia",
        legend_label="Total aerosol optical depth at 550 nm",
        clip_country=True,
    )
    print("FIG5  - MODIS MAIAC AOD (Ethiopia) FINE")


if __name__ == "__main__":
    generate()