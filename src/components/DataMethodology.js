import React from "react";
import "./DataMethodology.css";

const DataMethodology = () => {
  return (
    <div className="data-methodology">
      <div className="hero-section">
        <h2>Data & Methodology</h2>
        <p>
          Our approach combines advanced satellite data with cutting-edge
          methodologies to deliver accurate and actionable insights.
        </p>
      </div>

      <section className="satellite-systems">
        <h3>Satellite Systems</h3>
        <div className="systems-grid">
          <div className="system-card">
            <h4>Optical Satellites</h4>
            <ul>
              <li>Landsat Series (30m resolution)</li>
              <li>Sentinel-2 (10m resolution)</li>
              <li>PlanetScope (3m resolution)</li>
              <li>RapidEye (5m resolution)</li>
            </ul>
          </div>

          <div className="system-card">
            <h4>Radar Satellites</h4>
            <ul>
              <li>Sentinel-1 (SAR)</li>
              <li>RADARSAT-2</li>
              <li>TerraSAR-X</li>
              <li>ALOS PALSAR</li>
            </ul>
          </div>

          <div className="system-card">
            <h4>Thermal Satellites</h4>
            <ul>
              <li>Landsat 8/9 TIRS</li>
              <li>ASTER</li>
              <li>MODIS</li>
              <li>VIIRS</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="air-quality">
        <h3>Air Quality & Aerosol Data</h3>
        <div className="air-quality-grid">
          <div className="air-quality-card">
            <h4>MODIS Aerosol Products</h4>
            <ul>
              <li>MOD04 / MYD04 Aerosol Optical Depth (AOD)</li>
              <li>Deep Blue AOD over land</li>
              <li>Dark Target AOD over ocean</li>
              <li>Angstrom Exponent & Fine Mode Fraction</li>
              <li>10 km & 3 km spatial resolution</li>
            </ul>
          </div>
          <div className="air-quality-card">
            <h4>MAIAC Algorithm</h4>
            <ul>
              <li>Multi-Angle Implementation of Atmospheric Correction</li>
              <li>1 km high-resolution AOD retrieval</li>
              <li>Surface reflectance estimation</li>
              <li>Combined MODIS Terra & Aqua</li>
              <li>Improved accuracy over bright surfaces</li>
            </ul>
          </div>
          <div className="air-quality-card">
            <h4>MISR</h4>
            <ul>
              <li>Multi-angle Imaging SpectroRadiometer (Terra)</li>
              <li>Nine viewing angles for aerosol retrieval</li>
              <li>Aerosol particle size and shape classification</li>
              <li>17.6 km & 4.4 km resolution products</li>
              <li>Climate modeling and air quality research</li>
            </ul>
          </div>
          <div className="air-quality-card">
            <h4>CALIPSO</h4>
            <ul>
              <li>Cloud-Aerosol Lidar with Orthogonal Polarization</li>
              <li>Vertical profiles of aerosols and clouds</li>
              <li>532 nm and 1064 nm lidar channels</li>
              <li>Aerosol subtype classification (dust, smoke, sea salt)</li>
              <li>Day and night observations</li>
            </ul>
          </div>
          <div className="air-quality-card">
            <h4>TROPOMI & OMI</h4>
            <ul>
              <li>TROPOMI on Sentinel-5P (7 km resolution)</li>
              <li>OMI on Aura (13 x 24 km resolution)</li>
              <li>NO₂, SO₂, O₃, HCHO, CH₄ columns</li>
              <li>UV aerosol index</li>
              <li>Tropospheric and stratospheric profiles</li>
            </ul>
          </div>
          <div className="air-quality-card">
            <h4>Air Quality Modeling</h4>
            <ul>
              <li>MERRA-2 reanalysis aerosol fields</li>
              <li>CAMS global atmospheric composition forecasts</li>
              <li>PM₂.₅ and PM₁₀ estimation from AOD</li>
              <li>Ground-level air quality mapping</li>
              <li>Health exposure assessment</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="methodologies">
        <h3>Methodologies</h3>
        <div className="methodology-grid">
          <div className="methodology-card">
            <h4>Image Processing</h4>
            <ul>
              <li>Atmospheric correction</li>
              <li>Radiometric calibration</li>
              <li>Geometric correction</li>
              <li>Image enhancement</li>
            </ul>
          </div>

          <div className="methodology-card">
            <h4>Classification</h4>
            <ul>
              <li>Supervised classification</li>
              <li>Unsupervised classification</li>
              <li>Object-based image analysis</li>
              <li>Machine learning algorithms</li>
            </ul>
          </div>

          <div className="methodology-card">
            <h4>Analysis</h4>
            <ul>
              <li>Change detection</li>
              <li>Time series analysis</li>
              <li>Spectral analysis</li>
              <li>Statistical analysis</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="indices">
        <h3>Vegetation & Spectral Indices</h3>
        <div className="indices-grid">
          <div className="indices-card">
            <h4>Vegetation Indices</h4>
            <ul>
              <li>NDVI (Normalized Difference Vegetation Index)</li>
              <li>EVI (Enhanced Vegetation Index)</li>
              <li>SAVI (Soil-Adjusted Vegetation Index)</li>
              <li>NDMI (Normalized Difference Moisture Index)</li>
              <li>LAI (Leaf Area Index)</li>
            </ul>
          </div>
          <div className="indices-card">
            <h4>Water & Urban Indices</h4>
            <ul>
              <li>NDWI (Normalized Difference Water Index)</li>
              <li>MNDWI (Modified NDWI)</li>
              <li>NDBI (Normalized Difference Built-up Index)</li>
              <li>IBI (Index-Based Built-up Index)</li>
              <li>UI (Urban Index)</li>
            </ul>
          </div>
          <div className="indices-card">
            <h4>Thermal & Burn Indices</h4>
            <ul>
              <li>LST (Land Surface Temperature)</li>
              <li>NBR (Normalized Burn Ratio)</li>
              <li>BAI (Burn Area Index)</li>
              <li>MNDSI (Normalized Difference Snow Index)</li>
              <li>TCT (Tasseled Cap Transformation)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="validation">
        <h3>Accuracy Assessment & Validation</h3>
        <div className="validation-grid">
          <div className="validation-card">
            <h4>Error Matrix</h4>
            <ul>
              <li>Overall accuracy</li>
              <li>Producer's accuracy</li>
              <li>User's accuracy</li>
              <li>Kappa coefficient</li>
            </ul>
          </div>
          <div className="validation-card">
            <h4>Statistical Metrics</h4>
            <ul>
              <li>RMSE (Root Mean Square Error)</li>
              <li>MAE (Mean Absolute Error)</li>
              <li>R-squared correlation</li>
              <li>Bias and precision</li>
            </ul>
          </div>
          <div className="validation-card">
            <h4>Validation Methods</h4>
            <ul>
              <li>Cross-validation</li>
              <li>Ground truth sampling</li>
              <li>Stratified random sampling</li>
              <li>Confidence interval estimation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="workflow">
        <h3>Data Processing Workflow</h3>
        <div className="workflow-steps">
          <div className="workflow-step">
            <div className="step-number">1</div>
            <h4>Data Acquisition</h4>
            <p>Download satellite imagery from USGS, ESA, NASA, and other open data portals.</p>
          </div>
          <div className="workflow-step">
            <div className="step-number">2</div>
            <h4>Preprocessing</h4>
            <p>Atmospheric, radiometric, and geometric correction of raw satellite data.</p>
          </div>
          <div className="workflow-step">
            <div className="step-number">3</div>
            <h4>Index Calculation</h4>
            <p>Compute spectral indices (NDVI, NDWI, NDBI, LST, etc.) for feature extraction.</p>
          </div>
          <div className="workflow-step">
            <div className="step-number">4</div>
            <h4>Classification</h4>
            <p>Apply supervised, unsupervised, or ML-based classification algorithms.</p>
          </div>
          <div className="workflow-step">
            <div className="step-number">5</div>
            <h4>Validation</h4>
            <p>Assess accuracy with ground truth data and statistical error metrics.</p>
          </div>
          <div className="workflow-step">
            <div className="step-number">6</div>
            <h4>Analysis & Reporting</h4>
            <p>Generate maps, charts, and reports with actionable insights.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataMethodology;
