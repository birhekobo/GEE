// A catalogue of the web application platforms and project concepts developed
// around geospatial science, climate research, AI, education and digital platforms.
// Status: "Live" is the currently deployed platform; the remaining platforms
// are completed and ready for deployment.

export const webApplicationCategories = [
  {
    id: "geospatial",
    title: "Geospatial, GIS & Earth Observation",
    subtitle: "Mapping, spatial analysis and satellite data processing",
    projects: [
      {
        id: 1,
        name: "Geospatial Analysis Platform",
        description:
          "Interactive GIS analysis, spatial statistics, satellite data processing and map visualization.",
        features: ["Spatial analysis", "Buffer", "Overlay", "Zonal statistics"],
        status: "Completed - not deployed",
        flagship: true,
      },
      {
        id: 2,
        name: "Land Use Change Monitoring",
        description:
          "Multi-year land cover classification, change detection and environmental monitoring.",
        features: ["LULC", "Transition matrices", "Change maps"],
        status: "Completed - not deployed",
      },
      {
        id: 3,
        name: "Google Earth Engine AI Platform",
        description:
          "Satellite analysis, cloud processing, machine learning and remote sensing tools.",
        features: ["Satellite processing", "ML/DL", "Earth Engine"],
        status: "Completed - not deployed",
      },
      {
        id: 4,
        name: "Ethiopia Geospatial Data Explorer",
        description:
          "Interactive maps for Ethiopia regions, zones, woredas and environmental datasets.",
        features: ["Administrative maps", "Thematic layers", "Spatial data"],
        status: "Completed - not deployed",
      },
    ],
  },
  {
    id: "climate",
    title: "Climate Science & Atmospheric Research",
    subtitle: "Trends, projections, air quality and climate risk",
    projects: [
      {
        id: 5,
        name: "Climate Data Analytics Portal",
        description:
          "Climate trends, rainfall, temperature, drought and time-series analysis.",
        features: ["ERA5", "CHIRPS", "NASA POWER", "Time-series"],
        status: "Completed - not deployed",
        flagship: true,
      },
      {
        id: 6,
        name: "CMIP6 Climate Projection Explorer",
        description:
          "Future climate scenarios, ensemble models and regional climate projections.",
        features: ["SSP scenarios", "GCMs", "Ensemble projections"],
        status: "Completed - not deployed",
        flagship: true,
      },
      {
        id: 7,
        name: "Air Quality & Atmospheric Research Platform",
        description:
          "Air pollution, aerosols, satellite observations and atmospheric monitoring.",
        features: ["AOD", "PM2.5", "TROPOMI", "CALIPSO"],
        status: "Completed - not deployed",
      },
      {
        id: 8,
        name: "Drought & Climate Risk Monitor",
        description:
          "SPI, SPEI, VCI, drought severity and early-warning visualization.",
        features: ["SPI", "SPEI", "VCI", "Drought alerts"],
        status: "Completed - not deployed",
      },
    ],
  },
  {
    id: "agriculture",
    title: "Agriculture, Rangeland & Environmental Monitoring",
    subtitle: "Biomass, water productivity, fire and ecosystem health",
    projects: [
      {
        id: 9,
        name: "Grassland Biomass & Productivity Monitor",
        description:
          "Aboveground biomass estimation, seasonal productivity and rangeland condition monitoring.",
        features: ["GEE", "Biomass", "Productivity", "Rangeland"],
        status: "Completed - not deployed",
        flagship: true,
      },
      {
        id: 10,
        name: "Agricultural Water Productivity Platform",
        description:
          "WaPOR-inspired irrigation performance, water productivity and crop monitoring.",
        features: ["Irrigation", "Water productivity", "Crop monitoring"],
        status: "Completed - not deployed",
      },
      {
        id: 11,
        name: "Fire & Environmental Monitoring System",
        description:
          "Fire hotspots, burned areas, fire trends and landscape monitoring.",
        features: ["Hotspots", "Burned area", "Fire trends"],
        status: "Completed - not deployed",
      },
      {
        id: 12,
        name: "Ecosystem & Conservation Monitor",
        description:
          "Vegetation, ecosystem health, land degradation and conservation analysis.",
        features: ["Vegetation", "Degradation", "Conservation"],
        status: "Completed - not deployed",
      },
    ],
  },
  {
    id: "ai-data",
    title: "AI, Python & Data Science Applications",
    subtitle: "Machine learning, scientific Python and research tooling",
    projects: [
      {
        id: 13,
        name: "AI Geospatial Laboratory",
        description:
          "Machine learning tools for satellite imagery and spatial data.",
        features: ["Earth Engine", "scikit-learn", "TensorFlow"],
        status: "Completed - not deployed",
        flagship: true,
      },
      {
        id: 14,
        name: "Python Data Science Learning Lab",
        description:
          "Interactive Python tutorials, datasets, plots and data analysis lessons.",
        features: ["Python", "Pandas", "NumPy", "Plotly"],
        status: "Completed - not deployed",
        flagship: true,
      },
      {
        id: 15,
        name: "Climate AI & Predictive Analytics",
        description:
          "Climate prediction, XGBoost, model validation and SHAP explainability.",
        features: ["XGBoost", "CVAE", "SHAP"],
        status: "Completed - not deployed",
      },
      {
        id: 16,
        name: "Fake Citation Detection Tool",
        description:
          "Research citation checking, DOI verification and reference auditing.",
        features: ["Crossref API", "DOI checking", "Reference audit"],
        status: "Completed - not deployed",
      },
    ],
  },
  {
    id: "education",
    title: "Education & Digital Learning",
    subtitle: "Virtual labs, e-learning and exam preparation",
    projects: [
      {
        id: 17,
        name: "Digital Physics Laboratory",
        description:
          "Interactive physics simulations, experiments, graphs and virtual laboratory tools.",
        features: ["Simulations", "Virtual experiments", "Graphs"],
        status: "Completed - not deployed",
        flagship: true,
      },
      {
        id: 18,
        name: "Digital Physics Learning Platform",
        description:
          "Digital courses, lessons, assignments, quizzes and student progress tracking.",
        features: ["Courses", "Quizzes", "Progress tracking"],
        status: "Completed - not deployed",
      },
      {
        id: 19,
        name: "Ethiopian Academic Hub",
        description:
          "University learning resources, exit exam preparation and mock exams.",
        features: ["Exit exams", "Mock exams", "Resources"],
        status: "Completed - locally deployed",
        flagship: true,
        screenshot: "/images/screenshot_image/Ethio%20Academic%20Hub.png",
      },
      {
        id: 20,
        name: "Wollo University Science Museum",
        description:
          "Interactive space science, atmospheric science, physics and remote sensing exhibits.",
        features: ["Space science", "Atmospheric science", "Exhibits"],
        status: "Completed - not deployed",
      },
      {
        id: 41,
        name: "Wollo University Physics Department E-learning Platform",
        description:
          "Departmental e-learning portal with course materials, lectures, assignments and progress tracking for physics students.",
        features: ["E-learning", "Course materials", "Assignments"],
        status: "Completed - locally deployed",
        screenshot:
          "/images/screenshot_image/Wollo%20University%20Physics%20Department%20E-learning%20Platform.jpeg",
      },
    ],
  },
  {
    id: "university",
    title: "University & Institutional Management Systems",
    subtitle: "Research, performance, journals and academic administration",
    projects: [
      {
        id: 21,
        name: "University Research Hub",
        description:
          "Researcher profiles, publications, collaborations and project discovery.",
        features: ["Profiles", "Publications", "Collaboration"],
        status: "Completed - not deployed",
        flagship: true,
      },
      {
        id: 22,
        name: "University KPI Monitoring System",
        description:
          "Institutional performance tracking, indicators, reports and evaluation.",
        features: ["KPIs", "Reports", "Evaluation"],
        status: "Completed - locally deployed",
      },
      {
        id: 23,
        name: "Wollo University Journal Tracer",
        description:
          "Journal submission monitoring, editorial workflows and manuscript tracking.",
        features: ["Submissions", "Editorial workflow", "Manuscripts"],
        status: "Completed - not deployed",
      },
      {
        id: 24,
        name: "Academic Department Management Portal",
        description:
          "Courses, staff, teaching schedules, departmental records and academic activities.",
        features: ["Courses", "Staff", "Schedules"],
        status: "Completed - not deployed",
      },
      {
        id: 42,
        name: "Academic Course Load Management System (WU-ACLS)",
        description:
          "Course load planning and workload management for academic staff, teaching assignments and schedules.",
        features: ["Course load", "Workload tracking", "Scheduling"],
        status: "Completed - locally deployed",
      },
      {
        id: 43,
        name: "Wollo University Transcript Portal",
        description:
          "Student transcript generation, verification and academic record management.",
        features: ["Transcripts", "Verification", "Academic records"],
        status: "Completed - locally deployed",
      },
      {
        id: 45,
        name: "Research Manuscript Intelligence Platform (RMIP)",
        description:
          "Manuscript intake, editorial tracking, reviewer matching and research-quality intelligence for journals and institutional research offices.",
        features: ["Manuscript tracking", "Reviewer matching", "Quality checks"],
        status: "Completed - locally deployed",
        screenshot:
          "/images/screenshot_image/Research%20Manuscript%20Intelligence%20Platform%20(RMIP).png",
      },
    ],
  },
  {
    id: "knowledge",
    title: "Books, Research Resources & Knowledge Platforms",
    subtitle: "Digital books, repositories and scientific documentation",
    projects: [
      {
        id: 25,
        name: "Digital Scientific Book Platform",
        description:
          "Interactive HTML books, course materials and scientific learning resources.",
        features: ["HTML books", "Course materials", "Resources"],
        status: "Completed - not deployed",
      },
      {
        id: 26,
        name: "University Digital Repository",
        description:
          "Research papers, theses, publications and university digital archives.",
        features: ["Theses", "Publications", "Archives"],
        status: "Completed - not deployed",
      },
      {
        id: 27,
        name: "Atmospheric Research Training Portal",
        description:
          "Climate science training, Python workflows and research tutorials.",
        features: ["Training", "Python workflows", "Tutorials"],
        status: "Completed - not deployed",
      },
      {
        id: 28,
        name: "Research Knowledge Base",
        description:
          "Documentation, workflows, methods, manuals and scientific reference materials.",
        features: ["Documentation", "Methods", "Manuals"],
        status: "Completed - not deployed",
      },
    ],
  },
  {
    id: "consultancy",
    title: "Professional Consultancy & Public Web Platforms",
    subtitle: "Portfolio, services, dashboards and public-facing platforms",
    projects: [
      {
        id: 29,
        name: "Birhanu Asmerom Geospatial Solutions",
        description:
          "Professional consultancy website, portfolio, services, publications and client projects. This is the platform you are currently viewing.",
        features: ["Consultancy", "Portfolio", "Publications", "Training"],
        status: "Live",
        flagship: true,
        url: "https://birhanuasmerom.vercel.app",
      },
      {
        id: 30,
        name: "Geospatial Consultancy Portal",
        description:
          "GIS services, satellite analysis, climate studies, training and consulting.",
        features: ["GIS services", "Satellite analysis", "Consulting"],
        status: "Completed - not deployed",
      },
      {
        id: 31,
        name: "Ethiopia Data Visualization Portal",
        description:
          "Maps, regional data, climate statistics and interactive analytics.",
        features: ["Maps", "Regional data", "Analytics"],
        status: "Completed - not deployed",
      },
      {
        id: 32,
        name: "Scientific Project Showcase",
        description:
          "Demonstrations of research software, maps, analysis and scientific applications.",
        features: ["Research software", "Demos", "Maps"],
        status: "Completed - not deployed",
      },
    ],
  },
  {
    id: "specialized",
    title: "Specialized Climate & Research Applications",
    subtitle: "Focused research tools drawn from active scientific workflows",
    projects: [
      {
        id: 33,
        name: "Ethiopia Climate Projection Dashboard",
        description:
          "Future climate projections and scenario comparison for Ethiopia.",
        features: ["Projections", "Scenarios", "Ethiopia"],
        status: "Completed - not deployed",
      },
      {
        id: 34,
        name: "East Africa Climate Model Evaluator",
        description:
          "WRF, CMIP6 and ERA5 model performance evaluation for East Africa.",
        features: ["WRF", "CMIP6", "ERA5"],
        status: "Completed - not deployed",
      },
      {
        id: 35,
        name: "Climate & Health Analytics",
        description:
          "Climate variables, health exposure and risk indicators.",
        features: ["Health exposure", "Risk indicators"],
        status: "Completed - not deployed",
      },
      {
        id: 36,
        name: "Satellite Air Pollution Explorer",
        description:
          "AOD, atmospheric pollutants and satellite observations.",
        features: ["AOD", "Pollutants", "Satellite"],
        status: "Completed - not deployed",
      },
      {
        id: 37,
        name: "Climate Migration & Displacement Explorer",
        description:
          "Climate stress, mobility, exposure and regional analysis.",
        features: ["Climate stress", "Mobility", "Exposure"],
        status: "Completed - not deployed",
      },
      {
        id: 38,
        name: "Water Use Efficiency Dashboard",
        description:
          "Water productivity, biomass, evapotranspiration and environmental drivers.",
        features: ["Water productivity", "Biomass", "ET"],
        status: "Completed - not deployed",
      },
      {
        id: 39,
        name: "Extreme Weather Monitor",
        description:
          "Extreme rainfall, heat, drought and climate anomalies.",
        features: ["Extreme rainfall", "Heat", "Anomalies"],
        status: "Completed - not deployed",
      },
      {
        id: 40,
        name: "Ethiopia Environmental Data Portal",
        description:
          "Unified environmental and satellite datasets for Ethiopia.",
        features: ["Environmental data", "Satellite datasets", "Ethiopia"],
        status: "Completed - not deployed",
      },
      {
        id: 44,
        name: "Malaria Early Warning Platform",
        description:
          "Climate-driven malaria risk forecasting, surveillance and early warning for vulnerable regions.",
        features: ["Risk forecasting", "Surveillance", "Early warning"],
        status: "Completed - not deployed",
        flagship: true,
      },
    ],
  },
];

export const allWebApplications = webApplicationCategories.flatMap((category) =>
  category.projects.map((project) => ({
    ...project,
    category: category.title,
    categoryId: category.id,
  }))
);

export const recommendedStack = {
  backend: ["FastAPI", "Python", "Django", "Flask", "REST APIs"],
  frontend: ["Jinja2", "Bootstrap 5", "JavaScript"],
  mapping: ["Leaflet", "GeoPandas", "Google Earth Engine"],
  visualization: ["Plotly", "Matplotlib", "Chart.js"],
  database: ["PostgreSQL", "PostGIS", "SQLite"],
  deployment: ["GitHub", "Render", "Vercel"],
};
