import { JellyTriangle } from "@uiball/loaders";
import React from "react";
import { useProjects } from "../../context/Provider";
import LayoutSection from "../Shared/LayoutSection";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const [projects] = useProjects();

  return (
    <LayoutSection title="Projects" id="projects">
      {projects.length === 0 ? (
        <div className="flex flex-col columns-1 mt-10 items-center">
          <JellyTriangle size={40} color="#ffffff" />
          <p className="text-2xl text-white mt-5 animate-bounce">
            Loading projects
          </p>
        </div>
      ) : (
        <section className="grid xs:max-w-md md:grid-cols-2 gap-10 mt-16">
          {projects.map((item, index) => (
            <ProjectItem key={index} project={item} />
          ))}
        </section>
      )}
    </LayoutSection>
  );
};

export default Projects;
