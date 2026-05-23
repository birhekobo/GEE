import React from "react";
import { Link } from "react-router-dom";
import "./CoursePreview.css";

function MatlabCoursePreview() {
  return (
    <div className="course-preview">
      <section className="course-hero">
        <img src="/images/matlab-course.jpg" alt="MATLAB for Remote Sensing" />
        <h1>MATLAB for Remote Sensing</h1>
        <p>
          Master MATLAB programming for satellite and aerial imagery analysis.
          Learn essential tools, techniques, and workflows for processing and
          analyzing remote sensing data using MATLAB's powerful computing
          environment.
        </p>
      </section>

      <div className="course-main-content">
        <div className="course-details">
          <h2>Course Overview</h2>
          <p>
            This comprehensive course covers MATLAB applications in remote
            sensing, from basic operations to advanced analysis. Learn how to
            process satellite imagery, perform spatial analysis, and create
            professional visualizations. The course includes hands-on projects
            and real-world case studies to ensure practical skills development.
          </p>

          <h2>What You'll Learn</h2>
          <ul>
            <li>💻 MATLAB programming fundamentals</li>
            <li>🛰️ Satellite imagery processing and analysis</li>
            <li>🌲 Land cover classification and change detection</li>
            <li>📊 Spatial analysis and statistics</li>
            <li>🔄 Time series analysis of satellite data</li>
            <li>🎨 Data visualization and mapping</li>
            <li>🛠️ Hands-on projects with real data</li>
          </ul>

          <h2>Course Structure</h2>
          <ul>
            <li>
              <strong>Module 1:</strong> Introduction to MATLAB and Remote
              Sensing
            </li>
            <li>
              <strong>Module 2:</strong> MATLAB Programming Basics
            </li>
            <li>
              <strong>Module 3:</strong> Image Processing with MATLAB
            </li>
            <li>
              <strong>Module 4:</strong> Spatial Analysis and Statistics
            </li>
            <li>
              <strong>Module 5:</strong> Time Series Analysis
            </li>
            <li>
              <strong>Module 6:</strong> Advanced Visualization
            </li>
            <li>
              <strong>Module 7:</strong> Project Work and Case Studies
            </li>
          </ul>

          <h2>Prerequisites</h2>
          <ul>
            <li>Basic computer skills</li>
            <li>No prior MATLAB experience required</li>
            <li>
              Familiarity with remote sensing concepts (helpful but not
              required)
            </li>
            <li>Access to MATLAB software (student version available)</li>
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
            MATLAB and Remote Sensing Specialist
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

      <section className="testimonials">
        <h2>Student Testimonials</h2>
        <div className="testimonial">
          "This course provided excellent hands-on experience with MATLAB. The
          step-by-step tutorials and real-world projects were invaluable for
          building practical skills."
        </div>
        <div className="testimonial">
          "The instructor's expertise in both MATLAB and remote sensing made
          complex concepts easy to understand. I now feel confident using MATLAB
          for my research projects."
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <p className="faq-question">Do I need to purchase MATLAB?</p>
          <p className="faq-answer">
            Yes, you'll need a MATLAB license. We'll guide you through the
            installation process and provide information about student licenses
            and trial versions.
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

export default MatlabCoursePreview;
