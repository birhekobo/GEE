import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services-container">
      <section className="services-hero">
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>
            We offer comprehensive remote sensing and geospatial solutions to
            help you make informed decisions and achieve your project goals.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="services-grid">
          <div className="service-card">
            <div className="service-content">
              <h3>Satellite Data Acquisition</h3>
              <p>
                Access high-quality satellite imagery from various sources for
                your research and analysis needs.
              </p>
              <ul>
                <li>Multi-spectral data</li>
                <li>High-resolution imagery</li>
                <li>Time series data</li>
                <li>Custom data requests</li>
              </ul>
            </div>
          </div>

          <div className="service-card">
            <div className="service-content">
              <h3>Image Processing & Analysis</h3>
              <p>
                Advanced processing and analysis of satellite imagery using
                state-of-the-art techniques and software.
              </p>
              <ul>
                <li>Image classification</li>
                <li>Change detection</li>
                <li>NDVI analysis</li>
                <li>Time series analysis</li>
              </ul>
            </div>
          </div>

          <div className="service-card">
            <div className="service-content">
              <h3>GIS Solutions</h3>
              <p>
                Comprehensive GIS services for spatial data management,
                analysis, and visualization.
              </p>
              <ul>
                <li>Spatial analysis</li>
                <li>3D modeling</li>
                <li>Web GIS development</li>
                <li>Database management</li>
              </ul>
            </div>
          </div>

          <div className="service-card">
            <div className="service-content">
              <h3>Environmental Monitoring</h3>
              <p>
                Continuous monitoring and analysis of environmental changes
                using remote sensing data.
              </p>
              <ul>
                <li>Vegetation monitoring</li>
                <li>Water resource assessment</li>
                <li>Climate impact analysis</li>
                <li>Natural disaster assessment</li>
              </ul>
            </div>
          </div>

          <div className="service-card">
            <div className="service-content">
              <h3>Training & Workshops</h3>
              <p>
                Professional training programs and workshops on remote sensing
                and GIS applications.
              </p>
              <ul>
                <li>Software training</li>
                <li>Data analysis techniques</li>
                <li>Field data collection</li>
                <li>Project management</li>
              </ul>
            </div>
          </div>

          <div className="service-card">
            <div className="service-content">
              <h3>Consulting Services</h3>
              <p>
                Expert consultation for remote sensing and GIS projects, from
                planning to implementation.
              </p>
              <ul>
                <li>Project planning</li>
                <li>Technical support</li>
                <li>Quality assurance</li>
                <li>Report generation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="expertise-section">
        <h2>Why Choose Our Services?</h2>
        <div className="expertise-grid">
          <div className="expertise-card">
            <span className="expertise-icon">💻</span>
            <h3>Advanced Technology</h3>
            <p>State-of-the-art software and equipment</p>
          </div>
          <div className="expertise-card">
            <span className="expertise-icon">🎯</span>
            <h3>Custom Solutions</h3>
            <p>Tailored approaches for your specific needs</p>
          </div>
          <div className="expertise-card">
            <span className="expertise-icon">✅</span>
            <h3>Quality Assurance</h3>
            <p>Rigorous quality control and validation</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>
            Contact us today to discuss your remote sensing and geospatial
            needs.
          </p>
          <button className="cta-button">Contact Us</button>
        </div>
      </section>
    </div>
  );
}

export default Services;
