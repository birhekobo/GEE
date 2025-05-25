import React from "react";
import { Link } from "react-router-dom";
import "./LatexCoursePreview.css";

function LatexCoursePreview() {
  return (
    <div className="course-preview">
      <section className="course-hero">
        <img src="/images/latex-logo.png" alt="LaTeX for Academic Writing" />
        <h1>LaTeX for Academic Writing</h1>
        <p>
          Master LaTeX typesetting for professional academic documents, research
          papers, and technical publications. Learn to create beautifully
          formatted documents with mathematical equations and scientific
          notation.
        </p>
      </section>

      <div className="course-main-content">
        <div className="course-details">
          <h2>Course Overview</h2>
          <p>
            This comprehensive course covers LaTeX from basics to advanced
            features, focusing on academic and scientific document preparation.
            Learn document structure, mathematical typesetting, bibliography
            management, and professional formatting techniques.
          </p>

          <h2>What You'll Learn</h2>
          <ul>
            <li>📝 LaTeX document structure and commands</li>
            <li>📚 Bibliography and citation management</li>
            <li>🔢 Mathematical equations and formulas</li>
            <li>📊 Tables, figures, and graphics</li>
            <li>📋 Custom document classes and templates</li>
            <li>🎨 Advanced formatting and styling</li>
            <li>🔄 Collaboration and version control</li>
          </ul>

          <h2>Course Structure</h2>
          <ul>
            <li>
              <strong>Module 1:</strong> Introduction to LaTeX
            </li>
            <li>
              <strong>Module 2:</strong> Document Structure and Commands
            </li>
            <li>
              <strong>Module 3:</strong> Mathematical Typesetting
            </li>
            <li>
              <strong>Module 4:</strong> Tables and Figures
            </li>
            <li>
              <strong>Module 5:</strong> Bibliography and Citations
            </li>
            <li>
              <strong>Module 6:</strong> Custom Templates and Classes
            </li>
            <li>
              <strong>Module 7:</strong> Advanced Features and Best Practices
            </li>
          </ul>

          <h2>Prerequisites</h2>
          <ul>
            <li>Basic computer skills</li>
            <li>No prior LaTeX experience needed</li>
            <li>Familiarity with academic writing (helpful)</li>
            <li>Windows, Mac, or Linux computer</li>
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
            LaTeX and Academic Writing Specialist
            <br />
            Wollo University
          </p>

          <button className="enroll-btn">Enroll Now</button>
        </div>
      </div>

      <section className="testimonials">
        <h2>Student Testimonials</h2>
        <div className="testimonial">
          "This course transformed my academic writing process. The step-by-step
          tutorials and practical examples made LaTeX much more approachable
          than I expected."
        </div>
        <div className="testimonial">
          "The instructor's expertise in both LaTeX and academic writing was
          invaluable. I now produce professional-quality documents with ease."
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <p className="faq-question">Do I need to install LaTeX?</p>
          <p className="faq-answer">
            Yes, we'll guide you through installing a LaTeX distribution (TeX
            Live, MiKTeX, or MacTeX) and a suitable editor. We'll provide
            detailed installation instructions for all major operating systems.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">What software will I need?</p>
          <p className="faq-answer">
            You'll need a LaTeX distribution and a text editor. We recommend
            TeXstudio, Overleaf, or VS Code with LaTeX Workshop extension.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">Is this course suitable for beginners?</p>
          <p className="faq-answer">
            Yes, the course starts from the basics and gradually progresses to
            advanced topics. No prior LaTeX experience is required.
          </p>
        </div>
      </section>

      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
    </div>
  );
}

export default LatexCoursePreview;
