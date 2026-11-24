# Promotional material

Short, ready-to-share posts and a print-ready flyer for **GeoSat Intelligence**.

## Social posts (`social/`)

- `linkedin.txt` — professional announcement for LinkedIn
- `telegram.txt` — concise version for Telegram
- `whatsapp.txt` — short, casual version for WhatsApp

All posts link to https://birhanuasmerom.vercel.app and cover the website launch,
training courses, and a short introduction to the service.

## LaTeX flyer (`latex/`)

`latex/geosat-flyer.tex` is a one-page A4 flyer about the website. A compiled
`geosat-flyer.pdf` is included.

To rebuild the PDF with MiKTeX / TeX Live:

```bash
cd promo/latex
pdflatex -interaction=nonstopmode geosat-flyer.tex
```

The source uses only standard packages (`geometry`, `xcolor`, `tabularx`,
`enumitem`, `tikz`, `hyperref`, `helvet`), so no extra installation is needed.
