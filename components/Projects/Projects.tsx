import React, { useContext } from "react";
import Context from "../../context/Context";
import LayoutSection from "../Shared/LayoutSection";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const context = useContext(Context);
  const projects = context?.projects;

  return (
    <LayoutSection title="Projects" id="projects">
      <section className="grid xs:max-w-md md:grid-cols-2 gap-10 mt-16">
        {projects &&
          projects.map((item, index) => (
            <ProjectItem key={index} project={item} />
          ))}
      </section>
    </LayoutSection>
  );
};

export default Projects;
