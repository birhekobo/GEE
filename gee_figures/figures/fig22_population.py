"""FIG22.png - Population count (WorldPop, 100 m) for Wollo with supporting plots.

Main panel: WorldPop gridded population clipped to the Wollo zones, rendered on
a log10 stretch so both sparse rural cells and dense towns are visible. The
three side panels summarise the same population field: per-cell distribution,
total population by 500 m elevation band, and the cumulative population share
against elevation (the mid-altitude highlands hold most of Wollo's people).
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import numpy as np
import ee

from matplotlib import pyplot as plt
from matplotlib.cm import ScalarMappable
from matplotlib.colors import LinearSegmentedColormap, LogNorm

from gee_figures import config, common

POP_PALETTE = [
    "#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c",
    "#fc4e2a", "#e31a1c", "#b10026",
]
ELEV_BINS = [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000]
MAX_POP_CELL = 2500.0


def _population(wollo):
    """WorldPop 2020 gridded population clipped to the Wollo zones."""
    return (
        ee.ImageCollection("WorldPop/GP/100m/pop")
        .filter(ee.Filter.eq("country", "ETH"))
        .filterDate("2020-01-01", "2021-01-01")
        .first()
        .select("population")
        .rename("pop")
        .clip(wollo)
        .updateMask(ee.Image.constant(1).clip(wollo).rename("mask"))
    )


def _pop_by_elev(pop, elev, geometry):
    """Total population inside each 500 m elevation band (summed at 1 km)."""
    bands = [
        pop.updateMask(elev.gte(lo).And(elev.lt(hi))).rename(f"b{lo}")
        for lo, hi in zip(ELEV_BINS, ELEV_BINS[1:])
    ]
    agg = (
        ee.Image.cat(bands)
        .reduceResolution(ee.Reducer.sum(), bestEffort=True, maxPixels=2000)
        .reproject(crs="EPSG:4326", scale=1000)
    )
    info = agg.reduceRegion(
        reducer=ee.Reducer.sum(), geometry=geometry,
        scale=1000, maxPixels=1e7, bestEffort=True,
    ).getInfo()
    return [info[f"b{lo}"] for lo in ELEV_BINS[:-1]]


def generate():
    common.init()

    wollo = common.zone_geometry("North Wollo").union(
        common.zone_geometry("South Wollo")
    )
    pop = _population(wollo)
    elev = ee.Image("USGS/SRTMGL1_003").select("elevation")
    region = config.REGION_WOLLO

    # ---- (a) map, log10 stretch so rural and urban cells both visible ----
    popvis = pop.add(1).log10()
    rgb = common.get_thumb_rgb(
        popvis,
        {"min": 0.0, "max": float(np.log10(MAX_POP_CELL + 1)), "palette": POP_PALETTE},
        region, common.thumb_dims(region, 900),
    )

    fig, axes = plt.subplots(2, 2, figsize=(13.5, 11.5), dpi=200)
    ax_map, ax_hist, ax_bar, ax_cum = axes.ravel()

    common.plot_fao_map(
        rgb, None, region,
        "Population Count (WorldPop, 100 m) - Wollo, Ethiopia",
        labels=False, ax=ax_map,
    )
    cmap = LinearSegmentedColormap.from_list("pop", POP_PALETTE)
    sm = ScalarMappable(norm=LogNorm(vmin=1.0, vmax=MAX_POP_CELL), cmap=cmap)
    sm.set_array([])
    cbar = fig.colorbar(
        sm, ax=ax_map, orientation="vertical", fraction=0.046, pad=0.02,
    )
    cbar.set_label("Population per 100 m cell", fontsize=10)
    cbar.ax.tick_params(labelsize=8)

    # ---- (b) per-cell population distribution ----
    stats = pop.reduceRegion(
        reducer=ee.Reducer.histogram(60), geometry=wollo,
        scale=200, bestEffort=True, maxPixels=1e8,
    ).getInfo()["pop"]
    buckets = np.asarray(stats["bucketMeans"])
    counts = np.asarray(stats["histogram"])
    keep = counts > 0
    ax_hist.semilogy(
        buckets[keep], counts[keep], drawstyle="steps-post",
        color="#b10026", lw=1.3,
    )
    ax_hist.set_xscale("log")
    ax_hist.set_xlabel("Population per 100 m cell (log)")
    ax_hist.set_ylabel("Number of cells")
    ax_hist.set_title("Distribution of cell population")
    ax_hist.grid(True, which="both", alpha=0.3, lw=0.4)
    ax_hist.tick_params(labelsize=8)

    # ---- (c) population by elevation band ----
    totals = _pop_by_elev(pop, elev, wollo)
    total = sum(totals)
    mid = [(ELEV_BINS[i] + ELEV_BINS[i + 1]) / 2 for i in range(len(totals))]
    ax_bar.bar(
        mid, totals, width=420, color="#feb24c",
        edgecolor="#b10026", linewidth=0.8,
    )
    ax_bar.set_xticks(mid)
    ax_bar.set_xticklabels(
        [f"{lo}-{hi}" for lo, hi in zip(ELEV_BINS, ELEV_BINS[1:])],
        fontsize=7, rotation=45,
    )
    ax_bar.set_xlabel("Elevation band (m)")
    ax_bar.set_ylabel("Total population")
    ax_bar.set_title(f"Population by elevation (total {total:,.0f})")
    ax_bar.grid(True, axis="y", alpha=0.3, lw=0.4)
    ax_bar.tick_params(labelsize=8)

    # ---- (d) cumulative population share vs elevation ----
    cum = np.cumsum(totals) / total * 100.0
    ax_cum.step(mid, cum, where="mid", color="#313695", lw=2, marker="o", ms=4)
    ax_cum.set_xlabel("Elevation (m)")
    ax_cum.set_ylabel("Cumulative population (%)")
    ax_cum.set_title("Cumulative share of population vs elevation")
    ax_cum.grid(True, which="both", alpha=0.3, lw=0.4)
    ax_cum.tick_params(labelsize=8)

    fig.tight_layout()
    out = config.OUTPUT_DIR / "FIG22.png"
    fig.savefig(out, bbox_inches="tight", facecolor="white")
    plt.close(fig)
    print(f"Saved {out}")
    print("FIG22  - Population count (Wollo) FINE")


if __name__ == "__main__":
    generate()
