"""Shared helpers for the North Wollo drought indices (FIG34-36).

Provides:
  * ndvi / vci / tci / vhi image builders clipped to the North Wollo zone
  * palettes used by all three figures
  * a function to draw the North Wollo zone + woredas on a given axes
"""

import ee

from gee_figures import config, common

ZONE_NAME = "North Wello"  # OCHA COD-AB spelling
BOUNDARY_LABEL = "North Wollo"
REGION = config.REGION_NORTH_WOLLO
YEARS = [2021, 2022]

NDVI_PALETTE = [
    "#ffffcc", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443",
    "#005a32",
]
VCI_PALETTE = [
    "#8b0000", "#d73027", "#f46d43", "#fdae61", "#fee08b",
    "#d9f0a3", "#a6d96a", "#1a9850", "#006837",
]
TCI_PALETTE = [
    "#8b0000", "#f46d43", "#fee08b", "#ffffbf", "#d9f0a3",
    "#a6d96a", "#4393c3", "#053061",
]

VIS_NDVI = {"min": 0.0, "max": 0.85, "palette": NDVI_PALETTE}
VIS_VCI = {"min": 0.0, "max": 1.0, "palette": VCI_PALETTE}
VIS_TCI = {"min": 0.0, "max": 1.0, "palette": TCI_PALETTE}
VIS_VHI = VIS_VCI  # VHI lives in the same 0..1 index space


def _geom():
    return common.zone_geometry(BOUNDARY_LABEL)


def _masked(image, geom, name):
    mask = ee.Image.constant(1).clip(geom).rename("mask")
    return image.rename(name).clip(geom).updateMask(mask)


def ndvi():
    """Green-season MODIS NDVI for the target year."""
    geom = _geom()
    img = (
        ee.ImageCollection("MODIS/061/MOD13Q1")
        .select("NDVI")
        .filterDate("2022-09-01", "2022-11-15")
        .filterBounds(config.bbox(REGION))
        .mean()
        .multiply(0.0001)
    )
    return _masked(img, geom, "NDVI")


def vci(target_start, target_end):
    """VCI = (NDVI_now - NDVI_min) / (NDVI_max - NDVI_min), 2000-2020 clim."""
    geom = _geom()
    ndvi_col = (
        ee.ImageCollection("MODIS/061/MOD13Q1")
        .select("NDVI")
        .filterBounds(config.bbox(REGION))
    )
    clim = ndvi_col.filterDate("2000-01-01", "2020-12-31").filter(
        ee.Filter.calendarRange(6, 11, "month")
    )
    ndvi_min = clim.min().multiply(0.0001).rename("NDVI_min")
    ndvi_max = clim.max().multiply(0.0001).rename("NDVI_max")
    cur = ndvi_col.filterDate(target_start, target_end).mean().multiply(0.0001).rename("NDVI_now")
    vci = cur.subtract(ndvi_min).divide(ndvi_max.subtract(ndvi_min)).clamp(0, 1)
    return _masked(vci, geom, "VCI")


def tci(target_start, target_end):
    """TCI = (LST_max - LST_now) / (LST_max - LST_min), 2000-2020 clim."""
    geom = _geom()
    lst = (
        ee.ImageCollection("MODIS/061/MOD11A2")
        .select("LST_Day_1km")
        .filterBounds(config.bbox(REGION))
    )
    clim = lst.filterDate("2000-01-01", "2020-12-31").filter(
        ee.Filter.calendarRange(6, 11, "month")
    )
    lst_min = clim.min().multiply(0.02).subtract(273.15).rename("LST_min")
    lst_max = clim.max().multiply(0.02).subtract(273.15).rename("LST_max")
    lst_now = lst.filterDate(target_start, target_end).mean().multiply(0.02).subtract(273.15).rename("LST_now")
    tci = lst_max.subtract(lst_now).divide(lst_max.subtract(lst_min)).clamp(0, 1)
    return _masked(tci, geom, "TCI")


