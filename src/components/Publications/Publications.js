import React, { useState, useEffect } from "react";
import "./Publications.css";
import PublicationCard from "./PublicationCard";
import { publicationCategories, publications } from "./publicationsData";

const getCategoryFromUrl = () => {
  const requested = new URLSearchParams(window.location.search).get("category");
  return publicationCategories.some((category) => category.id === requested)
    ? requested
    : "all";
};

const categoryUrl = (categoryId) => {
  const params = new URLSearchParams(window.location.search);
  if (categoryId === "all") {
    params.delete("category");
  } else {
    params.set("category", categoryId);
  }
  const query = params.toString();
  return `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`;
};

const Publications = () => {
  const [activeCategory, setActiveCategory] = useState(getCategoryFromUrl);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("year");
  const [filteredPublications, setFilteredPublications] =
    useState(publications);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const syncCategoryFromUrl = () => setActiveCategory(getCategoryFromUrl());
    window.addEventListener("popstate", syncCategoryFromUrl);
    return () => window.removeEventListener("popstate", syncCategoryFromUrl);
  }, []);

  useEffect(() => {
    // Copy before filtering/sorting so the shared publications data is never mutated.
    let filtered = [...publications];

    // Apply category filter
    if (activeCategory !== "all") {
      filtered = filtered.filter((pub) => pub.category === activeCategory);
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (pub) =>
          pub.title.toLowerCase().includes(query) ||
          pub.authors.toLowerCase().includes(query) ||
          pub.abstract.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "year":
          return (b.year ?? 0) - (a.year ?? 0);
        case "title":
          return a.title.localeCompare(b.title);
        case "authors":
          return a.authors.localeCompare(b.authors);
        default:
          return 0;
      }
    });

    setFilteredPublications(filtered);
  }, [activeCategory, searchQuery, sortBy]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    window.history.pushState({}, "", categoryUrl(categoryId));
  };

  return (
    <section id="publications" className="publications-section">
      <h1 className="publications-title">Our Publications</h1>
      <p className="publications-intro">
        Explore our research contributions and scientific publications in the
        field of remote sensing and geospatial analysis.
      </p>

      <div className="publications-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search publications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
            aria-label="Search publications"
          />
        </div>

        <div className="sort-container">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
            aria-label="Sort publications"
          >
            <option value="year">Sort by Year</option>
            <option value="title">Sort by Title</option>
            <option value="authors">Sort by Authors</option>
          </select>
        </div>
      </div>

      <div className="filter-buttons">
        {publicationCategories.map((category) => (
          <button
            key={category.id}
            className={`filter-button ${
              activeCategory === category.id ? "active" : ""
            }`}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="publications-container">
          {filteredPublications.length > 0 ? (
            filteredPublications.map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))
          ) : (
            <div className="no-results">
              <p>No publications found matching your criteria.</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Publications;
