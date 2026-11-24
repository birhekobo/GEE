import React from "react";
import { Link } from "react-router-dom";
import "./CoursePreview.css";

function AiGeospatialCoursePreview() {
  return (
    <div className="course-preview">
      <section className="course-hero">
        <img
          src="/images/python-satellite.jpg"
          alt="Artificial Intelligence for Geospatial Applications"
        />
        <h1>Artificial Intelligence for Geospatial Applications</h1>
        <p>
          Build AI and deep learning solutions for Earth observation — from
          classical machine learning to foundation models, segmentation, and
          deployment on maps and dashboards.
        </p>
      </section>

      <div className="course-main-content">
        <div className="course-details">
          <h2>Course Overview</h2>
          <p>
            This practical certificate course takes you from AI fundamentals to
            production-ready geospatial models. You will work with real satellite
            and aerial imagery, train and evaluate models, and turn predictions
            into maps and decision-support products.
          </p>

          <h2>What You'll Learn</h2>
          <ul>
            <li>🤖 Core AI and machine learning concepts for geospatial data</li>
            <li>🛰️ Preparing satellite imagery and labels for model training</li>
            <li>🌲 Classical ML with scikit-learn and gradient boosting</li>
            <li>🧠 Deep learning classification with PyTorch and TensorFlow</li>
            <li>🗺️ Semantic segmentation with U-Net and Vision Transformers</li>
            <li>📦 Object detection for infrastructure and land features</li>
            <li>🌍 Foundation and self-supervised models for Earth observation</li>
            <li>🔍 Model evaluation, explainability, and uncertainty</li>
            <li>🚀 Deploying models as map services and dashboards</li>
          </ul>

          <h2>Course Structure</h2>
          <ul>
            <li>
              <strong>Module 1:</strong> AI Foundations for Earth Observation
            </li>
            <li>
              <strong>Module 2:</strong> Data Preparation and Labelling
            </li>
            <li>
              <strong>Module 3:</strong> Classical Machine Learning for GIS
            </li>
            <li>
              <strong>Module 4:</strong> Deep Learning for Image Analysis
            </li>
            <li>
              <strong>Module 5:</strong> Segmentation and Object Detection
            </li>
            <li>
              <strong>Module 6:</strong> Foundation Models and Cloud AI
            </li>
            <li>
              <strong>Module 7:</strong> Explainability and Evaluation
            </li>
            <li>
              <strong>Module 8:</strong> Deployment and Capstone Project
            </li>
          </ul>

          <h2>Prerequisites</h2>
          <ul>
            <li>Basic Python programming</li>
            <li>Familiarity with remote sensing or GIS concepts</li>
            <li>An interest in machine learning and Earth observation</li>
          </ul>
        </div>

        <div className="course-sidebar">
          <h3>Course Details</h3>
          <ul>
            <li>Duration: 10 weeks</li>
            <li>Level: Intermediate to Advanced</li>
            <li>Format: Online</li>
            <li>Certificate: Yes</li>
            <li>Start Date: Flexible</li>
          </ul>

          <h3>Instructor</h3>
          <p>
            Birhanu Asmerom
            <br />
            AI and Remote Sensing Specialist
            <br />
            Wollo University
          </p>

          <Link
            to={
              "/enroll?course=" +
              encodeURIComponent(
                "Artificial Intelligence for Geospatial Applications"
              )
            }
            className="enroll-btn"
          >
            Enroll Now
          </Link>
          <Link to="/training" className="back-link">
            ← Back to Training
          </Link>
        </div>
      </div>

      <div className="related-course-preview">
        <h3>Related Course: Machine Learning in Remote Sensing</h3>
        <img
          src="/images/Gallery/FIG4.png"
          alt="Machine learning in remote sensing"
          style={{ width: "100%", maxWidth: 220, margin: "1rem 0" }}
        />
        <p>
          Strengthen your machine learning foundations before moving into deep
          learning and foundation models.
        </p>
        <Link to="/courses/ml" className="enroll-btn">
          Preview Course
        </Link>
      </div>

      <section className="testimonials">
        <h2>Student Testimonials</h2>
        <div className="testimonial">
          "The AI course connected the theory I knew to real satellite workflows.
          The segmentation project was the most useful thing I have built."
        </div>
        <div className="testimonial">
          "Clear explanations, practical notebooks, and a capstone that I could
          immediately use at work. Highly recommended for Earth observation
          professionals."
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <p className="faq-question">
            Do I need a powerful computer or GPU?
          </p>
          <p className="faq-answer">
            A standard laptop is enough for most exercises. Cloud notebooks are
            provided for the larger deep learning experiments.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">Which frameworks will we use?</p>
          <p className="faq-answer">
            You will use scikit-learn, PyTorch, TensorFlow/Keras, and Google Earth
            Engine, with Python notebooks throughout.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">
            Is there a certificate upon completion?
          </p>
          <p className="faq-answer">
            Yes, you will receive a certificate after completing the modules and
            capstone project.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AiGeospatialCoursePreview;
