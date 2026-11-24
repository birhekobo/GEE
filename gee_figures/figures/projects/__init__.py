"""Projects & Collaboration figure package - 21 thematic map figures.

Each generator writes one named PNG into <repo-root>/public/images so the React
page can display them via /images/<name>.png. Run everything with:

    python gee_figures/generate_projects.py

Files in this package:
    palettes.py    - colour palettes used by the figures
    data.py        - shared Earth Engine data builders
    land_use.py    - Land Use Monitoring (8 figures)
    climate.py     - Climate Impact Assessment (1 figure)
    air_quality.py - Air Quality Projection (3 figures)
    water.py       - Water Resource Monitoring (3 figures)
    drought.py     - Drought Monitoring (3 figures)
    mining.py      - Mineral Exploration (3 figures)

Standalone, one-script-per-card versions live in gee_figures/projects and can
be run all at once with ``python gee_figures/run_projects.py``.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3]))

from gee_figures import common  # noqa: E402
from gee_figures.figures.projects import (  # noqa: E402,F401
    air_quality,
    climate,
    drought,
    land_use,
    mining,
    water,
)

GENERATORS = {}
for _module in (land_use, climate, air_quality, water, drought, mining):
    GENERATORS.update(_module.GENERATORS)


def generate_all():
    common.init()
    for name, fn in GENERATORS.items():
        print(f"\n=== {name} ===")
        fn()
    print(f"\nAll {len(GENERATORS)} Projects & Collaboration figures generated.")


if __name__ == "__main__":
    generate_all()