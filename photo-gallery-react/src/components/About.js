import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>
            Welcome to the Satellite Remote Sensing Consultancy at Wollo
            University. We are dedicated to advancing the field of remote
            sensing and geospatial analysis through research, education, and
            practical applications.
          </p>
        </div>
      </section>

      <section className="about-mission">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            To provide cutting-edge remote sensing solutions and training while
            fostering innovation in geospatial technology. We aim to empower
            researchers, students, and professionals with the knowledge and
            tools needed to address complex environmental and societal
            challenges.
          </p>
          <div className="mission-values">
            <div className="value-item">
              <span className="value-icon">🎯</span>
              <h3>Excellence</h3>
              <p>Delivering high-quality research and training</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🌍</span>
              <h3>Impact</h3>
              <p>Creating solutions for real-world challenges</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🤝</span>
              <h3>Collaboration</h3>
              <p>Building strong partnerships for innovation</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-expertise">
        <h2>Areas of Expertise</h2>
        <div className="expertise-grid">
          <div className="expertise-card">
            <div className="expertise-content">
              <h3>Remote Sensing Analysis</h3>
              <p>
                Advanced satellite imagery processing and interpretation for
                various applications, including environmental monitoring, land
                use analysis, and climate studies.
              </p>
              <ul>
                <li>Multi-spectral analysis</li>
                <li>Time series analysis</li>
                <li>Change detection</li>
                <li>Image classification</li>
              </ul>
            </div>
          </div>
          <div className="expertise-card">
            <div className="expertise-content">
              <h3>Geospatial Technology</h3>
              <p>
                Comprehensive GIS solutions and spatial data analysis for urban
                planning, resource management, and environmental assessment.
              </p>
              <ul>
                <li>Spatial analysis</li>
                <li>3D modeling</li>
                <li>Web GIS development</li>
                <li>Database management</li>
              </ul>
            </div>
          </div>
          <div className="expertise-card">
            <div className="expertise-content">
              <h3>Environmental Monitoring</h3>
              <p>
                Advanced monitoring and analysis of environmental changes using
                satellite data and ground-based measurements.
              </p>
              <ul>
                <li>Vegetation monitoring</li>
                <li>Water resource assessment</li>
                <li>Climate impact analysis</li>
                <li>Natural disaster assessment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="team-image">
              <img src="/images/birhanu-asmerom.jpg" alt="Birhanu Asmerom" />
            </div>
            <div className="team-content">
              <h3>Birhanu Asmerom</h3>
              <p className="team-role">Lead Consultant</p>
              <p className="team-expertise">Expert in Remote Sensing and GIS</p>
              <p className="team-qualification">Ph.D. in Geospatial Sciences</p>
            </div>
          </div>
          <div className="team-member">
            <div className="team-image">
              <img src="/images/birhanu-asmerom.jpg" alt="Birhanu Asmerom" />
            </div>
            <div className="team-content">
              <h3>Birhanu Asmerom</h3>
              <p className="team-role">Research Director</p>
              <p className="team-expertise">
                Specialist in Environmental Monitoring
              </p>
              <p className="team-qualification">15+ years of experience</p>
            </div>
          </div>
          <div className="team-member">
            <div className="team-image">
              <img src="/images/birhanu-asmerom.jpg" alt="Michael Chen" />
            </div>
            <div className="team-content">
              <h3>Michael Chen</h3>
              <p className="team-role">Technical Lead</p>
              <p className="team-expertise">GIS and Data Analysis Expert</p>
              <p className="team-qualification">Certified GIS Professional</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-facilities">
        <h2>Facilities & Resources</h2>
        <div className="facilities-grid">
          <div className="facility-item">
            <div className="facility-content">
              <h3>State-of-the-art Computing Lab</h3>
              <p>High-performance workstations for data processing</p>
            </div>
          </div>
          <div className="facility-item">
            <div className="facility-content">
              <h3>Advanced Software Suite</h3>
              <p>Professional GIS and remote sensing software</p>
            </div>
          </div>
          <div className="facility-item">
            <div className="facility-content">
              <h3>Training Facilities</h3>
              <p>Modern classroom with interactive learning tools</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-collaboration">
        <div className="collaboration-content">
          <h2>Collaboration Opportunities</h2>
          <p>
            We actively seek partnerships with academic institutions, government
            agencies, and private organizations to advance the field of remote
            sensing and develop innovative solutions for real-world challenges.
          </p>
          <div className="collaboration-features">
            <div className="collaboration-feature">
              <span className="feature-icon">🔬</span>
              <h3>Research Projects</h3>
              <p>Joint research initiatives and data sharing</p>
            </div>
            <div className="collaboration-feature">
              <span className="feature-icon">🎓</span>
              <h3>Academic Programs</h3>
              <p>Student exchange and training programs</p>
            </div>
            <div className="collaboration-feature">
              <span className="feature-icon">💡</span>
              <h3>Innovation Hub</h3>
              <p>Technology transfer and development</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
