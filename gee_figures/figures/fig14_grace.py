"""FIG14.png - GRACE terrestrial-water-storage (drought) over Ethiopia."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common

TWS_PALETTE = [
    "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7",
    "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061",
]


def generate():
    common.init()

    eth = common.ethiopia_geometry()
    mask = ee.Image.constant(1).clip(eth).rename("mask")
    tws = (
        ee.ImageCollection("NASA/GRACE/MASS_GRIDS_V04/MASCON_CRI")
        .select("lwe_thickness")
        .filterDate("2016-01-01", "2016-03-31")   # El Nino drought period
        .mean()
        .rename("TWSA_cm")
        .clip(eth)
        .updateMask(mask)
    )

    vis = {"min": -30.0, "max": 30.0, "palette": TWS_PALETTE}
    out = config.OUTPUT_DIR / "FIG14.png"
    common.render_map(
        tws, vis, config.REGION_ETHIOPIA, out,
        "GRACE Terrestrial Water Storage Anomaly (cm) - early 2016, Ethiopia",
        legend_label="Terrestrial water storage anomaly (cm)",
    )
    print("FIG14  - GRACE drought (Ethiopia) FINE")


if __name__ == "__main__":
    generate()