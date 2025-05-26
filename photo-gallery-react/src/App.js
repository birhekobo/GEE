import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Services from "./components/Services";
import DataMethodology from "./components/DataMethodology";
import MatlabCoursePreview from "./components/MatlabCoursePreview";
import MlCoursePreview from "./components/MlCoursePreview";
import NumericalMatlabPreview from "./components/NumericalMatlabPreview";
import PythonCoursePreview from "./components/PythonCoursePreview";
import QgisCoursePreview from "./components/QgisCoursePreview";
import IntroRemoteSensingPreview from "./components/IntroRemoteSensingPreview";
import LatexCoursePreview from "./components/LatexCoursePreview";
import GeeCoursePreview from "./components/GeeCoursePreview";
import NotFoundPage from "./components/NotFoundPage";
import ProjectsAndCollaboration from "./components/ProjectsAndCollaboration";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Training from "./components/Training";
import Applications from "./components/Applications";
import Publications from "./components/Publications/Publications";
import AIResearch from "./components/AIResearch";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/applications" element={<Applications />} />
          <Route
            path="/projects-collaboration"
            element={<ProjectsAndCollaboration />}
          />
          <Route path="/data-methodology" element={<DataMethodology />} />
          <Route path="/courses/matlab" element={<MatlabCoursePreview />} />
          <Route path="/courses/ml" element={<MlCoursePreview />} />
          <Route
            path="/courses/numerical-matlab"
            element={<NumericalMatlabPreview />}
          />
          <Route path="/courses/python" element={<PythonCoursePreview />} />
          <Route path="/courses/qgis" element={<QgisCoursePreview />} />
          <Route
            path="/courses/intro-remote-sensing"
            element={<IntroRemoteSensingPreview />}
          />
          <Route path="/courses/latex" element={<LatexCoursePreview />} />
          <Route path="/courses/gee" element={<GeeCoursePreview />} />
          <Route path="/gee-course-preview" element={<GeeCoursePreview />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/training" element={<Training />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/ai-research" element={<AIResearch />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
