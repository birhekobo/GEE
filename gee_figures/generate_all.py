"""Generate all 21 gallery figures into <repo-root>/public/images.

Usage:
    python gee_figures/generate_all.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from gee_figures.figures import (
    fig01_forest,
    fig02_srtm_dem,
    fig03_nightlights,
    fig04_grace,
    fig05_aod,
    fig06_population,
    fig07_thermal,
    fig08_smap,
    fig09_ndvi,
    fig10_truecolor,
    fig11_chirps,
    fig12_cmip6,
    fig13_grace,
    fig14_grace,
    fig15_aerosol_dust,
    fig16_drought,
    fig17_water,
    fig18_ndvi,
    fig19_vci,
    fig20_tci,
    fig21_wue,
    fig22_population,
    fig23_burned_area,
    fig24_landcover,
    fig25_snow,
    fig26_sentinel2,
    fig27_npp,
    fig28_evi,
    fig29_dust,
    fig30_gpm,
    fig31_south_wollo_admin,
    fig33_north_wollo_admin,
    fig34_ndvi_vci,
    fig35_vhi_tci,
    fig36_indices_2x2,
    fig37_vci_drought,
    fig38_vhi_drought,
    fig39_tci_drought,
    fig40_air_quality,
)

MODULES = [
    fig01_forest,
    fig02_srtm_dem,
    fig03_nightlights,
    fig04_grace,
    fig05_aod,
    fig06_population,
    fig07_thermal,
    fig08_smap,
    fig09_ndvi,
    fig10_truecolor,
    fig11_chirps,
    fig12_cmip6,
    fig13_grace,
    fig14_grace,
    fig15_aerosol_dust,
    fig16_drought,
    fig17_water,
    fig18_ndvi,
    fig19_vci,
    fig20_tci,
    fig21_wue,
    fig22_population,
    fig23_burned_area,
    fig24_landcover,
    fig25_snow,
    fig26_sentinel2,
    fig27_npp,
    fig28_evi,
    fig29_dust,
    fig30_gpm,
    fig31_south_wollo_admin,
    fig33_north_wollo_admin,
    fig34_ndvi_vci,
    fig35_vhi_tci,
    fig36_indices_2x2,
    fig37_vci_drought,
    fig38_vhi_drought,
    fig39_tci_drought,
    fig40_air_quality,
]


def main():
    for mod in MODULES:
        print(f"\n=== {mod.__name__} ===")
        mod.generate()
    print("\nAll 21 figures generated.")


if __name__ == "__main__":
    main()