import React from "react";
import { Link } from "react-router-dom";
import "./DataVizCoursePreview.css";

function DataVizCoursePreview() {
  return (
    <div className="course-preview">
      <section className="course-hero">
        <img
          src="/images/Gallery/Population_count.png"
          alt="Data Visualization for Geospatial Analysis"
        />
        <h1>Data Visualization for Geospatial Analysis</h1>
        <p>
          Learn how to create compelling, publication-ready geospatial
          visualizations using open-source tools. This certificate course covers
          thematic mapping, charting, interactive dashboards, and how to
          communicate spatial data effectively.
        </p>
      </section>

      <div className="course-main-content">
        <div className="course-details">
          <h2>Course Overview</h2>
          <p>
            This course teaches you how to turn raw spatial data into clear,
            powerful visual stories. From cartographic design principles and
            thematic maps in QGIS to interactive web maps with Folium and
            feature-rich dashboards, you will build a complete portfolio of
            geospatial visualizations using free and open-source tools.
          </p>

          <h2>What You'll Learn</h2>
          <ul>
            <li>🎨 Principles of geospatial data visualization</li>
            <li>🗂️ Spatial data types and preprocessing</li>
            <li>🗺️ Thematic maps with QGIS (choropleth, graduated, proportional)</li>
            <li>🌐 Interactive web maps with Folium and Plotly</li>
            <li>⏳ Time-series and animated satellite data</li>
            <li>📊 Building geospatial dashboards</li>
            <li>🌈 Color theory, legends, and visual hierarchy</li>
            <li>⛰️ 3D visualization and terrain rendering</li>
            <li>💬 Best practices for communicating spatial data</li>
          </ul>

          <h2>Course Structure</h2>
          <ul>
            <li>
              <strong>Module 1:</strong> Foundations of Geospatial Visualization
            </li>
            <li>
              <strong>Module 2:</strong> Data Preparation for Visualization
            </li>
            <li>
              <strong>Module 3:</strong> Thematic Mapping with QGIS
            </li>
            <li>
              <strong>Module 4:</strong> Interactive Web Maps (Folium, Plotly)
            </li>
            <li>
              <strong>Module 5:</strong> Time-Series and Animated Visualizations
            </li>
            <li>
              <strong>Module 6:</strong> Geospatial Dashboards
            </li>
            <li>
              <strong>Module 7:</strong> Advanced and 3D Visualization
            </li>
            <li>
              <strong>Module 8:</strong> Capstone Project
            </li>
          </ul>

          <h2>Prerequisites</h2>
          <ul>
            <li>Basic computer skills</li>
            <li>Familiarity with spreadsheets or tabular data</li>
            <li>Interest in maps and spatial data</li>
          </ul>
        </div>

        <div className="course-sidebar">
          <h3>Course Details</h3>
          <ul>
            <li>Duration: 7 weeks</li>
            <li>Level: Beginner to Intermediate</li>
            <li>Format: Online</li>
            <li>Certificate: Yes</li>
            <li>Start Date: Flexible</li>
          </ul>

          <h3>Instructor</h3>
          <p>
            Birhanu Asmerom
            <br />
            Remote Sensing & Visualization Specialist
            <br />
            Wollo University
          </p>

          <Link
            to={"/enroll?course=" + encodeURIComponent("Data Visualization for Geospatial Analysis")}
            className="enroll-btn"
          >
            Enroll Now
          </Link>
        </div>
      </div>

      <section className="testimonials">
        <h2>Student Testimonials</h2>
        <div className="testimonial">
          "The dashboard module was transformative. I now communicate complex
          spatial data clearly to non-technical stakeholders."
        </div>
        <div className="testimonial">
          "Excellent balance of cartographic theory and practical, hands-on
          projects. My final map portfolio got me a job offer!"
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <p className="faq-question">Do I need prior GIS experience?</p>
          <p className="faq-answer">
            No. The course introduces spatial data concepts and tools from the
            ground up.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">What software will we use?</p>
          <p className="faq-answer">
            All tools are free and open-source, including QGIS, Python (Folium
            and Plotly), and Jupyter notebooks.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">Is there a certificate upon completion?</p>
          <p className="faq-answer">
            Yes, you'll receive a certificate of completion after finishing all
            modules and the capstone project.
          </p>
        </div>
      </section>

      <Link to="/training" className="back-link">
        ← Back to Training
      </Link>
    </div>
  );
}

export default DataVizCoursePreview;