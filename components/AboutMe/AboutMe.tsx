import React from "react";
import LayoutSection from "../Shared/LayoutSection";
import Carousel from "./Carousel";

const AboutMe = () => {
  return (
    <>
      <LayoutSection title="About Me" sectionClass="my-36" id="about">
        <p className="text-3xl font-semibold from-zinc-100 via-zinc-400 to-zinc-500 bg-gradient-to-r bg-clip-text text-transparent mt-16">
          I&apos;m a fullstack web developer, specialiced in backend development
          and with a further passion for blockchain technologies. Also I&apos;ve
          experience as QA Functional and QA Leader.
        </p>
        <Carousel />
      </LayoutSection>
    </>
  );
};

export default AboutMe;
