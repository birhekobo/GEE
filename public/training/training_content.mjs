/**
 * Content engine for the standalone training documents.
 * Topic packs turn the short curriculum titles in src/data/courses.js into
 * usable lesson notes, exercises, and knowledge checks.
 */

const pack = (patterns, config) => ({ patterns, ...config });

const topicPacks = [
  pack(
    ["remote sensing", "electromagnetic", "sensor", "satellite", "image interpretation", "platform", "image acquisition"],
    {
      concepts: ["electromagnetic spectrum", "platform and sensor characteristics", "spatial/spectral/temporal resolution", "image interpretation"],
      tools: ["a satellite scene viewer", "band combinations and spectral indices", "ground-truth references"],
      practice: "compare at least two band combinations, label three land-cover features, and explain how resolution affects interpretation.",
      pitfall: "Do not compare images from different dates or sensors without checking calibration, cloud cover, and spatial resolution.",
      checks: [
        ["What does spatial resolution describe?", "The ground size of one pixel; smaller pixels mean finer spatial detail."],
        ["Why are near-infrared and red bands useful for vegetation?", "Vegetation strongly reflects near-infrared and absorbs red, making their contrast useful for vegetation indices such as NDVI."],
        ["What should be checked before comparing two satellite images?", "Date, sensor, calibration, cloud cover, projection, and spatial resolution."],
      ],
    }
  ),
  pack(
    ["gis", "qgis", "projection", "coordinate", "crs", "raster", "vector", "spatial analysis", "map layout", "geoprocessing", "boundaries", "zonal"],
    {
      concepts: ["vector and raster data models", "coordinate reference systems", "spatial queries and overlays", "cartographic layout"],
      tools: ["QGIS or GeoPandas", "a CRS transform", "attribute tables and geometry checks"],
      practice: "import two layers, align their CRS, run a buffer or clip operation, and produce a labelled map with a legend and scale bar.",
      pitfall: "Always confirm the CRS before measuring distance or area; degrees are not metres.",
      checks: [
        ["What is the difference between vector and raster data?", "Vector data use points, lines, and polygons; raster data use a grid of cells or pixels."],
        ["Why must layers share a CRS before analysis?", "Otherwise distances, areas, and overlays are computed in incompatible coordinate systems."],
        ["What does a clip operation do?", "It extracts the part of one layer that falls inside the extent of another layer."],
      ],
    }
  ),
  pack(
    ["earth engine", "gee", "imagecollection", "catalog", "ndvi", "classification", "change detection", "time series", "export", "rgee", "air quality", "climate data analysis"],
    {
      concepts: ["Earth Engine data catalog", "ImageCollection filtering", "cloud masking and compositing", "classification and change detection"],
      tools: ["Google Earth Engine Code Editor or rgee", "ImageCollection filters", "export tasks"],
      practice: "filter an ImageCollection by date and region, apply a cloud mask, calculate an index, and export a small result for validation.",
      pitfall: "Unfiltered ImageCollections can be very large; always limit date, region, and bands before running expensive operations.",
      checks: [
        ["How do you reduce an ImageCollection to one image?", "Use a reducer such as median, mean, or qualityMosaic over the collection."],
        ["Why is cloud masking important?", "Clouds and shadows distort spectral values and can lead to false change or index results."],
        ["What should be specified when exporting an Earth Engine result?", "Region, resolution or scale, projection/CRS, file format, and asset or drive destination."],
      ],
    }
  ),
  pack(
    ["python", "numpy", "pandas", "matplotlib", "rasterio", "geopandas", "rioxarray", "xarray", "cartopy", "automation", "cloud computing", "pipeline", "jupyter", "gdal"],
    {
      concepts: ["array and tabular data handling", "raster and vector I/O", "reproducible notebooks", "workflow automation"],
      tools: ["Python", "NumPy/Pandas or xarray", "rasterio/GeoPandas"],
      practice: "write a small script that reads a dataset, checks its metadata, computes one summary, saves a figure, and exports a result.",
      pitfall: "Do not rely on interactive notebook state; save parameters and use functions so the workflow can be rerun.",
      checks: [
        ["Why is metadata important when reading geospatial data?", "It defines extent, resolution, CRS, bands, and no-data values needed for correct processing."],
        ["What makes a workflow reproducible?", "Clear inputs, pinned or documented packages, functions, saved parameters, and recorded outputs."],
        ["When would xarray be preferable to a plain array?", "For labelled, multi-dimensional data such as time-series raster cubes."],
      ],
    }
  ),
  pack(
    ["matlab", "matrix", "script", "function", "plot", "numerical", "root finding", "interpolation", "integration", "differentiation", "linear system", "ode", "vectors"],
    {
      concepts: ["matrix-based computation", "script and function design", "numerical approximation", "visualisation of results"],
      tools: ["MATLAB", "built-in numerical functions", "plots and live scripts"],
      practice: "implement the method in a script, test it against a simple known case, plot the result, and document error behaviour.",
      pitfall: "Check vector dimensions and convergence criteria; many MATLAB errors come from shape mismatches or stopping too early.",
      checks: [
        ["Why is MATLAB well suited to numerical work?", "It provides matrix operations, numerical libraries, and visualisation in one environment."],
        ["Why test a numerical method on a known case?", "It verifies the implementation before applying it to harder problems."],
        ["What is convergence in an iterative method?", "The sequence of approximations approaches a stable solution within a tolerance."],
      ],
    }
  ),
  pack(
    ["latex", "document structure", "equation", "table", "figure", "bibtex", "template", "presentation", "poster", "academic writing", "reference"],
    {
      concepts: ["document structure", "math typesetting", "floats for tables and figures", "BibTeX references"],
      tools: ["LaTeX", "a compiled .tex document", "a .bib bibliography file"],
      practice: "create a short document with sections, one equation, one figure, one table, and at least two BibTeX citations.",
      pitfall: "Use labels and cross-references instead of hard-coded numbers so the document stays correct after edits.",
      checks: [
        ["What is the advantage of BibTeX over manual reference lists?", "Citations and the bibliography are generated consistently from one source file."],
        ["How are figures usually handled in LaTeX?", "As float environments with captions, labels, and cross-references."],
        ["Why avoid hard-coded section numbers?", "LaTeX renumbers automatically; manual numbers become wrong when content changes."],
      ],
    }
  ),
  pack(
    ["web mapping", "leaflet", "html", "css", "javascript", "tile", "wms", "wmts", "geojson", "popup", "marker", "heatmap", "choropleth", "turf.js", "hosting", "api", "dashboard"],
    {
      concepts: ["client-side map architecture", "tile layers and web services", "GeoJSON styling", "interactive map components"],
      tools: ["HTML/CSS/JavaScript", "Leaflet or a similar library", "GeoJSON and tile services"],
      practice: "build a map with a base layer, one GeoJSON layer, popups, a legend, and a simple filter control.",
      pitfall: "Attribute and attribution rules apply to many basemaps; always credit tile providers and check usage limits.",
      checks: [
        ["What does a tile layer provide?", "Pre-rendered map images served in zoom levels for fast display."],
        ["Why use GeoJSON in web maps?", "It is lightweight, human-readable, and supported by most mapping libraries."],
        ["What should a production map include?", "Attribution, responsive layout, error handling, and tested data sources."],
      ],
    }
  ),
  pack(
    ["visualization", "visualisation", "cartographic", "thematic map", "chart", "color", "legend", "hierarchy", "3d", "terrain", "communication", "folium", "plotly", "animation"],
    {
      concepts: ["visual hierarchy", "colour and legend design", "chart selection", "storytelling with maps"],
      tools: ["QGIS layout or Plotly/Folium", "a clean dataset", "a design checklist"],
      practice: "create two visualisations of the same dataset, then compare which one communicates the pattern more clearly and why.",
      pitfall: "Avoid rainbow colour ramps and misleading axes; both can distort the message.",
      checks: [
        ["What is visual hierarchy?", "The arrangement that guides the reader to the most important information first."],
        ["Why is a legend important?", "It explains the meaning of symbols, colours, and class breaks."],
        ["When is an animation useful?", "When the pattern being communicated changes over time."],
      ],
    }
  ),
  pack(
    ["machine learning", "supervised", "unsupervised", "feature", "classification", "regression", "prediction", "validation", "random forest", "svm", "gbm", "anomaly"],
    {
      concepts: ["training and test data", "feature engineering", "model selection", "validation metrics"],
      tools: ["scikit-learn or Earth Engine classifiers", "training samples", "confusion matrix"],
      practice: "prepare labelled samples, train two models, compare confusion matrices, and explain which model is preferable.",
      pitfall: "Never evaluate a model on the same data used to train it; use a held-out test set or cross-validation.",
      checks: [
        ["What is overfitting?", "When a model learns training noise and performs poorly on unseen data."],
        ["What does a confusion matrix show?", "Correct and incorrect counts by class, enabling precision, recall, and accuracy calculations."],
        ["Why are training samples important?", "They define what the model learns; biased or mixed samples produce unreliable predictions."],
      ],
    }
  ),
  pack(
    ["deep learning", "cnn", "convolution", "u-net", "deeplab", "segmentformer", "segmentation", "augmentation", "fine-tuning", "inference", "pytorch", "tensorflow", "iou", "f1"],
    {
      concepts: ["convolutional feature learning", "encoder-decoder segmentation", "data augmentation", "IoU/F1 evaluation"],
      tools: ["PyTorch or TensorFlow", "labelled image tiles", "a GPU or cloud runtime"],
      practice: "prepare a small tile dataset, train or fine-tune a compact model, inspect predictions, and compute IoU.",
      pitfall: "Check for train/validation leakage caused by overlapping tiles from the same scene.",
      checks: [
        ["What does a U-Net architecture do?", "It combines a contracting encoder with an expanding decoder and skip connections for pixel-level prediction."],
        ["Why augment training images?", "To improve generalisation by exposing the model to rotations, flips, brightness changes, and crops."],
        ["What does IoU measure?", "The overlap between predicted and reference shapes divided by their union."],
      ],
    }
  ),
  pack(
    ["artificial intelligence", "ai", "foundation model", "transformer", "vit", "object detection", "shap", "grad-cam", "self-supervised", "deployment", "explainability", "map service"],
    {
      concepts: ["classical ML versus deep learning", "foundation and self-supervised models", "explainability", "deployment on map services"],
      tools: ["Python deep-learning libraries", "model explanation tools", "a simple map or dashboard"],
      practice: "compare a classical model with a deep model, generate one explanation view, and discuss deployment constraints.",
      pitfall: "A high accuracy score is not enough; consider latency, interpretability, bias, and maintenance cost.",
      checks: [
        ["What is a foundation model?", "A large pre-trained model that can be adapted to many downstream tasks."],
        ["What does SHAP or Grad-CAM help with?", "Explaining which features or image regions influenced a model's prediction."],
        ["What should be considered before deployment?", "Latency, compute cost, data drift, explainability, and user trust."],
      ],
    }
  ),
  pack(
    ["climate", "drought", "lst", "land surface temperature", "heat island", "carbon", "biomass", "deforestation", "urban heat", "era5", "chirps", "extreme", "indices", "rainfall trend", "temperature trend"],
    {
      concepts: ["climate indicators from space", "time-series anomaly detection", "index calculation", "trend interpretation"],
      tools: ["climate datasets such as ERA5 or CHIRPS", "Earth Engine or Python", "trend and anomaly plots"],
      practice: "compute one climate index over a period, map its spatial pattern, and test whether the trend is statistically meaningful.",
      pitfall: "Separate seasonal cycles from long-term trends; short records can be misleading.",
      checks: [
        ["What is a climate anomaly?", "The difference between an observed value and a reference or long-term average."],
        ["Why are long time series needed for trend analysis?", "They reduce the influence of short-term variability and extreme years."],
        ["How can satellite data support climate reporting?", "By providing consistent, repeatable measurements over large areas and long periods."],
      ],
    }
  ),
  pack(
    ["urban", "smart city", "lulc", "land use", "growth", "utility", "population", "service area", "infrastructure", "city", "risk"],
    {
      concepts: ["urban land-use classification", "growth modelling", "service-area analysis", "urban indicators"],
      tools: ["GIS and remote sensing", "land-use maps", "network or proximity tools"],
      practice: "map current land use, identify growth zones, calculate a service-area measure, and propose one planning action.",
      pitfall: "Urban boundaries depend on the definition used; document the threshold and date clearly.",
      checks: [
        ["What is LULC classification?", "Assigning each pixel or polygon to a land-use or land-cover class."],
        ["What is a service area?", "The area reachable from a facility within a defined time or distance."],
        ["Why combine GIS with remote sensing for cities?", "Remote sensing provides current land cover; GIS provides boundaries, networks, and administrative data."],
      ],
    }
  ),
  pack(
    ["r programming", "r ", "rgee", "sf", "terra", "raster package", "reticulate", "ggplot", "shapefile in r"],
    {
      concepts: ["R spatial objects", "sf and terra workflows", "R/Python integration", "reproducible R scripts"],
      tools: ["RStudio or R script", "sf and terra", "reticulate where Python is needed"],
      practice: "read a vector and raster layer, reproject them to a common CRS, compute a zonal summary, and plot the result.",
      pitfall: "R packages use different spatial object classes; convert deliberately and verify geometries after transformation.",
      checks: [
        ["What does the sf package provide?", "Simple feature access for vector data in R."],
        ["When is reticulate useful?", "When an R workflow needs to call Python libraries."],
        ["Why verify geometry after reprojection?", "To catch invalid shapes, shifted features, or unexpected coordinate units."],
      ],
    }
  ),
  pack(
    ["capstone", "project", "reproducible", "troubleshooting", "glossary", "assessment", "instructor", "student training", "curriculum", "practical", "workshop", "rubric", "final"],
    {
      concepts: ["problem definition", "reproducible workflow", "quality control", "communication of results"],
      tools: ["a project brief", "version-controlled scripts", "a final report template"],
      practice: "define a question, select data, document processing steps, validate outputs, and present a concise recommendation.",
      pitfall: "Start with the question and data limits, not with a tool; otherwise the project can become a collection of unused steps.",
      checks: [
        ["What should a project brief include?", "Objective, study area, data sources, method, deliverables, and timeline."],
        ["Why keep a processing log?", "It makes the work repeatable and helps diagnose errors later."],
        ["What makes a conclusion useful?", "It answers the original question and states limitations honestly."],
      ],
    }
  ),
];

