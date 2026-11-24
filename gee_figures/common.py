"""Helpers shared by every figure script.

Rendering pipeline:
  1. Earth Engine renders a coloured PNG (`getThumbURL`).
  2. matplotlib places the PNG on geo-referenced axes.
  3. FAO/GAUL Ethiopia boundaries (admin-0 border, admin-1 regions,
     admin-2 zones) are drawn as crisp vector lines on top, with labels.
"""

import io
import json
import time
from pathlib import Path

import numpy as np
import requests
from requests.exceptions import RequestException
from PIL import Image
from matplotlib import pyplot as plt
from matplotlib.patches import Polygon
from matplotlib.cm import ScalarMappable
from matplotlib.colors import LinearSegmentedColormap, Normalize

import ee

from gee_figures import config


def init():
    """Convenience wrapper around config.init_ee()."""
    config.init_ee()


# ---------------------------------------------------------------------------
# Earth Engine thumbnail -> numpy RGB
# ---------------------------------------------------------------------------
def thumb_dims(region, width=1000):
    """Square-ish pixel dimensions matching the region's lon/lat aspect."""
    xmin, ymin, xmax, ymax = region
    h = max(1, int(round(width * (ymax - ymin) / (xmax - xmin))))
    return [width, h]


def get_thumb_rgb(image, vis, region=None, dims=None,
                  poll_interval=5, max_wait=3600, request_timeout=120):
    params = {"format": "png"}
    params.update(vis)
    if dims is not None:
        params["dimensions"] = dims
    if region is not None:
        if isinstance(region, ee.Geometry):
            params["region"] = region.getInfo()["coordinates"]
        else:
            params["region"] = list(region)

    # getThumbId submits the render as a background job and returns a URL that
    # answers 503 ("not ready yet") while rendering and 200 + PNG once done.
    # Polling with short timeouts avoids one blocking request that can blow
    # past the HTTP timeout for slow renders.
    url = ee.data.makeThumbUrl(image.getThumbId(params))
    content = _download_thumb(url, poll_interval, max_wait, request_timeout)
    rgba = np.asarray(Image.open(io.BytesIO(content)).convert("RGBA"))
    # Composite onto a white background so masked pixels (outside Afar) are white.
    alpha = rgba[..., 3:4].astype(np.float64) / 255.0
    rgb = np.clip(rgba[..., :3] * alpha + 255.0 * (1.0 - alpha), 0, 255).astype(np.uint8)
    print(f"  fetched thumbnail {rgb.shape[1]}x{rgb.shape[0]} px")
    return rgb


def _download_thumb(url, poll_interval=5, max_wait=3600, request_timeout=120):
    """Download a thumbnail URL, polling until the server-side render finishes."""
    deadline = time.time() + max_wait
    last_err = "no attempt yet"
    while time.time() < deadline:
        try:
            resp = requests.get(url, timeout=request_timeout)
        except RequestException as exc:
            last_err = str(exc)
            time.sleep(poll_interval)
            continue
        if resp.status_code == 200 and len(resp.content) > 0:
            return resp.content
        last_err = f"HTTP {resp.status_code}: {resp.text[:200]}"
        time.sleep(poll_interval)
    raise TimeoutError(
        f"Thumbnail render did not finish within {max_wait}s "
        f"(last status: {last_err})"
    )


# ---------------------------------------------------------------------------
# FAO / GAUL Ethiopia administrative boundaries
# ---------------------------------------------------------------------------
_ETH_GEOM = None
_ETH_FC = None


def ethiopia():
    """Country, region (level-1) and zone (level-2) FeatureCollections."""
    global _ETH_GEOM, _ETH_FC
    if _ETH_FC is None:
        country = ee.FeatureCollection("FAO/GAUL/2015/level0").filter(
            ee.Filter.eq("ADM0_NAME", "Ethiopia")
        )
        geom = country.geometry()
        regions = ee.FeatureCollection("FAO/GAUL/2015/level1").filterBounds(geom)
        zones = ee.FeatureCollection("FAO/GAUL/2015/level2").filterBounds(geom)
        _ETH_GEOM = geom
        _ETH_FC = (country, regions, zones)
    return _ETH_FC


