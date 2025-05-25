import React from "react";
import { Link } from "react-router-dom";
import "./CoursePreview.css";

function QgisCoursePreview() {
  return (
    <div className="course-preview">
      <section className="course-hero">
        <img src="/images/qgis-course.jpg" alt="QGIS for Remote Sensing" />
        <h1>QGIS for Remote Sensing</h1>
        <p>
          Master QGIS for satellite and aerial imagery analysis. Learn essential
          tools, techniques, and workflows for processing and analyzing remote
          sensing data in a powerful open-source environment.
        </p>
      </section>

      <div className="course-main-content">
        <div className="course-details">
          <h2>Course Overview</h2>
          <p>
            This comprehensive course covers QGIS applications in remote
            sensing, from basic operations to advanced analysis. Learn how to
            process satellite imagery, perform spatial analysis, and create
            professional maps. The course includes hands-on projects and
            real-world case studies to ensure practical skills development.
          </p>

          <h2>What You'll Learn</h2>
          <ul>
            <li>🗺️ QGIS interface and essential tools</li>
            <li>🛰️ Satellite imagery processing and analysis</li>
            <li>🌲 Land cover classification and change detection</li>
            <li>📊 Spatial analysis and statistics</li>
            <li>🔄 Time series analysis of satellite data</li>
            <li>🎨 Map design and visualization</li>
            <li>🛠️ Hands-on projects with real data</li>
          </ul>

          <h2>Course Structure</h2>
          <ul>
            <li>
              <strong>Module 1:</strong> Introduction to QGIS and Remote Sensing
            </li>
            <li>
              <strong>Module 2:</strong> Working with Satellite Imagery
            </li>
            <li>
              <strong>Module 3:</strong> Image Processing and Analysis
            </li>
            <li>
              <strong>Module 4:</strong> Spatial Analysis Tools
            </li>
            <li>
              <strong>Module 5:</strong> Time Series Analysis
            </li>
            <li>
              <strong>Module 6:</strong> Advanced Analysis Techniques
            </li>
            <li>
              <strong>Module 7:</strong> Map Design and Visualization
            </li>
          </ul>

          <h2>Prerequisites</h2>
          <ul>
            <li>Basic computer skills</li>
            <li>Familiarity with GIS concepts (helpful but not required)</li>
            <li>No prior QGIS experience needed</li>
            <li>Windows, Mac, or Linux computer</li>
          </ul>
        </div>

        <div className="course-sidebar">
          <h3>Course Details</h3>
          <ul>
            <li>Duration: 8 weeks</li>
            <li>Level: Intermediate</li>
            <li>Format: Online</li>
            <li>Certificate: Yes</li>
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

          <Link to="/enroll" className="enroll-btn">
            Enroll Now
          </Link>
          <Link to="/training" className="back-link">
            ← Back to Training
          </Link>
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
          "This course provided excellent hands-on experience with QGIS. The
          step-by-step tutorials and real-world projects were invaluable for
          building practical skills."
        </div>
        <div className="testimonial">
          "The instructor's expertise in both QGIS and remote sensing made
          complex concepts easy to understand. I now feel confident using QGIS
          for my research projects."
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <p className="faq-question">Do I need to purchase QGIS?</p>
          <p className="faq-answer">
            No, QGIS is free and open-source software. We'll guide you through
            the installation process in the first module.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">
            What computer specifications do I need?
          </p>
          <p className="faq-answer">
            A standard computer with 8GB RAM and 20GB free storage space is
            sufficient. We'll provide optimization tips for better performance.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">
            Is there a certificate upon completion?
          </p>
          <p className="faq-answer">
            Yes, you'll receive a certificate of completion after finishing all
            modules and projects.
          </p>
        </div>
      </section>
    </div>
  );
}

export default QgisCoursePreview;
