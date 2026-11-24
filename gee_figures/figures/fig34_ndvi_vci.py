"""FIG34.png - NDVI and VCI for North Wollo (Kiremt rains 2021 & 2022).

Two panels: green-season NDVI (Sep-Nov 2022) and VCI against the 2000-2020
climatological range, overlaid with the North Wollo zone and woredas.
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


def _panel(fig, ax, image, vis, title, legend_label, add_legend):
    xmin, ymin, xmax, ymax = REGION
    rgb = common.get_thumb_rgb(image, vis, REGION, common.thumb_dims(REGION, 900))
    ax.imshow(rgb, extent=[xmin, xmax, ymin, ymax],
              interpolation="nearest", aspect="auto")
    nw.draw_wollo_woredas(ax, REGION, label=nw.BOUNDARY_LABEL)
    nw.format_axes(ax, REGION, title)
    if add_legend:
        cmap = LinearSegmentedColormap.from_list("c", vis["palette"])
        sm = ScalarMappable(norm=Normalize(vis["min"], vis["max"]), cmap=cmap)
        sm.set_array([])
        cbar = fig.colorbar(sm, ax=ax, orientation="horizontal",
                            fraction=0.04, pad=0.06, aspect=45)
        cbar.set_label(legend_label, fontsize=9)
        cbar.ax.tick_params(labelsize=7)


def generate():
    common.init()

    fig, (ax_ndvi, ax_vci) = plt.subplots(1, 2, figsize=(16.0, 8.2), dpi=200)
    fig.subplots_adjust(bottom=0.16, wspace=0.28)

    _panel(fig, ax_ndvi, nw.ndvi(), nw.VIS_NDVI,
           "NDVI Vegetation Condition - Sep to Nov 2022, North Wollo",
           "NDVI", add_legend=True)
    _panel(fig, ax_vci, nw.vci("2022-06-01", "2022-09-30"), nw.VIS_VCI,
           "VCI (Vegetation Condition Index) - Kiremt rains 2022, North Wollo",
           "VCI (Vegetation Condition Index)", add_legend=True)

    out = config.OUTPUT_DIR / "FIG34.png"
    fig.savefig(out, bbox_inches="tight", facecolor="white")
    plt.close(fig)
    print(f"Saved {out}")
    print("FIG34  - NDVI & VCI (North Wollo) FINE")


if __name__ == "__main__":
    generate()
