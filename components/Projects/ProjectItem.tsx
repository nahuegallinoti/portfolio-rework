import Link from "next/link";
import React from "react";
import { IProject } from "../../interfaces/IProject";
import Divider from "../Shared/Divider";
import CollapsedMenu from "./CollapsedMenu";
import { useRouter } from "next/router";

type Props = {
  project: IProject;
  detail?: boolean;
};

const ProjectItem = ({ project, detail = false }: Props) => {
  const router = useRouter();

  const handleCardClick = (e: React.MouseEvent) => {
    // Evitar navegación si se hace clic en botones o enlaces
    if ((e.target as HTMLElement).closest('button, a')) {
      return;
    }
    
    if (!detail) {
      router.push(`/projects/${project.id}`);
    }
  };

  return (
    <article
      className={`relative grid grid-rows-cardProject gap-4 py-2 rounded-lg shadow-[inset_2px_2px_10px_1px_#ffffff54] border-white/60 border-y-4 border-x-2 card items-center bg-projectBackground ${
        detail && "min-h-fit"
      } ${!detail && "hover:cursor-pointer"}`}
      onClick={handleCardClick}
    >
      <div className="mx-auto mt-4">
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
      <div className="flex overflow-auto mt-6 mx-auto gap-10 text-white">
        <button className="bg-slate-500 rounded-xl px-4 py-2 hover:bg-white hover:text-black hover:font-bold">
          <a href={project.visit} target="_blank" rel="noopener noreferrer">
            Live
          </a>
        </button>
        <button className="bg-slate-500 rounded-xl px-4 py-2 hover:bg-white hover:text-black hover:font-bold">
          <a href={project.source} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        </button>
      </div>
      <div className="flex my-5 mx-auto">
        {detail ? (
          <Link href="/#projects">
            <a className="text-white hover:text-slate-500">Back to Projects</a>
          </Link>
        ) : (
          <Link href={`/projects/${project.id}`}>
            <a className="text-white hover:text-slate-500">View Detail</a>
          </Link>
        )}
      </div>
      <div className="absolute bottom-4 left-4 p-1 overflow-auto details rounded-lg bg-gray-800/50 w-fit hover:bg-slate-500">
        <CollapsedMenu tags={project.tags} />
      </div>
    </article>
  );
};

export default ProjectItem;
