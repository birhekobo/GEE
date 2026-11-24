import React from "react";
import "./DataMethodology.css";

const sections = [
  {
    id: "optical",
    title: "Optical",
    icon: "\uD83D\uDEE0\uFE0F",
    items: [
      "Landsat 8/9 OLI (30m, 16-day)",
      "Sentinel-2 MSI (10m, 5-day)",
      "PlanetScope Dove (3m, daily)",
      "WorldView-3/4 (0.31m pan)",
    ],
  },
  {
    id: "radar",
    title: "Radar",
    icon: "\uD83D\uDCF6",
    items: [
      "Sentinel-1 C-SAR (10m, 6-day)",
      "RADARSAT-2 (3m Spotlight)",
      "TerraSAR-X / TanDEM-X (1m)",
      "ALOS-2 PALSAR-2 (L-band)",
    ],
  },
  {
    id: "thermal",
    title: "Thermal & Hyperspectral",
    icon: "\uD83C\uDF21\uFE0F",
    items: [
      "Landsat 8/9 TIRS (100m TIR)",
      "MODIS Terra/Aqua (1km daily)",
      "PRISMA (30m, 239 bands)",
      "EnMAP (30m, 242 bands)",
    ],
  },
  {
    id: "elevation",
    title: "Elevation & DEM",
    icon: "\u26F0\uFE0F",
    items: [
      "SRTM (30m) / NASADEM",
      "Copernicus DEM (30m)",
      "ALOS World 3D (30m)",
      "GEDI LiDAR (full-waveform)",
    ],
  },
  {
    id: "climate",
    title: "Climate & Atmospheric",
    icon: "\u2601\uFE0F",
    items: [
      "ERA5 Reanalysis (0.25\u00B0, hourly)",
      "CHIRPS Rainfall (5km, daily)",
      "GPM IMERG (10km, 30-min)",
      "TROPOMI S5P (7km gases)",
    ],
  },
  {
    id: "landcover",
    title: "Land Cover & Land Use",
    icon: "\uD83C\uDF0D",
    items: [
      "ESA CCI Land Cover (300m)",
      "Dynamic World (10m, real-time)",
      "Global Forest Change (30m)",
      "Global Surface Water (30m)",
    ],
  },
];

const methodologyData = [
  {
    title: "Pre-Processing",
    icon: "\u2699\uFE0F",
    items: [
      "Atmospheric correction (DOS, FLAASH, Sen2Cor)",
      "Pan-sharpening & cloud masking",
      "Mosaicking & gap-filling",
    ],
  },
  {
    title: "Spectral Indices",
    icon: "\uD83C\uDF1F",
    items: ["NDVI, EVI, NDWI, MNDWI", "NDBI, SAVI, NBR"],
  },
  {
    title: "Classification",
    icon: "\uD83D\uDCCB",
    items: [
      "RF, SVM, Maximum Likelihood",
      "Deep Learning: CNN, U-Net",
    ],
  },
  {
    title: "Change Detection",
    icon: "\uD83D\uDCC8",
    items: [
      "CCDC, LandTrendr, BFAST",
      "Post-classification comparison",
    ],
  },
  {
    title: "Validation",
    icon: "\u2705",
    items: [
      "Confusion matrix & F1-score",
      "Area-adjusted accuracy",
    ],
  },
  {
    title: "Cloud Computing",
    icon: "\u2601\uFE0F",
    items: [
      "Google Earth Engine",
      "Planetary Computer, STAC API",
    ],
  },
];

const workflowSteps = [
  { step: 1, title: "Acquisition", desc: "Multi-sensor imagery from optical, radar, and thermal sources." },
  { step: 2, title: "Pre-Processing", desc: "Atmospheric/geometric corrections, cloud masking, mosaicking." },
  { step: 3, title: "Analysis", desc: "Spectral indices, classification, change detection, time-series." },
  { step: 4, title: "Validation", desc: "Accuracy assessment with ground truth and confusion matrices." },
  { step: 5, title: "Output", desc: "Thematic maps, dashboards, reports, publications." },
];

const tools = [
  "Google Earth Engine", "QGIS", "Python (GDAL, Rasterio)",
  "TensorFlow / PyTorch", "ArcGIS Pro", "SNAP", "PostGIS",
  "Dask / Spark", "Leaflet / Mapbox", "Django / FastAPI",
];

const DataMethodology = () => {
  return (
    <div className="dm">
      <div className="dm-hero">
        <h2>Data & Methodology</h2>
        <p>
          Multi-sensor satellite data with rigorous geospatial methodologies for
          environmental monitoring and sustainable development.
        </p>
      </div>

      <section>
        <h3>Satellite Data Sources</h3>
        <div className="dm-grid">
          {sections.map((g) => (
            <div key={g.id} className="dm-card">
              <div className="dm-card-header">
                <span>{g.icon}</span>
                <h4>{g.title}</h4>
              </div>
              <ul>
                {g.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3>Analytical Methodologies</h3>
        <div className="dm-grid">
          {methodologyData.map((m) => (
            <div key={m.title} className="dm-card">
              <div className="dm-card-header">
                <span>{m.icon}</span>
                <h4>{m.title}</h4>
              </div>
              <ul>
                {m.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3>Analysis Workflow</h3>
        <div className="dm-timeline">
          {workflowSteps.map((w) => (
            <div key={w.step} className="dm-step">
              <div className="dm-step-num">{w.step}</div>
              <div className="dm-step-body">
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3>Platforms & Tools</h3>
        <div className="dm-tools">
          {tools.map((t) => <span key={t}>{t}</span>)}
        </div>
      </section>
    </div>
  );
};

export default DataMethodology;
