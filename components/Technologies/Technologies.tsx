import React, { useContext } from "react";
import Divider from "../Shared/Divider";
import TechnologyItem from "./TechnologyItem";
import Context from "../../context/Context";

const Technologies = () => {
  const context = useContext(Context);
  const projects = context?.technologies;

  return (
    <>
      <section className="flex flex-col m-8 max-w-screen-xl xl:mx-auto my-10">
        <p className="text-6xl font-semibold text-white">Technologies</p>
        <article>
          <Divider />
          <p className="text-3xl font-semibold from-zinc-100 via-zinc-400 to-zinc-500 bg-gradient-to-r bg-clip-text text-transparent">
            I&apos;ve worked with a range of technologies and frameworks,
            including:
          </p>
        </article>
        <article className="flex flex-row gap-16 space-between">
          {projects &&
            projects.map((item, index) => (
              <TechnologyItem key={index} technology={item} />
            ))}
        </article>
      </section>
    </>
  );
};

export default Technologies;
