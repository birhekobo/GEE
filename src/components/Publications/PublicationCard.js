import React from "react";
import PropTypes from "prop-types";

const PublicationCard = ({ publication }) => {
  const {
    title,
    authors,
    year,
    journal,
    doi,
    abstract,
    status,
    advisor,
    coAdvisor,
    contents,
    screenshot,
  } = publication;

  return (
    <div className="publication-card">
      {screenshot && (
        <figure className="publication-screenshot">
          <img src={screenshot} alt={`${title} screenshot`} loading="lazy" />
          <figcaption>Publication screenshot</figcaption>
        </figure>
      )}
      <h3 className="publication-title">{title}</h3>
      {status && <p className="publication-status">{status}</p>}
      <p className="publication-authors">{authors}</p>
      {advisor && <p className="publication-authors">Advisor: {advisor}</p>}
      {coAdvisor && (
        <p className="publication-authors">Co-Advisor: {coAdvisor}</p>
      )}
      {year && <p className="publication-year">{year}</p>}
      <p className="publication-journal">{journal}</p>
      <p className="publication-doi">DOI: {doi}</p>
      <div className="publication-abstract">
        <p>{abstract}</p>
      </div>
      {contents && contents.length > 0 && (
        <details className="publication-toc">
          <summary>Table of Contents</summary>
          {contents.map((part) => (
            <div className="publication-toc-part" key={part.heading}>
              <h4>{part.heading}</h4>
              <ul>
                {part.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </details>
      )}
    </div>
  );
};

PublicationCard.propTypes = {
  publication: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    year: PropTypes.number,
    journal: PropTypes.string.isRequired,
    doi: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
    status: PropTypes.string,
    advisor: PropTypes.string,
    coAdvisor: PropTypes.string,
    screenshot: PropTypes.string,
    contents: PropTypes.arrayOf(
      PropTypes.shape({
        heading: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ),
  }).isRequired,
};

export default PublicationCard;
