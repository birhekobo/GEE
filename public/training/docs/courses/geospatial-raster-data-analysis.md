# Geospatial Raster Data Analysis

> Go beyond the basics with advanced Python techniques for geospatial data processing, automation, and machine learning integration.

| Item | Detail |
| --- | --- |
| Category | Certificate Course |
| Level | Certificate / intermediate-to-advanced |
| Course fee | 5,000 ETB |
| Processing fee | 200 ETB |
| Total | 5,200 ETB |
| Modules | 7 |
| Lessons | 7 |
| Knowledge checks | 21 questions |
| React preview | [/courses/python](http://localhost:3000/courses/python) |

## Course guide

Geospatial Raster Data Analysis is a certificate / intermediate-to-advanced programme built around 7 practical modules. Work through the modules in order; each one includes objectives, notes, a hands-on exercise, a knowledge check, and a deliverable.

### Learning outcomes

1. Use vector and raster data models and coordinate reference systems to work with advanced numpy and pandas for geospatial data and explain the result.
2. Use electromagnetic spectrum and platform and sensor characteristics to work with rasterio and gdal for satellite imagery processing and explain the result.
3. Use vector and raster data models and coordinate reference systems to work with geopandas for vector data analysis and explain the result.
4. Use vector and raster data models and coordinate reference systems to work with automating geospatial workflows with python scripts and explain the result.
5. Use vector and raster data models and coordinate reference systems to work with integrating machine learning models with geospatial data and explain the result.
6. Use vector and raster data models and coordinate reference systems to work with cloud computing for large-scale geospatial analysis and explain the result.

### Prerequisites

- Comfort with files, folders, and basic data tables.
- Introductory knowledge of the relevant tool or programming language.
- Willingness to complete short practical exercises after each module.

## Full module documents

### Module 01: Advanced NumPy and Pandas for geospatial data

#### Learning objectives

- Explain advanced numpy and pandas for geospatial data and where it fits within Geospatial Raster Data Analysis.
- Use QGIS or GeoPandas and a CRS transform to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- vector and raster data models
- coordinate reference systems
- spatial queries and overlays
- cartographic layout

#### Lesson notes

Advanced NumPy and Pandas for geospatial data is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are vector and raster data models, coordinate reference systems, spatial queries and overlays. Use QGIS or GeoPandas to demonstrate the idea, and use a CRS transform to confirm that the output behaves as expected.

Always confirm the CRS before measuring distance or area; degrees are not metres.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for advanced numpy and pandas for geospatial data.
2. Prepare the input data and record its source, date, resolution or scale, and coordinate system where relevant.
3. Apply the main technique with QGIS or GeoPandas: import two layers, align their CRS, run a buffer or clip operation, and produce a labelled map with a legend and scale bar.
4. Validate the result visually and numerically; note any unexpected patterns, missing values, or outliers.
5. Export the final map, table, or figure and write a short interpretation with limitations and next steps.

#### Knowledge check

<details>
<summary>Show questions and answers</summary>

1. **What is the difference between vector and raster data?**  
   Answer: Vector data use points, lines, and polygons; raster data use a grid of cells or pixels.

2. **Why must layers share a CRS before analysis?**  
   Answer: Otherwise distances, areas, and overlays are computed in incompatible coordinate systems.

3. **What does a clip operation do?**  
   Answer: It extracts the part of one layer that falls inside the extent of another layer.

</details>

#### Deliverable

A one-page practical note containing the question, data description, method steps, one output, and three bullet points of interpretation.


### Module 02: Rasterio and GDAL for satellite imagery processing

#### Learning objectives

- Explain rasterio and gdal for satellite imagery processing and where it fits within Geospatial Raster Data Analysis.
- Use a satellite scene viewer and band combinations and spectral indices to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- electromagnetic spectrum
- platform and sensor characteristics
- spatial/spectral/temporal resolution
- image interpretation

#### Lesson notes

Rasterio and GDAL for satellite imagery processing is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are electromagnetic spectrum, platform and sensor characteristics, spatial/spectral/temporal resolution. Use a satellite scene viewer to demonstrate the idea, and use band combinations and spectral indices to confirm that the output behaves as expected.

Do not compare images from different dates or sensors without checking calibration, cloud cover, and spatial resolution.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for rasterio and gdal for satellite imagery processing.
2. Prepare the input data and record its source, date, resolution or scale, and coordinate system where relevant.
3. Apply the main technique with a satellite scene viewer: compare at least two band combinations, label three land-cover features, and explain how resolution affects interpretation.
4. Validate the result visually and numerically; note any unexpected patterns, missing values, or outliers.
5. Export the final map, table, or figure and write a short interpretation with limitations and next steps.

#### Knowledge check

<details>
<summary>Show questions and answers</summary>

1. **What does spatial resolution describe?**  
   Answer: The ground size of one pixel; smaller pixels mean finer spatial detail.

2. **Why are near-infrared and red bands useful for vegetation?**  
   Answer: Vegetation strongly reflects near-infrared and absorbs red, making their contrast useful for vegetation indices such as NDVI.

3. **What should be checked before comparing two satellite images?**  
   Answer: Date, sensor, calibration, cloud cover, projection, and spatial resolution.

</details>

#### Deliverable

A one-page practical note containing the question, data description, method steps, one output, and three bullet points of interpretation.


### Module 03: GeoPandas for vector data analysis

#### Learning objectives

- Explain geopandas for vector data analysis and where it fits within Geospatial Raster Data Analysis.
- Use QGIS or GeoPandas and a CRS transform to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- vector and raster data models
- coordinate reference systems
- spatial queries and overlays
- cartographic layout

#### Lesson notes

GeoPandas for vector data analysis is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are vector and raster data models, coordinate reference systems, spatial queries and overlays. Use QGIS or GeoPandas to demonstrate the idea, and use a CRS transform to confirm that the output behaves as expected.

Always confirm the CRS before measuring distance or area; degrees are not metres.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for geopandas for vector data analysis.
2. Prepare the input data and record its source, date, resolution or scale, and coordinate system where relevant.
3. Apply the main technique with QGIS or GeoPandas: import two layers, align their CRS, run a buffer or clip operation, and produce a labelled map with a legend and scale bar.
4. Validate the result visually and numerically; note any unexpected patterns, missing values, or outliers.
5. Export the final map, table, or figure and write a short interpretation with limitations and next steps.

#### Knowledge check

<details>
<summary>Show questions and answers</summary>

1. **What is the difference between vector and raster data?**  
   Answer: Vector data use points, lines, and polygons; raster data use a grid of cells or pixels.

2. **Why must layers share a CRS before analysis?**  
   Answer: Otherwise distances, areas, and overlays are computed in incompatible coordinate systems.

3. **What does a clip operation do?**  
   Answer: It extracts the part of one layer that falls inside the extent of another layer.

</details>

#### Deliverable

A one-page practical note containing the question, data description, method steps, one output, and three bullet points of interpretation.


### Module 04: Automating geospatial workflows with Python scripts

#### Learning objectives

- Explain automating geospatial workflows with python scripts and where it fits within Geospatial Raster Data Analysis.
- Use QGIS or GeoPandas and a CRS transform to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- vector and raster data models
- coordinate reference systems
- spatial queries and overlays
- cartographic layout

#### Lesson notes

Automating geospatial workflows with Python scripts is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are vector and raster data models, coordinate reference systems, spatial queries and overlays. Use QGIS or GeoPandas to demonstrate the idea, and use a CRS transform to confirm that the output behaves as expected.

Always confirm the CRS before measuring distance or area; degrees are not metres.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for automating geospatial workflows with python scripts.
2. Prepare the input data and record its source, date, resolution or scale, and coordinate system where relevant.
3. Apply the main technique with QGIS or GeoPandas: import two layers, align their CRS, run a buffer or clip operation, and produce a labelled map with a legend and scale bar.
4. Validate the result visually and numerically; note any unexpected patterns, missing values, or outliers.
5. Export the final map, table, or figure and write a short interpretation with limitations and next steps.

#### Knowledge check

<details>
<summary>Show questions and answers</summary>

1. **What is the difference between vector and raster data?**  
   Answer: Vector data use points, lines, and polygons; raster data use a grid of cells or pixels.

2. **Why must layers share a CRS before analysis?**  
   Answer: Otherwise distances, areas, and overlays are computed in incompatible coordinate systems.

3. **What does a clip operation do?**  
   Answer: It extracts the part of one layer that falls inside the extent of another layer.

</details>

#### Deliverable

A one-page practical note containing the question, data description, method steps, one output, and three bullet points of interpretation.


### Module 05: Integrating machine learning models with geospatial data

#### Learning objectives

- Explain integrating machine learning models with geospatial data and where it fits within Geospatial Raster Data Analysis.
- Use QGIS or GeoPandas and a CRS transform to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- vector and raster data models
- coordinate reference systems
- spatial queries and overlays
- cartographic layout

#### Lesson notes

Integrating machine learning models with geospatial data is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are vector and raster data models, coordinate reference systems, spatial queries and overlays. Use QGIS or GeoPandas to demonstrate the idea, and use a CRS transform to confirm that the output behaves as expected.

Always confirm the CRS before measuring distance or area; degrees are not metres.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for integrating machine learning models with geospatial data.
2. Prepare the input data and record its source, date, resolution or scale, and coordinate system where relevant.
3. Apply the main technique with QGIS or GeoPandas: import two layers, align their CRS, run a buffer or clip operation, and produce a labelled map with a legend and scale bar.
4. Validate the result visually and numerically; note any unexpected patterns, missing values, or outliers.
5. Export the final map, table, or figure and write a short interpretation with limitations and next steps.

#### Knowledge check

<details>
<summary>Show questions and answers</summary>

1. **What is the difference between vector and raster data?**  
   Answer: Vector data use points, lines, and polygons; raster data use a grid of cells or pixels.

2. **Why must layers share a CRS before analysis?**  
   Answer: Otherwise distances, areas, and overlays are computed in incompatible coordinate systems.

3. **What does a clip operation do?**  
   Answer: It extracts the part of one layer that falls inside the extent of another layer.

</details>

#### Deliverable

A one-page practical note containing the question, data description, method steps, one output, and three bullet points of interpretation.


### Module 06: Cloud computing for large-scale geospatial analysis

#### Learning objectives

- Explain cloud computing for large-scale geospatial analysis and where it fits within Geospatial Raster Data Analysis.
- Use QGIS or GeoPandas and a CRS transform to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- vector and raster data models
- coordinate reference systems
- spatial queries and overlays
- cartographic layout

#### Lesson notes

Cloud computing for large-scale geospatial analysis is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are vector and raster data models, coordinate reference systems, spatial queries and overlays. Use QGIS or GeoPandas to demonstrate the idea, and use a CRS transform to confirm that the output behaves as expected.

Always confirm the CRS before measuring distance or area; degrees are not metres.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for cloud computing for large-scale geospatial analysis.
2. Prepare the input data and record its source, date, resolution or scale, and coordinate system where relevant.
3. Apply the main technique with QGIS or GeoPandas: import two layers, align their CRS, run a buffer or clip operation, and produce a labelled map with a legend and scale bar.
4. Validate the result visually and numerically; note any unexpected patterns, missing values, or outliers.
5. Export the final map, table, or figure and write a short interpretation with limitations and next steps.

#### Knowledge check

<details>
<summary>Show questions and answers</summary>

1. **What is the difference between vector and raster data?**  
   Answer: Vector data use points, lines, and polygons; raster data use a grid of cells or pixels.

2. **Why must layers share a CRS before analysis?**  
   Answer: Otherwise distances, areas, and overlays are computed in incompatible coordinate systems.

3. **What does a clip operation do?**  
   Answer: It extracts the part of one layer that falls inside the extent of another layer.

</details>

#### Deliverable

A one-page practical note containing the question, data description, method steps, one output, and three bullet points of interpretation.


### Module 07: Capstone project: end-to-end geospatial pipeline

#### Learning objectives

- Explain capstone project: end-to-end geospatial pipeline and where it fits within Geospatial Raster Data Analysis.
- Use QGIS or GeoPandas and a CRS transform to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- vector and raster data models
- coordinate reference systems
- spatial queries and overlays
- cartographic layout

#### Lesson notes

Capstone project: end-to-end geospatial pipeline is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are vector and raster data models, coordinate reference systems, spatial queries and overlays. Use QGIS or GeoPandas to demonstrate the idea, and use a CRS transform to confirm that the output behaves as expected.

Always confirm the CRS before measuring distance or area; degrees are not metres.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for capstone project: end-to-end geospatial pipeline.
2. Prepare the input data and record its source, date, resolution or scale, and coordinate system where relevant.
3. Apply the main technique with QGIS or GeoPandas: import two layers, align their CRS, run a buffer or clip operation, and produce a labelled map with a legend and scale bar.
4. Validate the result visually and numerically; note any unexpected patterns, missing values, or outliers.
5. Export the final map, table, or figure and write a short interpretation with limitations and next steps.

#### Knowledge check

<details>
<summary>Show questions and answers</summary>

1. **What is the difference between vector and raster data?**  
   Answer: Vector data use points, lines, and polygons; raster data use a grid of cells or pixels.

2. **Why must layers share a CRS before analysis?**  
   Answer: Otherwise distances, areas, and overlays are computed in incompatible coordinate systems.

3. **What does a clip operation do?**  
   Answer: It extracts the part of one layer that falls inside the extent of another layer.

</details>

#### Deliverable

A one-page practical note containing the question, data description, method steps, one output, and three bullet points of interpretation.


## Capstone project

### Geospatial Raster Data Analysis: Final Applied Project

1. Choose a focused question related to the course theme and define the study area or sample dataset.
2. Write a short project brief with data sources, intended method, and expected deliverables.
3. Complete the processing workflow using at least three methods learned in this course.
4. Validate the outputs and document every assumption, parameter, and limitation.
5. Submit a final report with maps or figures, a reproducible workflow, and a concise recommendation.

**Final submission:** a report, reproducible workflow, maps or figures, and a five-minute presentation.

## Assessment rubric

| Area | Weight | Evidence |
| --- | --- | --- |
| Participation and preparation | 20% | Short reflections and completed setup checks. |
| Module exercises | 40% | Practical notes, maps, tables, and annotated outputs. |
| Knowledge checks | 20% | Quiz responses and corrections. |
| Capstone project | 20% | Final report, reproducible workflow, and presentation. |

## Resources and next steps

- Course dataset catalogue and local sample files.
- Tool documentation and official user guides for the software used in the lessons.
- A personal processing log that records commands, parameters, and output file names.
- Peer review checklist: question, data, method, validation, interpretation, and limitations.

## Related

- [Back to course library](../index.md)
- [Open standalone HTML document](../html/courses/geospatial-raster-data-analysis.html)
- [Open live training page](http://localhost:3000/training)