def ethiopia_geometry():
    ethiopia()
    return _ETH_GEOM


def region_geometry(adm1_name):
    """FAO/GAUL admin-1 geometry for a named Ethiopian region (e.g. 'Afar')."""
    ethiopia()
    region = _ETH_FC[1].filter(ee.Filter.eq("ADM1_NAME", adm1_name))
    return region.geometry()


def zone_geometry(adm2_name):
    """FAO/GAUL admin-2 geometry for a named Ethiopian zone (e.g. North Wollo)."""
    ethiopia()
    zone = _ETH_FC[2].filter(ee.Filter.eq("ADM2_NAME", adm2_name))
    return zone.geometry()


# ---------------------------------------------------------------------------
# Local OCHA COD-AB Ethiopia boundaries (regions / zones / woredas)
# Simplified GeoJSON stored in gee_figures/data, so the full administrative
# hierarchy down to woreda level can be drawn without an EE asset.
# ---------------------------------------------------------------------------
_LOCAL = {}


def _local_load(level):
    """Lazily load a local COD-AB layer as [(props, rings-per-polygon), ...]."""
    if level not in _LOCAL:
        path = Path(__file__).resolve().parent / "data" / f"eth_{level}.geojson"
        with open(path, encoding="utf-8") as f:
            gj = json.load(f)
        feats = []
        for ft in gj["features"]:
            props = ft["properties"]
            geom = ft["geometry"]
            if geom["type"] == "Polygon":
                rings = [geom["coordinates"]]
            else:
                rings = geom["coordinates"]
            feats.append((props, rings))
        _LOCAL[level] = feats
    return _LOCAL[level]


def _in_region(point, region, margin=0.5):
    xmin, ymin, xmax, ymax = region
    return (xmin - margin <= point[0] <= xmax + margin
            and ymin - margin <= point[1] <= ymax + margin)


def _local(level, region=None):
    """Local features, optionally filtered to a view bbox ([xmin, ymin, ...])."""
    feats = _local_load(level)
    if region is None:
        return feats
    out = []
    for props, rings in feats:
        hit = False
        for poly in rings:
            for ring in poly:
                if len(ring) >= 3 and any(_in_region(p, region) for p in ring):
                    hit = True
                    break
            if hit:
                break
        if hit:
            out.append((props, rings))
    return out


def woredas_local(region=None):
    """Local woreda (admin-3) features, optionally filtered to ``region``."""
    return _local("woredas", region)


def _draw_local(ax, feats, region, lw, ls, ec, alpha=1.0):
    """Draw locally-stored polygon boundaries (clipped to the view bbox)."""
    for _, rings in feats:
        for poly in rings:
            for ring in poly:
                if len(ring) < 3:
                    continue
                if not any(_in_region(p, region) for p in ring):
                    continue
                xs = [p[0] for p in ring]
                ys = [p[1] for p in ring]
                ax.add_patch(
                    Polygon(
                        list(zip(xs, ys)), closed=True, fill=False,
                        edgecolor=ec, linewidth=lw, linestyle=ls,
                        alpha=alpha, clip_on=True,
                    )
                )


def _rings(geojson):
    if not geojson:
        return []
    t = geojson.get("type")
    if t == "Polygon":
        return list(geojson.get("coordinates", []))
    if t == "MultiPolygon":
        return [ring for poly in geojson.get("coordinates", []) for ring in poly]
    return []


def _centroid(ring):
    xs = [p[0] for p in ring]
    ys = [p[1] for p in ring]
    return sum(xs) / len(xs), sum(ys) / len(ys)


def _draw_fc(ax, fc, lw, ls, ec, alpha=1.0):
    info = fc.getInfo()
    for feat in info.get("features", []):
        for ring in _rings(feat.get("geometry") or {}):
            if len(ring) < 3:
                continue
            xs = [p[0] for p in ring]
            ys = [p[1] for p in ring]
            ax.add_patch(
                Polygon(
                    list(zip(xs, ys)), closed=True, fill=False,
                    edgecolor=ec, linewidth=lw, linestyle=ls, alpha=alpha,
                )
            )


