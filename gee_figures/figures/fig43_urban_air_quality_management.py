"""FIG43 - Urban Air Quality Management - Sentinel-5P NO2 over Addis Ababa.

Generates <repo-root>/public/images/Urban Air Quality Management.png
showing dry-season (Jan-Mar) vs wet-season (Jul-Sep) tropospheric NO2 over
Ethiopia's capital city region for air-quality management.

Run directly:
    python gee_figures/figures/fig43_urban_air_quality_management.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from gee_figures import config, common  # noqa: E402
from gee_figures.figures.projects.data import s5p_median  # noqa: E402
from gee_figures.figures.projects.palettes import NO2_PALETTE  # noqa: E402

REGION_ADDIS_ABABA = [38.3, 8.6, 39.3, 9.4]


def generate():
    """Urban Air Quality Management - NO2 dry vs wet season (Addis Ababa)."""
    common.init()
    dry = s5p_median(
        "COPERNICUS/S5P/OFFL/L3_NO2",
        "tropospheric_NO2_column_number_density",
        "2022-01-01", "2022-03-31", REGION_ADDIS_ABABA,
    )
    wet = s5p_median(
        "COPERNICUS/S5P/OFFL/L3_NO2",
        "tropospheric_NO2_column_number_density",
        "2022-07-01", "2022-09-30", REGION_ADDIS_ABABA,
    )
    vis = {"min": 0.0, "max": 0.0002, "palette": NO2_PALETTE}
    common.render_dual(
        dry, wet,
        vis, REGION_ADDIS_ABABA,
        config.OUTPUT_DIR / "Urban Air Quality Management.png",
        "Urban Air Quality Management - Tropospheric NO2 - Jan-Mar 2022 (dry), Addis Ababa",
        "Urban Air Quality Management - Tropospheric NO2 - Jul-Sep 2022 (wet), Addis Ababa",
        legend_label="Tropospheric NO2 column (mol / m2)",
        draw_woredas=True,
    )
    print("FIG43 - Urban Air Quality Management (Sentinel-5P NO2, Addis Ababa) FINE")


if __name__ == "__main__":
    generate()
