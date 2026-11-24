"""Shared Earth Engine data builders for the Projects & Collaboration figures."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3]))

import ee

from gee_figures import config, common  # noqa: E402


def landsat8_swir(region, start="2022-01-01", end="2022-12-31"):
    """Landsat 8 SWIR false-colour RGB (B7, B6, B4) -> alteration geology."""
    l8 = (
        ee.ImageCollection("LANDSAT/LC08/C02/T1_L2")
        .filterDate(start, end)
        .filterBounds(config.bbox(region))
        .filter(ee.Filter.lt("CLOUD_COVER", 20))
        .select(["SR_B7", "SR_B6", "SR_B4"])
        .median()
    )
    return (
        l8.multiply(0.0000275).add(-0.2)
        .rename(["SWIR1", "SWIR2", "red"])
    )


def s5p_median(product, band, start, end, region):
    return (
        ee.ImageCollection(product)
        .select(band)
        .filterDate(start, end)
        .filterBounds(config.bbox(region))
        .median()
        .rename(band.split("_")[0] + "_" + band.split("_column")[0][:3])
    )


def vci(start, end):
    """MODIS VCI (2015-2024 era range) against a 2000-2020 baseline."""
    ndvi = (
        ee.ImageCollection("MODIS/061/MOD13Q1")
        .select("NDVI")
        .filterBounds(config.bbox(config.REGION_AMHARA))
    )
    clim = ndvi.filterDate("2000-01-01", "2020-12-31").filter(
        ee.Filter.calendarRange(6, 11, "month")
    )
    # scale after aggregation (collections don't support multiply / date-filter after .map)
    vci = (ndvi.filterDate(start, end).mean().multiply(0.0001)
           .subtract(clim.min().multiply(0.0001))
           .divide(clim.max().multiply(0.0001).subtract(clim.min().multiply(0.0001))))
    return vci.rename("VCI").clamp(0, 1)