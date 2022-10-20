import { useRouter } from "next/router";
import React from "react";
import ProjectItem from "../../../components/Projects/ProjectItem";
import { projects } from "../../../constants/Constants";

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const project = projects?.find((item) => item.id.toString() === id);

  return (
    <>
      <div className="flex items-center justify-center relative top-16">
        {project && <ProjectItem project={project} detail={true} />}
      </div>
    </>
  );
};

// export const getStaticPaths = async () => {
//   const paths = projects.map((item) => ({
//     params: { id: item.id.toString() },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async () => {
//   const projects = await fetch("https://localhost:3000/api/projects/project");
//   return {
//     props: {
//       projects,
//     },
//   };
// };

export default ProjectDetail;
