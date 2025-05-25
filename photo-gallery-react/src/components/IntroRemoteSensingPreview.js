import React from "react";
import { Link } from "react-router-dom";
import "./IntroRemoteSensingPreview.css";

function IntroRemoteSensingPreview() {
  return (
    <div className="course-preview">
      <section className="course-hero">
        <img
          src="/images/remote-sensing.jpg"
          alt="Introduction to Remote Sensing"
        />
        <h1>Introduction to Remote Sensing</h1>
        <p>
          Master the fundamentals of satellite remote sensing and Earth
          observation. Learn essential concepts, data types, and analysis
          techniques for environmental monitoring and research.
        </p>
      </section>

      <div className="course-main-content">
        <div className="course-details">
          <h2>Course Overview</h2>
          <p>
            This comprehensive course provides a solid foundation in remote
            sensing principles and applications. Learn about different satellite
            systems, data types, and analysis methods used in environmental
            monitoring, land use mapping, and natural resource management.
          </p>

          <h2>What You'll Learn</h2>
          <ul>
            <li>🛰️ Remote sensing fundamentals and principles</li>
            <li>📡 Satellite systems and data types</li>
            <li>🌍 Earth observation applications</li>
            <li>📊 Image processing and analysis</li>
            <li>🗺️ Land cover classification</li>
            <li>🌊 Water resources monitoring</li>
            <li>🌱 Vegetation and agriculture analysis</li>
          </ul>

          <h2>Course Structure</h2>
          <ul>
            <li>
              <strong>Module 1:</strong> Introduction to Remote Sensing
            </li>
            <li>
              <strong>Module 2:</strong> Electromagnetic Radiation and Sensors
            </li>
            <li>
              <strong>Module 3:</strong> Satellite Systems and Data
            </li>
            <li>
              <strong>Module 4:</strong> Image Processing Fundamentals
            </li>
            <li>
              <strong>Module 5:</strong> Classification and Analysis
            </li>
            <li>
              <strong>Module 6:</strong> Applications in Environmental Science
            </li>
            <li>
              <strong>Module 7:</strong> Project Work and Case Studies
            </li>
          </ul>

          <h2>Prerequisites</h2>
          <ul>
            <li>Basic computer skills</li>
            <li>No prior remote sensing experience needed</li>
            <li>Interest in environmental science or geography</li>
            <li>Windows, Mac, or Linux computer</li>
          </ul>
        </div>

        <div className="course-sidebar">
          <h3>Course Details</h3>
          <ul>
            <li>Duration: 6 weeks</li>
            <li>Level: Beginner</li>
            <li>Format: Online</li>
            <li>Certificate: Yes</li>
            <li>Start Date: Flexible</li>
          </ul>

          <h3>Instructor</h3>
          <ul>
            <li>Birhanu Asmerom, Lead Consultant</li>
          </ul>

          <button className="enroll-btn">Enroll Now</button>
        </div>
      </div>

      <div className="related-course-preview">
        <h3>Preview: Google Earth Engine for Environmental Monitoring</h3>
        <img
          src="https://earthengine.google.com/static/images/earth-engine-logo.png"
          alt="Google Earth Engine"
          style={{ width: "100%", maxWidth: 200, margin: "1rem 0" }}
        />
        <p>
          Learn how to use Google Earth Engine for large-scale environmental
          monitoring and geospatial analysis. This course covers remote sensing,
          data processing, and AI applications for real-world environmental
          challenges.
        </p>
        <ul>
          <li>Land cover classification</li>
          <li>Deforestation detection</li>
          <li>Flood mapping and prediction</li>
          <li>AI for geospatial data</li>
          <li>Hands-on coding exercises</li>
        </ul>
        <a href="/gee-course" className="enroll-btn">
          Preview Course
        </a>
      </div>

      <section className="testimonials">
        <h2>Student Testimonials</h2>
        <div className="testimonial">
          "This course provided an excellent foundation in remote sensing. The
          step-by-step approach and practical examples made complex concepts
          easy to understand."
        </div>
        <div className="testimonial">
          "The instructor's expertise and clear explanations helped me grasp
          remote sensing concepts quickly. I now feel confident using satellite
          data in my research."
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <p className="faq-question">Do I need prior experience?</p>
          <p className="faq-answer">
            No prior experience is required. The course starts from the basics
            and gradually builds up to more advanced concepts. Basic computer
            skills are sufficient.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">What software will I need?</p>
          <p className="faq-answer">
            We'll use free and open-source software for image processing and
            analysis. We'll guide you through the installation process and
            provide all necessary resources.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">Is this course suitable for my field?</p>
          <p className="faq-answer">
            Yes! Remote sensing has applications in various fields including
            environmental science, geography, agriculture, urban planning, and
            natural resource management. The course covers fundamental concepts
            applicable to all these areas.
          </p>
        </div>
      </section>

      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
    </div>
  );
}

export default IntroRemoteSensingPreview;
