import React from "react";

type Props = {
  tags: string[];
};

const CollapsedMenu = ({ tags }: Props) => {
  return (
    <ul>
      {tags.map((tag: string, i: number) => (
        <li
          className="tracking-wider text-white hover:font-bold rounded-lg hover:bg-red-900 px-4 hover:cursor-default"
          key={i}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default CollapsedMenu;
