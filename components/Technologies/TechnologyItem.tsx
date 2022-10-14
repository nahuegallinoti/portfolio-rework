import React from "react";
import { Technology } from "../../types/types";
import Image from "next/image";

type Props = {
  technology: Technology;
};

const TechnologyItem = ({ technology }: Props) => {
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-between border-2 border-solid border-white rounded-3xl p-6 my-8 cursor-pointer hover:border-cyan-500 gap-3 hover:animate-pulse-fast">
        <p className="font-extrabold text-2xl text-white mb-4">
          {technology.type}
        </p>
        <p className="text-white">{technology.description}</p>
        <picture className="flex flex-row gap-4">
          {technology.icon &&
            technology.icon.map((item, index) => (
              <Image
                key={index}
                src={`/images/${item.name}.png`}
                alt={item.name}
                width={item.width}
                height={item.height}
                className="object-contain"
              />
            ))}
        </picture>
      </div>
    </>
  );
};

export default TechnologyItem;
