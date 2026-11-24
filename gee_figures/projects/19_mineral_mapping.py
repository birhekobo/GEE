"""Project 19 - Mineral Mapping & Identification.

Page:   Projects & Collaboration -> Mineral Exploration Project
Data:   Landsat 8 SWIR false-colour composite (B7-B6-B4), 2022 (South Wollo)
Source: ee.ImageCollection("LANDSAT/LC08/C02/T1_L2")
Output: public/images/Mineral Mapping.png

Run:
    python gee_figures/projects/19_mineral_mapping.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee  # noqa: E402

from gee_figures import common, config  # noqa: E402


def landsat8_swir(region, start="2022-01-01", end="2022-12-31"):
    composite = (
        ee.ImageCollection("LANDSAT/LC08/C02/T1_L2")
        .filterDate(start, end)
        .filterBounds(config.bbox(region))
        .filter(ee.Filter.lt("CLOUD_COVER", 20))
        .select(["SR_B7", "SR_B6", "SR_B4"])
        .median()
    )
    return composite.multiply(0.0000275).add(-0.2).rename(["SWIR1", "SWIR2", "red"])


def main():
    common.init()
    vis = {"min": [0.0, 0.0, 0.0], "max": [0.35, 0.35, 0.35]}
    common.render_map(
        landsat8_swir(config.REGION_SOUTH_WOLLO),
        vis,
        config.REGION_SOUTH_WOLLO,
        config.OUTPUT_DIR / "Mineral Mapping.png",
        "Mineral Mapping & Identification - Landsat 8 SWIR (B7-B6-B4) - South Wollo",
        labels=False,
    )


if __name__ == "__main__":
    main()
