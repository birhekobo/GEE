import React from "react";
import { Link } from "react-router-dom";
import "./NumericalMatlabPreview.css";

function NumericalMatlabPreview() {
  return (
    <div className="course-preview">
      <section className="course-hero">
        <img
          src="/images/matlab-course.jpg"
          alt="Introduction to Numerical Analysis with MATLAB Applications"
        />
        <h1>Introduction to Numerical Analysis with MATLAB Applications</h1>
        <p>
          Master the fundamentals of numerical analysis and learn to solve
          real-world problems using MATLAB. Ideal for students, engineers, and
          researchers seeking practical computational skills.
        </p>
      </section>

      <div className="course-main-content">
        <div className="course-details">
          <h2>Course Overview</h2>
          <p>
            This course introduces the essential concepts and methods of
            numerical analysis, including root finding, interpolation, numerical
            integration, and differential equations, all implemented in MATLAB.
            Gain hands-on experience with practical coding exercises and
            real-world applications.
          </p>

          <h2>What You'll Learn</h2>
          <ul>
            <li>🔢 Fundamentals of numerical analysis</li>
            <li>🧮 Root finding and solving nonlinear equations</li>
            <li>📈 Interpolation and curve fitting techniques</li>
            <li>∫ Numerical integration and differentiation</li>
            <li>🧩 Solving systems of linear equations</li>
            <li>📊 Numerical solutions to ordinary differential equations</li>
            <li>💻 Practical MATLAB programming for numerical methods</li>
          </ul>

          <h2>Course Structure</h2>
          <ul>
            <li>
              <strong>Module 1:</strong> Introduction to Numerical Analysis and
              MATLAB Basics
            </li>
            <li>
              <strong>Module 2:</strong> Root Finding and Nonlinear Equations
            </li>
            <li>
              <strong>Module 3:</strong> Interpolation and Curve Fitting
            </li>
            <li>
              <strong>Module 4:</strong> Numerical Integration and
              Differentiation
            </li>
            <li>
              <strong>Module 5:</strong> Linear Systems and Matrix Operations
            </li>
            <li>
              <strong>Module 6:</strong> Ordinary Differential Equations
            </li>
            <li>
              <strong>Module 7:</strong> Advanced Topics and Applications
            </li>
          </ul>

          <h2>Prerequisites</h2>
          <ul>
            <li>Basic knowledge of calculus and linear algebra</li>
            <li>Familiarity with MATLAB or similar programming languages</li>
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
            Professor of Applied Mathematics
            <br />
            Wollo University
          </p>

          <button className="enroll-btn">Enroll Now</button>
        </div>
      </div>

      <section className="testimonials">
        <h2>Student Testimonials</h2>
        <div className="testimonial">
          "This course provided an excellent foundation in numerical methods.
          The MATLAB implementations were particularly helpful for understanding
          the concepts."
        </div>
        <div className="testimonial">
          "The practical exercises and real-world applications made the
          theoretical concepts much easier to grasp. Highly recommended!"
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <p className="faq-question">Do I need prior MATLAB experience?</p>
          <p className="faq-answer">
            While some familiarity with MATLAB is helpful, the course includes a
            review of MATLAB basics in the first module.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">What software do I need?</p>
          <p className="faq-answer">
            You'll need MATLAB installed on your computer. Student versions are
            available at a reduced cost.
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

      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
    </div>
  );
}

export default NumericalMatlabPreview;
