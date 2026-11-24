# Promotional material

Short, ready-to-share posts and a print-ready flyer for **GeoSat Intelligence**.

## Social posts

Plain-text versions for copy/paste live in `social/`:

- `linkedin.txt` — professional announcement for LinkedIn
- `telegram.txt` — concise version for Telegram
- `whatsapp.txt` — short, casual version for WhatsApp

Attractive A5 LaTeX cards live in `latex/social/`, with both the `.tex` source
and a compiled `.pdf` for each platform:

- `linkedin-post.tex` / `.pdf`
- `telegram-post.tex` / `.pdf`
- `whatsapp-post.tex` / `.pdf`

All posts link to https://birhanuasmerom.vercel.app and cover the website launch,
training courses, and a short introduction to the service.

## LaTeX flyer (`latex/`)

`latex/geosat-flyer.tex` is a one-page A4 flyer about the website, and
`latex/geosat-launch.tex` is an A5 "Now Officially Launched" announcement card
with a Training / Research / Projects / Consultancy grid. Compiled PDFs are
included for both.

To rebuild the PDFs with MiKTeX / TeX Live:

```bash
cd promo/latex
pdflatex -interaction=nonstopmode geosat-flyer.tex
pdflatex -interaction=nonstopmode geosat-launch.tex
cd social
pdflatex -interaction=nonstopmode linkedin-post.tex
pdflatex -interaction=nonstopmode telegram-post.tex
pdflatex -interaction=nonstopmode whatsapp-post.tex
```

The source uses only standard packages (`geometry`, `xcolor`, `tabularx`,
`enumitem`, `tikz`, `hyperref`, `helvet`), so no extra installation is needed.
