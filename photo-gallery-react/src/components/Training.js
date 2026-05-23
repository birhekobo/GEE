import React, { useState } from "react";
import { Link } from "react-router-dom";
import Enrollment from "./Enrollment";
import {
  trainingCourses,
  PAYMENT_FEE_ETB,
  formatCourseFee,
  getEnrollmentTotal,
} from "../data/courses";
import "./Training.css";

const Training = () => {
  const [openIndexes, setOpenIndexes] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const freeCourses = trainingCourses.filter((c) => c.isFree);
  const paidCourses = trainingCourses.filter((c) => !c.isFree);

  const toggleContents = (courseTitle) => {
    setOpenIndexes((prev) =>
      prev.includes(courseTitle)
        ? prev.filter((t) => t !== courseTitle)
        : [...prev, courseTitle]
    );
  };

  const handleEnroll = (course) => {
    setSelectedCourse(course);
  };

  const renderCourseCard = (course) => (
    <div className="training-card" key={course.title}>
      <div className="course-card-header">
        <h3>{course.title}</h3>
        <span
          className={`course-price-badge ${course.isFree ? "free" : "paid"}`}
        >
          {formatCourseFee(course)}
        </span>
      </div>
      <p>{course.description}</p>
      {!course.isFree && (
        <p className="course-fee-detail">
          Course fee: {course.fee.toLocaleString()} ETB + payment processing
          fee: {PAYMENT_FEE_ETB.toLocaleString()} ETB (
          <strong>
            Total: {getEnrollmentTotal(course).toLocaleString()} ETB
          </strong>
          )
        </p>
      )}
      <button
        type="button"
        className="toggle-contents-btn"
        onClick={() => toggleContents(course.title)}
        aria-expanded={openIndexes.includes(course.title)}
        aria-controls={`course-contents-${course.title}`}
      >
        {openIndexes.includes(course.title)
          ? "Hide Course Contents"
          : "View Course Contents"}
      </button>
      <ul
        className="course-contents"
        id={`course-contents-${course.title}`}
        style={{
          display: openIndexes.includes(course.title) ? "block" : "none",
        }}
      >
        {course.contents.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => handleEnroll(course)}
        className="btn-secondary"
      >
        {course.isFree ? "Register Free" : "Enroll Now"}
      </button>
      <Link to={course.preview} className="preview-link">
        Course Preview
      </Link>
    </div>
  );

  return (
    <section className="training-section">
      <h1 className="training-title">Our Training Programs</h1>
      <p className="training-intro">
        Boost your expertise in satellite remote sensing and geospatial
        analysis. Our hands-on, expert-led courses are designed for all levels
        and delivered in a modern, interactive format.
      </p>

      <div className="pricing-notice">
        <p>
          <strong>Payment fee:</strong> Paid courses include a one-time{" "}
          {PAYMENT_FEE_ETB.toLocaleString()} ETB registration / payment
          processing fee in addition to the course fee. Free courses have no
          charge.
        </p>
      </div>

      <section className="free-courses-section" aria-labelledby="free-courses-heading">
        <h2 id="free-courses-heading" className="subsection-title">
          Free Courses
        </h2>
        <p className="subsection-intro">
          Start learning at no cost. These introductory programs are open to all
          participants.
        </p>
        <div className="training-grid">
          {freeCourses.map((course) => renderCourseCard(course))}
        </div>
      </section>

      <section
        className="paid-courses-section"
        aria-labelledby="paid-courses-heading"
      >
        <h2 id="paid-courses-heading" className="subsection-title">
          Certificate Courses
        </h2>
        <p className="subsection-intro">
          In-depth programs with certification. Prices are in Ethiopian Birr
          (ETB).
        </p>
        <div className="training-grid">
          {paidCourses.map((course) => renderCourseCard(course))}
        </div>
      </section>

      {selectedCourse && (
        <div className="enrollment-modal">
          <div className="enrollment-modal-content">
            <button
              type="button"
              className="close-button"
              onClick={() => setSelectedCourse(null)}
              aria-label="Close enrollment"
            >
              ×
            </button>
            <Enrollment course={selectedCourse} />
          </div>
        </div>
      )}

      <div className="training-benefits">
        <h2>Why Choose Our Training?</h2>
        <ul>
          <li>Expert Instructors with real-world experience</li>
          <li>Hands-on, project-based learning</li>
          <li>Flexible online and in-person options</li>
          <li>Certification upon completion</li>
          <li>Free introductory courses available</li>
        </ul>
      </div>
    </section>
  );
};

export default Training;