const defaultPack = {
  concepts: ["problem definition", "data preparation", "method selection", "result validation"],
  tools: ["a small sample dataset", "documented scripts or steps", "a validation checklist"],
  practice: "prepare the input, apply the core method, check the output against a simple reference, and write a short interpretation.",
  pitfall: "Record assumptions as you work; undocumented choices are the most common source of irreproducible results.",
  checks: [
    ["What is the first step in any geospatial analysis?", "Define the question, study area, and required data clearly."],
    ["Why validate results?", "To catch processing errors and confirm that the output answers the original question."],
    ["What belongs in a final note?", "The method, key assumptions, outputs, limitations, and next steps."],
  ],
};

function pickPack(text) {
  const value = String(text || "").toLowerCase();
  return topicPacks.find((item) => item.patterns.some((pattern) => value.includes(pattern))) || defaultPack;
}

function cleanFocus(title) {
  return String(title)
    .replace(/^W\d+\.\s*/i, "")
    .replace(/^P\d+\.\s*/i, "")
    .replace(/^\d+(?:\.\d+)?\s*/, "")
    .replace(/^-\s*/, "")
    .replace(/^What is\s+/i, "")
    .replace(/^Introduction to\s+/i, "")
    .replace(/^Getting to know the\s+/i, "")
    .replace(/\?$/, "")
    .trim();
}

