"""FIG41 - Water Resource Impact - SMAP soil moisture during 2015 El Nino drought.

Generates <repo-root>/public/images/Water Resource Impact.png for the
Drought Monitoring project card "Water Resource Impact" (water availability
analysis, resource management, mitigation planning).

Run directly:
    python gee_figures/figures/fig41_water_resource_impact.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee  # noqa: E402

from gee_figures import config, common  # noqa: E402
from gee_figures.figures.projects.palettes import SOIL_PALETTE  # noqa: E402


def generate():
    """Water Resource Impact - SMAP surface soil moisture (2015 El Nino, Ethiopia)."""
    common.init()
    sm = (
        ee.ImageCollection("NASA/SMAP/SPL4SMGP/008")
        .select("sm_surface")
        .filterDate("2015-06-01", "2015-09-30")
        .mean()
        .rename("soil_moisture")
    )
    vis = {"min": 0.0, "max": 0.5, "palette": SOIL_PALETTE}
    common.render_map(
        sm, vis, config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Water Resource Impact.png",
        "Water Resource Impact - SMAP Surface Soil Moisture (m3 m-3) - Jun-Sep 2015, Ethiopia",
        legend_label="Surface soil moisture (m3 m-3)",
    )
    print("FIG41 - Water Resource Impact (SMAP soil moisture, 2015 El Nino) FINE")


if __name__ == "__main__":
    generate()
