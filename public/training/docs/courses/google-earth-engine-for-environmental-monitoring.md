# Google Earth Engine for Environmental Monitoring

> Use Google Earth Engine for large-scale monitoring, land cover change, and climate analysis.

| Item | Detail |
| --- | --- |
| Category | Certificate Course |
| Level | Certificate / intermediate-to-advanced |
| Course fee | 4,500 ETB |
| Processing fee | 200 ETB |
| Total | 4,700 ETB |
| Modules | 6 |
| Lessons | 6 |
| Knowledge checks | 18 questions |
| React preview | [/courses/gee](http://localhost:3000/courses/gee) |

## Course guide

Google Earth Engine for Environmental Monitoring is a certificate / intermediate-to-advanced programme built around 6 practical modules. Work through the modules in order; each one includes objectives, notes, a hands-on exercise, a knowledge check, and a deliverable.

### Learning outcomes

1. Use electromagnetic spectrum and platform and sensor characteristics to work with google earth engine (gee) platform and explain the result.
2. Use electromagnetic spectrum and platform and sensor characteristics to work with accessing and visualizing satellite data in gee and explain the result.
3. Use Earth Engine data catalog and ImageCollection filtering to work with land cover classification and change detection and explain the result.
4. Use Earth Engine data catalog and ImageCollection filtering to work with time series analysis for environmental monitoring and explain the result.
5. Use Earth Engine data catalog and ImageCollection filtering to work with exporting results and maps from gee and explain the result.
6. Use Earth Engine data catalog and ImageCollection filtering to work with case studies: deforestation, water resources, urban expansion and explain the result.

### Prerequisites

- Comfort with files, folders, and basic data tables.
- Introductory knowledge of the relevant tool or programming language.
- Willingness to complete short practical exercises after each module.

## Full module documents

### Module 01: Google Earth Engine (GEE) platform

#### Learning objectives

- Explain google earth engine (gee) platform and where it fits within Google Earth Engine for Environmental Monitoring.
- Use a satellite scene viewer and band combinations and spectral indices to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- electromagnetic spectrum
- platform and sensor characteristics
- spatial/spectral/temporal resolution
- image interpretation

#### Lesson notes

Google Earth Engine (GEE) platform is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are electromagnetic spectrum, platform and sensor characteristics, spatial/spectral/temporal resolution. Use a satellite scene viewer to demonstrate the idea, and use band combinations and spectral indices to confirm that the output behaves as expected.

Do not compare images from different dates or sensors without checking calibration, cloud cover, and spatial resolution.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for google earth engine (gee) platform.
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


### Module 02: Accessing and visualizing satellite data in GEE

#### Learning objectives

- Explain accessing and visualizing satellite data in gee and where it fits within Google Earth Engine for Environmental Monitoring.
- Use a satellite scene viewer and band combinations and spectral indices to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- electromagnetic spectrum
- platform and sensor characteristics
- spatial/spectral/temporal resolution
- image interpretation

#### Lesson notes

Accessing and visualizing satellite data in GEE is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are electromagnetic spectrum, platform and sensor characteristics, spatial/spectral/temporal resolution. Use a satellite scene viewer to demonstrate the idea, and use band combinations and spectral indices to confirm that the output behaves as expected.

Do not compare images from different dates or sensors without checking calibration, cloud cover, and spatial resolution.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for accessing and visualizing satellite data in gee.
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


### Module 03: Land cover classification and change detection

#### Learning objectives

- Explain land cover classification and change detection and where it fits within Google Earth Engine for Environmental Monitoring.
- Use Google Earth Engine Code Editor or rgee and ImageCollection filters to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- Earth Engine data catalog
- ImageCollection filtering
- cloud masking and compositing
- classification and change detection

#### Lesson notes

Land cover classification and change detection is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are Earth Engine data catalog, ImageCollection filtering, cloud masking and compositing. Use Google Earth Engine Code Editor or rgee to demonstrate the idea, and use ImageCollection filters to confirm that the output behaves as expected.

Unfiltered ImageCollections can be very large; always limit date, region, and bands before running expensive operations.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for land cover classification and change detection.
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


### Module 04: Time series analysis for environmental monitoring

#### Learning objectives

- Explain time series analysis for environmental monitoring and where it fits within Google Earth Engine for Environmental Monitoring.
- Use Google Earth Engine Code Editor or rgee and ImageCollection filters to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- Earth Engine data catalog
- ImageCollection filtering
- cloud masking and compositing
- classification and change detection

#### Lesson notes

Time series analysis for environmental monitoring is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are Earth Engine data catalog, ImageCollection filtering, cloud masking and compositing. Use Google Earth Engine Code Editor or rgee to demonstrate the idea, and use ImageCollection filters to confirm that the output behaves as expected.

Unfiltered ImageCollections can be very large; always limit date, region, and bands before running expensive operations.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for time series analysis for environmental monitoring.
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


### Module 05: Exporting results and maps from GEE

#### Learning objectives

- Explain exporting results and maps from gee and where it fits within Google Earth Engine for Environmental Monitoring.
- Use Google Earth Engine Code Editor or rgee and ImageCollection filters to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- Earth Engine data catalog
- ImageCollection filtering
- cloud masking and compositing
- classification and change detection

#### Lesson notes

Exporting results and maps from GEE is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are Earth Engine data catalog, ImageCollection filtering, cloud masking and compositing. Use Google Earth Engine Code Editor or rgee to demonstrate the idea, and use ImageCollection filters to confirm that the output behaves as expected.

Unfiltered ImageCollections can be very large; always limit date, region, and bands before running expensive operations.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for exporting results and maps from gee.
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


### Module 06: Case studies: Deforestation, water resources, urban expansion

#### Learning objectives

- Explain case studies: deforestation, water resources, urban expansion and where it fits within Google Earth Engine for Environmental Monitoring.
- Use Google Earth Engine Code Editor or rgee and ImageCollection filters to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- Earth Engine data catalog
- ImageCollection filtering
- cloud masking and compositing
- classification and change detection

#### Lesson notes

Case studies: Deforestation, water resources, urban expansion is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are Earth Engine data catalog, ImageCollection filtering, cloud masking and compositing. Use Google Earth Engine Code Editor or rgee to demonstrate the idea, and use ImageCollection filters to confirm that the output behaves as expected.

Unfiltered ImageCollections can be very large; always limit date, region, and bands before running expensive operations.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for case studies: deforestation, water resources, urban expansion.
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

### Google Earth Engine for Environmental Monitoring: Final Applied Project

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
- [Open standalone HTML document](../html/courses/google-earth-engine-for-environmental-monitoring.html)
- [Open live training page](http://localhost:3000/training)
