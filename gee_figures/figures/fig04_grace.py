"""FIG4.png - GRACE long-term terrestrial water storage change (2002-2023)."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from gee_figures import config
from gee_figures.figures import grace_common


def generate():
    grace_common.render(
        kind="trend",
        out_name="FIG4.png",
        title="GRACE Total Water Storage Change 2002-2023 (cm) - Ethiopia",
    )
    print("FIG4  - GRACE long-term water storage change FINE")


if __name__ == "__main__":
    generate()