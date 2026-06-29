import React from "react";
import { Link } from "react-router-dom";
import "./CoursePreview.css";

function OpenSourceGeospatialPreview() {
  return (
    <div className="course-preview">
      <section className="course-hero">
        <img src="/images/FIG4.png" alt="Open Source Geospatial Tools" />
        <h1>Introduction to Open Source Geospatial Tools</h1>
        <p>
          Discover free and open source geospatial software including QGIS, GDAL,
          and more. Learn to manage, visualize, and analyze spatial data without
          licensing costs.
        </p>
      </section>

      <div className="course-main-content">
        <div className="course-details">
          <h2>Course Overview</h2>
          <p>
            This free introductory course explores the powerful ecosystem of open
            source geospatial tools. From QGIS for desktop mapping to GDAL for
            data processing, you will gain practical skills for handling spatial
            data entirely with free software.
          </p>

          <h2>What You'll Learn</h2>
          <ul>
            <li>🌍 Overview of the open source geospatial ecosystem</li>
            <li>🗺️ Getting started with QGIS interface and workflows</li>
            <li>📊 Working with vector and raster data using GDAL</li>
            <li>🔍 Basic spatial analysis and geoprocessing</li>
            <li>🎨 Creating maps and visualizations</li>
            <li>📚 Resources for continued learning</li>
          </ul>

          <h2>Course Structure</h2>
          <ul>
            <li><strong>Module 1:</strong> Introduction to Open Source Geospatial</li>
            <li><strong>Module 2:</strong> QGIS Fundamentals</li>
            <li><strong>Module 3:</strong> Data Management with GDAL/OGR</li>
            <li><strong>Module 4:</strong> Spatial Analysis and Geoprocessing</li>
            <li><strong>Module 5:</strong> Map Design and Cartography</li>
            <li><strong>Module 6:</strong> Next Steps and Resources</li>
          </ul>

          <h2>Prerequisites</h2>
          <ul>
            <li>Basic computer skills</li>
            <li>No prior GIS experience needed</li>
            <li>Interest in geospatial data and mapping</li>
            <li>Windows, Mac, or Linux computer</li>
          </ul>
        </div>

        <div className="course-sidebar">
          <h3>Course Details</h3>
          <ul>
            <li>Duration: 4 weeks</li>
            <li>Level: Beginner</li>
            <li>Format: Online</li>
            <li>Certificate: No (free course)</li>
            <li>Start Date: Flexible</li>
          </ul>

          <h3>Instructor</h3>
          <p>
            Birhanu Asmerom
            <br />
            GIS and Remote Sensing Specialist
            <br />
            Wollo University
          </p>

          <Link to="/training" className="enroll-btn">
            ← Back to Training
          </Link>
        </div>
      </div>

      <section className="testimonials">
        <h2>Student Testimonials</h2>
        <div className="testimonial">
          "This free course was the perfect starting point for my GIS journey. The
          QGIS tutorials were clear and easy to follow."
        </div>
        <div className="testimonial">
          "I appreciated learning professional-grade tools without any software
          costs. Highly recommended for beginners!"
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <p className="faq-question">Do I need to purchase any software?</p>
          <p className="faq-answer">
            No, all tools covered in this course are completely free and open
            source. We will guide you through the installation process.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">Is this course really free?</p>
          <p className="faq-answer">
            Yes, this course is offered at no cost as part of our commitment to
            making geospatial education accessible to everyone.
          </p>
        </div>
      </section>
    </div>
  );
}

export default OpenSourceGeospatialPreview;
