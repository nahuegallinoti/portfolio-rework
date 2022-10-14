import React, { useContext } from "react";
import Context from "../../context/Context";

const Carousel = () => {
  const context = useContext(Context);
  const timeLine = context?.timeLine;

  return (
    <article className="grid grid-cols-1 md:grid-cols-3 flex-wrap justify-items-center gap-4">
      {timeLine &&
        timeLine.map((item, index) => (
          <div
            className="border-2 border-solid border-white rounded-3xl p-6 my-8 cursor-pointer hover:border-cyan-500 max-w-md last:animate-bounce last:border-green-600 last:hover:border-green-400 hover:scale-105"
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
  );
};

export default Carousel;
