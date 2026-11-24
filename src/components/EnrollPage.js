import React, { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Enrollment from "./Enrollment";
import { trainingCourses, formatCourseFee } from "../data/courses";
import "./EnrollPage.css";

const EnrollPage = () => {
  const [searchParams] = useSearchParams();
  const initialCourse = searchParams.get("course") || "";
  const [selectedCourse, setSelectedCourse] = useState(initialCourse);
  const resolvedCourse = trainingCourses.find(
    (c) => c.title === selectedCourse
  );

  return (
    <div className="enroll-page">
      <h1 className="enroll-page-title">Course Enrollment</h1>
      <p className="enroll-page-intro">
        Select a course and submit the enrollment form. We will contact you with
        payment instructions shortly after.
      </p>

      <label className="enroll-page-label" htmlFor="course-select">
        Choose a Course
      </label>
      <select
        id="course-select"
        className="enroll-course-select"
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.target.value)}
      >
        <option value="" disabled>
          Select a course…
        </option>
        {trainingCourses.map((c) => (
          <option key={c.title} value={c.title}>
            {c.title} — {formatCourseFee(c)}
          </option>
        ))}
      </select>

      {resolvedCourse ? (
        <Enrollment course={resolvedCourse} />
      ) : (
        <p className="enroll-page-empty">
          Please select a course above to view pricing and enroll. You can also
          browse all courses on the <Link to="/training">Training page</Link>.
        </p>
      )}
    </div>
  );
};

export default EnrollPage;