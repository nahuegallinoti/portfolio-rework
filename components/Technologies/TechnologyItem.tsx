import React from "react";
import Image from "next/image";
import { ITechnology } from "../../interfaces/ITechnology";

type Props = {
  technology: ITechnology;
};

const TechnologyItem = ({ technology }: Props) => {
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-between border-2 border-solid border-y-slate-600 border-x-slate-500 rounded-3xl p-6 my-8 cursor-pointer hover:border-cyan-500 gap-3 hover:animate-pulse-fast h-52 w-80">
        <p className="font-extrabold text-2xl text-white">{technology.type}</p>
        <p className="text-white text-md xl:text-lg mb-4 text-center">
          {technology.description}
        </p>
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
