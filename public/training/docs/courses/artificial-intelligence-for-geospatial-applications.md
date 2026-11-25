# Artificial Intelligence for Geospatial Applications

> Build AI and deep learning solutions for Earth observation: from classical machine learning to foundation models, segmentation, and deployment on maps and dashboards.

| Item | Detail |
| --- | --- |
| Category | Certificate Course |
| Level | Certificate / intermediate-to-advanced |
| Course fee | 5,800 ETB |
| Processing fee | 200 ETB |
| Total | 6,000 ETB |
| Modules | 11 |
| Lessons | 11 |
| Knowledge checks | 33 questions |
| React preview | [/courses/ai-geospatial](http://localhost:3000/courses/ai-geospatial) |

## Course guide

Artificial Intelligence for Geospatial Applications is a certificate / intermediate-to-advanced programme built around 11 practical modules. Work through the modules in order; each one includes objectives, notes, a hands-on exercise, a knowledge check, and a deliverable.

### Learning outcomes

1. Use training and test data and feature engineering to work with foundations of ai and machine learning for geospatial data and explain the result.
2. Use electromagnetic spectrum and platform and sensor characteristics to work with preparing satellite and aerial imagery for model training and explain the result.
3. Use training and test data and feature engineering to work with classical ml: random forests, gradient boosting, and svms with scikit-learn and explain the result.
4. Use Earth Engine data catalog and ImageCollection filtering to work with deep learning with pytorch and tensorflow for image classification and explain the result.
5. Use convolutional feature learning and encoder-decoder segmentation to work with semantic segmentation using u-net and vision transformers and explain the result.
6. Use training and test data and feature engineering to work with object detection for infrastructure and land features and explain the result.

### Prerequisites

- Comfort with files, folders, and basic data tables.
- Introductory knowledge of the relevant tool or programming language.
- Willingness to complete short practical exercises after each module.

## Full module documents

### Module 01: Foundations of AI and machine learning for geospatial data

#### Learning objectives

- Explain foundations of ai and machine learning for geospatial data and where it fits within Artificial Intelligence for Geospatial Applications.
- Use scikit-learn or Earth Engine classifiers and training samples to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- training and test data
- feature engineering
- model selection
- validation metrics

#### Lesson notes

Foundations of AI and machine learning for geospatial data is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are training and test data, feature engineering, model selection. Use scikit-learn or Earth Engine classifiers to demonstrate the idea, and use training samples to confirm that the output behaves as expected.

Never evaluate a model on the same data used to train it; use a held-out test set or cross-validation.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for foundations of ai and machine learning for geospatial data.
2. Prepare the input data and record its source, date, resolution or scale, and coordinate system where relevant.
3. Apply the main technique with scikit-learn or Earth Engine classifiers: prepare labelled samples, train two models, compare confusion matrices, and explain which model is preferable.
4. Validate the result visually and numerically; note any unexpected patterns, missing values, or outliers.
5. Export the final map, table, or figure and write a short interpretation with limitations and next steps.

#### Knowledge check

<details>
<summary>Show questions and answers</summary>

1. **What is overfitting?**  
   Answer: When a model learns training noise and performs poorly on unseen data.

2. **What does a confusion matrix show?**  
   Answer: Correct and incorrect counts by class, enabling precision, recall, and accuracy calculations.

3. **Why are training samples important?**  
   Answer: They define what the model learns; biased or mixed samples produce unreliable predictions.

</details>

#### Deliverable

A one-page practical note containing the question, data description, method steps, one output, and three bullet points of interpretation.


### Module 02: Preparing satellite and aerial imagery for model training

#### Learning objectives

- Explain preparing satellite and aerial imagery for model training and where it fits within Artificial Intelligence for Geospatial Applications.
- Use a satellite scene viewer and band combinations and spectral indices to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- electromagnetic spectrum
- platform and sensor characteristics
- spatial/spectral/temporal resolution
- image interpretation

#### Lesson notes

Preparing satellite and aerial imagery for model training is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are electromagnetic spectrum, platform and sensor characteristics, spatial/spectral/temporal resolution. Use a satellite scene viewer to demonstrate the idea, and use band combinations and spectral indices to confirm that the output behaves as expected.

Do not compare images from different dates or sensors without checking calibration, cloud cover, and spatial resolution.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for preparing satellite and aerial imagery for model training.
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


### Module 03: Classical ML: random forests, gradient boosting, and SVMs with scikit-learn

#### Learning objectives

- Explain classical ml: random forests, gradient boosting, and svms with scikit-learn and where it fits within Artificial Intelligence for Geospatial Applications.
- Use scikit-learn or Earth Engine classifiers and training samples to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- training and test data
- feature engineering
- model selection
- validation metrics

#### Lesson notes

Classical ML: random forests, gradient boosting, and SVMs with scikit-learn is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are training and test data, feature engineering, model selection. Use scikit-learn or Earth Engine classifiers to demonstrate the idea, and use training samples to confirm that the output behaves as expected.

Never evaluate a model on the same data used to train it; use a held-out test set or cross-validation.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for classical ml: random forests, gradient boosting, and svms with scikit-learn.
2. Prepare the input data and record its source, date, resolution or scale, and coordinate system where relevant.
3. Apply the main technique with scikit-learn or Earth Engine classifiers: prepare labelled samples, train two models, compare confusion matrices, and explain which model is preferable.
4. Validate the result visually and numerically; note any unexpected patterns, missing values, or outliers.
5. Export the final map, table, or figure and write a short interpretation with limitations and next steps.

#### Knowledge check

<details>
<summary>Show questions and answers</summary>

1. **What is overfitting?**  
   Answer: When a model learns training noise and performs poorly on unseen data.

2. **What does a confusion matrix show?**  
   Answer: Correct and incorrect counts by class, enabling precision, recall, and accuracy calculations.

3. **Why are training samples important?**  
   Answer: They define what the model learns; biased or mixed samples produce unreliable predictions.

</details>

#### Deliverable

A one-page practical note containing the question, data description, method steps, one output, and three bullet points of interpretation.


### Module 04: Deep learning with PyTorch and TensorFlow for image classification

#### Learning objectives

- Explain deep learning with pytorch and tensorflow for image classification and where it fits within Artificial Intelligence for Geospatial Applications.
- Use Google Earth Engine Code Editor or rgee and ImageCollection filters to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- Earth Engine data catalog
- ImageCollection filtering
- cloud masking and compositing
- classification and change detection

#### Lesson notes

Deep learning with PyTorch and TensorFlow for image classification is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are Earth Engine data catalog, ImageCollection filtering, cloud masking and compositing. Use Google Earth Engine Code Editor or rgee to demonstrate the idea, and use ImageCollection filters to confirm that the output behaves as expected.

Unfiltered ImageCollections can be very large; always limit date, region, and bands before running expensive operations.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for deep learning with pytorch and tensorflow for image classification.
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


### Module 05: Semantic segmentation using U-Net and Vision Transformers

#### Learning objectives

- Explain semantic segmentation using u-net and vision transformers and where it fits within Artificial Intelligence for Geospatial Applications.
- Use PyTorch or TensorFlow and labelled image tiles to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- convolutional feature learning
- encoder-decoder segmentation
- data augmentation
- IoU/F1 evaluation

#### Lesson notes

Semantic segmentation using U-Net and Vision Transformers is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are convolutional feature learning, encoder-decoder segmentation, data augmentation. Use PyTorch or TensorFlow to demonstrate the idea, and use labelled image tiles to confirm that the output behaves as expected.

Check for train/validation leakage caused by overlapping tiles from the same scene.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for semantic segmentation using u-net and vision transformers.
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


### Module 06: Object detection for infrastructure and land features

#### Learning objectives

- Explain object detection for infrastructure and land features and where it fits within Artificial Intelligence for Geospatial Applications.
- Use scikit-learn or Earth Engine classifiers and training samples to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- training and test data
- feature engineering
- model selection
- validation metrics

#### Lesson notes

Object detection for infrastructure and land features is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are training and test data, feature engineering, model selection. Use scikit-learn or Earth Engine classifiers to demonstrate the idea, and use training samples to confirm that the output behaves as expected.

Never evaluate a model on the same data used to train it; use a held-out test set or cross-validation.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for object detection for infrastructure and land features.
2. Prepare the input data and record its source, date, resolution or scale, and coordinate system where relevant.
3. Apply the main technique with scikit-learn or Earth Engine classifiers: prepare labelled samples, train two models, compare confusion matrices, and explain which model is preferable.
4. Validate the result visually and numerically; note any unexpected patterns, missing values, or outliers.
5. Export the final map, table, or figure and write a short interpretation with limitations and next steps.

#### Knowledge check

<details>
<summary>Show questions and answers</summary>

1. **What is overfitting?**  
   Answer: When a model learns training noise and performs poorly on unseen data.

2. **What does a confusion matrix show?**  
   Answer: Correct and incorrect counts by class, enabling precision, recall, and accuracy calculations.

3. **Why are training samples important?**  
   Answer: They define what the model learns; biased or mixed samples produce unreliable predictions.

</details>

#### Deliverable

A one-page practical note containing the question, data description, method steps, one output, and three bullet points of interpretation.


### Module 07: Foundation and self-supervised models for Earth observation

#### Learning objectives

- Explain foundation and self-supervised models for earth observation and where it fits within Artificial Intelligence for Geospatial Applications.
- Use MATLAB and built-in numerical functions to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- matrix-based computation
- script and function design
- numerical approximation
- visualisation of results

#### Lesson notes

Foundation and self-supervised models for Earth observation is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are matrix-based computation, script and function design, numerical approximation. Use MATLAB to demonstrate the idea, and use built-in numerical functions to confirm that the output behaves as expected.

Check vector dimensions and convergence criteria; many MATLAB errors come from shape mismatches or stopping too early.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for foundation and self-supervised models for earth observation.
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


### Module 08: Google Earth Engine and cloud AI workflows

#### Learning objectives

- Explain google earth engine and cloud ai workflows and where it fits within Artificial Intelligence for Geospatial Applications.
- Use Google Earth Engine Code Editor or rgee and ImageCollection filters to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- Earth Engine data catalog
- ImageCollection filtering
- cloud masking and compositing
- classification and change detection

#### Lesson notes

Google Earth Engine and cloud AI workflows is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are Earth Engine data catalog, ImageCollection filtering, cloud masking and compositing. Use Google Earth Engine Code Editor or rgee to demonstrate the idea, and use ImageCollection filters to confirm that the output behaves as expected.

Unfiltered ImageCollections can be very large; always limit date, region, and bands before running expensive operations.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for google earth engine and cloud ai workflows.
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


### Module 09: Model evaluation, explainability, and uncertainty (SHAP, Grad-CAM)

#### Learning objectives

- Explain model evaluation, explainability, and uncertainty (shap, grad-cam) and where it fits within Artificial Intelligence for Geospatial Applications.
- Use MATLAB and built-in numerical functions to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- matrix-based computation
- script and function design
- numerical approximation
- visualisation of results

#### Lesson notes

Model evaluation, explainability, and uncertainty (SHAP, Grad-CAM) is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are matrix-based computation, script and function design, numerical approximation. Use MATLAB to demonstrate the idea, and use built-in numerical functions to confirm that the output behaves as expected.

Check vector dimensions and convergence criteria; many MATLAB errors come from shape mismatches or stopping too early.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for model evaluation, explainability, and uncertainty (shap, grad-cam).
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


### Module 10: Deploying AI models as map services and dashboards

#### Learning objectives

- Explain deploying ai models as map services and dashboards and where it fits within Artificial Intelligence for Geospatial Applications.
- Use MATLAB and built-in numerical functions to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- matrix-based computation
- script and function design
- numerical approximation
- visualisation of results

#### Lesson notes

Deploying AI models as map services and dashboards is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are matrix-based computation, script and function design, numerical approximation. Use MATLAB to demonstrate the idea, and use built-in numerical functions to confirm that the output behaves as expected.

Check vector dimensions and convergence criteria; many MATLAB errors come from shape mismatches or stopping too early.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for deploying ai models as map services and dashboards.
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


### Module 11: Capstone project: AI-powered land cover mapping

#### Learning objectives

- Explain capstone project: ai-powered land cover mapping and where it fits within Artificial Intelligence for Geospatial Applications.
- Use Python deep-learning libraries and model explanation tools to complete a small, documented workflow.
- Validate the result, record assumptions, and communicate the main finding clearly.

#### Key concepts

- classical ML versus deep learning
- foundation and self-supervised models
- explainability
- deployment on map services

#### Lesson notes

Capstone project: AI-powered land cover mapping is best learned as a repeatable workflow: state the question, prepare the inputs, apply the method, check the output, and communicate the result. Keep the original data untouched and save each processing step so the work can be repeated.

The central ideas in this lesson are classical ML versus deep learning, foundation and self-supervised models, explainability. Use Python deep-learning libraries to demonstrate the idea, and use model explanation tools to confirm that the output behaves as expected.

A high accuracy score is not enough; consider latency, interpretability, bias, and maintenance cost.

#### Hands-on exercise

1. Write a one-sentence question and define the study area or sample extent for capstone project: ai-powered land cover mapping.
2. Prepare the input data and record its source, date, resolution or scale, and coordinate system where relevant.
3. Apply the main technique with Python deep-learning libraries: compare a classical model with a deep model, generate one explanation view, and discuss deployment constraints.
4. Validate the result visually and numerically; note any unexpected patterns, missing values, or outliers.
5. Export the final map, table, or figure and write a short interpretation with limitations and next steps.

#### Knowledge check

<details>
<summary>Show questions and answers</summary>

1. **What is a foundation model?**  
   Answer: A large pre-trained model that can be adapted to many downstream tasks.

2. **What does SHAP or Grad-CAM help with?**  
   Answer: Explaining which features or image regions influenced a model's prediction.

3. **What should be considered before deployment?**  
   Answer: Latency, compute cost, data drift, explainability, and user trust.

</details>

#### Deliverable

A one-page practical note containing the question, data description, method steps, one output, and three bullet points of interpretation.


## Capstone project

### Artificial Intelligence for Geospatial Applications: Final Applied Project

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
- [Open standalone HTML document](../html/courses/artificial-intelligence-for-geospatial-applications.html)
- [Open live training page](http://localhost:3000/training)
