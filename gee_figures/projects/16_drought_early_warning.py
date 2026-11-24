"""Project 16 - Drought Early Warning System.

Page:   Projects & Collaboration -> Drought Monitoring Project
Data:   CHIRPS daily rainfall, Kiremt 2021 minus Kiremt 2015
Source: ee.ImageCollection("UCSB-CHG/CHIRPS/DAILY")
Output: public/images/Drought Early Warning.png

Run:
    python gee_figures/projects/16_drought_early_warning.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee  # noqa: E402

from gee_figures import common, config  # noqa: E402
from gee_figures.figures.projects.palettes import RAIN_DIFF_PALETTE  # noqa: E402


def season_rain(collection, year):
    return (
        collection.filterDate(f"{year}-06-01", f"{year}-09-30")
        .filterBounds(config.bbox(config.REGION_ETHIOPIA))
        .sum()
    )


def main():
    common.init()
    chirps = ee.ImageCollection("UCSB-CHG/CHIRPS/DAILY").select("precipitation")
    diff = season_rain(chirps, 2021).subtract(season_rain(chirps, 2015)).rename("diff_mm")
    vis = {"min": -600.0, "max": 600.0, "palette": RAIN_DIFF_PALETTE}
    common.render_map(
        diff,
        vis,
        config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Drought Early Warning.png",
        "Drought Early Warning - CHIRPS Rainfall 2021 minus 2015 (mm), Kiremt - Ethiopia",
        legend_label="Rainfall difference (mm)",
    )


if __name__ == "__main__":
    main()
