import axios from "axios";
import React from "react";
import ProjectItem from "../../../components/Projects/ProjectItem";
import { IProject } from "../../../interfaces/IProject";
import { projects } from "../../../data/projects";
import { GetStaticPaths, GetStaticProps } from "next";

// Project es el objeto pasado en getStaticProps como props
export default function ProjectDetail({ project }: any) {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-2xl">
          <ProjectItem project={project} detail={true} />
        </div>
      </div>
    </>
  );
}

// getStaticPaths es llamado en tiempo de compilacion. Devuelve un objeto con las rutas que se van a generar en tiempo de ejecucion.
// En este caso se genera una ruta por cada proyecto. El parametro id es el nombre de la carpeta que se va a generar en pages/projects/[id]
export const getStaticPaths: GetStaticPaths = async () => {
  let paths = projects.map((project: IProject) => {
    return `/projects/${project.id}`;
  });

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

// getStaticProps es llamado en tiempo de compilacion. Devuelve un objeto con las props que se van a pasar al componente.
// En este caso se pasa el proyecto que se va a mostrar en la pagina. Params tiene el id del proyecto que se esta solicitando en la ruta
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const project = projects.find(
    (project: IProject) => project.id.toString() === params.id
  );

  return {
    props: {
      project,
    },
  };
};
