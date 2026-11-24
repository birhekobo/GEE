"""FIG37.png - VCI for South Wollo (Kiremt rains 2022).

VCI against the 2000-2020 climatological NDVI range, mapped continuously over
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
        sw.vci("2022-06-01", "2022-09-30"),
        sw.VIS_VCI,
        "VCI (Vegetation Condition Index) - Kiremt rains 2022, South Wollo, Ethiopia",
        "VCI (Vegetation Condition Index)",
        config.OUTPUT_DIR / "FIG37.png",
    )
    print("FIG37  - VCI (South Wollo) FINE")


if __name__ == "__main__":
    generate()
