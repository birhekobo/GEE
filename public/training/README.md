# Training Course Materials

This folder contains full standalone training documents generated from `../src/data/courses.js`.

Each course document includes a course guide, learning outcomes, prerequisites, detailed module notes, hands-on exercises, knowledge checks with answers, deliverables, a capstone project, and an assessment rubric.

## Contents

- `index.html`: polished standalone HTML course library.
- `courses/*.html`: one full HTML training document per course.
- `docs/`: MkDocs source with one full Markdown training document per course.
- `mkdocs.yml`: MkDocs configuration.
- `assets/`: CSS and copied cover images.
- `generate_training_materials.mjs`: regenerates all generated files from the React course data.

## Open the HTML library

Open `index.html` directly in a browser, or serve the folder:

```bash
cd Training_course
python -m http.server 8080
```

Then visit `http://localhost:8080/`.

## Build the MkDocs site

```bash
pip install mkdocs
cd Training_course
mkdocs serve
```

Then visit `http://127.0.0.1:8000/`. Use `mkdocs build` to create the static `site/` folder.

## Regenerate after changing courses

```bash
cd Training_course
node generate_training_materials.mjs
```

Generated files are overwritten; custom notes added to `docs/courses/*.md` will be replaced on regeneration.
