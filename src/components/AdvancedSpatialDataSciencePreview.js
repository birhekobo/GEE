import React from "react";
import { Link } from "react-router-dom";
import "./CoursePreview.css";

function AdvancedSpatialDataSciencePreview() {
  return (
    <div className="course-preview">
      <section className="course-hero">
        <img src="/images/FIG4.png" alt="Advanced Spatial Data Science" />
        <h1>Advanced Spatial Data Science and Analytics</h1>
        <p>
          Take your geospatial skills to the next level with advanced spatial
          statistics, predictive modeling, and data-driven decision-making
          techniques using Python and R.
        </p>
      </section>

      <div className="course-main-content">
        <div className="course-details">
          <h2>Course Overview</h2>
          <p>
            This advanced certificate course bridges the gap between traditional
            GIS and modern data science. You will master spatial statistical
            methods, machine learning for geospatial data, and time series
            analysis of satellite imagery through hands-on projects.
          </p>

          <h2>What You'll Learn</h2>
          <ul>
            <li>📊 Exploratory spatial data analysis (ESDA)</li>
            <li>📍 Spatial autocorrelation and clustering</li>
            <li>📈 Geographically weighted regression (GWR)</li>
            <li>🤖 Machine learning for spatial prediction</li>
            <li>🔄 Time series analysis of satellite imagery</li>
            <li>🛠️ Capstone project: real-world spatial analysis workflow</li>
          </ul>

          <h2>Course Structure</h2>
          <ul>
            <li><strong>Module 1:</strong> Review of Spatial Data Structures</li>
            <li><strong>Module 2:</strong> Exploratory Spatial Data Analysis</li>
            <li><strong>Module 3:</strong> Spatial Autocorrelation and Clustering</li>
            <li><strong>Module 4:</strong> Geographically Weighted Regression</li>
            <li><strong>Module 5:</strong> Machine Learning for Spatial Data</li>
            <li><strong>Module 6:</strong> Time Series Analysis of Imagery</li>
            <li><strong>Module 7:</strong> Capstone Project</li>
          </ul>

          <h2>Prerequisites</h2>
          <ul>
            <li>Familiarity with GIS concepts and tools</li>
            <li>Basic programming experience (Python or R)</li>
            <li>Understanding of basic statistics</li>
            <li>Windows, Mac, or Linux computer</li>
          </ul>
        </div>

        <div className="course-sidebar">
          <h3>Course Details</h3>
          <ul>
            <li>Duration: 10 weeks</li>
            <li>Level: Advanced</li>
            <li>Format: Online</li>
            <li>Certificate: Yes</li>
            <li>Start Date: Flexible</li>
          </ul>

          <h3>Instructor</h3>
          <p>
            Birhanu Asmerom
            <br />
            Spatial Data Scientist
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
          "This course transformed my approach to spatial analysis. The GWR and
          machine learning modules were incredibly valuable for my research."
        </div>
        <div className="testimonial">
          "Excellent depth and practical applications. The capstone project
          helped me apply everything I learned to a real problem."
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <p className="faq-question">What programming language is used?</p>
          <p className="faq-answer">
            The course covers both Python and R. You can choose the language
            you prefer for your projects.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">Is prior machine learning experience required?</p>
          <p className="faq-answer">
            Basic familiarity with ML concepts is helpful but not required. We
            cover the necessary foundations in the course.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">Will I receive a certificate?</p>
          <p className="faq-answer">
            Yes, upon successful completion of all modules and the capstone
            project, you will receive a certificate of completion.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AdvancedSpatialDataSciencePreview;
