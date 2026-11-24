"""FIG13.png - GRACE recent terrestrial water storage anomaly (2019-2020)."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from gee_figures import config
from gee_figures.figures import grace_common


def generate():
    grace_common.render(
        kind="anomaly",
        out_name="FIG13.png",
        start="2019-01-01",
        end="2020-12-31",
        title="GRACE Terrestrial Water Storage Anomaly 2019-2020 (cm) - Ethiopia",
    )
    print("FIG13  - GRACE anomaly 2019-2020 FINE")


if __name__ == "__main__":
    generate()