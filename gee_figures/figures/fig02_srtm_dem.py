"""FIG2.png - SRTM topography of South Wollo with FAO zone boundaries."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common

DEM_PALETTE = [
    "#1b7837", "#2f8f4e", "#49a668", "#6fbf7d", "#9ad493",
    "#c4e3a9", "#f0e8b0", "#d9bc83", "#bc9560", "#9a7042",
    "#7a552f", "#8a8a8a", "#f2f2f2",
]


def generate():
    common.init()

    elev, hillshade, _ = common.srtm_elevation()
    # shaded DEM -> subtle relief effect
    shaded = elev.multiply(hillshade.divide(255.0))

    wollo = common.zone_geometry("North Wollo").union(common.zone_geometry("South Wollo"))
    mask = ee.Image.constant(1).clip(wollo).rename("mask")
    shaded = shaded.clip(wollo).updateMask(mask)

    vis = {"min": 0.0, "max": 4200.0, "palette": DEM_PALETTE}

    out = config.OUTPUT_DIR / "FIG2.png"
    common.render_map(
        shaded, vis, config.REGION_WOLLO, out,
        "SRTM Topography - Wollo, Ethiopia",
        labels=False,
        legend_label="Elevation (m)",
    )
    print("FIG2  - SRTM topography (Wollo) FINE")


if __name__ == "__main__":
    generate()