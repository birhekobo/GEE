"""Project 18 - Water Resource Impact.

Page:   Projects & Collaboration -> Drought Monitoring Project
Data:   SMAP surface soil moisture, Jun-Sep 2015 (El Nino)
Source: ee.ImageCollection("NASA/SMAP/SPL4SMGP/008")
Output: public/images/Water Resource Impact.png

Run:
    python gee_figures/projects/18_water_resource_impact.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee  # noqa: E402

from gee_figures import common, config  # noqa: E402
from gee_figures.figures.projects.palettes import SOIL_PALETTE  # noqa: E402


def main():
    common.init()
    soil = (
        ee.ImageCollection("NASA/SMAP/SPL4SMGP/008")
        .select("sm_surface")
        .filterDate("2015-06-01", "2015-09-30")
        .filterBounds(config.bbox(config.REGION_ETHIOPIA))
        .mean()
        .rename("soil_moisture")
    )
    vis = {"min": 0.0, "max": 0.5, "palette": SOIL_PALETTE}
    common.render_map(
        soil,
        vis,
        config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Water Resource Impact.png",
        "Water Resource Impact - SMAP Surface Soil Moisture (m3 m-3) - Jun-Sep 2015, Ethiopia",
        legend_label="Surface soil moisture (m3 m-3)",
    )


if __name__ == "__main__":
    main()
