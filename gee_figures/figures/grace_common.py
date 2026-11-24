"""Shared GRACE terrestrial-water-storage renderer for FIG4 / FIG13.

CALIPSO is not in the Earth Engine catalogue, so the FIG4/FIG13 gallery
figures now use GRACE gravity-mission data instead:

  * NASA/GRACE/MASS_GRIDS_V04/MASCON_CRI - monthly global mascon land
    total water storage averages (cm equivalent water thickness)
    (also used by FIG14, here with a different period so the three GRACE
     visuals stay distinct).

Two independent maps are provided via `render(kind, ...)`:
  * kind="trend"   -> long-term total water storage change 2002-2023
  * kind="anomaly" -> recent (2021-2022) terrestrial water storage anomaly
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common

GRACE_COLLECTION = "NASA/GRACE/MASS_GRIDS_V04/MASCON_CRI"
GRACE_BAND = "lwe_thickness"  # cm

TWS_DIFF_PALETTE = [
    "#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7",
    "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061",
]

TWS_ANOM_PALETTE = [
    "#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5",
    "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30",
]


def _grace_mean(start, end):
    return (
        ee.ImageCollection(GRACE_COLLECTION)
        .select(GRACE_BAND)
        .filterDate(start, end)
        .mean()
        .rename("TWSA_cm")
    )


def render(kind, out_name, title, start=None, end=None):
    """Render a GRACE map over Ethiopia with FAO region + zone boundaries.

    ``kind`` selects the type; for ``kind="anomaly"`` an optional
    ``start``/``end`` pair overrides the default period (2021-2022).
    """
    common.init()
    eth = common.ethiopia_geometry()
    mask = ee.Image.constant(1).clip(eth).rename("mask")
    if kind == "trend":
        old = _grace_mean("2002-08-01", "2006-06-30")
        new = _grace_mean("2020-07-01", "2023-06-30")
        img = new.subtract(old).rename("TWS_diff_cm").clip(eth).updateMask(mask)
        vis = {"min": -40.0, "max": 40.0, "palette": TWS_DIFF_PALETTE}
        legend = "Total water storage change (cm)"
    else:
        start = start or "2021-01-01"
        end = end or "2022-12-31"
        img = _grace_mean(start, end).clip(eth).updateMask(mask)
        vis = {"min": -25.0, "max": 25.0, "palette": TWS_ANOM_PALETTE}
        legend = "Terrestrial water storage anomaly (cm)"

    out_path = config.OUTPUT_DIR / out_name
    common.render_map(
        img, vis, config.REGION_ETHIOPIA, out_path, title,
        legend_label=legend,
    )
    return out_path