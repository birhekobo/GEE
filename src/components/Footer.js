import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const WOLLO_LOGO = "/images/Wollo University Logo.png";
const CONTACT_EMAIL = "birhephyics@gmail.com";
const CONTACT_PHONE = "+251 903 179 177";
const CONTACT_PHONE_HREF = "+251903179177";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects-collaboration", label: "Projects" },
  { to: "/training", label: "Training" },
  { to: "/publications", label: "Publications" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const profiles = [
  {
    label: "GitHub",
    href: "https://github.com/birhekobo",
    icon: "fab fa-github",
  },
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Birhanu-Habtemicheal",
    icon: "fab fa-researchgate",
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0000-0002-9425-0398",
    icon: "fab fa-orcid",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/birhanu-asmerom-28164821",
    icon: "fab fa-linkedin",
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src={WOLLO_LOGO}
              alt="Wollo University Logo"
              className="footer-logo"
            />
            <p className="footer-tagline">
              Geospatial intelligence, remote sensing research, and capacity
              development from Wollo University.
            </p>
          </div>

          <nav className="footer-links" aria-label="Quick links">
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-contact">
            <h3>Get in Touch</h3>
            <ul>
              <li>
                <i className="fas fa-envelope" aria-hidden="true" />
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
              <li>
                <i className="fas fa-phone" aria-hidden="true" />
                <a href={`tel:${CONTACT_PHONE_HREF}`}>{CONTACT_PHONE}</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt" aria-hidden="true" />
                <span>Department of Physics, Wollo University</span>
              </li>
            </ul>
          </div>

          <nav className="footer-profiles" aria-label="Profiles">
            <h3>Profiles</h3>
            <ul>
              {profiles.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <i className={icon} aria-hidden="true" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; 2026. All rights reserved. Developed by Birhanu Asmerom
          </p>

          <div className="footer-attribution">
            <div className="footer-attribution-text">
              <p>Atmospheric Science Research Group</p>
              <p>Department of Physics, Wollo University.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
