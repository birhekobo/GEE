import React from "react";
import "./Applications.css";
import { Link } from "react-router-dom";

const applications = [
  {
    title: "Environmental Monitoring",
    items: [
      "Deforestation Tracking: Monitoring forest cover change, identifying illegal logging, and assessing reforestation efforts. (e.g., Ethiopian Highlands, Congo Basin)",
      "Coastal Zone Management: Observing shoreline erosion, mapping coral reefs, and monitoring mangrove health. (e.g., East African Coast)",
      "Drought Monitoring and Assessment: Using satellite data (like rainfall and vegetation indices) to track drought conditions in the Horn of Africa.",
      "Land Degradation Analysis: Identifying and monitoring areas affected by soil erosion and desertification in the Sahel and Ethiopian Rift Valley.",
    ],
  },
  {
    title: "Water Resource Management",
    items: [
      "Assessing water body extent, monitoring drought conditions, and tracking snowmelt (e.g., Nile River Basin, Lake Turkana, Ethiopian Rift Valley Lakes).",
      "Monitoring changes in surface water bodies, including lakes, rivers, and reservoirs, using optical and radar satellite imagery.",
      "Estimating soil moisture and groundwater levels through missions like GRACE and SMAP for drought early warning and water allocation.",
      "Mapping and monitoring irrigation areas and water use efficiency in agricultural regions.",
    ],
  },
  {
    title: "Air Quality & Pollution",
    items: [
      "Detecting atmospheric pollutants like NO2, SO2, and aerosols, as well as monitoring dust storms and smoke plumes.",
      "Utilizing data from missions like CALIPSO, MISR, Terra, and Aqua for aerosol and trace gas monitoring, crucial for understanding atmospheric composition.",
      "Assessing the impact of air pollution on public health and supporting environmental regulations and urban planning for cleaner air.",
    ],
  },
  {
    title: "Urban Planning & Development",
    items: [
      "Urban Sprawl Analysis: Mapping the growth of cities and understanding land use patterns (e.g., Addis Ababa, Nairobi, Lagos).",
      "Infrastructure Monitoring: Tracking the development of roads, bridges, and other critical infrastructure (e.g., assessing urban road networks in East African cities).",
      "Heat Island Effect: Identifying urban heat islands for better city planning and mitigation strategies (e.g., analyzing temperature patterns in rapidly growing African urban areas).",
    ],
  },
  {
    title: "Agriculture & Food Security",
    items: [
      "Crop Monitoring: Assessing crop health, yield estimation, and identifying areas affected by pests or disease (e.g., monitoring staple crops in the Ethiopian Rift Valley or the Sahel).",
      "Precision Agriculture: Providing data for site-specific management of fertilizers and irrigation in diverse African farming systems.",
      "Land Suitability Analysis: Identifying optimal areas for different types of crops based on climate and soil data (e.g., assessing agricultural potential in various Ethiopian regions).",
    ],
  },
  {
    title: "Disaster Management & Response",
    items: [
      "Flood Mapping: Rapidly assessing the extent of flooding after heavy rainfall or storms (e.g., mapping flood-affected areas in East Africa).",
      "Wildfire Monitoring: Tracking active fires, burn scar mapping, and assessing post-fire recovery (e.g., monitoring wildfires in savannas and forests across Africa).",
      "Earthquake & Landslide Damage Assessment: Identifying affected areas and infrastructure damage (e.g., assessing damage in seismically active regions or areas prone to landslides in the Ethiopian Highlands).",
    ],
  },
];

const Applications = () => {
  return (
    <div className="applications">
      <div className="applications-content">
        <h1>Applications</h1>
        <p>
          Satellite remote sensing provides invaluable insights across a
          multitude of fields. The imagery in our gallery illustrates various
          real-world applications. Below are some key areas where this
          technology makes a significant impact:
        </p>
        <div className="applications-grid">
          {applications.map((app, idx) => (
            <div className="application-card" key={idx}>
              <h3>{app.title}:</h3>
              <ul>
                {app.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="gallery-link">
          <em>
            Explore our <Link to="/gallery">Gallery</Link> to see visual
            examples related to these applications.
          </em>
        </p>
      </div>
    </div>
  );
};

export default Applications;
