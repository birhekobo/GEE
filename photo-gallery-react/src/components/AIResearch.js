import React from "react";
import "./AIResearch.css";

function AIResearch() {
  return (
    <div className="ai-gis-container">
      <div className="ai-gis-header">
        <h2>AI in Atmospheric Research,GIS & Remote Sensing</h2>
        <p>
          Exploring the intersection of artificial intelligence, geographic
          information systems, and remote sensing technologies for advanced
          environmental analysis.
        </p>
      </div>
      <div className="ai-gis-cards">
        <div className="ai-gis-card">
          <div className="ai-gis-card-image machine-learning">
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
              alt="Machine Learning"
            />
            <span className="ai-gis-badge">Machine Learning</span>
          </div>
          <h3>AI-Powered Atmospheric Data Analysis</h3>
          <p>
            Advanced machine learning algorithms for processing and analyzing
            atmospheric data from multiple sources.
          </p>
          <ul className="ai-gis-features">
            <li>Real-time data processing</li>
            <li>Pattern recognition in atmospheric changes</li>
            <li>Predictive modeling for weather patterns</li>
            <li>Integration with satellite data</li>
          </ul>
          <button className="ai-gis-learn-more">Learn More</button>
        </div>
        <div className="ai-gis-card">
          <div className="ai-gis-card-image gis">
            <img
              src="https://mars.nasa.gov/system/news_items/main_images/9442_PIA25681-FigureA-web.jpg"
              alt="GIS"
            />
            <span className="ai-gis-badge">GIS</span>
          </div>
          <h3>GIS Applications in Climate Studies</h3>
          <p>
            Geographic Information Systems enhanced with AI for comprehensive
            climate analysis and visualization.
          </p>
          <ul className="ai-gis-features">
            <li>Spatial data analysis</li>
            <li>Climate change mapping</li>
            <li>Terrain modeling</li>
            <li>Environmental impact assessment</li>
          </ul>
          <button className="ai-gis-learn-more">Learn More</button>
        </div>
        <div className="ai-gis-card">
          <div className="ai-gis-card-image deep-learning">
            <img
              src="https://mars.nasa.gov/system/news_items/main_images/9442_PIA25681-FigureA-web.jpg"
              alt="Deep Learning"
            />
            <span className="ai-gis-badge">Deep Learning</span>
          </div>
          <h3>Remote Sensing with Deep Learning</h3>
          <p>
            Deep learning models for processing satellite imagery and remote
            sensing data for environmental monitoring, including Google Earth
            Engine integration.
          </p>
          <ul className="ai-gis-features">
            <li>Satellite image classification</li>
            <li>Object detection in aerial imagery</li>
            <li>Change detection algorithms</li>
            <li>Multi-spectral data analysis</li>
            <li>Google Earth Engine workflows</li>
          </ul>
          <button className="ai-gis-learn-more">Learn More</button>
        </div>
        <div className="ai-gis-card">
          <div className="ai-gis-card-image gee">
            <img
              src="https://earthengine.google.com/static/images/earth-engine-logo.png"
              alt="Google Earth Engine"
            />
            <span className="ai-gis-badge">Google Earth Engine</span>
          </div>
          <h3>AI Applications in Google Earth Engine</h3>
          <p>
            Harnessing the power of AI and Google Earth Engine for advanced
            geospatial analysis and environmental monitoring.
          </p>
          <ul className="ai-gis-features">
            <li>Land cover classification</li>
            <li>Deforestation detection</li>
            <li>Crop type mapping</li>
            <li>Urban expansion monitoring</li>
            <li>Flood mapping and prediction</li>
            <li>Wildfire burn scar mapping</li>
            <li>Water body extraction</li>
            <li>Air quality estimation</li>
            <li>Biodiversity hotspot mapping</li>
            <li>Soil moisture estimation</li>
          </ul>
          <button className="ai-gis-learn-more">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default AIResearch;
