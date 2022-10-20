import { JellyTriangle } from "@uiball/loaders";
import React from "react";
import { useTimeLine } from "../../context/Provider";

const Carousel = () => {
  const [timeLine] = useTimeLine();

  return (
    <>
      {timeLine.length === 0 ? (
        <div className="flex flex-col columns-1 mt-10 items-center">
          <JellyTriangle size={40} color="#ffffff" />
          <p className="text-2xl text-white mt-5 animate-bounce">
            Loading timeline
          </p>
        </div>
      ) : (
        <article className="grid grid-cols-1 md:grid-cols-3 flex-wrap justify-items-center gap-4 mt-16">
          {timeLine.map((item, index) => (
            <div
              className="border-2 border-solid border-orange-400 rounded-3xl p-6 mt-10 cursor-pointer max-w-md last:animate-bounce last:border-cyan-600 last:hover:border-green-400 hover:scale-105"
              key={index}
            >
              <div className="flex gap-4">
                <h4 className="flex items-center font-extrabold text-base mr-6 text-white">
                  {item.year}
                </h4>
                <p className="text-white">{item.text}</p>
              </div>
            </div>
          ))}
        </article>
      )}
    </>
  );
};

export default Carousel;
