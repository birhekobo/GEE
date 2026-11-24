"""FIG31.png - South Wollo administrative map: zones and woredas over SRTM DEM.

Uses the locally stored OCHA COD-AB Ethiopia boundaries
(gee_figures/data/eth_zones.geojson and eth_woredas.geojson) overlaid on a
shaded SRTM elevation background. The South Wollo zone is highlighted and all
32 of its woredas are drawn and labelled, with the neighbouring zones shown
lightly for context.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from matplotlib import pyplot as plt
from matplotlib.patches import Polygon
from matplotlib.cm import ScalarMappable
from matplotlib.colors import LinearSegmentedColormap, Normalize

from gee_figures import config, common

ZONE_NAME = "South Wello"  # spelling used by the OCHA COD-AB data
BOUNDARY_LABEL = "South Wollo"

DEM_PALETTE = [
    "#1b7837", "#2f8f4e", "#49a668", "#6fbf7d", "#9ad493",
    "#c4e3a9", "#f0e8b0", "#d9bc83", "#bc9560", "#9a7042",
    "#7a552f", "#8a8a8a", "#f2f2f2",
]


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
    for poly in rings:
        for ring in poly:
            if len(ring) < 3:
                continue
            ax.add_patch(Polygon(
                list(zip([p[0] for p in ring], [p[1] for p in ring])),
                closed=True, clip_on=True, **kw,
            ))


def generate():
    common.init()
    region = config.REGION_SOUTH_WOLLO
    xmin, ymin, xmax, ymax = region

    zones = common._local_load("zones")
    woredas = common._local_load("woredas")

    # ---- SRTM elevation + hillshade background ----
    elev, hillshade, _ = common.srtm_elevation()
    shaded = elev.multiply(hillshade.divide(255.0))
    dem_vis = {"min": 0.0, "max": 4200.0, "palette": DEM_PALETTE}
    rgb = common.get_thumb_rgb(shaded, dem_vis, region,
                               common.thumb_dims(region, 1000))

    fig, ax = plt.subplots(figsize=(10.5, 8.2), dpi=200)
    ax.imshow(rgb, extent=[xmin, xmax, ymin, ymax],
              interpolation="nearest", aspect="auto")

    # ---- neighbouring zones: light context ----
    for props, rings in zones:
        if props["adm2_name"] == ZONE_NAME or not _intersects(rings, region):
            continue
        _polygon(ax, rings, fc="none", ec="#9a947f", lw=0.9, ls="--")
        cx, cy = _centroid(rings)
        if xmin <= cx <= xmax and ymin <= cy <= ymax:
            ax.text(cx, cy, props["adm2_name"], fontsize=7, ha="center",
                    va="center", color="#5c5745",
                    bbox=dict(boxstyle="round,pad=0.1", fc="white",
                              ec="none", alpha=0.7), clip_on=True)

    # ---- South Wollo zone: highlighted fill and bold outline ----
    sw_rings = []
    for props, rings in zones:
        if props["adm2_name"] == ZONE_NAME:
            sw_rings = rings
            break
    _polygon(ax, sw_rings, fc="none", ec="#1b7837", lw=2.6)

    # ---- South Wollo woredas: boundaries + labels ----
    for props, rings in woredas:
        if props["adm2_name"] != ZONE_NAME:
            continue
        _polygon(ax, rings, fc="none", ec="#3f3f3f", lw=1.1)
        cx, cy = _centroid(rings)
        if xmin <= cx <= xmax and ymin <= cy <= ymax:
            ax.text(cx, cy, props["adm3_name"], fontsize=5.6, ha="center",
                    va="center", color="#1f1f1f",
                    bbox=dict(boxstyle="round,pad=0.08", fc="white",
                              ec="none", alpha=0.85), clip_on=True)

    cx, cy = _centroid(sw_rings)
    ax.text(cx, cy, BOUNDARY_LABEL, fontsize=14, ha="center", va="center",
            fontweight="bold", color="#0f3d1c", alpha=0.5)

    ax.set_xlim(xmin, xmax)
    ax.set_ylim(ymin, ymax)
    ax.set_xlabel("Longitude (degrees)")
    ax.set_ylabel("Latitude (degrees)")
    ax.set_title(f"{BOUNDARY_LABEL} - Administrative Zones and Woredas over SRTM Elevation",
                 fontsize=11, pad=8)
    ax.tick_params(labelsize=9)
    ax.grid(True, which="major", color="black", alpha=0.12, lw=0.4)

    cmap = LinearSegmentedColormap.from_list("dem", DEM_PALETTE)
    sm = ScalarMappable(norm=Normalize(0.0, 4200.0), cmap=cmap)
    sm.set_array([])
    cbar = fig.colorbar(sm, ax=ax, orientation="horizontal",
                        fraction=0.04, pad=0.06, aspect=45)
    cbar.set_label("Elevation (m)", fontsize=10)

    fig.tight_layout()
    out = config.OUTPUT_DIR / "FIG31.png"
    fig.savefig(out, bbox_inches="tight", facecolor="white")
    plt.close(fig)
    print(f"Saved {out}")
    print("FIG31  - South Wollo zones & woredas over SRTM DEM FINE")


if __name__ == "__main__":
    generate()
