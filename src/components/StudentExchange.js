import React from "react";
import { Link } from "react-router-dom";
import "./StudentExchange.css";

const exchangeDetails = [
  {
    label: "Who can apply",
    text: "Students enrolled in geography, GIS, environmental science, agriculture, or related programmes.",
  },
  {
    label: "What you will do",
    text: "Join ongoing remote sensing projects, learn Earth Engine and GIS workflows, and contribute to maps and reports.",
  },
  {
    label: "Format",
    text: "Short-term research visits or remote collaboration, arranged with your home institution.",
  },
  {
    label: "How to apply",
    text: "Send your CV, a short statement of interest, and a letter of support from your institution through our contact form.",
  },
];

const steps = [
  {
    title: "1. Get in touch",
    text: "Tell us about your programme, interests, and preferred period of participation.",
  },
  {
    title: "2. Agree a plan",
    text: "We discuss a suitable project, schedule, and supervision arrangement with your institution.",
  },
  {
    title: "3. Apply or register",
    text: "Exchange participants submit their documents; training participants register for their chosen course.",
  },
  {
    title: "4. Learn and contribute",
    text: "Work with our team on practical geospatial tasks and receive guidance throughout your placement.",
  },
];

const StudentExchange = () => (
  <section className="se-section">
    <div className="se-hero">
      <h1 className="se-title">Student Exchange &amp; Training Programs</h1>
      <p className="se-intro">
        Gain hands-on experience in satellite remote sensing and geospatial
        analysis through structured training and academic exchange opportunities.
      </p>
      <div className="se-hero-actions">
        <Link className="se-button se-button--primary" to="/contact">
          Enquire About Exchange
        </Link>
        <Link className="se-button se-button--secondary" to="/training">
          Browse Training Courses
        </Link>
      </div>
    </div>

    <div className="se-programs">
      <article className="se-card">
        <div className="se-card-icon" aria-hidden="true">
          🎓
        </div>
        <h2>Student Exchange</h2>
        <p>
          Work alongside our team and partner institutions on real-world remote
          sensing projects while learning from practising geospatial specialists.
        </p>
        <ul className="se-detail-list">
          {exchangeDetails.map((item) => (
            <li key={item.label}>
              <strong>{item.label}:</strong> {item.text}
            </li>
          ))}
        </ul>
        <Link className="se-text-link" to="/contact">
          Ask about an exchange placement →
        </Link>
      </article>

      <article className="se-card">
        <div className="se-card-icon" aria-hidden="true">
          💻
        </div>
        <h2>Training Programs</h2>
        <p>
          Build practical skills at your own pace with courses ranging from free
          introductions to in-depth certificate programmes.
        </p>
        <ul className="se-detail-list">
          <li>
            <strong>Free courses:</strong> short introductions open to everyone.
          </li>
          <li>
            <strong>Certificate courses:</strong> project-based learning with
            certification on completion.
          </li>
          <li>
            <strong>Flexible delivery:</strong> online and in-person options.
          </li>
          <li>
            <strong>Topics:</strong> Earth Engine, Python, QGIS, MATLAB, machine
            learning, and geospatial analysis.
          </li>
        </ul>
        <Link className="se-text-link" to="/training">
          See all training courses →
        </Link>
      </article>
    </div>

    <div className="se-steps">
      <h2>How It Works</h2>
      <div className="se-steps-grid">
        {steps.map((step) => (
          <div className="se-step" key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="se-cta">
      <h2>Ready to get started?</h2>
      <p>
        Whether you are planning a student exchange or looking for training, we
        would be glad to hear from you.
      </p>
      <div className="se-hero-actions">
        <Link className="se-button se-button--primary" to="/contact">
          Contact Us
        </Link>
        <Link className="se-button se-button--secondary" to="/projects-collaboration">
          Explore Collaboration
        </Link>
      </div>
    </div>
  </section>
);

export default StudentExchange;
