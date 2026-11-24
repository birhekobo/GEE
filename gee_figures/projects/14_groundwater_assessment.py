"""Project 14 - Groundwater Assessment.

Page:   Projects & Collaboration -> Water Resource Monitoring Project
Data:   GRACE terrestrial water storage anomaly, 2021-2022 mean
Source: ee.ImageCollection("NASA/GRACE/MASS_GRIDS_V04/MASCON_CRI")
Output: public/images/Groundwater Assessment.png

Run:
    python gee_figures/projects/14_groundwater_assessment.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee  # noqa: E402

from gee_figures import common, config  # noqa: E402
from gee_figures.figures.projects.palettes import TWS_PALETTE  # noqa: E402


def main():
    common.init()
    tws = (
        ee.ImageCollection("NASA/GRACE/MASS_GRIDS_V04/MASCON_CRI")
        .select("lwe_thickness")
        .filterDate("2021-01-01", "2022-12-31")
        .mean()
        .rename("TWSA_cm")
    )
    vis = {"min": -25.0, "max": 25.0, "palette": TWS_PALETTE}
    common.render_map(
        tws,
        vis,
        config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Groundwater Assessment.png",
        "Groundwater Assessment - GRACE Water Storage Anomaly 2021-2022 (cm) - Ethiopia",
        legend_label="Terrestrial water storage anomaly (cm)",
    )


if __name__ == "__main__":
    main()
