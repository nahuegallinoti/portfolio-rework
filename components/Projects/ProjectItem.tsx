import React from "react";
import { Project } from "../../types/types";
import Divider from "../Shared/Divider";

type Props = {
  project: Project;
};

const ProjectItem = ({ project }: Props) => {
  return (
    <article className="grid grid-rows-cardProject gap-4 py-2 rounded-lg shadow-[inset_2px_2px_10px_1px_#ffffff54] border-white/60 border-y-4 border-x-2 card items-center bg-projectBackground">
      <div className="mx-auto">
        <p className="text-projectTitle font-extrabold text-3xl">
          {project.title}
        </p>
      </div>
      <Divider
        width="w-2/3"
        colorFrom="from-slate-100"
        colorTo="to-slate-500"
      />
      <p className="text-white text-xl px-12">{project.description}</p>
      <div className="flex justify-center mt-8 text-projectTitle">
        <span>
          <project.icon size={70} />
        </span>
      </div>
      <div className="flex overflow-auto mt-12 mx-auto gap-10 text-white">
        <button className="bg-slate-500 rounded-xl px-4 py-2">
          <a href={project.visit}>Live</a>
        </button>
        <button className="bg-slate-500 rounded-xl px-4 py-2">
          <a href={project.source}>Code</a>
        </button>
      </div>
      <div className="m-2 p-4 overflow-auto details rounded-lg bg-gray-800/50 w-fit">
        <div>
          <ul>
            {project.tags.map((tag, i) => (
              <li
                className="tracking-wider text-red-200 hover:font-bold hover:text-white rounded-lg hover:bg-red-900 px-4 hover:cursor-default"
                key={i}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
