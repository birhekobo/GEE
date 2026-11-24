"""Backward-compatible alias for the Projects & Collaboration figure package.

The 20 project-figure generators now live in the
``gee_figures.figures.projects`` sub-package. This module re-exports them so
existing callers keep working:

    python gee_figures/figures/projects_collab.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from gee_figures.figures.projects import GENERATORS, generate_all  # noqa: E402,F401


if __name__ == "__main__":
    generate_all()