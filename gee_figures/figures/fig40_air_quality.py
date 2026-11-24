"""FIG40.png - MODIS MAIAC total AOD at 550 nm over Ethiopia, 2024, all seasons.

One-year Air Quality Monitoring view: the same MCD19A2 AOD data used for FIG5,
split into the four meteorological seasons of 2024 (DJF, MAM, JJA, SON) in a
2x2 subplot grid.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

import ee

from matplotlib import pyplot as plt
from matplotlib.cm import ScalarMappable
from matplotlib.colors import LinearSegmentedColormap, Normalize

from gee_figures import config, common

AOD_PALETTE = [
    "#2c7bb6", "#abd9e9", "#ffffbf", "#fee08b", "#fdae61", "#f46d43",
    "#d7191c", "#a50026",
]

YEAR = 2024
SEASONS = [
    ("DJF", f"Dec {YEAR - 1} - Feb {YEAR}", ("2023-12-01", "2024-02-29")),
    ("MAM", f"Mar - May {YEAR}", ("2024-03-01", "2024-05-31")),
    ("JJA", f"Jun - Aug {YEAR}", ("2024-06-01", "2024-08-31")),
    ("SON", f"Sep - Nov {YEAR}", ("2024-09-01", "2024-11-30")),
]
REGION = config.REGION_ETHIOPIA


def _seasonal_aod(start, end):
    return (
        ee.ImageCollection("MODIS/061/MCD19A2_GRANULES")
        .select("Optical_Depth_055")
        .filterDate(start, end)
        .filterBounds(config.bbox(REGION))
        .mean()
        .multiply(0.001)
        .float()
        .clip(common.ethiopia_geometry())
    )


def generate():
    common.init()

    fig, axes = plt.subplots(2, 2, figsize=(16.0, 15.0), dpi=200)
    fig.subplots_adjust(bottom=0.10, top=0.96, wspace=0.28, hspace=0.28)

    vis = {"min": 0.0, "max": 0.5, "palette": AOD_PALETTE}

    for (code, label, window), ax in zip(SEASONS, axes.ravel()):
        img = _seasonal_aod(*window)
        rgb = common.get_thumb_rgb(img, vis, REGION, common.thumb_dims(REGION, 900))
        common.plot_fao_map(rgb, None, REGION, f"{code} ({label})",
                            labels=True, ax=ax, draw_woredas=False)

    fig.suptitle(
        "Air Quality Monitoring - MODIS MAIAC Total AOD at 550 nm, Ethiopia, 2024",
        fontsize=13,
    )

    cmap = LinearSegmentedColormap.from_list("c", AOD_PALETTE)
    sm = ScalarMappable(norm=Normalize(vis["min"], vis["max"]), cmap=cmap)
    sm.set_array([])
    cbar = fig.colorbar(sm, ax=axes, orientation="horizontal",
                        fraction=0.03, pad=0.06, aspect=60)
    cbar.set_label("Total aerosol optical depth at 550 nm", fontsize=11)

    out = config.OUTPUT_DIR / "FIG40.png"
    fig.savefig(out, bbox_inches="tight", facecolor="white")
    plt.close(fig)
    print(f"Saved {out}")
    print("FIG40  - MODIS MAIAC AOD all seasons 2024 (Ethiopia) FINE")


if __name__ == "__main__":
    generate()
