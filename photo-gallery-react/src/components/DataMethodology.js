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

      <div className="copyright-footer">
        Copyright © 2025, All Right Reserved | Birhanu Asmerom
      </div>
    </div>
  );
};

export default DataMethodology;
