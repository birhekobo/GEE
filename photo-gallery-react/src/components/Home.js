import React from "react";
import "./Home.css";

function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Satellite Remote Sensing Consultancy</h1>
            <p>
              Welcome to our comprehensive platform dedicated to satellite
              remote sensing technology and its applications. We provide expert
              consultation, training, and resources for researchers, students,
              and professionals in the field.
            </p>
          </div>
        </div>
      </section>

      <section className="featured-training">
        <h2>Our Expertise</h2>
        <ul>
          <li>
            <h3>Satellite Data Analysis</h3>
            <p>
              Advanced processing and interpretation of satellite imagery for
              various applications.
            </p>
          </li>
          <li>
            <h3>Remote Sensing Training</h3>
            <p>
              Comprehensive training programs in remote sensing technology and
              applications.
            </p>
          </li>
          <li>
            <h3>Research Support</h3>
            <p>
              Expert consultation and support for research projects in remote
              sensing.
            </p>
          </li>
        </ul>
      </section>

      <section className="gallery-intro">
        <h2>Explore Our Gallery</h2>
        <p>
          Discover our collection of satellite images showcasing various
          applications and research findings.
        </p>
        <a href="#gallery" className="btn-primary">
          View Gallery
        </a>
      </section>
    </main>
  );
}

export default Home;
