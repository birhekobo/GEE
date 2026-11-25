import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

const primaryItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
];

const groups = [
  {
    id: "work-navigation",
    label: "Work",
    items: [
      { to: "/projects-collaboration", label: "Projects & Collaboration" },
      { to: "/applications", label: "Applications" },
      { to: "/gallery", label: "Gallery" },
      { to: "/web-applications", label: "Web Applications" },
    ],
  },
  {
    id: "research-navigation",
    label: "Research",
    items: [
      { to: "/data-methodology", label: "Data & Methodology" },
      { to: "/ai-research", label: "AI Research" },
      { to: "/publications", label: "Publications" },
    ],
  },
];

const trailingItems = [
  { to: "/student-exchange", label: "Exchange" },
  { to: "/training", label: "Training" },
  { to: "/contact", label: "Contact" },
];

function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const { pathname } = useLocation();

  // Close open menus whenever the user navigates to another page.
  useEffect(() => {
    setOpenMenu(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Escape closes both the dropdown and the mobile menu.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Outside clicks close whichever menu is open.
  useEffect(() => {
    if (!openMenu && !mobileMenuOpen) return undefined;

    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenMenu(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openMenu, mobileMenuOpen]);

  // The mobile panel should never remain open after returning to desktop.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenus = () => {
    setOpenMenu(null);
    setMobileMenuOpen(false);
  };

  const renderLink = ({ to, label }) => (
    <li key={to}>
      <NavLink
        to={to}
        end
        className={({ isActive }) =>
          isActive ? "nav-link nav-link--active" : "nav-link"
        }
        onClick={closeMenus}
      >
        {label}
      </NavLink>
    </li>
  );

  return (
    <header className="header" ref={headerRef}>
      <div className="header-content">
        <NavLink to="/" className="logo" end onClick={closeMenus}>
          <img
            src="/images/Wollo University Logo.png"
            alt="Wollo University Logo"
            className="site-logo"
          />
          <h1>GeoSat Intelligence</h1>
        </NavLink>

        <button
          type="button"
          className="mobile-nav-toggle"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-controls="primary-navigation"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav${mobileMenuOpen ? " primary-nav--open" : ""}`}
          aria-label="Main navigation"
        >
          <ul>
            {primaryItems.map(renderLink)}

            {groups.map(({ id, label, items }) => {
              const isOpen = openMenu === id;
              const isActive = items.some((item) => item.to === pathname);

              return (
                <li className="nav-group" key={id}>
                  <button
                    type="button"
                    className={`nav-link nav-group-button${
                      isOpen || isActive ? " nav-group-button--active" : ""
                    }`}
                    aria-expanded={isOpen}
                    aria-controls={id}
                    onClick={() => setOpenMenu(isOpen ? null : id)}
                  >
                    {label}
                    <span
                      className={`nav-caret${isOpen ? " nav-caret--open" : ""}`}
                      aria-hidden="true"
                    >
                      ▾
                    </span>
                  </button>

                  <ul
                    id={id}
                    className={`nav-group-menu${
                      isOpen ? " nav-group-menu--open" : ""
                    }`}
                  >
                    {items.map(renderLink)}
                  </ul>
                </li>
              );
            })}

            {trailingItems.map(renderLink)}
          </ul>
        </nav>

        <NavLink to="/contact" className="nav-cta" onClick={closeMenus}>
          Get in Touch
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
