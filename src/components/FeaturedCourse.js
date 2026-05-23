import React from "react";
import "./FeaturedCourse.css";

function FeaturedCourse() {
  return (
    <section className="featured-course-card">
      <div className="featured-course-info">
        <img
          src="/images/gee-course.png"
          alt="Google Earth Engine for Environmental Monitoring"
          className="featured-course-img"
        />
        <div>
          <h2>
            Featured Course: Google Earth Engine for Environmental Monitoring
          </h2>
          <p>
            Leverage the power of Google Earth Engine for large-scale
            environmental monitoring, land cover change detection, and climate
            analysis.{" "}
            <a href="/gee-course-preview" className="btn-secondary">
              View Course Details
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCourse;
