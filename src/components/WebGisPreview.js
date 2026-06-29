import React from "react";
import { Link } from "react-router-dom";
import "./CoursePreview.css";

function WebGisPreview() {
  return (
    <div className="course-preview">
      <section className="course-hero">
        <img src="/images/FIG4.png" alt="Web GIS" />
        <h1>Web GIS and Interactive Mapping Applications</h1>
        <p>
          Build interactive web maps and geospatial applications using modern
          web technologies. Deploy dynamic dashboards for environmental
          monitoring and urban planning.
        </p>
      </section>

      <div className="course-main-content">
        <div className="course-details">
          <h2>Course Overview</h2>
          <p>
            This certificate course teaches you to build modern web-based
            geospatial applications from the ground up. You will learn front-end
            mapping libraries, server-side data services, and deployment
            strategies for interactive mapping platforms.
          </p>

          <h2>What You'll Learn</h2>
          <ul>
            <li>🌐 Fundamentals of web mapping and Web GIS</li>
            <li>🗺️ Leaflet and MapLibre GL JS for interactive maps</li>
            <li>📡 Serving geospatial data with GeoServer and MapServer</li>
            <li>⚛️ Building geospatial dashboards with React</li>
            <li>🛰️ Integrating satellite imagery layers on the web</li>
            <li>🚀 Deploying and hosting web GIS applications</li>
            <li>📊 Case study: real-time environmental monitoring dashboard</li>
          </ul>

          <h2>Course Structure</h2>
          <ul>
            <li><strong>Module 1:</strong> Web Mapping Fundamentals</li>
            <li><strong>Module 2:</strong> Leaflet and MapLibre GL JS</li>
            <li><strong>Module 3:</strong> Geospatial Data Services</li>
            <li><strong>Module 4:</strong> Building Dashboards with React</li>
            <li><strong>Module 5:</strong> Satellite Imagery on the Web</li>
            <li><strong>Module 6:</strong> Deployment and Hosting</li>
            <li><strong>Module 7:</strong> Capstone Project</li>
          </ul>

          <h2>Prerequisites</h2>
          <ul>
            <li>Basic knowledge of HTML, CSS, and JavaScript</li>
            <li>Familiarity with GIS concepts</li>
            <li>Interest in web development and mapping</li>
            <li>Windows, Mac, or Linux computer</li>
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
            Web GIS Developer
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
          "Building a real-time environmental dashboard was the highlight of this
          course. The skills I learned are directly applicable to my work."
        </div>
        <div className="testimonial">
          "Excellent curriculum that balances theory with hands-on coding. I now
          feel confident building web GIS applications from scratch."
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <p className="faq-question">What web technologies will I learn?</p>
          <p className="faq-answer">
            You will learn Leaflet, MapLibre GL JS, React, GeoServer, and
            deployment platforms like Vercel and Netlify.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">Do I need my own server?</p>
          <p className="faq-answer">
            No, we will use cloud-based hosting services and free tiers for
            deploying your applications.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">Will I receive a certificate?</p>
          <p className="faq-answer">
            Yes, upon successful completion of all modules and the capstone
            project, you will receive a certificate of completion.
          </p>
        </div>
      </section>
    </div>
  );
}

export default WebGisPreview;
