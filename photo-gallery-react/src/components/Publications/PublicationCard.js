import React from "react";
import PropTypes from "prop-types";

const PublicationCard = ({ publication }) => {
  const { title, authors, year, journal, doi, abstract } = publication;

  return (
    <div className="publication-card">
      <h3 className="publication-title">{title}</h3>
      <p className="publication-authors">{authors}</p>
      <p className="publication-year">{year}</p>
      <p className="publication-journal">{journal}</p>
      <p className="publication-doi">DOI: {doi}</p>
      <div className="publication-abstract">
        <p>{abstract}</p>
      </div>
    </div>
  );
};

PublicationCard.propTypes = {
  publication: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    journal: PropTypes.string.isRequired,
    doi: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
  }).isRequired,
};

export default PublicationCard;
