import React from "react";
import { Link } from "react-router-dom";
import "./CoursePreview.css";

function DataVisualizationPreview() {
  return (
    <div className="course-preview">
      <section className="course-hero">
        <img src="/images/FIG4.png" alt="Data Visualization" />
        <h1>Data Visualization for Scientific Research</h1>
        <p>
          Learn to create publication-quality figures and visualizations for
          research papers, theses, and reports using freely available tools.
        </p>
      </section>

      <div className="course-main-content">
        <div className="course-details">
          <h2>Course Overview</h2>
          <p>
            Effective data visualization is essential for communicating research
            findings. This free course covers the principles of scientific
            visualization and provides hands-on training with Python libraries
            including Matplotlib, Seaborn, and Plotly.
          </p>

          <h2>What You'll Learn</h2>
          <ul>
            <li>📈 Principles of effective scientific visualization</li>
            <li>🐍 Introduction to Python Matplotlib and Seaborn</li>
            <li>📊 Creating charts, graphs, and heatmaps</li>
            <li>🛰️ Visualizing geospatial and remote sensing data</li>
            <li>📄 Designing figures for publications</li>
            <li>🔄 Interactive visualizations with Plotly</li>
          </ul>

          <h2>Course Structure</h2>
          <ul>
            <li><strong>Module 1:</strong> Principles of Scientific Visualization</li>
            <li><strong>Module 2:</strong> Getting Started with Matplotlib</li>
            <li><strong>Module 3:</strong> Statistical Plots with Seaborn</li>
            <li><strong>Module 4:</strong> Geospatial Data Visualization</li>
            <li><strong>Module 5:</strong> Publication-Ready Figures</li>
            <li><strong>Module 6:</strong> Interactive Dashboards with Plotly</li>
          </ul>

          <h2>Prerequisites</h2>
          <ul>
            <li>Basic Python programming knowledge</li>
            <li>No prior visualization experience needed</li>
            <li>Interest in data analysis and research</li>
            <li>Windows, Mac, or Linux computer</li>
          </ul>
        </div>

        <div className="course-sidebar">
          <h3>Course Details</h3>
          <ul>
            <li>Duration: 5 weeks</li>
            <li>Level: Beginner to Intermediate</li>
            <li>Format: Online</li>
            <li>Certificate: No (free course)</li>
            <li>Start Date: Flexible</li>
          </ul>

          <h3>Instructor</h3>
          <p>
            Birhanu Asmerom
            <br />
            Data Science and Visualization Specialist
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
          "The hands-on approach with real datasets made learning visualization
          techniques practical and enjoyable."
        </div>
        <div className="testimonial">
          "I was able to create publication-quality figures for my thesis after
          completing this course. Excellent resources and instruction."
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <p className="faq-question">Do I need Python installed?</p>
          <p className="faq-answer">
            Yes, you will need Python installed. We provide setup instructions
            for Anaconda or Miniconda in the first module.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">Can I use this for my research?</p>
          <p className="faq-answer">
            Absolutely. The course focuses on creating figures suitable for
            academic publications, theses, and research reports.
          </p>
        </div>
      </section>
    </div>
  );
}

export default DataVisualizationPreview;
