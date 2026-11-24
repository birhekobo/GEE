"""FIG29.png - MERRA-2 dust extinction optical depth, Jan 2020 (dust transport).

Monthly mean dust extinction AOD at 550 nm from NASA MERRA-2 reanalysis
(NASA/GSFC/MERRA/aer/2) for January 2020 over the Afar region. High values
trace mineral-dust plumes blown from the Afar depression and the Danakil.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common

DUST_PALETTE = [
    "#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84",
    "#fc8d59", "#ef6548", "#d7301f", "#990000",
]


def generate():
    common.init()

    dust = (
        ee.ImageCollection("NASA/GSFC/MERRA/aer/2")
        .filterDate("2020-01-01", "2020-01-31")
        .select("DUEXTTAU")
        .mean()
        .rename("dust_aod550")
        .clip(common.region_geometry("Afar"))
    )

    vis = {"min": 0.0, "max": 0.15, "palette": DUST_PALETTE}
    out = config.OUTPUT_DIR / "FIG29.png"
    common.render_map(
        dust, vis, config.REGION_AFAR, out,
        "Dust Extinction AOD 550 nm (MERRA-2) - January 2020, Afar",
        draw_regions=False, draw_woredas=True, boundary_source="local",
        legend_label="Dust AOD (550 nm)",
    )
    print("FIG29  - Dust AOD (Afar) FINE")


if __name__ == "__main__":
    generate()
