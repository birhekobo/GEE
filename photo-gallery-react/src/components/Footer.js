import React from "react";
import "./Footer.css";

const WOLLO_LOGO = "/images/Wollo University Logo.png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-copyright">
          Copyright © 2026. All Rights Reserved | Developed by Birhanu
          Asmerom
        </p>

        <div className="footer-attribution">
          <img
            src={WOLLO_LOGO}
            alt="Wollo University Logo"
            className="footer-logo"
          />
          <div className="footer-attribution-text">
            <p>Atmospheric Science Research Group</p>
            <p>Department of Physics, Wollo University.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
