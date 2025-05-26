import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <p>Copyright © 2025, All Right Reserved | Birhanu Asmerom</p>
      <div className="attribution">
        <div className="footer-logo-container">
          <img
            src="/images/Wollo University Logo.jpg"
            alt="Wollo University Logo"
            className="footer-logo"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/Wollo University Logo1.jpg";
            }}
          />
        </div>
        <p>
          Developed By Wollo University Department of Physics Atmospheric
          Science Research group
        </p>
      </div>
    </footer>
  );
}

export default Footer;
