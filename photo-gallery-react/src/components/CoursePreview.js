import React from "react";
import "./CoursePreview.css";

const CoursePreview = ({ course }) => {
  const {
    title,
    instructor,
    duration,
    level,
    description,
    topics,
    enrollmentUrl,
    startDate,
    institution,
    maxStudents,
  } = course;

  return (
    <div className="course-card">
      <div className="course-content">
        <h3 className="course-title">{title}</h3>
        <p className="course-instructor">Instructor: {instructor}</p>
        <p className="course-level">Level: {level}</p>

        {description && <p className="course-description">{description}</p>}

        {topics && (
          <div className="course-topics">
            {topics.map((topic) => (
              <span key={topic} className="topic-chip">
                {topic}
              </span>
            ))}
          </div>
        )}

        <div className="course-details">
          {institution && (
            <div className="detail-item">
              <span className="detail-icon">🏫</span>
              <span>{institution}</span>
            </div>
          )}

          {startDate && (
            <div className="detail-item">
              <span className="detail-icon">📅</span>
              <span>Start Date: {startDate}</span>
            </div>
          )}

          {duration && (
            <div className="detail-item">
              <span className="detail-icon">⏱️</span>
              <span>Duration: {duration}</span>
            </div>
          )}

          {maxStudents && (
            <div className="detail-item">
              <span className="detail-icon">👥</span>
              <span>Max Students: {maxStudents}</span>
            </div>
          )}
        </div>

        <div className="course-actions">
          <a
            href={enrollmentUrl}
            className="enroll-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enroll Now
          </a>
          <a
            href={enrollmentUrl}
            className="details-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;