def _labels(ax, region, color="#111111"):
    """Label admin-1 regions (national view) or admin-2 zones (zoomed view)."""
    _, regions, zones = ethiopia()
    xmin, ymin, xmax, ymax = region
    national = (xmax - xmin) > 8.0
    fc, field = (regions, "ADM1_NAME") if national else (zones, "ADM2_NAME")
    info = fc.getInfo()
    for feat in info.get("features", []):
        props = feat.get("properties") or {}
        name = props.get(field, "")
        if not name:
            continue
        for ring in _rings(feat.get("geometry") or {}):
            cx, cy = _centroid(ring)
            if xmin <= cx <= xmax and ymin <= cy <= ymax:
                ax.text(
                    cx, cy, name, fontsize=8, ha="center", va="center",
                    color=color,
                    bbox=dict(boxstyle="round,pad=0.12", fc="white",
                              ec="none", alpha=0.55),
                    clip_on=True,
                )
            break


# ---------------------------------------------------------------------------
# Combineset: EE thumbnail + FAO boundaries -> final gallery PNG
# ---------------------------------------------------------------------------
def plot_fao_map(rgb, out_path, region, title,
                 draw_country=True, draw_regions=True, draw_zones=True,
                 draw_woredas=False, boundary_source="gaul",
                 labels=True, ax=None, return_fig=False):
    xmin, ymin, xmax, ymax = region

    fig = None
    if ax is None:
        fig, ax = plt.subplots(figsize=(10.5, 8.2), dpi=200)
    ax.imshow(rgb, extent=[xmin, xmax, ymin, ymax],
              interpolation="nearest", aspect="auto")
    ax.set_xlim(xmin, xmax)
    ax.set_ylim(ymin, ymax)

    if boundary_source == "local":
        if draw_woredas:
            _draw_local(ax, _local("woredas", region), region,
                        0.4, ":", "#777777", alpha=0.9)
        if draw_zones:
            _draw_local(ax, _local("zones", region), region,
                        1.0, "--", "#444444", alpha=0.95)
        if draw_regions:
            _draw_local(ax, _local("regions", region), region,
                        1.7, "-", "#222222", alpha=0.95)
        if draw_country:
            _draw_local(ax, _local("country", region), region,
                        2.6, "-", "black")
    else:
        country, _, _ = ethiopia()
        if draw_zones:
            _draw_fc(ax, ethiopia()[2], 0.45, ":", "#777777", alpha=0.9)
        if draw_regions:
            _draw_fc(ax, ethiopia()[1], 1.15, "--", "#333333", alpha=0.95)
        if draw_country:
            _draw_fc(ax, country, 2.4, "-", "black")

    if labels:
        _labels(ax, region)

    ax.set_xlabel("Longitude (degrees)")
    ax.set_ylabel("Latitude (degrees)")
    ax.set_title(title, fontsize=11, pad=8)
    ax.tick_params(labelsize=9)
    ax.grid(True, which="major", color="black", alpha=0.12, lw=0.4)

    if fig is not None:
        fig.tight_layout()
        out_path = Path(out_path)
        fig.savefig(out_path, bbox_inches="tight", facecolor="white")
        plt.close(fig)
        print(f"Saved {out_path}")
    if return_fig:
        return fig if fig is not None else ax.figure
    return ax


