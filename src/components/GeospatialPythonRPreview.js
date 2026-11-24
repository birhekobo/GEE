import React from "react";
import { Link } from "react-router-dom";
import "./CoursePreview.css";

function GeospatialPythonRPreview() {
  return (
    <div className="course-preview">
      <section className="course-hero">
        <img
          src="/images/python-satellite.jpg"
          alt="Geospatial Analysis with Google Earth Engine"
        />
        <h1>Geospatial Analysis with Google Earth Engine</h1>
        <p>
          Master an open-source geospatial stack: GeoPandas, Shapely, rasterio,
          rioxarray, xarray, cartopy, and R's sf/terra for vector, raster, and
          climate data analysis.
        </p>
      </section>

      <div className="course-main-content">
        <div className="course-details">
          <h2>Course Overview</h2>
          <p>
            This hands-on certificate course builds a complete open-source
            workflow for geospatial data. You will move confidently between
            Python and R, process vector and raster datasets, analyse
            multidimensional climate data, and produce publication-quality maps.
          </p>

          <h2>What You'll Learn</h2>
          <ul>
            <li>🗺️ Geospatial data models, CRS, and projections</li>
            <li>🐍 Python setup with conda, Jupyter, GDAL, and dependencies</li>
            <li>📐 Vector analysis with <strong>GeoPandas</strong> and <strong>Shapely</strong></li>
            <li>🛰️ Raster processing with <strong>rasterio</strong> and <strong>rioxarray</strong></li>
            <li>🌡️ N-dimensional climate and time-series data with <strong>xarray</strong></li>
            <li>🗺️ Publication-quality maps with <strong>cartopy</strong> and matplotlib</li>
            <li>📊 R geospatial analysis with <strong>sf</strong>, <strong>terra</strong>, and <strong>raster</strong></li>
            <li>🔁 Python–R interoperability with <strong>reticulate</strong></li>
            <li>🧮 Spatial joins, zonal statistics, and raster-vector integration</li>
            <li>⚙️ Reproducible, automated geospatial workflows</li>
          </ul>

          <h2>Course Structure</h2>
          <ul>
            <li>
              <strong>Module 1:</strong> Geospatial Concepts and CRS
            </li>
            <li>
              <strong>Module 2:</strong> Python Environment and Data I/O
            </li>
            <li>
              <strong>Module 3:</strong> Vector Analysis with GeoPandas
            </li>
            <li>
              <strong>Module 4:</strong> Raster Analysis with rasterio and rioxarray
            </li>
            <li>
              <strong>Module 5:</strong> Climate Data with xarray
            </li>
            <li>
              <strong>Module 6:</strong> Cartography with cartopy
            </li>
            <li>
              <strong>Module 7:</strong> Geospatial Analysis in R
            </li>
            <li>
              <strong>Module 8:</strong> Interoperability and Automation
            </li>
            <li>
              <strong>Module 9:</strong> Capstone Project
            </li>
          </ul>

          <h2>Prerequisites</h2>
          <ul>
            <li>Basic programming experience in Python or R</li>
            <li>Familiarity with GIS or remote sensing concepts</li>
            <li>A computer running Windows, macOS, or Linux</li>
          </ul>
        </div>

        <div className="course-sidebar">
          <h3>Course Details</h3>
          <ul>
            <li>Duration: 9 weeks</li>
            <li>Level: Intermediate</li>
            <li>Format: Online</li>
            <li>Certificate: Yes</li>
            <li>Start Date: Flexible</li>
          </ul>

          <h3>Instructor</h3>
          <p>
            Birhanu Asmerom
            <br />
            Geospatial Data Scientist
            <br />
            Wollo University
          </p>

          <Link
            to={
              "/enroll?course=" +
              encodeURIComponent("Geospatial Analysis with Google Earth Engine")
            }
            className="enroll-btn"
          >
            Enroll Now
          </Link>
          <Link to="/training" className="back-link">
            ← Back to Training
          </Link>
        </div>
      </div>

      <div className="related-course-preview">
        <h3>Related Course: Advanced Python for Geospatial Data Science</h3>
        <img
          src="/images/python-satellite.jpg"
          alt="Advanced Python for geospatial data science"
          style={{ width: "100%", maxWidth: 220, margin: "1rem 0" }}
        />
        <p>
          Extend your Python skills with automation, machine learning, and
          large-scale geospatial pipelines.
        </p>
        <Link to="/courses/python" className="enroll-btn">
          Preview Course
        </Link>
      </div>

      <section className="testimonials">
        <h2>Student Testimonials</h2>
        <div className="testimonial">
          "Finally a course that explains GeoPandas, xarray, and R side by side.
          The capstone tied everything together."
        </div>
        <div className="testimonial">
          "The practical notebooks and real datasets made complex raster and
          climate workflows easy to follow."
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <p className="faq-question">Do I need to know both Python and R?</p>
          <p className="faq-answer">
            No. The course starts with the fundamentals and introduces R after
            you are comfortable with the Python workflow.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">Is this course fully open-source?</p>
          <p className="faq-answer">
            Yes. All tools are free and open-source, including GDAL, GeoPandas,
            rasterio, rioxarray, xarray, cartopy, and R packages.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">
            Is there a certificate upon completion?
          </p>
          <p className="faq-answer">
            Yes, you will receive a certificate after finishing the modules and
            capstone project.
          </p>
        </div>
      </section>
    </div>
  );
}

export default GeospatialPythonRPreview;
