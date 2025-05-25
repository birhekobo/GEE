// Publications data structure
const publications = [
  {
    id: 1,
    title: "Remote Sensing Applications in Environmental Monitoring",
    authors: "Smith, J., Johnson, A., & Williams, B.",
    year: 2023,
    journal: "Journal of Environmental Science",
    doi: "10.1234/jes.2023.001",
    category: "research",
    abstract:
      "A comprehensive study on the application of remote sensing techniques in environmental monitoring...",
  },
  {
    id: 2,
    title: "Machine Learning Approaches in Geospatial Analysis",
    authors: "Brown, C., Davis, E., & Wilson, F.",
    year: 2022,
    journal: "Geospatial Technology Review",
    doi: "10.5678/gtr.2022.002",
    category: "research",
    abstract:
      "Exploring the integration of machine learning methods in geospatial data analysis...",
  },
];

// Function to render publications
function renderPublications(filteredPublications = publications) {
  const publicationsContainer = document.getElementById(
    "publications-container"
  );
  if (!publicationsContainer) return;

  publicationsContainer.innerHTML = filteredPublications
    .map(
      (pub) => `
        <div class="publication-card" data-category="${pub.category}">
            <h3 class="publication-title">${pub.title}</h3>
            <p class="publication-authors">${pub.authors}</p>
            <p class="publication-year">${pub.year}</p>
            <p class="publication-journal">${pub.journal}</p>
            <p class="publication-doi">DOI: ${pub.doi}</p>
            <div class="publication-abstract">
                <p>${pub.abstract}</p>
            </div>
        </div>
    `
    )
    .join("");
}

// Function to filter publications
function filterPublications(category) {
  if (category === "all") {
    renderPublications();
  } else {
    const filtered = publications.filter((pub) => pub.category === category);
    renderPublications(filtered);
  }
}

// Navigation functionality
document.addEventListener("DOMContentLoaded", () => {
  // Existing publications initialization
  renderPublications();

  // Add event listeners for filter buttons if they exist
  const filterButtons = document.querySelectorAll(".filter-button");
  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const category = e.target.dataset.category;
      filterPublications(category);
    });
  });

  // Section navigation
  const navLinks = document.querySelectorAll(".section-nav a");
  const sections = document.querySelectorAll("section");

  // Function to update active section
  function updateActiveSection() {
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // Add scroll event listener
  window.addEventListener("scroll", updateActiveSection);

  // Add click event listeners to nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});
