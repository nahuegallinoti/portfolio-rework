import React, { useContext } from "react";
import Divider from "../Shared/Divider";
import Carousel from "./Carousel";

const AboutMe = () => {
  return (
    <>
      <section className="m-8 flex flex-col max-w-screen-xl xl:mx-auto my-20">
        <p className="text-6xl font-semibold text-white">About Me</p>
        <article>
          <Divider />
          <p className="text-3xl font-semibold from-zinc-100 via-zinc-400 to-zinc-500 bg-gradient-to-r bg-clip-text text-transparent">
            I&apos;m a fullstack web developer, specialiced in backend
            development and with a further passion for blockchain technologies.
            Also I&apos;ve experience as QA Functional and QA Leader.
          </p>
        </article>
        <Carousel />
      </section>
    </>
  );
};

export default AboutMe;
