# Introduction to Geospatial (Mapping) Analysis using MATLAB

> Learn geospatial data processing, mapping, and analysis using MATLAB. Ideal for those interested in scientific computing and spatial data visualization.

| Item | Detail |
| --- | --- |
| Category | Certificate Course |
| Level | Certificate / intermediate-to-advanced |
| Course fee | 4,000 ETB |
| Processing fee | 200 ETB |
| Total | 4,200 ETB |
| Modules | 7 |
| Lessons | 7 |
| Knowledge checks | 21 questions |
| React preview | [/courses/matlab](http://localhost:3000/courses/matlab) |

## Course guide

Introduction to Geospatial (Mapping) Analysis using MATLAB is a certificate / intermediate-to-advanced programme built around 7 practical modules. Work through the modules in order; each one includes objectives, notes, a hands-on exercise, a knowledge check, and a deliverable.

### Learning outcomes

1. Use vector and raster data models and coordinate reference systems to work with overview of matlab for geospatial analysis and explain the result.
2. Use matrix-based computation and script and function design to work with importing and visualizing spatial data and explain the result.
3. Use vector and raster data models and coordinate reference systems to work with coordinate systems and map projections and explain the result.
4. Use vector and raster data models and coordinate reference systems to work with raster and vector data processing and explain the result.
5. Use vector and raster data models and coordinate reference systems to work with spatial analysis and mapping techniques and explain the result.
6. Use matrix-based computation and script and function design to work with automating workflows with matlab scripts and explain the result.

### Prerequisites

- Comfort with files, folders, and basic data tables.
- Introductory knowledge of the relevant tool or programming language.
- Willingness to complete short practical exercises after each module.

## Full module documents

### Module 01: Overview of MATLAB for geospatial analysis

#### Learning objectives

- Explain overview of matlab for geospatial analysis and where it fits within Introduction to Geospatial (Mapping) Analysis using MATLAB.
- Use QGIS or GeoPandas and a CRS transform to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- vector and raster data models
- coordinate reference systems
- spatial queries and overlays
- cartographic layout

#### Lesson notes

Overview of MATLAB for geospatial analysis is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are vector and raster data models, coordinate reference systems, spatial queries and overlays. Use QGIS or GeoPandas to demonstrate the idea, and use a CRS transform to confirm that the output behaves as expected.

Always confirm the CRS before measuring distance or area; degrees are not metres.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for overview of matlab for geospatial analysis.
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


### Module 02: Importing and visualizing spatial data

#### Learning objectives

- Explain importing and visualizing spatial data and where it fits within Introduction to Geospatial (Mapping) Analysis using MATLAB.
- Use MATLAB and built-in numerical functions to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- matrix-based computation
- script and function design
- numerical approximation
- visualisation of results

#### Lesson notes

Importing and visualizing spatial data is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are matrix-based computation, script and function design, numerical approximation. Use MATLAB to demonstrate the idea, and use built-in numerical functions to confirm that the output behaves as expected.

Check vector dimensions and convergence criteria; many MATLAB errors come from shape mismatches or stopping too early.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for importing and visualizing spatial data.
2. Prepare the input data and record its source, date, resolution or scale, and coordinate system where relevant.
3. Apply the main technique with MATLAB: implement the method in a script, test it against a simple known case, plot the result, and document error behaviour.
4. Validate the result visually and numerically; note any unexpected patterns, missing values, or outliers.
5. Export the final map, table, or figure and write a short interpretation with limitations and next steps.

#### Knowledge check

<details>
<summary>Show questions and answers</summary>

1. **Why is MATLAB well suited to numerical work?**  
   Answer: It provides matrix operations, numerical libraries, and visualisation in one environment.

2. **Why test a numerical method on a known case?**  
   Answer: It verifies the implementation before applying it to harder problems.

3. **What is convergence in an iterative method?**  
   Answer: The sequence of approximations approaches a stable solution within a tolerance.

</details>

#### Deliverable

A one-page practical note containing the question, data description, method steps, one output, and three bullet points of interpretation.


### Module 03: Coordinate systems and map projections

#### Learning objectives

- Explain coordinate systems and map projections and where it fits within Introduction to Geospatial (Mapping) Analysis using MATLAB.
- Use QGIS or GeoPandas and a CRS transform to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- vector and raster data models
- coordinate reference systems
- spatial queries and overlays
- cartographic layout

#### Lesson notes

Coordinate systems and map projections is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are vector and raster data models, coordinate reference systems, spatial queries and overlays. Use QGIS or GeoPandas to demonstrate the idea, and use a CRS transform to confirm that the output behaves as expected.

Always confirm the CRS before measuring distance or area; degrees are not metres.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for coordinate systems and map projections.
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


### Module 04: Raster and vector data processing

#### Learning objectives

- Explain raster and vector data processing and where it fits within Introduction to Geospatial (Mapping) Analysis using MATLAB.
- Use QGIS or GeoPandas and a CRS transform to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- vector and raster data models
- coordinate reference systems
- spatial queries and overlays
- cartographic layout

#### Lesson notes

Raster and vector data processing is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are vector and raster data models, coordinate reference systems, spatial queries and overlays. Use QGIS or GeoPandas to demonstrate the idea, and use a CRS transform to confirm that the output behaves as expected.

Always confirm the CRS before measuring distance or area; degrees are not metres.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for raster and vector data processing.
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


### Module 05: Spatial analysis and mapping techniques

#### Learning objectives

- Explain spatial analysis and mapping techniques and where it fits within Introduction to Geospatial (Mapping) Analysis using MATLAB.
- Use QGIS or GeoPandas and a CRS transform to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- vector and raster data models
- coordinate reference systems
- spatial queries and overlays
- cartographic layout

#### Lesson notes

Spatial analysis and mapping techniques is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are vector and raster data models, coordinate reference systems, spatial queries and overlays. Use QGIS or GeoPandas to demonstrate the idea, and use a CRS transform to confirm that the output behaves as expected.

Always confirm the CRS before measuring distance or area; degrees are not metres.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for spatial analysis and mapping techniques.
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


### Module 06: Automating workflows with MATLAB scripts

#### Learning objectives

- Explain automating workflows with matlab scripts and where it fits within Introduction to Geospatial (Mapping) Analysis using MATLAB.
- Use MATLAB and built-in numerical functions to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- matrix-based computation
- script and function design
- numerical approximation
- visualisation of results

#### Lesson notes

Automating workflows with MATLAB scripts is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are matrix-based computation, script and function design, numerical approximation. Use MATLAB to demonstrate the idea, and use built-in numerical functions to confirm that the output behaves as expected.

Check vector dimensions and convergence criteria; many MATLAB errors come from shape mismatches or stopping too early.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for automating workflows with matlab scripts.
2. Prepare the input data and record its source, date, resolution or scale, and coordinate system where relevant.
3. Apply the main technique with MATLAB: implement the method in a script, test it against a simple known case, plot the result, and document error behaviour.
4. Validate the result visually and numerically; note any unexpected patterns, missing values, or outliers.
5. Export the final map, table, or figure and write a short interpretation with limitations and next steps.

#### Knowledge check

<details>
<summary>Show questions and answers</summary>

1. **Why is MATLAB well suited to numerical work?**  
   Answer: It provides matrix operations, numerical libraries, and visualisation in one environment.

2. **Why test a numerical method on a known case?**  
   Answer: It verifies the implementation before applying it to harder problems.

3. **What is convergence in an iterative method?**  
   Answer: The sequence of approximations approaches a stable solution within a tolerance.

</details>

#### Deliverable

A one-page practical note containing the question, data description, method steps, one output, and three bullet points of interpretation.


### Module 07: Case studies: Environmental and urban mapping

#### Learning objectives

- Explain case studies: environmental and urban mapping and where it fits within Introduction to Geospatial (Mapping) Analysis using MATLAB.
- Use MATLAB and built-in numerical functions to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- matrix-based computation
- script and function design
- numerical approximation
- visualisation of results

#### Lesson notes

Case studies: Environmental and urban mapping is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are matrix-based computation, script and function design, numerical approximation. Use MATLAB to demonstrate the idea, and use built-in numerical functions to confirm that the output behaves as expected.

Check vector dimensions and convergence criteria; many MATLAB errors come from shape mismatches or stopping too early.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for case studies: environmental and urban mapping.
2. Prepare the input data and record its source, date, resolution or scale, and coordinate system where relevant.
3. Apply the main technique with MATLAB: implement the method in a script, test it against a simple known case, plot the result, and document error behaviour.
4. Validate the result visually and numerically; note any unexpected patterns, missing values, or outliers.
5. Export the final map, table, or figure and write a short interpretation with limitations and next steps.

#### Knowledge check

<details>
<summary>Show questions and answers</summary>

1. **Why is MATLAB well suited to numerical work?**  
   Answer: It provides matrix operations, numerical libraries, and visualisation in one environment.

2. **Why test a numerical method on a known case?**  
   Answer: It verifies the implementation before applying it to harder problems.

3. **What is convergence in an iterative method?**  
   Answer: The sequence of approximations approaches a stable solution within a tolerance.

</details>

#### Deliverable

A one-page practical note containing the question, data description, method steps, one output, and three bullet points of interpretation.


## Capstone project

### Introduction to Geospatial (Mapping) Analysis using MATLAB: Final Applied Project

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
- [Open standalone HTML document](../html/courses/introduction-to-geospatial-mapping-analysis-using-matlab.html)
- [Open live training page](http://localhost:3000/training)
