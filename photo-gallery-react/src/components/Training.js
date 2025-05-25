import React, { useState } from "react";
import { Link } from "react-router-dom";
import Enrollment from "./Enrollment";
import "./Training.css";

const courses = [
  {
    title: "Introduction to Remote Sensing",
    description:
      "Basics of remote sensing: principles, technologies, and applications. Perfect for beginners.",
    contents: [
      "What is remote sensing?",
      "History and evolution of remote sensing",
      "Types of sensors and platforms",
      "Electromagnetic spectrum and image acquisition",
      "Image interpretation and analysis basics",
      "Applications in environment, agriculture, urban studies",
      "Future trends in remote sensing",
    ],
    preview: "/courses/intro-remote-sensing",
  },
  {
    title: "Satellite Data Analysis with Python",
    description:
      "Analyze satellite imagery using Python. Covers NumPy, Pandas, Matplotlib, and real-world examples.",
    contents: [
      "Introduction to satellite imagery and data formats",
      "Python basics for geospatial analysis",
      "NumPy for numerical operations",
      "Pandas for data manipulation",
      "Matplotlib for visualization",
      "Processing raster data (GeoTIFF)",
      "Case studies and projects",
    ],
    preview: "/courses/python",
  },
  {
    title: "Geospatial Analysis using QGIS",
    description:
      "Master QGIS for data management, visualization, and spatial analysis. Ideal for practical learners.",
    contents: [
      "Introduction to QGIS interface and tools",
      "Importing and managing spatial data",
      "Vector and raster data analysis",
      "Map projections and coordinate systems",
      "Spatial queries and geoprocessing",
      "Cartographic design and map layout",
      "Exporting maps and results",
      "Case studies: Land use, environmental monitoring, urban planning",
    ],
    preview: "/courses/qgis",
  },
  {
    title: "Google Earth Engine for Environmental Monitoring",
    description:
      "Use Google Earth Engine for large-scale monitoring, land cover change, and climate analysis.",
    contents: [
      "Introduction to Google Earth Engine (GEE) platform",
      "Accessing and visualizing satellite data in GEE",
      "Land cover classification and change detection",
      "Time series analysis for environmental monitoring",
      "Exporting results and maps from GEE",
      "Case studies: Deforestation, water resources, urban expansion",
    ],
    preview: "/courses/gee",
  },
  {
    title: "Machine Learning in Remote Sensing",
    description:
      "Apply machine learning to satellite data for classification, prediction, and anomaly detection.",
    contents: [
      "Introduction to machine learning concepts",
      "Overview of remote sensing data types",
      "Data preprocessing and feature extraction",
      "Supervised and unsupervised classification",
      "Regression and prediction models",
      "Model evaluation and validation",
      "Case studies: Land cover mapping, change detection, anomaly detection",
    ],
    preview: "/courses/ml",
  },
  {
    title: "Introduction to Numerical Analysis with MATLAB Applications",
    description:
      "Master the fundamentals of numerical analysis and learn to solve real-world problems using MATLAB. Ideal for students, engineers, and researchers seeking practical computational skills.",
    contents: [
      "Fundamentals of numerical analysis",
      "Root finding and solving nonlinear equations",
      "Interpolation and curve fitting techniques",
      "Numerical integration and differentiation",
      "Solving systems of linear equations",
      "Numerical solutions to ordinary differential equations",
      "Practical MATLAB programming for numerical methods",
    ],
    preview: "/courses/numerical-matlab",
  },
  {
    title: "Introduction to Geospatial (Mapping) Analysis using MATLAB",
    description:
      "Learn geospatial data processing, mapping, and analysis using MATLAB. Ideal for those interested in scientific computing and spatial data visualization.",
    contents: [
      "Overview of MATLAB for geospatial analysis",
      "Importing and visualizing spatial data",
      "Coordinate systems and map projections",
      "Raster and vector data processing",
      "Spatial analysis and mapping techniques",
      "Automating workflows with MATLAB scripts",
      "Case studies: Environmental and urban mapping",
    ],
    preview: "/courses/matlab",
  },
  {
    title: "Introduction to LaTeX",
    description:
      "Master document preparation with LaTeX for academic and professional writing. Learn to create beautiful, structured documents with mathematical equations and scientific notation.",
    contents: [
      "Introduction to LaTeX and its advantages",
      "Basic document structure and commands",
      "Mathematical equations and formulas",
      "Tables, figures, and references",
      "Bibliography management with BibTeX",
      "Customizing document styles and templates",
      "Advanced features: presentations, posters, and reports",
      "Best practices for academic writing",
    ],
    preview: "/courses/latex",
  },
];

const Training = () => {
  const [openIndexes, setOpenIndexes] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const toggleContents = (idx) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handleEnroll = (courseTitle) => {
    setSelectedCourse(courseTitle);
  };

  return (
    <section className="training-section">
      <h1 className="training-title">Our Training Programs</h1>
      <p className="training-intro">
        Boost your expertise in satellite remote sensing and geospatial
        analysis. Our hands-on, expert-led courses are designed for all levels
        and delivered in a modern, interactive format.
      </p>
      <div className="training-grid">
        {courses.map((course, idx) => (
          <div className="training-card" key={course.title}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button
              className="toggle-contents-btn"
              onClick={() => toggleContents(idx)}
              aria-expanded={openIndexes.includes(idx)}
              aria-controls={`course-contents-${idx}`}
            >
              {openIndexes.includes(idx)
                ? "Hide Course Contents"
                : "View Course Contents"}
            </button>
            <ul
              className="course-contents"
              id={`course-contents-${idx}`}
              style={{ display: openIndexes.includes(idx) ? "block" : "none" }}
            >
              {course.contents.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <button
              onClick={() => handleEnroll(course.title)}
              className="btn-secondary"
            >
              Enroll Now
            </button>
            <Link to={course.preview} className="preview-link">
              Course Preview
            </Link>
          </div>
        ))}
      </div>
      {selectedCourse && (
        <div className="enrollment-modal">
          <div className="enrollment-modal-content">
            <button
              className="close-button"
              onClick={() => setSelectedCourse(null)}
            >
              ×
            </button>
            <Enrollment courseTitle={selectedCourse} />
          </div>
        </div>
      )}
      <div className="training-benefits">
        <h2>Why Choose Our Training?</h2>
        <ul>
          <li>Expert Instructors with real-world experience</li>
          <li>Hands-on, project-based learning</li>
          <li>Flexible online and in-person options</li>
          <li>Certification upon completion</li>
        </ul>
      </div>
    </section>
  );
};

export default Training;
