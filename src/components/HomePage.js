import React from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import DataMethodology from "./DataMethodology";
import ProjectsAndCollaboration from "./ProjectsAndCollaboration";
import Gallery from "./Gallery";
import FeaturedCourse from "./FeaturedCourse";
import FeaturedTraining from "./FeaturedTraining";
import Contact from "./Contact";
// Assuming ProjectsAndCollaboration should also be on the home page or linked from Projects.
// For now, let's assume it's a separate page or part of Projects.js internally.
// If it needs to be on HomePage, it can be imported and added below.

const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Gallery />
      <DataMethodology />
      <ProjectsAndCollaboration />
      <FeaturedCourse />
      <FeaturedTraining />
      <Contact />
    </>
  );
};

export default HomePage;
