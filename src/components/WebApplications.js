import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  allWebApplications,
  recommendedStack,
  webApplicationCategories,
} from "../data/webApplications";
import "./WebApplications.css";

const statusClass = (status) =>
  `webapp-status--${status
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;

const WebApplications = () => {
  const [query, setQuery] = useState("");
  const [showFlagshipsOnly, setShowFlagshipsOnly] = useState(false);

  const flagshipIds = useMemo(
    () => new Set(allWebApplications.filter((p) => p.flagship).map((p) => p.id)),
    []
  );

  const visibleCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    return webApplicationCategories
      .map((category) => ({
        ...category,
        projects: category.projects.filter((project) => {
          if (showFlagshipsOnly && !project.flagship) return false;
          if (!q) return true;
          const haystack = [
            project.name,
            project.description,
            category.title,
            ...(project.features || []),
          ]
            .join(" ")
            .toLowerCase();
          return haystack.includes(q);
        }),
      }))
      .filter((category) => category.projects.length > 0);
  }, [query, showFlagshipsOnly]);

  const visibleCount = visibleCategories.reduce(
    (total, category) => total + category.projects.length,
    0
  );

  return (
    <div className="webapps">
      <div className="webapps-content">
        <header className="webapps-header">
          <h1>Web Applications Portfolio</h1>
          <p className="webapps-lead">
            A connected ecosystem of {allWebApplications.length} web application
            platforms spanning geospatial science, climate research, AI,
            education, university systems and digital knowledge. One platform
            is live and two are deployed locally; the rest are completed and
            ready for deployment.
          </p>
        </header>

        <div className="webapps-stats" aria-label="Portfolio summary">
          <div className="webapps-stat">
            <strong>{allWebApplications.length}</strong>
            <span>Platforms</span>
          </div>
          <div className="webapps-stat">
            <strong>{webApplicationCategories.length}</strong>
            <span>Focus areas</span>
          </div>
          <div className="webapps-stat">
            <strong>{flagshipIds.size}</strong>
            <span>Flagship projects</span>
          </div>
          <div className="webapps-stat">
            <strong>
              {
                allWebApplications.filter(
                  (p) => p.status === "Completed - not deployed"
                ).length
              }
            </strong>
            <span>Ready to deploy</span>
          </div>
          <div className="webapps-stat">
            <strong>
              {allWebApplications.filter((p) => p.status === "Live").length}
            </strong>
            <span>Live now</span>
          </div>
          <div className="webapps-stat">
            <strong>
              {
                allWebApplications.filter(
                  (p) => p.status === "Completed - locally deployed"
                ).length
              }
            </strong>
            <span>Locally deployed</span>
          </div>
        </div>

        <div className="webapps-toolbar">
          <label className="webapps-search">
            <span className="webapps-search-icon" aria-hidden="true">
              ⌕
            </span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search platforms, features or topics…"
              aria-label="Search web application platforms"
            />
          </label>
          <label className="webapps-toggle">
            <input
              type="checkbox"
              checked={showFlagshipsOnly}
              onChange={(event) => setShowFlagshipsOnly(event.target.checked)}
            />
            Flagship projects only
          </label>
        </div>

        <nav className="webapps-jump" aria-label="Jump to focus area">
          {visibleCategories.map((category) => (
            <a key={category.id} href={`#webapps-${category.id}`}>
              {category.title.split(",")[0]}
            </a>
          ))}
        </nav>

        <p className="webapps-result-count" aria-live="polite">
          Showing {visibleCount} of {allWebApplications.length} platforms
        </p>

        {visibleCategories.length === 0 ? (
          <div className="webapps-empty">
            {query
              ? `No platforms match “${query}”. Try a different search term.`
              : "No platforms match the current filters."}
          </div>
        ) : (
          visibleCategories.map((category, index) => (
            <section
              className="webapps-section"
              id={`webapps-${category.id}`}
              key={category.id}
            >
              <div className="webapps-section-heading">
                <span className="webapps-section-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2>{category.title}</h2>
                  <p>{category.subtitle}</p>
                </div>
              </div>

              <div className="webapps-grid">
                {category.projects.map((project) => (
                  <article className="webapp-card" key={project.id}>
                    <div className="webapp-card-top">
                      <span className="webapp-number">#{project.id}</span>
                      <span
                        className={`webapp-status ${statusClass(
                          project.status
                        )}`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <ul className="webapp-features">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <div className="webapp-card-footer">
                      {project.flagship && (
                        <span className="webapp-flagship">★ Flagship</span>
                      )}
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="webapp-live-link"
                        >
                          Visit live site ↗
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))
        )}

        <section className="webapps-stack">
          <h2>Recommended Shared Technology Stack</h2>
          <p>
            One consistent architecture keeps the ecosystem maintainable and
            lets components, datasets and design patterns be reused.
          </p>
          <div className="webapps-stack-grid">
            {Object.entries(recommendedStack).map(([layer, tools]) => (
              <div className="webapps-stack-card" key={layer}>
                <h3>{layer}</h3>
                <p>{tools.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="webapps-next">
          <h2>Build a connected ecosystem</h2>
          <p>
            The greatest value comes from 5–10 powerful, interconnected
            applications with a shared design system — not 40 isolated
            websites. Explore related work and collaboration opportunities:
          </p>
          <div className="webapps-next-links">
            <Link to="/projects-collaboration">Projects &amp; Collaboration</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Get in Touch</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebApplications;
