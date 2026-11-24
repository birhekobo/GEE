"""FIG35.png - VHI and TCI for North Wollo (Kiremt rains 2022).

Two panels: Kogan's Vegetation Health Index (0.5*VCI + 0.5*TCI) and the
Temperature Condition Index against the 2000-2020 climatological LST range,
overlaid with the North Wollo zone and woredas.
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

    fig, (ax_vhi, ax_tci) = plt.subplots(1, 2, figsize=(16.0, 8.2), dpi=200)
    fig.subplots_adjust(bottom=0.16, wspace=0.28)

    _panel(fig, ax_vhi, nw.vhi("2022-06-01", "2022-09-30"), nw.VIS_VHI,
           "VHI (Vegetation Health Index) - Kiremt rains 2022, North Wollo",
           "VHI (Vegetation Health Index)", add_legend=True)
    _panel(fig, ax_tci, nw.tci("2022-06-01", "2022-09-30"), nw.VIS_TCI,
           "TCI (Temperature Condition Index) - Kiremt rains 2022, North Wollo",
           "TCI (Temperature Condition Index)", add_legend=True)

    out = config.OUTPUT_DIR / "FIG35.png"
    fig.savefig(out, bbox_inches="tight", facecolor="white")
    plt.close(fig)
    print(f"Saved {out}")
    print("FIG35  - VHI & TCI (North Wollo) FINE")


if __name__ == "__main__":
    generate()
