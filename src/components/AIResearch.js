import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./AIResearch.css";

const IMAGE_PLACEHOLDER =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="220" viewBox="0 0 400 220"><rect fill="#e8eef5" width="400" height="220"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#6c757d" font-family="Arial,sans-serif" font-size="14">Image unavailable</text></svg>'
  );

const researchCards = [
  {
    id: "machine-learning",
    imageClass: "",
    src: "/images/ai_image/AI-Powered Atmospheric Data Insights.png",
    fallback: "/images/Gallery/FIG5.png",
    alt: "AI-powered atmospheric data insights",
    badge: "Machine Learning",
    title: "AI-Powered Atmospheric Data Analysis",
    learnMore: "/courses/ml",
    description:
      "Advanced machine learning algorithms for processing and analyzing atmospheric data from multiple sources.",
    features: [
      "Real-time data processing",
      "Pattern recognition in atmospheric changes",
      "Predictive modeling for weather patterns",
      "Integration with satellite data",
    ],
  },
  {
    id: "gis",
    imageClass: "",
    src: "/images/ai_image/GIS Applications in Climate Studies.png",
    fallback: "/images/Gallery/FIG6.png",
    alt: "GIS applications in climate studies",
    badge: "GIS",
    title: "GIS Applications in Climate Studies",
    learnMore: "/courses/qgis",
    description:
      "Geographic Information Systems enhanced with AI for comprehensive climate analysis and visualization.",
    features: [
      "Spatial data analysis",
      "Climate change mapping",
      "Terrain modeling",
      "Environmental impact assessment",
    ],
  },
  {
    id: "deep-learning",
    imageClass: "",
    src: "/images/ai_image/AI-Powered Earth Observation Infographic.png",
    fallback: "/images/Gallery/FIG16.png",
    alt: "Deep learning for remote sensing infographic",
    badge: "Deep Learning",
    title: "Deep Learning for Remote Sensing",
    learnMore: "/courses/ai-geospatial",
    description:
      "Deep learning models for processing satellite imagery and remote sensing data for environmental monitoring, including Google Earth Engine integration.",
    features: [
      "Satellite image classification",
      "Object detection in aerial imagery",
      "Change detection algorithms",
      "Multi-spectral data analysis",
      "Google Earth Engine workflows",
    ],
  },
  {
    id: "gee",
    imageClass: "",
    src: "/images/ai_image/AI-Powered Earth Engine Applications.png",
    fallback: "/images/Gallery/FIG12.png",
    alt: "AI-powered Earth Engine applications",
    badge: "Google Earth Engine",
    title: "AI-Powered Earth Engine Applications",
    learnMore: "/courses/gee",
    description:
      "Harnessing the power of AI and Google Earth Engine for advanced geospatial analysis and environmental monitoring.",
    features: [
      "Land cover classification",
      "Deforestation detection",
      "Crop type mapping",
      "Urban expansion monitoring",
      "Flood mapping and prediction",
      "Wildfire burn scar mapping",
      "Water body extraction",
      "Air quality estimation",
      "Biodiversity hotspot mapping",
      "Soil moisture estimation",
    ],
  },
];

function CardImage({ src, fallback, alt, imageClass, badge }) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = useCallback(() => {
    setImgSrc((current) => {
      if (current === fallback) return IMAGE_PLACEHOLDER;
      return fallback;
    });
  }, [fallback]);

  return (
    <div className={`ai-gis-card-image ${imageClass}`.trim()}>
      <img src={imgSrc} alt={alt} onError={handleError} loading="lazy" />
      <span className="ai-gis-badge">{badge}</span>
    </div>
  );
}

function AIResearch() {
  return (
    <div className="ai-gis-container">
      <div className="ai-gis-header">
        <h2>
          Practical Training in Air Quality, Atmospheric Research, Climate &amp;
          Environmental Health
        </h2>
        <p>
          Exploring the intersection of artificial intelligence, geographic
          information systems, and remote sensing technologies for advanced
          environmental analysis.
        </p>
      </div>
      <div className="ai-gis-cards">
        {researchCards.map((card) => (
          <div className="ai-gis-card" key={card.id}>
            <CardImage
              src={card.src}
              fallback={card.fallback}
              alt={card.alt}
              imageClass={card.imageClass}
              badge={card.badge}
            />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <ul className="ai-gis-features">
              {card.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <Link to={card.learnMore} className="ai-gis-learn-more">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIResearch;
