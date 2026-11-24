import React from "react";
import { Link } from "react-router-dom";
import "./WebMappingCoursePreview.css";

function WebMappingCoursePreview() {
  return (
    <div className="course-preview">
      <section className="course-hero">
        <img
          src="/images/python-satellite.jpg"
          alt="Web Mapping and Geospatial Visualization"
        />
        <h1>Web Mapping and Geospatial Visualization</h1>
        <p>
          Build interactive web maps using Leaflet, Mapbox, and other modern
          mapping libraries. This certificate course takes you from web
          fundamentals to deploying production-ready interactive maps and
          geospatial dashboards.
        </p>
      </section>

      <div className="course-main-content">
        <div className="course-details">
          <h2>Course Overview</h2>
          <p>
            This hands-on certificate course teaches you how to create modern,
            interactive web maps and geospatial visualizations. You will learn
            the core web technologies behind web mapping, master the Leaflet
            library for interactive maps, work with real geospatial data
            formats, and deploy your own maps online. The course is designed for
            learners from any background — no prior web development experience
            is required.
          </p>

          <h2>What You'll Learn</h2>
          <ul>
            <li>🌐 Introduction to web mapping technologies</li>
            <li>🧱 HTML, CSS, and JavaScript fundamentals for mapping</li>
            <li>🗺️ Building interactive maps with Leaflet</li>
            <li>🧩 Vector and raster tiles, WMS/WMTS services</li>
            <li>📦 Geospatial data formats: GeoJSON, GeoPackage, KML</li>
            <li>🎨 Styling and customizing map layers</li>
            <li>🔌 Adding data from external sources and APIs</li>
            <li>📊 Interactive markers, popups, heatmaps, and choropleths</li>
            <li>🛠️ Spatial analysis in the browser with Turf.js</li>
            <li>🚀 Deploying and hosting your web map online</li>
          </ul>

          <h2>Course Structure</h2>
          <ul>
            <li>
              <strong>Module 1:</strong> Introduction to the Geospatial Web
            </li>
            <li>
              <strong>Module 2:</strong> Web Fundamentals (HTML, CSS, JavaScript)
            </li>
            <li>
              <strong>Module 3:</strong> Interactive Maps with Leaflet
            </li>
            <li>
              <strong>Module 4:</strong> Tiles, Services, and Data Formats
            </li>
            <li>
              <strong>Module 5:</strong> Styling and Advanced Interactivity
            </li>
            <li>
              <strong>Module 6:</strong> Spatial Analysis in the Browser
            </li>
            <li>
              <strong>Module 7:</strong> Dashboards and Data Visualization
            </li>
            <li>
              <strong>Module 8:</strong> Deployment and Capstone Project
            </li>
          </ul>

          <h2>Prerequisites</h2>
          <ul>
            <li>Basic computer skills</li>
            <li>No prior web development experience required</li>
            <li>Interest in maps, geography, or geospatial data</li>
          </ul>
        </div>

        <div className="course-sidebar">
          <h3>Course Details</h3>
          <ul>
            <li>Duration: 8 weeks</li>
            <li>Level: Beginner to Intermediate</li>
            <li>Format: Online</li>
            <li>Certificate: Yes</li>
            <li>Start Date: Flexible</li>
          </ul>

          <h3>Instructor</h3>
          <p>
            Birhanu Asmerom
            <br />
            Remote Sensing & Geospatial Web Specialist
            <br />
            Wollo University
          </p>

          <Link
            to={"/enroll?course=" + encodeURIComponent("Web Mapping and Geospatial Visualization")}
            className="enroll-btn"
          >
            Enroll Now
          </Link>
        </div>
      </div>

      <section className="testimonials">
        <h2>Student Testimonials</h2>
        <div className="testimonial">
          "This course gave me the skills to build and deploy my own interactive
          web maps. The step-by-step projects were incredibly practical."
        </div>
        <div className="testimonial">
          "Excellent blend of web development and GIS. I now create geospatial
          dashboards for my research team with confidence."
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <p className="faq-question">Do I need programming experience?</p>
          <p className="faq-answer">
            No. The course starts with HTML, CSS, and JavaScript fundamentals
            before moving into web mapping.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">What tools will we use?</p>
          <p className="faq-answer">
            We use free and open-source tools including Leaflet, Turf.js, and
            standard web development editors. No paid software required.
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

export default WebMappingCoursePreview;