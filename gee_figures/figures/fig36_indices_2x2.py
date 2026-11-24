"""FIG36.png - NDVI, VCI, VHI and TCI for North Wollo in a 2x2 grid.

Four panels summarising the vegetation/thermal health of North Wollo during
the Kiremt rains 2022, each overlaid with the North Wollo zone and woredas.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from matplotlib import pyplot as plt
from matplotlib.cm import ScalarMappable
from matplotlib.colors import LinearSegmentedColormap, Normalize

from gee_figures import config, common
from gee_figures.figures import north_wollo_indices as nw

REGION = config.REGION_NORTH_WOLLO


def _panel(fig, ax, image, vis, title, legend_label):
    xmin, ymin, xmax, ymax = REGION
    rgb = common.get_thumb_rgb(image, vis, REGION, common.thumb_dims(REGION, 900))
    ax.imshow(rgb, extent=[xmin, xmax, ymin, ymax],
              interpolation="nearest", aspect="auto")
    nw.draw_wollo_woredas(ax, REGION, label=nw.BOUNDARY_LABEL)
    nw.format_axes(ax, REGION, title)
    cmap = LinearSegmentedColormap.from_list("c", vis["palette"])
    sm = ScalarMappable(norm=Normalize(vis["min"], vis["max"]), cmap=cmap)
    sm.set_array([])
    cbar = fig.colorbar(sm, ax=ax, orientation="horizontal",
                        fraction=0.04, pad=0.06, aspect=45)
    cbar.set_label(legend_label, fontsize=8)
    cbar.ax.tick_params(labelsize=6)


def generate():
    common.init()

    fig, axes = plt.subplots(2, 2, figsize=(16.0, 15.0), dpi=200)
    fig.subplots_adjust(bottom=0.10, top=0.96, wspace=0.30, hspace=0.30)

    _panel(fig, axes[0, 0], nw.ndvi(), nw.VIS_NDVI,
           "NDVI - Sep to Nov 2022", "NDVI")
    _panel(fig, axes[0, 1], nw.vci("2022-06-01", "2022-09-30"), nw.VIS_VCI,
           "VCI - Kiremt rains 2022", "VCI")
    _panel(fig, axes[1, 0], nw.vhi("2022-06-01", "2022-09-30"), nw.VIS_VHI,
           "VHI - Kiremt rains 2022", "VHI")
    _panel(fig, axes[1, 1], nw.tci("2022-06-01", "2022-09-30"), nw.VIS_TCI,
           "TCI - Kiremt rains 2022", "TCI")

    fig.suptitle("Vegetation and Thermal Health Indices - North Wollo, Ethiopia",
                 fontsize=13)
    out = config.OUTPUT_DIR / "FIG36.png"
    fig.savefig(out, bbox_inches="tight", facecolor="white")
    plt.close(fig)
    print(f"Saved {out}")
    print("FIG36  - NDVI/VCI/VHI/TCI 2x2 (North Wollo) FINE")


if __name__ == "__main__":
    generate()
