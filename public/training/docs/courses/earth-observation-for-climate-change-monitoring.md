# Earth Observation for Climate Change Monitoring

> Understand how satellite data is used to monitor climate change indicators including deforestation, urbanization, and carbon emissions.

| Item | Detail |
| --- | --- |
| Category | Certificate Course |
| Level | Certificate / intermediate-to-advanced |
| Course fee | 4,800 ETB |
| Processing fee | 200 ETB |
| Total | 5,000 ETB |
| Modules | 7 |
| Lessons | 7 |
| Knowledge checks | 21 questions |
| React preview | [/courses/gee](http://localhost:3000/courses/gee) |

## Course guide

Earth Observation for Climate Change Monitoring is a certificate / intermediate-to-advanced programme built around 7 practical modules. Work through the modules in order; each one includes objectives, notes, a hands-on exercise, a knowledge check, and a deliverable.

### Learning outcomes

1. Use climate indicators from space and time-series anomaly detection to work with climate change indicators from space and explain the result.
2. Use climate indicators from space and time-series anomaly detection to work with land surface temperature and heat island analysis and explain the result.
3. Use Earth Engine data catalog and ImageCollection filtering to work with vegetation health monitoring (ndvi, evi time series) and explain the result.
4. Use climate indicators from space and time-series anomaly detection to work with carbon stock estimation and biomass mapping and explain the result.
5. Use Earth Engine data catalog and ImageCollection filtering to work with deforestation and land cover change detection and explain the result.
6. Use convolutional feature learning and encoder-decoder segmentation to work with urban expansion and impervious surface mapping and explain the result.

### Prerequisites

- Comfort with files, folders, and basic data tables.
- Introductory knowledge of the relevant tool or programming language.
- Willingness to complete short practical exercises after each module.

## Full module documents

### Module 01: Climate change indicators from space

#### Learning objectives

- Explain climate change indicators from space and where it fits within Earth Observation for Climate Change Monitoring.
- Use climate datasets such as ERA5 or CHIRPS and Earth Engine or Python to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- climate indicators from space
- time-series anomaly detection
- index calculation
- trend interpretation

#### Lesson notes

Climate change indicators from space is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are climate indicators from space, time-series anomaly detection, index calculation. Use climate datasets such as ERA5 or CHIRPS to demonstrate the idea, and use Earth Engine or Python to confirm that the output behaves as expected.

Separate seasonal cycles from long-term trends; short records can be misleading.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for climate change indicators from space.
2. Prepare the input data and record its source, date, resolution or scale, and coordinate system where relevant.
3. Apply the main technique with climate datasets such as ERA5 or CHIRPS: compute one climate index over a period, map its spatial pattern, and test whether the trend is statistically meaningful.
4. Validate the result visually and numerically; note any unexpected patterns, missing values, or outliers.
5. Export the final map, table, or figure and write a short interpretation with limitations and next steps.

#### Knowledge check

<details>
<summary>Show questions and answers</summary>

1. **What is a climate anomaly?**  
   Answer: The difference between an observed value and a reference or long-term average.

2. **Why are long time series needed for trend analysis?**  
   Answer: They reduce the influence of short-term variability and extreme years.

3. **How can satellite data support climate reporting?**  
   Answer: By providing consistent, repeatable measurements over large areas and long periods.

</details>

#### Deliverable

A one-page practical note containing the question, data description, method steps, one output, and three bullet points of interpretation.


### Module 02: Land surface temperature and heat island analysis

#### Learning objectives

- Explain land surface temperature and heat island analysis and where it fits within Earth Observation for Climate Change Monitoring.
- Use climate datasets such as ERA5 or CHIRPS and Earth Engine or Python to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- climate indicators from space
- time-series anomaly detection
- index calculation
- trend interpretation

#### Lesson notes

Land surface temperature and heat island analysis is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are climate indicators from space, time-series anomaly detection, index calculation. Use climate datasets such as ERA5 or CHIRPS to demonstrate the idea, and use Earth Engine or Python to confirm that the output behaves as expected.

Separate seasonal cycles from long-term trends; short records can be misleading.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for land surface temperature and heat island analysis.
2. Prepare the input data and record its source, date, resolution or scale, and coordinate system where relevant.
3. Apply the main technique with climate datasets such as ERA5 or CHIRPS: compute one climate index over a period, map its spatial pattern, and test whether the trend is statistically meaningful.
4. Validate the result visually and numerically; note any unexpected patterns, missing values, or outliers.
5. Export the final map, table, or figure and write a short interpretation with limitations and next steps.

#### Knowledge check

<details>
<summary>Show questions and answers</summary>

1. **What is a climate anomaly?**  
   Answer: The difference between an observed value and a reference or long-term average.

2. **Why are long time series needed for trend analysis?**  
   Answer: They reduce the influence of short-term variability and extreme years.

3. **How can satellite data support climate reporting?**  
   Answer: By providing consistent, repeatable measurements over large areas and long periods.

</details>

#### Deliverable

A one-page practical note containing the question, data description, method steps, one output, and three bullet points of interpretation.


### Module 03: Vegetation health monitoring (NDVI, EVI time series)

#### Learning objectives

- Explain vegetation health monitoring (ndvi, evi time series) and where it fits within Earth Observation for Climate Change Monitoring.
- Use Google Earth Engine Code Editor or rgee and ImageCollection filters to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- Earth Engine data catalog
- ImageCollection filtering
- cloud masking and compositing
- classification and change detection

#### Lesson notes

Vegetation health monitoring (NDVI, EVI time series) is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are Earth Engine data catalog, ImageCollection filtering, cloud masking and compositing. Use Google Earth Engine Code Editor or rgee to demonstrate the idea, and use ImageCollection filters to confirm that the output behaves as expected.

Unfiltered ImageCollections can be very large; always limit date, region, and bands before running expensive operations.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for vegetation health monitoring (ndvi, evi time series).
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


### Module 04: Carbon stock estimation and biomass mapping

#### Learning objectives

- Explain carbon stock estimation and biomass mapping and where it fits within Earth Observation for Climate Change Monitoring.
- Use climate datasets such as ERA5 or CHIRPS and Earth Engine or Python to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- climate indicators from space
- time-series anomaly detection
- index calculation
- trend interpretation

#### Lesson notes

Carbon stock estimation and biomass mapping is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are climate indicators from space, time-series anomaly detection, index calculation. Use climate datasets such as ERA5 or CHIRPS to demonstrate the idea, and use Earth Engine or Python to confirm that the output behaves as expected.

Separate seasonal cycles from long-term trends; short records can be misleading.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for carbon stock estimation and biomass mapping.
2. Prepare the input data and record its source, date, resolution or scale, and coordinate system where relevant.
3. Apply the main technique with climate datasets such as ERA5 or CHIRPS: compute one climate index over a period, map its spatial pattern, and test whether the trend is statistically meaningful.
4. Validate the result visually and numerically; note any unexpected patterns, missing values, or outliers.
5. Export the final map, table, or figure and write a short interpretation with limitations and next steps.

#### Knowledge check

<details>
<summary>Show questions and answers</summary>

1. **What is a climate anomaly?**  
   Answer: The difference between an observed value and a reference or long-term average.

2. **Why are long time series needed for trend analysis?**  
   Answer: They reduce the influence of short-term variability and extreme years.

3. **How can satellite data support climate reporting?**  
   Answer: By providing consistent, repeatable measurements over large areas and long periods.

</details>

#### Deliverable

A one-page practical note containing the question, data description, method steps, one output, and three bullet points of interpretation.


### Module 05: Deforestation and land cover change detection

#### Learning objectives

- Explain deforestation and land cover change detection and where it fits within Earth Observation for Climate Change Monitoring.
- Use Google Earth Engine Code Editor or rgee and ImageCollection filters to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- Earth Engine data catalog
- ImageCollection filtering
- cloud masking and compositing
- classification and change detection

#### Lesson notes

Deforestation and land cover change detection is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are Earth Engine data catalog, ImageCollection filtering, cloud masking and compositing. Use Google Earth Engine Code Editor or rgee to demonstrate the idea, and use ImageCollection filters to confirm that the output behaves as expected.

Unfiltered ImageCollections can be very large; always limit date, region, and bands before running expensive operations.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for deforestation and land cover change detection.
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


### Module 06: Urban expansion and impervious surface mapping

#### Learning objectives

- Explain urban expansion and impervious surface mapping and where it fits within Earth Observation for Climate Change Monitoring.
- Use PyTorch or TensorFlow and labelled image tiles to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- convolutional feature learning
- encoder-decoder segmentation
- data augmentation
- IoU/F1 evaluation

#### Lesson notes

Urban expansion and impervious surface mapping is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are convolutional feature learning, encoder-decoder segmentation, data augmentation. Use PyTorch or TensorFlow to demonstrate the idea, and use labelled image tiles to confirm that the output behaves as expected.

Check for train/validation leakage caused by overlapping tiles from the same scene.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for urban expansion and impervious surface mapping.
2. Prepare the input data and record its source, date, resolution or scale, and coordinate system where relevant.
3. Apply the main technique with PyTorch or TensorFlow: prepare a small tile dataset, train or fine-tune a compact model, inspect predictions, and compute IoU.
4. Validate the result visually and numerically; note any unexpected patterns, missing values, or outliers.
5. Export the final map, table, or figure and write a short interpretation with limitations and next steps.

#### Knowledge check

<details>
<summary>Show questions and answers</summary>

1. **What does a U-Net architecture do?**  
   Answer: It combines a contracting encoder with an expanding decoder and skip connections for pixel-level prediction.

2. **Why augment training images?**  
   Answer: To improve generalisation by exposing the model to rotations, flips, brightness changes, and crops.

3. **What does IoU measure?**  
   Answer: The overlap between predicted and reference shapes divided by their union.

</details>

#### Deliverable

A one-page practical note containing the question, data description, method steps, one output, and three bullet points of interpretation.


### Module 07: Reporting and visualization for policy makers

#### Learning objectives

- Explain reporting and visualization for policy makers and where it fits within Earth Observation for Climate Change Monitoring.
- Use QGIS layout or Plotly/Folium and a clean dataset to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- visual hierarchy
- colour and legend design
- chart selection
- storytelling with maps

#### Lesson notes

Reporting and visualization for policy makers is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are visual hierarchy, colour and legend design, chart selection. Use QGIS layout or Plotly/Folium to demonstrate the idea, and use a clean dataset to confirm that the output behaves as expected.

Avoid rainbow colour ramps and misleading axes; both can distort the message.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for reporting and visualization for policy makers.
2. Prepare the input data and record its source, date, resolution or scale, and coordinate system where relevant.
3. Apply the main technique with QGIS layout or Plotly/Folium: create two visualisations of the same dataset, then compare which one communicates the pattern more clearly and why.
4. Validate the result visually and numerically; note any unexpected patterns, missing values, or outliers.
5. Export the final map, table, or figure and write a short interpretation with limitations and next steps.

#### Knowledge check

<details>
<summary>Show questions and answers</summary>

1. **What is visual hierarchy?**  
   Answer: The arrangement that guides the reader to the most important information first.

2. **Why is a legend important?**  
   Answer: It explains the meaning of symbols, colours, and class breaks.

3. **When is an animation useful?**  
   Answer: When the pattern being communicated changes over time.

</details>

#### Deliverable

A one-page practical note containing the question, data description, method steps, one output, and three bullet points of interpretation.


## Capstone project

### Earth Observation for Climate Change Monitoring: Final Applied Project

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
- [Open standalone HTML document](../html/courses/earth-observation-for-climate-change-monitoring.html)
- [Open live training page](http://localhost:3000/training)
