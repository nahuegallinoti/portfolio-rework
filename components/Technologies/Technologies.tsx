import React, { useContext } from "react";
import TechnologyItem from "./TechnologyItem";
import Context from "../../context/Context";
import LayoutSection from "../Shared/LayoutSection";

const Technologies = () => {
  const context = useContext(Context);
  const technologies = context?.technologies;

  return (
    <>
      <LayoutSection title="Technologies" sectionClass="my-40" id="tech">
        <p className="text-3xl font-semibold bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-500 bg-clip-text text-transparent mt-16">
          I&apos;ve worked with a range of technologies and frameworks,
          including:
        </p>
        <section className="flex flex-col md:flex-row gap-16 space-between items-center justify-center align-middle mt-10">
          {technologies &&
            technologies.map((item, index) => (
              <TechnologyItem key={index} technology={item} />
            ))}
        </section>
      </LayoutSection>
    </>
  );
};

export default Technologies;
