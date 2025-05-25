import React from "react";
import "./FeaturedTraining.css";

function FeaturedTraining() {
  return (
    <section className="featured-training">
      <h2>Featured Training Programs</h2>
      <p>
        Enhance your skills in satellite remote sensing and geospatial analysis
        with our expert-led training programs. Courses are available for all
        levels, from beginners to advanced professionals.
      </p>
      <ul>
        <li>
          <strong>Introduction to Remote Sensing</strong> – Fundamentals and
          applications for beginners.
        </li>
        <li>
          <strong>Satellite Data Analysis with Python</strong> – Practical
          analysis using Python libraries.
        </li>
        <li>
          <strong>Geospatial Analysis using QGIS</strong> – Data management and
          spatial analysis in QGIS.
        </li>
        <li>
          <strong>Google Earth Engine for Environmental Monitoring</strong> –{" "}
          <a href="/gee-course-preview" className="featured-link">
            See Course Preview
          </a>
        </li>
      </ul>
      <a href="/training" className="btn-secondary">
        See All Training
      </a>
    </section>
  );
}

export default FeaturedTraining;
