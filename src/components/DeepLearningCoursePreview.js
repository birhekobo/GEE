import React from "react";
import { Link } from "react-router-dom";
import { formatCourseFee, getCourseByTitle } from "../data/courses";
import "./CoursePreview.css";

function DeepLearningCoursePreview() {
  const course = getCourseByTitle("Deep Learning for Satellite Image Segmentation");

  return (
    <div className="course-preview">
      <section className="course-hero">
        <img
          src="/images/Gallery/FIG26.png"
          alt="Satellite imagery used for deep learning segmentation"
        />
        <h1>Deep Learning for Satellite Image Segmentation</h1>
        <p>
          Master state-of-the-art deep learning architectures for semantic and
          instance segmentation of satellite and aerial imagery.
        </p>
      </section>

      <div className="course-main-content">
        <div className="course-details">
          <h2>Course Overview</h2>
          <p>
            This advanced course covers the full segmentation workflow: preparing
            labelled satellite imagery, choosing an architecture, training and
            evaluating models, and deploying inference at scale. You will build
            practical projects on land-cover mapping and feature extraction.
          </p>

          <h2>What You'll Learn</h2>
          <ul>
            <li>🧠 Deep learning fundamentals for computer vision</li>
            <li>🛰️ Data preparation and augmentation for satellite imagery</li>
            <li>🧩 CNN, U-Net, DeepLab and SegFormer architectures</li>
            <li>🏋️ Training, fine-tuning and validating segmentation models</li>
            <li>📈 Evaluation with IoU, F1-score and accuracy</li>
            <li>🚀 Inference and deployment on large-scale imagery</li>
          </ul>

          <h2>Prerequisites</h2>
          <ul>
            <li>Python programming and basic machine learning</li>
            <li>Familiarity with remote sensing or GIS concepts</li>
          </ul>
        </div>

        <div className="course-sidebar">
          <h3>Course Details</h3>
          <ul>
            <li>Duration: 10 weeks</li>
            <li>Level: Advanced</li>
            <li>Format: Online</li>
            <li>Certificate: Yes</li>
            <li>Fee: {formatCourseFee(course)}</li>
          </ul>

          <h3>Instructor</h3>
          <p>
            Birhanu Asmerom
            <br />
            Remote Sensing and AI Specialist
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

export default DeepLearningCoursePreview;
