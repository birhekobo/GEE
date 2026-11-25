import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedTraining.css";

function FeaturedTraining() {
  return (
    <section className="featured-training">
      <h2>Featured Training Programs</h2>
      <p>
        Enhance your skills in satellite remote sensing and geospatial analysis
        with our expert-led training programs. Free introductory courses are
        available, and certificate programs include a transparent course fee
        plus a one-time payment processing fee.
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
          <Link to="/gee-course-preview" className="featured-link">
            See Course Preview
          </Link>
        </li>
      </ul>
      <Link to="/training" className="btn-secondary">
        See All Training
      </Link>
    </section>
  );
}

export default FeaturedTraining;
