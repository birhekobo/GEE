import React from "react";
import { Link } from "react-router-dom"; // For the "Contact Us" button
import "./ProjectsAndCollaboration.css";

const ProjectsAndCollaboration = () => {
  return (
    <div className="projects-collaboration">
      <div className="projects-hero">
        <h2>Projects & Collaboration</h2>
        <p>
          Join us in advancing remote sensing research and applications through
          innovative projects and strategic partnerships.
        </p>
      </div>

      <section className="projects-section">
        <h3>Land Use Monitoring Project</h3>
        <div className="projects-grid">
          <div className="project-card">
            <img src="/images/FIG1.png" alt="Land Use Change Monitoring" />
            <div className="project-content">
              <h4>Land Use Change Monitoring</h4>
              <p>
                Long-term monitoring of land use changes in Ethiopia using
                satellite imagery and machine learning techniques.
              </p>
              <ul>
                <li>Multi-temporal analysis</li>
                <li>Machine learning classification</li>
                <li>Change detection algorithms</li>
              </ul>
            </div>
          </div>

          <div className="project-card">
            <img src="/images/FIG2.png" alt="Climate Impact Assessment" />
            <div className="project-content">
              <h4>Climate Impact Assessment</h4>
              <p>
                Assessment of climate change impacts on agricultural
                productivity using remote sensing data.
              </p>
              <ul>
                <li>NDVI analysis</li>
                <li>Weather data integration</li>
                <li>Yield prediction models</li>
              </ul>
            </div>
          </div>

          <div className="project-card">
            <img src="/images/FIG3.png" alt="Urban Growth Analysis" />
            <div className="project-content">
              <h4>Urban Growth Analysis</h4>
              <p>
                Analysis of urban expansion patterns and their environmental
                impacts in major Ethiopian cities.
              </p>
              <ul>
                <li>Spatial analysis</li>
                <li>Urban heat island effects</li>
                <li>Infrastructure planning</li>
              </ul>
            </div>
          </div>

          <div className="project-card">
            <img src="/images/FIG4.png" alt="Air Quality Monitoring" />
            <div className="project-content">
              <h4>Comprehensive Air Quality Monitoring</h4>
              <p>
                Integrated monitoring system combining satellite data,
                ground-based sensors, and meteorological information for
                comprehensive air quality assessment.
              </p>
              <ul>
                <li>Multi-source data integration</li>
                <li>Real-time monitoring network</li>
                <li>Advanced data analytics</li>
              </ul>
            </div>
          </div>

          <div className="project-card">
            <img src="/images/FIG8.png" alt="Urban Air Quality" />
            <div className="project-content">
              <h4>Urban Air Quality Management</h4>
              <p>
                Strategic approach to urban air quality management focusing on
                pollution hotspots, traffic emissions, and public health
                impacts.
              </p>
              <ul>
                <li>Smart city integration</li>
                <li>Traffic management solutions</li>
                <li>Public health protection</li>
              </ul>
            </div>
          </div>

          <div className="project-card">
            <img src="/images/FIG9.png" alt="Industrial Emissions" />
            <div className="project-content">
              <h4>Industrial Air Quality Control</h4>
              <p>
                Advanced monitoring and control system for industrial emissions
                with focus on compliance and environmental protection.
              </p>
              <ul>
                <li>Emission control systems</li>
                <li>Environmental compliance</li>
                <li>Sustainable practices</li>
              </ul>
            </div>
          </div>

          <div className="project-card">
            <img src="/images/FIG10.png" alt="Air Quality Modeling" />
            <div className="project-content">
              <h4>Air Quality Prediction</h4>
              <p>
                Advanced modeling and forecasting of air quality parameters
                using satellite data and atmospheric models.
              </p>
              <ul>
                <li>Predictive modeling</li>
                <li>Scenario analysis</li>
                <li>Early warning systems</li>
              </ul>
            </div>
          </div>

          <div className="project-card">
            <img src="/images/FIG14.png" alt="Health Impact Analysis" />
            <div className="project-content">
              <h4>Health Impact Analysis</h4>
              <p>
                Comprehensive assessment of air quality impacts on public health
                using integrated environmental and health data.
              </p>
              <ul>
                <li>Health risk assessment</li>
                <li>Vulnerability mapping</li>
                <li>Preventive measures</li>
              </ul>
            </div>
          </div>

          <div className="project-card">
            <img src="/images/FIG15.png" alt="Policy Support" />
            <div className="project-content">
              <h4>Policy Support & Planning</h4>
              <p>
                Data-driven support for air quality policy development and urban
                planning initiatives.
              </p>
              <ul>
                <li>Policy recommendations</li>
                <li>Urban planning integration</li>
                <li>Stakeholder engagement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <h3>Air Quality Projection</h3>
        <div className="projects-grid">
          <div className="project-card">
            <img src="/images/FIG5.png" alt="Air Quality Forecasting" />
            <div className="project-content">
              <h4>Air Quality Forecasting</h4>
              <p>
                Advanced prediction models for air quality parameters using
                satellite data and meteorological information.
              </p>
              <ul>
                <li>Short-term forecasting</li>
                <li>Meteorological integration</li>
                <li>Early warning systems</li>
              </ul>
            </div>
          </div>

          <div className="project-card">
            <img src="/images/FIG6.png" alt="Pollution Source Analysis" />
            <div className="project-content">
              <h4>Pollution Source Analysis</h4>
              <p>
                Identification and tracking of pollution sources using remote
                sensing and ground-based data.
              </p>
              <ul>
                <li>Source identification</li>
                <li>Emission tracking</li>
                <li>Impact assessment</li>
              </ul>
            </div>
          </div>

          <div className="project-card">
            <img src="/images/FIG7.png" alt="Health Impact Assessment" />
            <div className="project-content">
              <h4>Health Impact Assessment</h4>
              <p>
                Analysis of air quality impacts on public health using
                integrated environmental and health data.
              </p>
              <ul>
                <li>Health risk mapping</li>
                <li>Vulnerability assessment</li>
                <li>Mitigation planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <h3>Water Resource Monitoring Project</h3>
        <div className="projects-grid">
          <div className="project-card">
            <img src="/images/FIG11.png" alt="Surface Water Monitoring" />
            <div className="project-content">
              <h4>Surface Water Monitoring</h4>
              <p>
                Comprehensive monitoring of surface water bodies using satellite
                imagery and remote sensing techniques.
              </p>
              <ul>
                <li>Water body mapping</li>
                <li>Water quality assessment</li>
                <li>Seasonal variation analysis</li>
              </ul>
            </div>
          </div>

          <div className="project-card">
            <img src="/images/FIG12.png" alt="Groundwater Assessment" />
            <div className="project-content">
              <h4>Groundwater Assessment</h4>
              <p>
                Analysis of groundwater resources using satellite data and
                hydrological modeling.
              </p>
              <ul>
                <li>Aquifer mapping</li>
                <li>Recharge estimation</li>
                <li>Depletion monitoring</li>
              </ul>
            </div>
          </div>

          <div className="project-card">
            <img src="/images/FIG13.png" alt="Water Resource Management" />
            <div className="project-content">
              <h4>Water Resource Management</h4>
              <p>
                Integrated water resource management using remote sensing and
                GIS technologies.
              </p>
              <ul>
                <li>Resource allocation</li>
                <li>Usage optimization</li>
                <li>Sustainability planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <h3>Drought Monitoring Project</h3>
        <div className="projects-grid">
          <div className="project-card">
            <img src="/images/FIG16.png" alt="Drought Early Warning" />
            <div className="project-content">
              <h4>Drought Early Warning System</h4>
              <p>
                Advanced monitoring and prediction system for drought conditions
                using satellite data and meteorological information.
              </p>
              <ul>
                <li>Real-time monitoring</li>
                <li>Early warning alerts</li>
                <li>Risk assessment</li>
              </ul>
            </div>
          </div>

          <div className="project-card">
            <img src="/images/Population_count.png" alt="Agricultural Impact" />
            <div className="project-content">
              <h4>Agricultural Impact Assessment</h4>
              <p>
                Comprehensive analysis of drought impacts on agricultural
                productivity and food security.
              </p>
              <ul>
                <li>Crop stress monitoring</li>
                <li>Yield prediction</li>
                <li>Food security analysis</li>
              </ul>
            </div>
          </div>

          <div className="project-card">
            <img src="/images/FIG1.png" alt="Water Resource Impact" />
            <div className="project-content">
              <h4>Water Resource Impact</h4>
              <p>
                Assessment of drought impacts on water resources and development
                of mitigation strategies.
              </p>
              <ul>
                <li>Water availability analysis</li>
                <li>Resource management</li>
                <li>Mitigation planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <h3>Mineral Exploration Project</h3>
        <div className="projects-grid">
          <div className="project-card">
            <img src="/images/FIG2.png" alt="Mineral Mapping" />
            <div className="project-content">
              <h4>Mineral Mapping & Identification</h4>
              <p>
                Advanced satellite-based mineral mapping and identification
                system using multispectral and hyperspectral data.
              </p>
              <ul>
                <li>Mineral composition analysis</li>
                <li>Alteration zone mapping</li>
                <li>Mineral deposit identification</li>
              </ul>
            </div>
          </div>

          <div className="project-card">
            <img src="/images/FIG3.png" alt="Geological Structure Analysis" />
            <div className="project-content">
              <h4>Geological Structure Analysis</h4>
              <p>
                Comprehensive analysis of geological structures and formations
                using satellite imagery and remote sensing data.
              </p>
              <ul>
                <li>Fault line detection</li>
                <li>Structural mapping</li>
                <li>Geological boundary identification</li>
              </ul>
            </div>
          </div>

          <div className="project-card">
            <img src="/images/FIG4.png" alt="Exploration Site Assessment" />
            <div className="project-content">
              <h4>Exploration Site Assessment</h4>
              <p>
                Integrated assessment of potential mineral exploration sites
                using multiple data sources and analysis techniques.
              </p>
              <ul>
                <li>Site suitability analysis</li>
                <li>Resource potential evaluation</li>
                <li>Environmental impact assessment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="collaboration-section">
        <div className="collaboration-content">
          <h2 className="collaboration-title">Collaboration Opportunities</h2>
          <p>
            We welcome partnerships with academic institutions, research
            organizations, and industry partners to advance remote sensing
            applications and research.
          </p>

          <div className="benefits-grid">
            <div className="benefit-card">
              <h3 className="benefit-title">Research Collaboration</h3>
              <ul>
                <li>Joint research projects</li>
                <li>Data sharing agreements</li>
                <li>Publication opportunities</li>
                <li>Student exchange programs</li>
              </ul>
            </div>
            <div className="benefit-card">
              <h3 className="benefit-title">Technical Partnership</h3>
              <ul>
                <li>Technology transfer</li>
                <li>Software development</li>
                <li>Methodology development</li>
                <li>Capacity building</li>
              </ul>
            </div>
            <div className="benefit-card">
              <h3 className="benefit-title">Industry Solutions</h3>
              <ul>
                <li>Custom solutions development</li>
                <li>Consulting services</li>
                <li>Training programs</li>
                <li>Technical support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2 className="cta-title">Interested in Collaborating?</h2>
        <p>
          Let's discuss how we can work together to achieve your research or
          business objectives.
        </p>
        <Link to="/contact" className="cta-button">
          Contact Us
        </Link>
      </section>

      <div className="copyright-footer">
        Copyright © 2025, All Right Reserved | Birhanu Asmerom
      </div>
    </div>
  );
};

export default ProjectsAndCollaboration;
