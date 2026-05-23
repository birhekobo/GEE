import React from "react";
import { Link } from "react-router-dom";
import "./GeeCoursePreview.css";

function GeeCoursePreview() {
  return (
    <div className="course-preview">
      <section className="course-hero">
        <img
          src="https://earthengine.google.com/static/images/earth-engine-logo.png"
          alt="Google Earth Engine for Environmental Monitoring"
        />
        <h1>Google Earth Engine for Environmental Monitoring</h1>
        <p>
          Learn how to use Google Earth Engine for large-scale environmental
          monitoring and geospatial analysis. This course covers remote sensing,
          satellite data processing, and AI applications for real-world
          environmental challenges.
        </p>
      </section>

      <div className="course-main-content">
        <div className="course-details">
          <h2>What You'll Learn</h2>
          <ul>
            <li>🌍 Introduction to Google Earth Engine</li>
            <li>🛰️ Accessing and visualizing satellite data</li>
            <li>🌱 Land cover and land use mapping</li>
            <li>🔥 Deforestation and wildfire monitoring</li>
            <li>💧 Water body and flood mapping</li>
            <li>🏙️ Urban expansion analysis</li>
            <li>🤖 AI and machine learning for geospatial data</li>
            <li>📝 Hands-on coding exercises and projects</li>
          </ul>
          <h2>Course Structure</h2>
          <ul>
            <li>
              <strong>Module 1:</strong> Getting Started with GEE
            </li>
            <li>
              <strong>Module 2:</strong> Satellite Data Access & Visualization
            </li>
            <li>
              <strong>Module 3:</strong> Environmental Monitoring Applications
            </li>
            <li>
              <strong>Module 4:</strong> AI for Remote Sensing in GEE
            </li>
            <li>
              <strong>Module 5:</strong> Project Work and Case Studies
            </li>
          </ul>
          <h2>Prerequisites</h2>
          <ul>
            <li>Basic computer skills</li>
            <li>No prior GEE experience required</li>
            <li>Interest in environmental science or geospatial analysis</li>
          </ul>
        </div>
        <div className="course-sidebar">
          <h3>Course Details</h3>
          <ul>
            <li>Duration: 6 weeks</li>
            <li>Level: Beginner to Intermediate</li>
            <li>Format: Online</li>
            <li>Certificate: Yes</li>
            <li>Start Date: Flexible</li>
          </ul>
          <h3>Instructor</h3>
          <p>
            Birhanu Asmerom
            <br />
            Remote Sensing & GEE Specialist
            <br />
            Wollo University
          </p>
          <a href="/enroll" className="enroll-btn">
            Enroll Now
          </a>
        </div>
      </div>

      <section className="testimonials">
        <h2>Student Testimonials</h2>
        <div className="testimonial">
          "This course gave me practical skills in Google Earth Engine for
          environmental monitoring. The hands-on projects were invaluable."
        </div>
        <div className="testimonial">
          "Excellent introduction to GEE and its applications in real-world
          environmental analysis. Highly recommended!"
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <p className="faq-question">Do I need prior GEE experience?</p>
          <p className="faq-answer">
            No prior experience is required. The course starts from the basics
            and builds up to advanced applications.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">What software do I need?</p>
          <p className="faq-answer">
            Google Earth Engine is cloud-based and runs in your browser. No
            installation required.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">
            Is there a certificate upon completion?
          </p>
          <p className="faq-answer">
            Yes, you'll receive a certificate of completion after finishing all
            modules and assignments.
          </p>
        </div>
      </section>

      <Link to="/training" className="back-link">
        ← Back to Training
      </Link>
    </div>
  );
}

export default GeeCoursePreview;
