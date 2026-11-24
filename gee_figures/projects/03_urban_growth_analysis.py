"""Project 03 - Urban Growth Analysis.

Page:   Projects & Collaboration -> Land Use Monitoring Project
Data:   VIIRS night-time lights (annual maximum), 2021
Source: ee.ImageCollection("NOAA/VIIRS/DNB/MONTHLY_V1/VCMSLCFG")
Output: public/images/Urban Growth Analysis.png

Run:
    python gee_figures/projects/03_urban_growth_analysis.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee  # noqa: E402

from gee_figures import common, config  # noqa: E402
from gee_figures.figures.projects.palettes import LIGHTS_PALETTE  # noqa: E402


def main():
    common.init()
    lights = (
        ee.ImageCollection("NOAA/VIIRS/DNB/MONTHLY_V1/VCMSLCFG")
        .filterDate("2021-01-01", "2022-01-01")
        .select("avg_rad")
        .max()
        .rename("nightlight")
    )
    vis = {"min": 0.0, "max": 20.0, "palette": LIGHTS_PALETTE}
    common.render_map(
        lights,
        vis,
        config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Urban Growth Analysis.png",
        "Urban Growth Analysis - VIIRS Night-Time Lights (2021) - Ethiopia",
    )


if __name__ == "__main__":
    main()
