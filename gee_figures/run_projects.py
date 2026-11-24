"""Generate every Projects & Collaboration figure from its own script.

Each numbered script in ``gee_figures/projects`` renders one card image into
``public/images`` using live Google Earth Engine data.

Usage:
    python gee_figures/run_projects.py                # all scripts, 3 workers
    python gee_figures/run_projects.py --workers 1    # sequential
    python gee_figures/run_projects.py 01 02 17       # selected projects
    python gee_figures/run_projects.py --list         # list project scripts

Logs are written to ``gee_figures/logs/<script>.log``.
"""

import argparse
import subprocess
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PROJECTS_DIR = Path(__file__).resolve().parent / "projects"
LOGS_DIR = Path(__file__).resolve().parent / "logs"


def discover():
    return sorted(PROJECTS_DIR.glob("[0-9][0-9]_*.py"))


def run_script(script):
    LOGS_DIR.mkdir(parents=True, exist_ok=True)
    log_path = LOGS_DIR / f"{script.stem}.log"
    started = time.time()
    with open(log_path, "w", encoding="utf-8") as log:
        code = subprocess.call(
            [sys.executable, str(script)],
            cwd=ROOT,
            stdout=log,
            stderr=subprocess.STDOUT,
        )
    return script, code, time.time() - started, log_path


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("ids", nargs="*", help="project number prefixes, e.g. 01 17")
    parser.add_argument("--workers", type=int, default=3, help="parallel processes")
    parser.add_argument("--list", action="store_true", help="list scripts and exit")
    args = parser.parse_args()

    scripts = discover()
    if not scripts:
        sys.exit(f"No project scripts found in {PROJECTS_DIR}")

    if args.list:
        for script in scripts:
            print(f"{script.stem[:2]}  {script.name}")
        return

    if args.ids:
        wanted = {i.zfill(2) for i in args.ids}
        scripts = [s for s in scripts if s.stem[:2] in wanted]
        if not scripts:
            sys.exit(f"No scripts matched: {', '.join(sorted(wanted))}")

    print(f"Rendering {len(scripts)} project figures with {args.workers} workers\n")
    failures = []
    with ThreadPoolExecutor(max_workers=max(1, args.workers)) as pool:
        futures = {pool.submit(run_script, s): s for s in scripts}
        for future in as_completed(futures):
            script, code, elapsed, log_path = future.result()
            if code == 0:
                print(f"[OK]   {script.stem}  ({elapsed:.0f}s)")
            else:
                print(f"[FAIL] {script.stem}  ({elapsed:.0f}s)  see {log_path}")
                failures.append(script.stem)

    if failures:
        print(f"\n{len(failures)} failed: {', '.join(failures)}")
        sys.exit(1)
    print("\nAll project figures generated in public/images")


if __name__ == "__main__":
    main()
