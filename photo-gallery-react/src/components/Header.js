import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <img
            src="/images/Wollo University Logo.jpg"
            alt="Wollo University Logo"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/Wollo University Logo1.jpg";
            }}
          />
          <h1>Satellite Remote Sensing Consultancy</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/data-methodology">Data & Methodology</Link>
            </li>
            <li>
              <Link to="/applications">Applications</Link>
            </li>
            <li>
              <Link to="/projects-collaboration">Projects & Collaboration</Link>
            </li>
            <li>
              <Link to="/ai-research">AI Research</Link>
            </li>
            <li>
              <Link to="/training">Training</Link>
            </li>
            <li>
              <Link to="/publications">Publications</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
