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
  const navRef = useRef(null);
  const { pathname } = useLocation();

  // Close the open dropdown whenever the user navigates to another page.
  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  // Escape closes the open dropdown.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // An outside click closes the open dropdown.
  useEffect(() => {
    if (!openMenu) return undefined;

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenu]);

  const renderLink = ({ to, label }) => (
    <li key={to}>
      <NavLink
        to={to}
        end
        className={({ isActive }) =>
          isActive ? "nav-link nav-link--active" : "nav-link"
        }
        onClick={() => setOpenMenu(null)}
      >
        {label}
      </NavLink>
    </li>
  );

  return (
    <header className="header">
      <div className="header-content">
        <NavLink to="/" className="logo" end onClick={() => setOpenMenu(null)}>
          <img
            src="/images/Wollo University Logo.png"
            alt="Wollo University Logo"
            className="site-logo"
          />
          <h1>GeoSat Intelligence</h1>
        </NavLink>

        <nav
          id="primary-navigation"
          className="primary-nav"
          aria-label="Main navigation"
          ref={navRef}
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

        <NavLink to="/contact" className="nav-cta" onClick={() => setOpenMenu(null)}>
          Get in Touch
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
