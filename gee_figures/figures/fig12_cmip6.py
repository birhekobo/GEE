"""FIG12.png - CMIP6 climate-model surface-air-temperature anomaly (SSP5-8.5)."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common

TEMP_PALETTE = [
    "#2166ac", "#67a9cf", "#d1e5f0", "#f7f7f7", "#fee090",
    "#fdae61", "#f46d43", "#b2182b", "#67001f",
]

MODEL = "ACCESS-CM2"


def generate():
    common.init()

    oromia = common.region_geometry("Oromia")
    cmip6 = ee.ImageCollection("NASA/GDDP-CMIP6").filter(
        ee.Filter.eq("model", MODEL)
    ).select("tas")
    fut = (
        cmip6.filter(ee.Filter.eq("scenario", "ssp585"))
        .filterDate("2081-01-01", "2081-12-31")
        .mean()
    )
    hist = (
        cmip6.filter(ee.Filter.eq("scenario", "historical"))
        .filterDate("1995-01-01", "2014-12-31")
        .mean()
    )
    mask = ee.Image.constant(1).clip(oromia).rename("mask")
    anom = (
        fut.subtract(hist).subtract(273.15)
        .clip(oromia).updateMask(mask)
        .rename("tas_anom_C")
    )

    vis = {"min": -2.0, "max": 9.0, "palette": TEMP_PALETTE}
    out = config.OUTPUT_DIR / "FIG12.png"
    common.render_map(
        anom, vis, config.REGION_OROMIA, out,
        f"CMIP6 SSP5-8.5 Warming 2081 vs 1995-2014 ({MODEL}, deg C) - Oromia",
        legend_label="Surface air temperature anomaly (deg C)",
    )
    print("FIG12  - CMIP6 warming (Oromia) FINE")


if __name__ == "__main__":
    generate()