"""FIG38.png - VHI for South Wollo (Kiremt rains 2022).

Kogan's Vegetation Health Index (0.5*VCI + 0.5*TCI) mapped continuously over
the South Wollo zone with its woredas overlaid (FIG34-style colorbar).
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from gee_figures import config, common
from gee_figures.figures import south_wollo_drought as sw


def generate():
    common.init()
    sw.render_continuous(
        sw.vhi("2022-06-01", "2022-09-30"),
        sw.VIS_VHI,
        "VHI (Vegetation Health Index) - Kiremt rains 2022, South Wollo, Ethiopia",
        "VHI (Vegetation Health Index)",
        config.OUTPUT_DIR / "FIG38.png",
    )
    print("FIG38  - VHI (South Wollo) FINE")


if __name__ == "__main__":
    generate()
