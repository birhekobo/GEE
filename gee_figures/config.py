"""Shared configuration for the gallery figure generator.

Every figure produced by this package is written straight into
<repo-root>/public/images so that the React gallery at /gallery
(http://localhost:3000/gallery) picks it up automatically.
"""

from pathlib import Path

import ee

# -----------------------------------------------------------------------------
# Earth Engine credentials
# -----------------------------------------------------------------------------
PROJECT_ID = "your project id"  # <-- CHANGE TO YOUR EE PROJECT ID

# -----------------------------------------------------------------------------
# Output location: repo-root/public/images
# -----------------------------------------------------------------------------
REPO_ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = REPO_ROOT / "public" / "images"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# -----------------------------------------------------------------------------
# Useful study regions (xmin, ymin, xmax, ymax) in EPSG:4326
# -----------------------------------------------------------------------------
REGION_SOUTH_WOLLO = [38.2, 10.3, 40.2, 12.2]   # Ethiopia, Amhara
REGION_NORTH_WOLLO = [38.4, 11.3, 40.1, 12.4]   # Ethiopia, Amhara
REGION_WOLLO = [38.2, 10.3, 40.2, 12.4]         # combined North + South Wollo
REGION_AMHARA = [35.2, 8.7, 40.3, 13.8]         # Amhara regional state
REGION_AFAR = [39.5, 8.5, 42.5, 14.5]           # Ethiopia, Afar regional state
REGION_OROMIA = [34.0, 3.5, 43.0, 11.5]         # Ethiopia, Oromia regional state
REGION_ETHIOPIA = [33.0, 3.0, 48.0, 15.0]
REGION_SOUTH_ASIA = [74.0, 22.0, 88.5, 32.0]   # Indo-Gangetic plain (high AOD)
REGION_GLOBAL = [-180.0, -60.0, 180.0, 75.0]


def init_ee(project_id: str = PROJECT_ID) -> None:
    """Initialise Earth Engine (identical logic to the user's snippet)."""
    try:
        ee.Initialize(project=project_id)
    except Exception:
        ee.Authenticate()
        ee.Initialize(project=project_id)
    print("Earth Engine initialised")


def bbox(coords):
    """Turn a [xmin, ymin, xmax, ymax] list into an ee.Geometry.BBox."""
    return ee.Geometry.BBox(*coords)