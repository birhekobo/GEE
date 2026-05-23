import React from "react";
import "./AboutNavbar.css";

function AboutNavbar() {
  return (
    <nav className="about-navbar">
      <ul>
        <li>
          <a href="#mission">Mission</a>
        </li>
        <li>
          <a href="#expertise">Expertise</a>
        </li>
        <li>
          <a href="#team">Our Team</a>
        </li>
        <li>
          <a href="#facilities">Facilities</a>
        </li>
        <li>
          <a href="#collaboration">Collaboration</a>
        </li>
      </ul>
    </nav>
  );
}

export default AboutNavbar;
