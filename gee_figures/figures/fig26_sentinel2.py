"""FIG26.png - Sentinel-2 false-colour composite, dry season (high-res optical).

10 m Sentinel-2 (COPERNICUS/S2_HARMONIZED) NIR-red-green composite
(B8, B4, B3) for Jan-Mar 2022 over Wollo. Dense vegetation appears red,
bare soil pale, and water dark, giving a high-resolution view of the
agricultural landscape of Wollo.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common


def generate():
    common.init()

    s2 = (
        ee.ImageCollection("COPERNICUS/S2_HARMONIZED")
        .filterDate("2022-01-01", "2022-03-31")
        .filterBounds(config.bbox(config.REGION_WOLLO))
        .filter(ee.Filter.lt("CLOUDY_PIXEL_PERCENTAGE", 20))
        .select(["B8", "B4", "B3"])
        .median()
        .clip(common.ethiopia_geometry())
    )

    vis = {"bands": ["B8", "B4", "B3"],
           "min": [0.0, 0.0, 0.0], "max": [3000.0, 3000.0, 3000.0]}
    out = config.OUTPUT_DIR / "FIG26.png"
    common.render_map(
        s2, vis, config.REGION_WOLLO, out,
        "Sentinel-2 False Colour (NIR-R-G) - Jan-Mar 2022, Wollo",
        labels=False, draw_regions=False, draw_woredas=True,
        boundary_source="local",
    )
    print("FIG26  - Sentinel-2 false colour (Wollo) FINE")


if __name__ == "__main__":
    generate()