def render_map(image, vis, region, out_path, title,
               width=1000, draw_country=True, draw_regions=True,
               draw_zones=True, draw_woredas=False, boundary_source="gaul",
               labels=True, legend_label=None, clip_country=False):
    """One-shot: render thumbnail without Ethiopia clipping, overlay FAO.

    If ``clip_country`` is True, the thumbnail is clipped to the Ethiopia
    geometry so no data appears over neighbouring countries.
    If ``legend_label`` is given, a horizontal colorbar is drawn across the
    bottom of the map using the palette/min/max from ``vis``.
    ``boundary_source="local"`` switches to the locally stored OCHA COD-AB
    boundaries (regions/zones/woredas) instead of FAO/GAUL.
    """
    if clip_country:
        image = image.clip(ethiopia_geometry())
    rgb = get_thumb_rgb(image, vis, region, thumb_dims(region, width))
    fig, ax = plt.subplots(figsize=(10.5, 8.2), dpi=200)
    plot_fao_map(rgb, None, region, title,
                 draw_country=draw_country, draw_regions=draw_regions,
                 draw_zones=draw_zones, draw_woredas=draw_woredas,
                 boundary_source=boundary_source, labels=labels, ax=ax)
    if legend_label is not None:
        fig.subplots_adjust(bottom=0.16)
        cmap = LinearSegmentedColormap.from_list(
            "legend", vis.get("palette", ["#000000", "#ffffff"])
        )
        sm = ScalarMappable(
            norm=Normalize(vis.get("min", 0.0), vis.get("max", 1.0)),
            cmap=cmap,
        )
        sm.set_array([])
        cbar = fig.colorbar(
            sm, ax=ax, orientation="horizontal",
            fraction=0.04, pad=0.06, aspect=45,
        )
        cbar.set_label(legend_label, fontsize=10)
    else:
        fig.tight_layout()
    out_path = Path(out_path)
    fig.savefig(out_path, bbox_inches="tight", facecolor="white")
    plt.close(fig)
    print(f"Saved {out_path}")
    return ax


def render_dual(image_left, image_right, vis, region, out_path, title_left,
                title_right, width=900, labels=True, legend_label=None,
                draw_woredas=False, boundary_source="gaul", vis_right=None):
    """Two side-by-side FAO maps (e.g. two seasons/windows) in one PNG.

    ``vis`` styles the left image; ``vis_right`` optionally styles the right
    image (defaults to ``vis``). If ``legend_label`` is given, a horizontal
    colorbar is drawn across the bottom of both panels using the palette/min/max
    from ``vis``.
    """
    vis_right = vis if vis_right is None else vis_right
    clipped_l = (image_left.clip(ethiopia_geometry()))
    clipped_r = (image_right.clip(ethiopia_geometry()))
    rgb_l = get_thumb_rgb(clipped_l, vis, region, thumb_dims(region, width))
    rgb_r = get_thumb_rgb(clipped_r, vis_right, region, thumb_dims(region, width))

    fig, (ax_l, ax_r) = plt.subplots(1, 2, figsize=(16.0, 8.2), dpi=200)
    plot_fao_map(rgb_l, None, region, title_left,
                 labels=labels, ax=ax_l,
                 draw_woredas=draw_woredas, boundary_source=boundary_source)
    plot_fao_map(rgb_r, None, region, title_right,
                 labels=labels, ax=ax_r,
                 draw_woredas=draw_woredas, boundary_source=boundary_source)
    if legend_label is not None:
        fig.subplots_adjust(bottom=0.16)
        cmap = LinearSegmentedColormap.from_list(
            "legend", vis.get("palette", ["#000000", "#ffffff"])
        )
        sm = ScalarMappable(
            norm=Normalize(vis.get("min", 0.0), vis.get("max", 1.0)),
            cmap=cmap,
        )
        sm.set_array([])
        cbar = fig.colorbar(
            sm, ax=[ax_l, ax_r], orientation="horizontal",
            fraction=0.04, pad=0.06, aspect=45,
        )
        cbar.set_label(legend_label, fontsize=10)
    else:
        fig.tight_layout()
    out_path = Path(out_path)
    fig.savefig(out_path, bbox_inches="tight", facecolor="white")
    plt.close(fig)
    print(f"Saved {out_path}")
    return out_path


# ---------------------------------------------------------------------------
# Data helpers
# ---------------------------------------------------------------------------
def landsat8_c2_sr(region=None, start="2022-01-01", end="2022-12-31"):
    """Median Landsat 8 Collection-2 Level-2 surface reflectance composite."""
    col = (
        ee.ImageCollection("LANDSAT/LC08/C02/T1_L2")
        .filterDate(start, end)
        .filter(ee.Filter.lt("CLOUD_COVER", 20))
        .select(["SR_B2", "SR_B3", "SR_B4", "SR_B5", "ST_B10"])
    )
    if region is not None:
        col = col.filterBounds(config.bbox(region))
    return col.median()


def srtm_elevation():
    """SRTM 30 m elevation, hillshade and slope."""
    elev = ee.Image("USGS/SRTMGL1_003").select("elevation")
    return elev, ee.Terrain.hillshade(elev), ee.Terrain.slope(elev)