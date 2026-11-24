"""FIG19.png - VCI (Vegetation Condition Index) for Amhara.

VCI = (NDVI_now - NDVI_min) / (NDVI_max - NDVI_min) computed against a
2000-2020 green-season climatological min/max range. Values <0.35 indicate
vegetation moisture stress / drought; values >0.7 indicate healthy/wet.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from gee_figures import config, common

VCI_PALETTE = [
    "#8b0000", "#d73027", "#f46d43", "#fdae61", "#fee08b",
    "#d9f0a3", "#a6d96a", "#1a9850", "#006837",
]


def _vci(target_start, target_end, amhara):
    ndvi = (
        ee.ImageCollection("MODIS/061/MOD13Q1")
        .select("NDVI")
        .filterBounds(config.bbox(config.REGION_AMHARA))
    )
    clim = ndvi.filterDate("2000-01-01", "2020-12-31").filter(
        ee.Filter.calendarRange(6, 11, "month")
    )
    ndvi_min = clim.min().multiply(0.0001).rename("NDVI_min")
    ndvi_max = clim.max().multiply(0.0001).rename("NDVI_max")
    cur = ndvi.filterDate(target_start, target_end).mean().multiply(0.0001).rename("NDVI_now")
    vci = cur.subtract(ndvi_min).divide(ndvi_max.subtract(ndvi_min))
    vci = vci.rename("VCI").clamp(0, 1)
    mask = ee.Image.constant(1).clip(amhara).rename("mask")
    return vci.clip(amhara).updateMask(mask)


def generate():
    common.init()

    amhara = common.region_geometry("Amhara")
    vis = {"min": 0.0, "max": 1.0, "palette": VCI_PALETTE}
    out = config.OUTPUT_DIR / "FIG19.png"
    common.render_dual(
        _vci("2021-06-01", "2021-09-30", amhara),
        _vci("2022-06-01", "2022-09-30", amhara),
        vis, config.REGION_AMHARA, out,
        "VCI Vegetation Condition Index - Kiremt rains 2021, Amhara",
        "VCI Vegetation Condition Index - Kiremt rains 2022, Amhara",
        legend_label="VCI (Vegetation Condition Index)",
    )
    print("FIG19  - VCI (Amhara) FINE")


if __name__ == "__main__":
    generate()