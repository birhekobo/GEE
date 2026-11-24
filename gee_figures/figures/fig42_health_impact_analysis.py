"""FIG42 - Health Impact Analysis - population exposure (WorldPop, Ethiopia).

Generates <repo-root>/public/images/Health Impact Analysis.png for the
project card "Health Impact Analysis" in the Land Use Monitoring section.

Run directly:
    python gee_figures/figures/fig42_health_impact_analysis.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee  # noqa: E402

from gee_figures import config, common  # noqa: E402
from gee_figures.figures.projects.palettes import POP_PALETTE  # noqa: E402


def generate():
    """Health Impact Analysis - population exposure (WorldPop, 100 m)."""
    common.init()
    pop = (
        ee.ImageCollection("WorldPop/GP/100m/pop")
        .filter(ee.Filter.eq("country", "ETH"))
        .filterDate("2020-01-01", "2021-01-01")
        .first()
        .select("population")
        .rename("pop")
    )
    vis = {"min": 0.0, "max": 250.0, "palette": POP_PALETTE}
    common.render_map(
        pop, vis, config.REGION_ETHIOPIA,
        config.OUTPUT_DIR / "Health Impact Analysis.png",
        "Health Impact Analysis - Population Exposure (WorldPop, 100 m) - Ethiopia",
        legend_label="Population density (people / ha)",
    )
    print("FIG42 - Health Impact Analysis (WorldPop population exposure) FINE")


if __name__ == "__main__":
    generate()
