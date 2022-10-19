import React from "react";
import BackgroundAnimation from "../Shared/BackgroundAnimation";

type Props = {
  greet: string;
};

const Welcome = ({ greet }: Props) => (
  <>
    <section
      id="welcome"
      className="flex flex-col m-8 md:flex-row max-w-screen-xl xl:mx-auto my-10 items-center"
    >
      <article>
        <p className="text-7xl font-semibold bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-500 bg-clip-text text-transparent">
          {greet}
        </p>
      </article>

      <article className="h-1/2 w-1/2 mt-4 animate-pulse-fast">
        <BackgroundAnimation />
      </article>
    </section>
  </>
);

export default Welcome;
