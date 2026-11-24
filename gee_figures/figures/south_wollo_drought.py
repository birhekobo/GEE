"""Shared helpers for the South Wollo drought indices (FIG37-39).

Provides VCI / VHI / TCI image builders clipped to the South Wollo zone plus a
drought-classification helper that turns the continuous 0..1 index into five
discrete severity classes (Extreme / Severe / Moderate / Mild / No drought).
"""

from pathlib import Path

import ee

from gee_figures import config, common

ZONE_NAME = "South Wello"  # OCHA COD-AB spelling
BOUNDARY_LABEL = "South Wollo"
REGION = config.REGION_SOUTH_WOLLO

# Drought severity classes (Kogan-type thresholds on the 0..1 index)
CLASS_NAMES = [
    "Extreme drought",
    "Severe drought",
    "Moderate drought",
    "Mild drought",
    "No drought",
]
CLASS_PALETTE = [
    "#8b0000", "#d73027", "#fdae61", "#ffffbf", "#1a9850",
]
CLASS_BOUNDS = [0.00, 0.10, 0.20, 0.30, 0.40, 1.00]

# Continuous palettes for the raw 0..1 index (FIG34-style rendering)
VCI_PALETTE = [
    "#8b0000", "#d73027", "#f46d43", "#fdae61", "#fee08b",
    "#d9f0a3", "#a6d96a", "#1a9850", "#006837",
]
TCI_PALETTE = [
    "#8b0000", "#f46d43", "#fee08b", "#ffffbf", "#d9f0a3",
    "#a6d96a", "#4393c3", "#053061",
]

VIS_VCI = {"min": 0.0, "max": 1.0, "palette": VCI_PALETTE}
VIS_VHI = VIS_VCI  # VHI lives in the same 0..1 index space
VIS_TCI = {"min": 0.0, "max": 1.0, "palette": TCI_PALETTE}


def _geom():
    return common.zone_geometry(BOUNDARY_LABEL)


def _masked(image, geom, name):
    mask = ee.Image.constant(1).clip(geom).rename("mask")
    return image.rename(name).clip(geom).updateMask(mask)


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


def classify(index):
    """Discrete 0..4 class image from a continuous 0..1 index."""
    lo, b1, b2, b3, hi = CLASS_BOUNDS[:5]
    cls = index.expression(
        f"b(0) < {b1} ? 0"
        f" : b(0) < {b2} ? 1"
        f" : b(0) < {b3} ? 2"
        f" : b(0) < {hi} ? 3 : 4"
    ).rename("drought_class")
    return cls.selfMask()


VIS = {"min": 0, "max": 4, "palette": CLASS_PALETTE}


def render_continuous(index, vis, title, legend_label, out_path):
    """Render a continuous 0..1 index map with a horizontal colorbar (FIG34-style)."""
    from matplotlib import pyplot as plt
    from matplotlib.cm import ScalarMappable
    from matplotlib.colors import LinearSegmentedColormap, Normalize

    rgb = common.get_thumb_rgb(
        index, vis, REGION, common.thumb_dims(REGION, 1000)
    )
    xmin, ymin, xmax, ymax = REGION

    fig, ax = plt.subplots(figsize=(10.5, 8.2), dpi=200)
    fig.subplots_adjust(bottom=0.16)
    ax.imshow(rgb, extent=[xmin, xmax, ymin, ymax],
              interpolation="nearest", aspect="auto")
    draw_wollo_woredas(ax, REGION, label=BOUNDARY_LABEL, neighbours=True)
    format_axes(ax, REGION, title)

    cmap = LinearSegmentedColormap.from_list("c", vis["palette"])
    sm = ScalarMappable(norm=Normalize(vis["min"], vis["max"]), cmap=cmap)
    sm.set_array([])
    cbar = fig.colorbar(sm, ax=ax, orientation="horizontal",
                        fraction=0.04, pad=0.06, aspect=45)
    cbar.set_label(legend_label, fontsize=9)
    cbar.ax.tick_params(labelsize=7)

    out_path = Path(out_path)
    fig.savefig(out_path, bbox_inches="tight", facecolor="white")
    plt.close(fig)
    print(f"Saved {out_path}")


def render_classified(index, title, out_path):
    """Render one classified drought map with a categorical legend.

    Fetches a thumbnail of the 0..4 class image over the South Wollo region,
    overlays the zone + woredas, and draws a categorical colorbar with the five
    drought class labels.
    """
    from matplotlib import pyplot as plt
    from matplotlib.patches import Patch

    rgb = common.get_thumb_rgb(
        classify(index), VIS, REGION, common.thumb_dims(REGION, 1000)
    )
    xmin, ymin, xmax, ymax = REGION

    fig, ax = plt.subplots(figsize=(10.5, 8.2), dpi=200)
    ax.imshow(rgb, extent=[xmin, xmax, ymin, ymax],
              interpolation="nearest", aspect="auto")
    draw_wollo_woredas(ax, REGION, label=BOUNDARY_LABEL, neighbours=False)
    format_axes(ax, REGION, title)

    patches = [Patch(facecolor=c, edgecolor="none", label=n)
               for c, n in zip(CLASS_PALETTE, CLASS_NAMES)]
    ax.legend(handles=patches, loc="lower left", fontsize=8, framealpha=0.9,
              title="Drought class", title_fontsize=9)

    fig.tight_layout()
    out_path = Path(out_path)
    fig.savefig(out_path, bbox_inches="tight", facecolor="white")
    plt.close(fig)
    print(f"Saved {out_path}")


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
                       zone_lw=2.2, woreda_lw=0.9, neighbours=False):
    """Draw the target zone boundary + its woredas on ``ax``.

    If ``neighbours`` is True, neighbouring zones are shown lightly (dashed)
    for context; otherwise only the target zone and its woredas are drawn.
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

    if neighbours:
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
