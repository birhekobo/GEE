/** One-time registration / payment processing fee (paid courses only). */
export const PAYMENT_FEE_ETB = 200;

export const trainingCourses = [
  {
    title: "Introduction to Remote Sensing",
    description:
      "Basics of remote sensing: principles, technologies, and applications. Perfect for beginners.",
    isFree: true,
    fee: 0,
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
    title: "Introduction to LaTeX",
    description:
      "Master document preparation with LaTeX for academic and professional writing. Learn to create beautiful, structured documents with mathematical equations and scientific notation.",
    isFree: true,
    fee: 0,
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
  {
    title: "Getting Started with Google Earth Engine",
    description:
      "Free introductory module: explore the GEE platform, browse satellite catalogs, and run your first environmental analysis scripts.",
    isFree: true,
    fee: 0,
    contents: [
      "GEE account setup and Code Editor tour",
      "Browsing satellite image collections",
      "Basic map visualization and exports",
      "Simple land-cover and NDVI examples",
      "Next steps toward the full GEE certificate course",
    ],
    preview: "/courses/gee",
  },
  {
    title: "Satellite Data Analysis with Python",
    description:
      "Analyze satellite imagery using Python. Covers NumPy, Pandas, Matplotlib, and real-world examples.",
    isFree: false,
    fee: 3500,
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
    isFree: false,
    fee: 3000,
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
    isFree: false,
    fee: 4500,
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
    isFree: false,
    fee: 5500,
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
    isFree: false,
    fee: 4000,
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
    isFree: false,
    fee: 4000,
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
];

export function getCourseByTitle(title) {
  return trainingCourses.find((c) => c.title === title);
}

export function formatCourseFee(course) {
  if (!course) return "—";
  return course.isFree ? "Free" : `${course.fee.toLocaleString()} ETB`;
}

export function getEnrollmentTotal(course) {
  if (!course || course.isFree) return 0;
  return course.fee + PAYMENT_FEE_ETB;
}

export const matlabCourse = {
  title: "Introduction to Geospatial (Mapping) Analysis using MATLAB",
  description:
    "Learn geospatial data processing, mapping, and analysis using MATLAB. Ideal for those interested in scientific computing and spatial data visualization.",
  image: "/images/FIG4.png",
  overview:
    "This course introduces geospatial analysis and mapping using MATLAB. You will learn to import, process, and visualize spatial data, and automate workflows for scientific and engineering applications.",
  learningPoints: [
    "🖥️ Overview of MATLAB for geospatial analysis",
    "🌍 Importing and visualizing spatial data",
    "🗺️ Coordinate systems and map projections",
    "📊 Raster and vector data processing",
    "🔎 Spatial analysis and mapping techniques",
    "⚙️ Automating workflows with MATLAB scripts",
    "📚 Case studies: Environmental and urban mapping",
  ],
  prerequisites: [
    "Basic knowledge of MATLAB or similar programming language",
    "Understanding of basic GIS concepts",
    "Familiarity with spatial data formats",
  ],
  duration: "8 weeks",
  level: "Intermediate",
  testimonials: [
    {
      text: "This course provided an excellent foundation in geospatial analysis using MATLAB. The hands-on projects were particularly valuable.",
      author: "Sarah Johnson, Environmental Scientist",
    },
    {
      text: "The course structure and practical examples made complex concepts easy to understand. Highly recommended!",
      author: "Birhanu Asmerom, GIS Analyst",
    },
  ],
  faqs: [
    {
      question: "Do I need MATLAB installed on my computer?",
      answer:
        "Yes, you'll need MATLAB installed. A student version is available at a reduced cost.",
    },
    {
      question: "What kind of projects will we work on?",
      answer:
        "You'll work on real-world projects including land cover classification, terrain analysis, and urban mapping.",
    },
  ],
};

export const mlCourse = {
  title: "Machine Learning in Remote Sensing",
  description:
    "Unlock the power of machine learning for satellite and aerial imagery analysis. This course covers essential ML concepts, algorithms, and hands-on applications in remote sensing.",
  image: "/images/FIG4.png",
  overview:
    "This advanced course explores the intersection of machine learning and remote sensing. Learn how to preprocess geospatial data, apply supervised and unsupervised learning, and build models for land cover classification, change detection, and more. Real-world case studies and hands-on projects are included.",
  learningPoints: [
    "🤖 Fundamentals of machine learning for geospatial data",
    "🗺️ Data preprocessing and feature engineering for remote sensing",
    "🌲 Land cover and land use classification",
    "🔄 Change detection using ML algorithms",
    "📊 Supervised vs. unsupervised learning in remote sensing",
    "🛰️ Deep learning for image analysis",
    "🛠️ Hands-on projects with real satellite data",
  ],
  prerequisites: [
    "Basic understanding of remote sensing concepts",
    "Familiarity with Python programming",
    "Basic knowledge of machine learning concepts",
  ],
  duration: "10 weeks",
  level: "Advanced",
  testimonials: [
    {
      text: "The course provided excellent insights into applying machine learning to remote sensing data. The practical projects were challenging but rewarding.",
      author: "David Wilson, Remote Sensing Specialist",
    },
    {
      text: "Great balance of theory and practice. The instructors were knowledgeable and supportive throughout the course.",
      author: "Emily Rodriguez, Data Scientist",
    },
  ],
  faqs: [
    {
      question: "What programming languages will we use?",
      answer:
        "The course primarily uses Python with popular ML libraries like TensorFlow and scikit-learn.",
    },
    {
      question: "Will I need a powerful computer?",
      answer:
        "A standard laptop is sufficient for most exercises. Cloud computing resources will be provided for more intensive tasks.",
    },
  ],
};
