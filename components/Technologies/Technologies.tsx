import React from "react";
import TechnologyItem from "./TechnologyItem";
import LayoutSection from "../Shared/LayoutSection";
import { useTechnologies } from "../../context/Provider";
import { JellyTriangle } from "@uiball/loaders";

const Technologies = () => {
  const [technologies] = useTechnologies();

  return (
    <>
      <LayoutSection title="Technologies" sectionClass="my-40" id="tech">
        <p className="text-3xl font-semibold bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-500 bg-clip-text text-transparent mt-16">
          I&apos;ve worked with a range of technologies and frameworks,
          including:
        </p>
        {technologies.length === 0 ? (
          <div className="flex flex-col columns-1 mt-10 items-center">
            <JellyTriangle size={40} color="#ffffff" />
            <p className="text-2xl text-white mt-5 animate-bounce">
              Loading technologies
            </p>
          </div>
        ) : (
          <section className="flex flex-col md:flex-row gap-16 space-between items-center justify-center align-middle mt-10">
            {technologies.map((item, index) => (
              <TechnologyItem key={index} technology={item} />
            ))}
          </section>
        )}
      </LayoutSection>
    </>
  );
};

export default Technologies;
