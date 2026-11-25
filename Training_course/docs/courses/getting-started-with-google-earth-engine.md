# Getting Started with Google Earth Engine

> Free introductory module: explore the GEE platform, browse satellite catalogs, and run your first environmental analysis scripts.

| Item | Detail |
| --- | --- |
| Category | Free Course |
| Level | Introductory |
| Course fee | Free |
| Processing fee | Not applicable |
| Total | Free |
| Modules | 5 |
| Lessons | 5 |
| Knowledge checks | 15 questions |
| React preview | [/courses/gee](http://localhost:3000/courses/gee) |

## Course guide

Getting Started with Google Earth Engine is an introductory programme built around 5 practical modules. Work through the modules in order; each one includes objectives, notes, a hands-on exercise, a knowledge check, and a deliverable.

### Learning outcomes

1. Use Earth Engine data catalog and ImageCollection filtering to work with gee account setup and code editor tour and explain the result.
2. Use electromagnetic spectrum and platform and sensor characteristics to work with browsing satellite image collections and explain the result.
3. Use Earth Engine data catalog and ImageCollection filtering to work with basic map visualization and exports and explain the result.
4. Use Earth Engine data catalog and ImageCollection filtering to work with simple land-cover and ndvi examples and explain the result.
5. Use Earth Engine data catalog and ImageCollection filtering to work with next steps toward the full gee certificate course and explain the result.

### Prerequisites

- Basic computer literacy and a modern web browser.
- No prior programming experience is required for the introductory lessons.

## Full module documents

### Module 01: GEE account setup and Code Editor tour

#### Learning objectives

- Explain gee account setup and code editor tour and where it fits within Getting Started with Google Earth Engine.
- Use Google Earth Engine Code Editor or rgee and ImageCollection filters to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- Earth Engine data catalog
- ImageCollection filtering
- cloud masking and compositing
- classification and change detection

#### Lesson notes

GEE account setup and Code Editor tour is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are Earth Engine data catalog, ImageCollection filtering, cloud masking and compositing. Use Google Earth Engine Code Editor or rgee to demonstrate the idea, and use ImageCollection filters to confirm that the output behaves as expected.

Unfiltered ImageCollections can be very large; always limit date, region, and bands before running expensive operations.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for gee account setup and code editor tour.
2. Prepare the input data and record its source, date, resolution or scale, and coordinate system where relevant.
3. Apply the main technique with Google Earth Engine Code Editor or rgee: filter an ImageCollection by date and region, apply a cloud mask, calculate an index, and export a small result for validation.
4. Validate the result visually and numerically; note any unexpected patterns, missing values, or outliers.
5. Export the final map, table, or figure and write a short interpretation with limitations and next steps.

#### Knowledge check

<details>
<summary>Show questions and answers</summary>

1. **How do you reduce an ImageCollection to one image?**  
   Answer: Use a reducer such as median, mean, or qualityMosaic over the collection.

2. **Why is cloud masking important?**  
   Answer: Clouds and shadows distort spectral values and can lead to false change or index results.

3. **What should be specified when exporting an Earth Engine result?**  
   Answer: Region, resolution or scale, projection/CRS, file format, and asset or drive destination.

</details>

#### Deliverable

A one-page practical note containing the question, data description, method steps, one output, and three bullet points of interpretation.


### Module 02: Browsing satellite image collections

#### Learning objectives

- Explain browsing satellite image collections and where it fits within Getting Started with Google Earth Engine.
- Use a satellite scene viewer and band combinations and spectral indices to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- electromagnetic spectrum
- platform and sensor characteristics
- spatial/spectral/temporal resolution
- image interpretation

#### Lesson notes

Browsing satellite image collections is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are electromagnetic spectrum, platform and sensor characteristics, spatial/spectral/temporal resolution. Use a satellite scene viewer to demonstrate the idea, and use band combinations and spectral indices to confirm that the output behaves as expected.

Do not compare images from different dates or sensors without checking calibration, cloud cover, and spatial resolution.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for browsing satellite image collections.
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


### Module 03: Basic map visualization and exports

#### Learning objectives

- Explain basic map visualization and exports and where it fits within Getting Started with Google Earth Engine.
- Use Google Earth Engine Code Editor or rgee and ImageCollection filters to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- Earth Engine data catalog
- ImageCollection filtering
- cloud masking and compositing
- classification and change detection

#### Lesson notes

Basic map visualization and exports is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are Earth Engine data catalog, ImageCollection filtering, cloud masking and compositing. Use Google Earth Engine Code Editor or rgee to demonstrate the idea, and use ImageCollection filters to confirm that the output behaves as expected.

Unfiltered ImageCollections can be very large; always limit date, region, and bands before running expensive operations.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for basic map visualization and exports.
2. Prepare the input data and record its source, date, resolution or scale, and coordinate system where relevant.
3. Apply the main technique with Google Earth Engine Code Editor or rgee: filter an ImageCollection by date and region, apply a cloud mask, calculate an index, and export a small result for validation.
4. Validate the result visually and numerically; note any unexpected patterns, missing values, or outliers.
5. Export the final map, table, or figure and write a short interpretation with limitations and next steps.

#### Knowledge check

<details>
<summary>Show questions and answers</summary>

1. **How do you reduce an ImageCollection to one image?**  
   Answer: Use a reducer such as median, mean, or qualityMosaic over the collection.

2. **Why is cloud masking important?**  
   Answer: Clouds and shadows distort spectral values and can lead to false change or index results.

3. **What should be specified when exporting an Earth Engine result?**  
   Answer: Region, resolution or scale, projection/CRS, file format, and asset or drive destination.

</details>

#### Deliverable

A one-page practical note containing the question, data description, method steps, one output, and three bullet points of interpretation.


### Module 04: Simple land-cover and NDVI examples

#### Learning objectives

- Explain simple land-cover and ndvi examples and where it fits within Getting Started with Google Earth Engine.
- Use Google Earth Engine Code Editor or rgee and ImageCollection filters to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- Earth Engine data catalog
- ImageCollection filtering
- cloud masking and compositing
- classification and change detection

#### Lesson notes

Simple land-cover and NDVI examples is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are Earth Engine data catalog, ImageCollection filtering, cloud masking and compositing. Use Google Earth Engine Code Editor or rgee to demonstrate the idea, and use ImageCollection filters to confirm that the output behaves as expected.

Unfiltered ImageCollections can be very large; always limit date, region, and bands before running expensive operations.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for simple land-cover and ndvi examples.
2. Prepare the input data and record its source, date, resolution or scale, and coordinate system where relevant.
3. Apply the main technique with Google Earth Engine Code Editor or rgee: filter an ImageCollection by date and region, apply a cloud mask, calculate an index, and export a small result for validation.
4. Validate the result visually and numerically; note any unexpected patterns, missing values, or outliers.
5. Export the final map, table, or figure and write a short interpretation with limitations and next steps.

#### Knowledge check

<details>
<summary>Show questions and answers</summary>

1. **How do you reduce an ImageCollection to one image?**  
   Answer: Use a reducer such as median, mean, or qualityMosaic over the collection.

2. **Why is cloud masking important?**  
   Answer: Clouds and shadows distort spectral values and can lead to false change or index results.

3. **What should be specified when exporting an Earth Engine result?**  
   Answer: Region, resolution or scale, projection/CRS, file format, and asset or drive destination.

</details>

#### Deliverable

A one-page practical note containing the question, data description, method steps, one output, and three bullet points of interpretation.


### Module 05: Next steps toward the full GEE certificate course

#### Learning objectives

- Explain next steps toward the full gee certificate course and where it fits within Getting Started with Google Earth Engine.
- Use Google Earth Engine Code Editor or rgee and ImageCollection filters to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- Earth Engine data catalog
- ImageCollection filtering
- cloud masking and compositing
- classification and change detection

#### Lesson notes

Next steps toward the full GEE certificate course is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are Earth Engine data catalog, ImageCollection filtering, cloud masking and compositing. Use Google Earth Engine Code Editor or rgee to demonstrate the idea, and use ImageCollection filters to confirm that the output behaves as expected.

Unfiltered ImageCollections can be very large; always limit date, region, and bands before running expensive operations.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for next steps toward the full gee certificate course.
2. Prepare the input data and record its source, date, resolution or scale, and coordinate system where relevant.
3. Apply the main technique with Google Earth Engine Code Editor or rgee: filter an ImageCollection by date and region, apply a cloud mask, calculate an index, and export a small result for validation.
4. Validate the result visually and numerically; note any unexpected patterns, missing values, or outliers.
5. Export the final map, table, or figure and write a short interpretation with limitations and next steps.

#### Knowledge check

<details>
<summary>Show questions and answers</summary>

1. **How do you reduce an ImageCollection to one image?**  
   Answer: Use a reducer such as median, mean, or qualityMosaic over the collection.

2. **Why is cloud masking important?**  
   Answer: Clouds and shadows distort spectral values and can lead to false change or index results.

3. **What should be specified when exporting an Earth Engine result?**  
   Answer: Region, resolution or scale, projection/CRS, file format, and asset or drive destination.

</details>

#### Deliverable

A one-page practical note containing the question, data description, method steps, one output, and three bullet points of interpretation.


## Capstone project

### Getting Started with Google Earth Engine: Final Applied Project

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
- [Open standalone HTML document](../html/courses/getting-started-with-google-earth-engine.html)
- [Open live training page](http://localhost:3000/training)
