import React from "react";
import { Link } from "react-router-dom";
import "./CoursePreview.css";

function PythonCoursePreview() {
  return (
    <div className="course-preview">
      <section className="course-hero">
        <img
          src="/images/python-satellite.jpg"
          alt="Satellite Data Analysis with Python"
        />
        <h1>Satellite Data Analysis with Python</h1>
        <p>
          Master Python programming for satellite and aerial imagery analysis.
          Learn essential tools, techniques, and workflows for processing and
          analyzing remote sensing data using industry-standard libraries.
        </p>
      </section>

      <div className="course-main-content">
        <div className="course-details">
          <h2>Course Overview</h2>
          <p>
            This comprehensive course provides a practical introduction to
            satellite data analysis using Python. You will learn to process,
            analyze, and visualize geospatial data using industry-standard
            libraries and real-world datasets. The course combines theoretical
            knowledge with hands-on projects to ensure practical skills
            development.
          </p>

          <h2>What You'll Learn</h2>
          <ul>
            <li>🛰️ Introduction to satellite imagery and data formats</li>
            <li>🐍 Python programming fundamentals for geospatial analysis</li>
            <li>
              🔢 Working with <strong>NumPy</strong> for numerical operations
            </li>
            <li>
              📊 Data manipulation and analysis with <strong>Pandas</strong>
            </li>
            <li>
              📈 Visualization of satellite data using{" "}
              <strong>Matplotlib</strong>
            </li>
            <li>🌍 Reading and processing raster data (GeoTIFF)</li>
            <li>🗺️ Real-world case studies and practical examples</li>
          </ul>

          <h2>Course Structure</h2>
          <ul>
            <li>
              <strong>Module 1:</strong> Introduction to Python and Remote
              Sensing
            </li>
            <li>
              <strong>Module 2:</strong> Working with Satellite Data Formats
            </li>
            <li>
              <strong>Module 3:</strong> Data Processing with NumPy and Pandas
            </li>
            <li>
              <strong>Module 4:</strong> Data Visualization and Analysis
            </li>
            <li>
              <strong>Module 5:</strong> Advanced Image Processing
            </li>
            <li>
              <strong>Module 6:</strong> Time Series Analysis
            </li>
            <li>
              <strong>Module 7:</strong> Project Work and Case Studies
            </li>
          </ul>

          <h2>Prerequisites</h2>
          <ul>
            <li>Basic computer skills</li>
            <li>No prior Python experience required</li>
            <li>
              Familiarity with remote sensing concepts (helpful but not
              required)
            </li>
            <li>Windows, Mac, or Linux computer</li>
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
            Python and Remote Sensing Specialist
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
          "The course provided excellent hands-on experience with Python for
          satellite data analysis. The real-world examples were particularly
          valuable."
        </div>
        <div className="testimonial">
          "Great introduction to geospatial data analysis. The step-by-step
          approach made it easy to follow along and apply the concepts."
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <p className="faq-question">Do I need prior Python experience?</p>
          <p className="faq-answer">
            While some Python knowledge is helpful, the course includes a review
            of Python basics in the first module.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">What software do I need?</p>
          <p className="faq-answer">
            You'll need Python 3.x installed on your computer. We'll guide you
            through setting up the required libraries.
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
    </div>
  );
}

export default PythonCoursePreview;
