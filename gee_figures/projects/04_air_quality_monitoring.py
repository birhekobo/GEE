"""Project 04 - Comprehensive Air Quality Monitoring.

Page:   Projects & Collaboration -> Land Use Monitoring Project
Data:   MODIS MAIAC aerosol optical depth (MCD19A2), June vs July 2020
Source: ee.ImageCollection("MODIS/061/MCD19A2_GRANULES")
Output: public/images/Air Quality Monitoring.png

Run:
    python gee_figures/projects/04_air_quality_monitoring.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee  # noqa: E402

from gee_figures import common, config  # noqa: E402
from gee_figures.figures.projects.palettes import AOD_PALETTE  # noqa: E402


def main():
    common.init()
    aod = (
        ee.ImageCollection("MODIS/061/MCD19A2_GRANULES")
        .select("Optical_Depth_047")
        .filterBounds(config.bbox(config.REGION_ETHIOPIA))
    )
    june = aod.filterDate("2020-06-01", "2020-06-30").median().rename("AOD").float()
    july = aod.filterDate("2020-07-01", "2020-07-31").median().rename("AOD").float()
    vis = {"min": 0.0, "max": 1.2, "palette": AOD_PALETTE}
    common.render_dual(
        june,
        july,
        vis,
        config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Air Quality Monitoring.png",
        "Air Quality Monitoring - Aerosol Optical Depth (MCD19A2) - June 2020, Ethiopia",
        "Air Quality Monitoring - Aerosol Optical Depth (MCD19A2) - July 2020, Ethiopia",
        legend_label="Aerosol Optical Depth",
    )


if __name__ == "__main__":
    main()