def vhi(target_start, target_end):
    """VHI = 0.5 * VCI + 0.5 * TCI (Kogan's Vegetation Health Index)."""
    geom = _geom()
    vhi = vci(target_start, target_end).add(tci(target_start, target_end)).multiply(0.5)
    return _masked(vhi, geom, "VHI")


# ---------------------------------------------------------------------------
# Shapefile-style woreda overlay (shared with FIG31/FIG33)
# ---------------------------------------------------------------------------
def _rings(geojson):
    geom = geojson["geometry"]
    if geom["type"] == "Polygon":
        return [geom["coordinates"]]
    return geom["coordinates"]


def _centroid(rings):
    pts = [pt for poly in rings for ring in poly for pt in ring]
    xs = [p[0] for p in pts]
    ys = [p[1] for p in pts]
    return sum(xs) / len(xs), sum(ys) / len(ys)


def _intersects(rings, region, margin=0.25):
    xmin, ymin, xmax, ymax = region
    for poly in rings:
        for ring in poly:
            if any(xmin - margin <= p[0] <= xmax + margin
                   and ymin - margin <= p[1] <= ymax + margin for p in ring):
                return True
    return False


def _polygon(ax, rings, **kw):
    from matplotlib.patches import Polygon
    for poly in rings:
        for ring in poly:
            if len(ring) < 3:
                continue
            ax.add_patch(Polygon(
                list(zip([p[0] for p in ring], [p[1] for p in ring])),
                closed=True, clip_on=True, **kw,
            ))


def draw_wollo_woredas(ax, region, zone_name=ZONE_NAME, label=None,
                       zone_lw=2.2, woreda_lw=0.9):
    """Draw the target zone boundary + its woredas on ``ax``.

    Neighbouring zones are shown lightly (dashed) for context; the target zone
    gets a bold outline and every woreda inside it is labelled.
    """
    xmin, ymin, xmax, ymax = region
    zones = common._local_load("zones")
    woredas = common._local_load("woredas")

    target_rings = None
    for props, rings in zones:
        if props["adm2_name"] == zone_name:
            target_rings = rings
            break
    if target_rings is None:
        return

    for props, rings in zones:
        if props["adm2_name"] == zone_name or not _intersects(rings, region):
            continue
        _polygon(ax, rings, fc="none", ec="#9a947f", lw=0.9, ls="--")
        cx, cy = _centroid(rings)
        if xmin <= cx <= xmax and ymin <= cy <= ymax:
            ax.text(cx, cy, props["adm2_name"], fontsize=6.5, ha="center",
                    va="center", color="#5c5745",
                    bbox=dict(boxstyle="round,pad=0.1", fc="white",
                              ec="none", alpha=0.7), clip_on=True)

    _polygon(ax, target_rings, fc="none", ec="#1b7837", lw=zone_lw)

    for props, rings in woredas:
        if props["adm2_name"] != zone_name:
            continue
        _polygon(ax, rings, fc="none", ec="#3f3f3f", lw=woreda_lw)
        cx, cy = _centroid(rings)
        if xmin <= cx <= xmax and ymin <= cy <= ymax:
            ax.text(cx, cy, props["adm3_name"], fontsize=5.0, ha="center",
                    va="center", color="#1f1f1f",
                    bbox=dict(boxstyle="round,pad=0.08", fc="white",
                              ec="none", alpha=0.85), clip_on=True)

    if label:
        cx, cy = _centroid(target_rings)
        ax.text(cx, cy, label, fontsize=13, ha="center", va="center",
                fontweight="bold", color="#0f3d1c", alpha=0.45)


def format_axes(ax, region, title):
    xmin, ymin, xmax, ymax = region
    ax.set_xlim(xmin, xmax)
    ax.set_ylim(ymin, ymax)
    ax.set_xlabel("Longitude (degrees)")
    ax.set_ylabel("Latitude (degrees)")
    ax.set_title(title, fontsize=10, pad=6)
    ax.tick_params(labelsize=8)
    ax.grid(True, which="major", color="black", alpha=0.12, lw=0.4)
