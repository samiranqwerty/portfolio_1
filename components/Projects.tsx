import React from "react";
import Title from "./Title";
import { FaProjectDiagram } from "react-icons/fa";

import amazonClone from "../public/img/projects/amazonClone.webp";
import cyberBlog from "../public/img/projects/cyberBlog.webp";
import noorShop from "../public/img/projects/noorShop.webp";
import dynamicProtfolio from "../public/img/projects/dynamicPortfolio.png";
import reactBD from "../public/img/projects/reactBD.png";
import dashboard from "../public/img/projects/dashboard.webp";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
      <ProjectCard img={amazonClone.src} title = "Amazon Clone"
      link="#"/>
      <ProjectCard img={cyberBlog.src} title = "Amazon Clone"
      link="#"/>
      <ProjectCard img={noorShop.src} title = "Amazon Clone"
      link="#"/>
      <ProjectCard img={dynamicProtfolio.src} title = "Amazon Clone"
      link="#"/>
      <ProjectCard img={reactBD.src} title = "Amazon Clone"
      link="#"/>
      <ProjectCard img={dashboard.src} title = "Amazon Clone"
      link="#"/>
      </div>
    </div>
  );
};

export default Projects;
