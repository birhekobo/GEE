"""Generate the 21 Projects & Collaboration page figures into public/images.

Usage:
    python gee_figures/generate_projects.py              # all figures, one subprocess each
    python gee_figures/generate_projects.py <name>...    # just the named figure(s), in-process
    python gee_figures/generate_projects.py --list       # list available figure names

For the one-script-per-card versions, use ``python gee_figures/run_projects.py``.
Producers live in the gee_figures/figures/projects package (one module per
project category). Running without arguments launches every figure in its own
Python process so a failure or slow EE call in one figure never blocks the rest.
"""

import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from gee_figures.figures.projects import GENERATORS  # noqa: E402


def run_one(name):
    print(f"\n=== {name} ===")
    GENERATORS[name]()


def run_all():
    failed = []
    for name in GENERATORS:
        print(f"\n[[[ {name} ]]]")
        code = subprocess.call(
            [sys.executable, str(Path(__file__).resolve()), name]
        )
        if code:
            failed.append(name)
    if failed:
        sys.stderr.write(f"\nFailed figures: {', '.join(failed)}\n")
        sys.exit(1)
    print("\nAll 21 Projects & Collaboration figures generated.")


if __name__ == "__main__":
    args = sys.argv[1:]

    if not args:
        run_all()
    elif args == ["--list"]:
        for name in GENERATORS:
            print(name)
    else:
        for name in args:
            if name not in GENERATORS:
                sys.stderr.write(f"Unknown figure: {name}\n")
                sys.exit(1)
            run_one(name)