function buildModuleDoc(title, courseTitle, index) {
  const focus = cleanFocus(title);
  const focusPhrase = focus.replace(/[?.]+$/, "").trim();
  const found = pickPack(`${courseTitle} ${title}`);
  const tools = found.tools;
  const concepts = found.concepts;

  return {
    index,
    title: focus,
    focus: focusPhrase,
    objectives: [
      `Explain ${focusPhrase.toLowerCase()} and where it fits within ${courseTitle}.`,
      `Use ${tools[0]}${tools[1] ? ` and ${tools[1]}` : ""} to complete a small, documented workflow.`,
      `Validate the result, record assumptions, and communicate the main finding clearly.`,
    ],
    concepts,
    notes: [
      `${focus} is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.`,
      `The central ideas in this lesson are ${concepts.slice(0, 3).join(", ")}. Use ${tools[0]} to demonstrate the idea, and use ${tools[1] || "an independent check"} to confirm that the output behaves as expected.`,
      found.pitfall,
    ],
    exercise: [
      `Write a one-sentence question and define the study area or sample extent for ${focusPhrase.toLowerCase()}.`,
      `Prepare the input data and record its source, date, resolution or scale, and coordinate system where relevant.`,
      `Apply the main technique with ${tools[0]}: ${found.practice}`,
      `Validate the result visually and numerically; note any unexpected patterns, missing values, or outliers.`,
      `Export the final map, table, or figure and write a short interpretation with limitations and next steps.`,
    ],
    quiz: found.checks.map(([question, answer]) => ({ question, answer })),
    deliverable: `A one-page practical note containing the question, data description, method steps, one output, and three bullet points of interpretation.`,
  };
}

