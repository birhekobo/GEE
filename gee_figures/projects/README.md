# Projects & Collaboration figure scripts

One Python script per project card on
`http://localhost:3000/projects-collaboration`. Every script pulls live data
from Google Earth Engine and writes a PNG into `public/images`, which is the
folder the React page reads.

## Run everything

```powershell
python gee_figures/run_projects.py
```

Useful options:

```powershell
python gee_figures/run_projects.py --list       # list scripts
python gee_figures/run_projects.py --workers 1  # sequential
python gee_figures/run_projects.py 01 02 17     # only selected projects
```

Logs are written to `gee_figures/logs/`.

## Requirements

```powershell
pip install earthengine-api matplotlib pillow numpy requests
earthengine authenticate
```

The Earth Engine project ID is configured in `gee_figures/config.py`
(`PROJECT_ID = "birhephyics-39824"`).

## Script index

| # | Script | Card | Output image | Data source |
|---|--------|------|--------------|-------------|
| 01 | `01_land_use_change.py` | Land Use Change Monitoring | `Land Use Change Monitoring.png` | Hansen Global Forest Change v1.13 |
| 02 | `02_climate_impact_assessment.py` | Climate Impact Assessment | `Climate Impact Assessment.png` | MODIS MOD13Q1 NDVI 2024 vs 2015 |
| 03 | `03_urban_growth_analysis.py` | Urban Growth Analysis | `Urban Growth Analysis.png` | VIIRS night-time lights 2021 |
| 04 | `04_air_quality_monitoring.py` | Comprehensive Air Quality Monitoring | `Air Quality Monitoring.png` | MODIS MAIAC AOD, Jun/Jul 2020 |
| 05 | `05_urban_air_quality.py` | Urban Air Quality Management | `Urban Air Quality.png` | Sentinel-5P NO2, Jan-Mar 2022 |
| 06 | `06_industrial_emissions.py` | Industrial Air Quality Control | `Industrial Emissions.png` | Sentinel-5P SO2, Jan-Mar 2022 |
| 07 | `07_air_quality_prediction.py` | Air Quality Prediction | `Air Quality Prediction.png` | CAMS AOD H00/H21, Feb 2023 |
| 08 | `08_health_impact_analysis.py` | Health Impact Analysis | `Health Impact Analysis.png` | WorldPop population 2020 |
| 09 | `09_policy_support.py` | Policy Support & Planning | `Policy Support.png` | ESA WorldCover 2021 |
| 10 | `10_air_quality_forecasting.py` | Air Quality Forecasting | `Air Quality Forecasting.png` | CAMS PM2.5 H00/H21, Jan 2023 |
| 11 | `11_pollution_source_analysis.py` | Pollution Source Analysis | `Pollution Source Analysis.png` | Sentinel-5P NO2 and SO2, 2021 |
| 12 | `12_health_impact_assessment.py` | Health Impact Assessment | `Health Impact Assessment.png` | MODIS AOD 2021 + WorldPop 2020 |
| 13 | `13_surface_water_monitoring.py` | Surface Water Monitoring | `Surface Water Monitoring.png` | JRC Global Surface Water |
| 14 | `14_groundwater_assessment.py` | Groundwater Assessment | `Groundwater Assessment.png` | GRACE water storage anomaly |
| 15 | `15_water_resource_management.py` | Water Resource Management | `Water Resource Management.png` | Landsat 8 NDWI, Jan-Mar 2022 |
| 16 | `16_drought_early_warning.py` | Drought Early Warning System | `Drought Early Warning.png` | CHIRPS rainfall 2021 vs 2015 |
| 17 | `17_agricultural_impact.py` | Agricultural Impact Assessment | `Agricultural Impact.png` | MODIS VCI, Kiremt 2022 (Amhara) |
| 18 | `18_water_resource_impact.py` | Water Resource Impact | `Water Resource Impact.png` | SMAP soil moisture, 2015 |
| 19 | `19_mineral_mapping.py` | Mineral Mapping & Identification | `Mineral Mapping.png` | Landsat 8 SWIR (South Wollo) |
| 20 | `20_geological_structure_analysis.py` | Geological Structure Analysis | `Geological Structure Analysis.png` | SRTM slope relief |
| 21 | `21_exploration_site_assessment.py` | Exploration Site Assessment | `Exploration Site Assessment.png` | SRTM hillshade + Landsat SWIR |

Shared rendering helpers (Earth Engine thumbnail, Ethiopia boundaries, legends)
live in `gee_figures/common.py`; study regions are in `gee_figures/config.py`.
