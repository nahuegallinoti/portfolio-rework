import axios from "axios";
import React from "react";
import ProjectItem from "../../../components/Projects/ProjectItem";
import { IProject } from "../../../interfaces/IProject";
import { projects } from "../../../data/projects";

// Project es el objeto pasado en getStaticProps como props
export default function ProjectDetail({ project }: any) {
  return (
    <>
      <div className="flex items-center justify-center relative top-16">
        {<ProjectItem project={project} detail={true} />}
      </div>
    </>
  );
}

// getStaticPaths es llamado en tiempo de compilacion. Devuelve un objeto con las rutas que se van a generar en tiempo de ejecucion.
// En este caso se genera una ruta por cada proyecto. El parametro id es el nombre de la carpeta que se va a generar en pages/projects/[id]
export const getStaticPaths = async () => {
  try {
    let paths = projects.map((project: IProject) => {
      return `/projects/${project.id}`;
    });

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error(error);
  }
};

// getStaticProps es llamado en tiempo de compilacion. Devuelve un objeto con las props que se van a pasar al componente.
// En este caso se pasa el proyecto que se va a mostrar en la pagina. Params tiene el id del proyecto que se esta solicitando en la ruta
export const getStaticProps = async ({ params }: any) => {
  try {
    const project = projects.find(
      (project: IProject) => project.id.toString() === params.id
    );

    return {
      props: {
        project,
      },
    };
  } catch (error) {
    console.error(error);
  }
};
