import React, { useState, useCallback } from "react";
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
    src: "/images/FIG4.png",
    fallback: "/images/FIG5.png",
    alt: "Machine learning and atmospheric satellite data",
    badge: "Machine Learning",
    title: "AI-Powered Atmospheric Data Analysis",
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
    src: "/images/FIG2.png",
    fallback: "/images/FIG6.png",
    alt: "GIS and topographic mapping",
    badge: "GIS",
    title: "GIS Applications in Climate Studies",
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
    src: "/images/FIG15.png",
    fallback: "/images/FIG16.png",
    alt: "Deep learning remote sensing analysis",
    badge: "Deep Learning",
    title: "Remote Sensing with Deep Learning",
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
    imageClass: "ai-gis-card-image--logo",
    src: "/images/gee-course.png",
    fallback: "/images/FIG12.png",
    alt: "Google Earth Engine",
    badge: "Google Earth Engine",
    title: "AI Applications in Google Earth Engine",
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
        <h2>AI in Atmospheric Research, GIS & Remote Sensing</h2>
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
            <button type="button" className="ai-gis-learn-more">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIResearch;
