import React from "react";
import { Link } from "react-router-dom";
import { formatCourseFee, getCourseByTitle } from "../data/courses";
import "./CoursePreview.css";

function UrbanGisCoursePreview() {
  const course = getCourseByTitle("GIS for Urban Planning and Smart Cities");

  return (
    <div className="course-preview">
      <section className="course-hero">
        <img
          src="/images/Urban Growth Analysis.png"
          alt="Urban growth analysis map"
        />
        <h1>GIS for Urban Planning and Smart Cities</h1>
        <p>
          Apply GIS and remote sensing techniques to urban planning,
          infrastructure management, and smart city development.
        </p>
      </section>

      <div className="course-main-content">
        <div className="course-details">
          <h2>Course Overview</h2>
          <p>
            This course combines geospatial analysis with urban planning practice.
            You will map land use and urban growth, model expansion, analyse
            infrastructure networks, and build spatial dashboards that support
            evidence-based city planning.
          </p>

          <h2>What You'll Learn</h2>
          <ul>
            <li>🏙️ Urban planning fundamentals with GIS</li>
            <li>🗺️ Land use and land cover classification from satellite data</li>
            <li>📈 Urban growth modelling and simulation</li>
            <li>🛣️ Infrastructure and utility network analysis</li>
            <li>👥 Population estimation and service area mapping</li>
            <li>📊 Smart city indicators and spatial dashboards</li>
          </ul>

          <h2>Prerequisites</h2>
          <ul>
            <li>Basic GIS concepts and computer literacy</li>
            <li>An interest in urban and regional planning</li>
          </ul>
        </div>

        <div className="course-sidebar">
          <h3>Course Details</h3>
          <ul>
            <li>Duration: 8 weeks</li>
            <li>Level: Intermediate</li>
            <li>Format: Online</li>
            <li>Certificate: Yes</li>
            <li>Fee: {formatCourseFee(course)}</li>
          </ul>

          <h3>Instructor</h3>
          <p>
            Birhanu Asmerom
            <br />
            GIS and Remote Sensing Specialist
            <br />
            Wollo University
          </p>

          <Link
            to={"/enroll?course=" + encodeURIComponent(course.title)}
            className="enroll-btn"
          >
            Enroll Now
          </Link>
          <Link to="/training" className="back-link">
            ← Back to Training
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UrbanGisCoursePreview;
