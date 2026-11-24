"""Project 13 - Surface Water Monitoring.

Page:   Projects & Collaboration -> Water Resource Monitoring Project
Data:   JRC Global Surface Water occurrence (1984-2021)
Source: ee.Image("JRC/GSW1_4/GlobalSurfaceWater")
Output: public/images/Surface Water Monitoring.png

Run:
    python gee_figures/projects/13_surface_water_monitoring.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee  # noqa: E402

from gee_figures import common, config  # noqa: E402
from gee_figures.figures.projects.palettes import OCCURRENCE_PALETTE  # noqa: E402


def main():
    common.init()
    occurrence = ee.Image("JRC/GSW1_4/GlobalSurfaceWater").select("occurrence")
    vis = {"min": 0.0, "max": 100.0, "palette": OCCURRENCE_PALETTE}
    common.render_map(
        occurrence,
        vis,
        config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Surface Water Monitoring.png",
        "Surface Water Monitoring - Water Occurrence (JRC Global Surface Water) - Ethiopia",
        legend_label="Water occurrence (%)",
    )


if __name__ == "__main__":
    main()
