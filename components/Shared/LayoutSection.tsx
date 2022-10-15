import React from "react";
import Divider from "./Divider";

type Props = {
  id: string;
  children: React.ReactNode;
  title: string;
  sectionClass?: string;
  titleClass?: string;
};

const LayoutSection = ({
  id,
  children,
  title,
  sectionClass = "",
  titleClass = "",
}: Props) => {
  return (
    <section id={`${id}`} className={`mx-8 ${sectionClass}`}>
      <article className={`my-4 ${titleClass}`}>
        <p className="text-6xl font-semibold text-white">{title}</p>
      </article>
      <Divider />
      {children}
    </section>
  );
};

export default LayoutSection;