function buildCourseDocument(course) {
  const modules = course.contents.map((title, index) => buildModuleDoc(title, course.title, index + 1));
  const level = course.isFree ? "Introductory" : "Certificate / intermediate-to-advanced";
  const prerequisites = course.isFree
    ? ["Basic computer literacy and a modern web browser.", "No prior programming experience is required for the introductory lessons."]
    : [
        "Comfort with files, folders, and basic data tables.",
        "Introductory knowledge of the relevant tool or programming language.",
        "Willingness to complete short practical exercises after each module.",
      ];

  return {
    level,
    prerequisites,
    outcomes: modules.slice(0, 6).map((module, index) => ({
      text: `Use ${module.concepts.slice(0, 2).join(" and ")} to work with ${module.title.toLowerCase()} and explain the result.`,
      index: index + 1,
    })),
    modules,
    assessment: [
      { area: "Participation and preparation", weight: 20, evidence: "Short reflections and completed setup checks." },
      { area: "Module exercises", weight: 40, evidence: "Practical notes, maps, tables, and annotated outputs." },
      { area: "Knowledge checks", weight: 20, evidence: "Quiz responses and corrections." },
      { area: "Capstone project", weight: 20, evidence: "Final report, reproducible workflow, and presentation." },
    ],
    capstone: {
      title: `${course.title}: Final Applied Project`,
      steps: [
        "Choose a focused question related to the course theme and define the study area or sample dataset.",
        "Write a short project brief with data sources, intended method, and expected deliverables.",
        "Complete the processing workflow using at least three methods learned in this course.",
        "Validate the outputs and document every assumption, parameter, and limitation.",
        "Submit a final report with maps or figures, a reproducible workflow, and a concise recommendation.",
      ],
    },
    resources: [
      "Course dataset catalogue and local sample files.",
      "Tool documentation and official user guides for the software used in the lessons.",
      "A personal processing log that records commands, parameters, and output file names.",
      "Peer review checklist: question, data, method, validation, interpretation, and limitations.",
    ],
  };
}

export { buildCourseDocument, buildModuleDoc, pickPack };
