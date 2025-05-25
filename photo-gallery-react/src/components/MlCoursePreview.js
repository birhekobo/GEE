import React from "react";
import { Link } from "react-router-dom";
import "./MlCoursePreview.css";

function MlCoursePreview() {
  return (
    <div className="course-preview">
      <section className="course-hero">
        <img src="/images/FIG4.png" alt="Machine Learning in Remote Sensing" />
        <h1>Machine Learning in Remote Sensing</h1>
        <p>
          Unlock the power of machine learning for satellite and aerial imagery
          analysis. This course covers essential ML concepts, algorithms, and
          hands-on applications in remote sensing.
        </p>
      </section>

      <div className="course-main-content">
        <div className="course-details">
          <h2>Course Overview</h2>
          <p>
            This advanced course explores the intersection of machine learning
            and remote sensing. Learn how to preprocess geospatial data, apply
            supervised and unsupervised learning, and build models for land
            cover classification, change detection, and more. Real-world case
            studies and hands-on projects are included.
          </p>

          <h2>What You'll Learn</h2>
          <ul>
            <li>🤖 Fundamentals of machine learning for geospatial data</li>
            <li>
              🗺️ Data preprocessing and feature engineering for remote sensing
            </li>
            <li>🌲 Land cover and land use classification</li>
            <li>🔄 Change detection using ML algorithms</li>
            <li>📊 Supervised vs. unsupervised learning in remote sensing</li>
            <li>🛰️ Deep learning for image analysis</li>
            <li>🛠️ Hands-on projects with real satellite data</li>
          </ul>

          <h2>Course Structure</h2>
          <ul>
            <li>
              <strong>Module 1:</strong> Introduction to ML in Remote Sensing
            </li>
            <li>
              <strong>Module 2:</strong> Data Preprocessing and Feature
              Engineering
            </li>
            <li>
              <strong>Module 3:</strong> Supervised Learning for Classification
            </li>
            <li>
              <strong>Module 4:</strong> Unsupervised Learning and Clustering
            </li>
            <li>
              <strong>Module 5:</strong> Deep Learning for Image Analysis
            </li>
            <li>
              <strong>Module 6:</strong> Change Detection and Time Series
              Analysis
            </li>
            <li>
              <strong>Module 7:</strong> Advanced Applications and Case Studies
            </li>
          </ul>

          <h2>Prerequisites</h2>
          <ul>
            <li>Basic knowledge of remote sensing concepts</li>
            <li>Familiarity with Python programming</li>
            <li>Understanding of basic statistics and linear algebra</li>
            <li>Experience with data analysis libraries (NumPy, Pandas)</li>
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
          "This course transformed my understanding of ML applications in remote
          sensing. The hands-on projects were particularly valuable for building
          practical skills."
        </div>
        <div className="testimonial">
          "Excellent coverage of both theoretical concepts and practical
          applications. The real-world case studies helped me understand how to
          apply ML in my research."
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <p className="faq-question">Do I need prior ML experience?</p>
          <p className="faq-answer">
            While some ML knowledge is helpful, the course includes a review of
            fundamental concepts in the first module.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">What software and tools will we use?</p>
          <p className="faq-answer">
            We'll use Python with libraries like scikit-learn, TensorFlow, and
            PyTorch. You'll need a computer with Python 3.x installed.
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

      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
    </div>
  );
}

export default MlCoursePreview;
