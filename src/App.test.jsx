import React from "react";
import { render, cleanup } from "@testing-library/react";
import { afterEach, expect, test, vi } from "vitest";
import App from "./App";

const routes = [
  "/",
  "/about",
  "/services",
  "/gallery",
  "/applications",
  "/student-exchange",
  "/projects-collaboration",
  "/data-methodology",
  "/courses/matlab",
  "/courses/ml",
  "/courses/numerical-matlab",
  "/courses/python",
  "/courses/qgis",
  "/courses/intro-remote-sensing",
  "/courses/latex",
  "/courses/gee",
  "/courses/web-mapping",
  "/courses/geospatial-viz",
  "/courses/ai-geospatial",
  "/courses/geospatial-python-r",
  "/gee-course-preview",
  "/enroll",
  "/contact",
  "/training",
  "/publications",
  "/ai-research",
  "/web-applications",
  "/this-route-does-not-exist",
];

afterEach(cleanup);

test("every application route renders without errors", () => {
  const errors = [];
  const consoleError = vi
    .spyOn(console, "error")
    .mockImplementation((...args) => {
      const message = args.join(" ");
      // Testing Library's React 18 act() deprecation is unrelated to the app.
      if (message.includes("ReactDOMTestUtils") && message.includes("deprecated")) {
        return;
      }
      errors.push(message);
    });

  for (const route of routes) {
    window.history.pushState({}, "", route);
    try {
      const { container } = render(<App />);
      if (!container.querySelector("h1, h2")) {
        errors.push(`${route}: no page heading rendered`);
      }
    } catch (error) {
      errors.push(`${route}: ${error.message}`);
    }
    cleanup();
  }

  consoleError.mockRestore();

  if (errors.length) {
    throw new Error(errors.join("\n"));
  }
});

test("enrollment page reads the selected course from the query string", () => {
  window.history.pushState(
    {},
    "",
    "/enroll?course=Satellite%20Data%20Analysis%20with%20Python"
  );
  const { getByDisplayValue } = render(<App />);
  expect(
    getByDisplayValue(/Satellite Data Analysis with Python/)
  ).toBeInTheDocument();
});

test("publications page preselects a category from the query string", async () => {
  window.history.pushState({}, "", "/publications?category=ebook");
  const { findByRole } = render(<App />);

  const filter = await findByRole("button", { name: "Ebooks" });
  expect(filter).toHaveClass("active");

  expect(
    await findByRole("heading", {
      level: 3,
      name: /Air Quality, Atmospheric Research, Climate Change & Environmental Health/,
    })
  ).toBeInTheDocument();
});
