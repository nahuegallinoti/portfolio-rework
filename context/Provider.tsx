import React from "react";
import Context from "./Context";

import { projects, timeLine, technologies } from "../constants/Constants.js";

import { IContext } from "./IContext";

type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  const AppContext: IContext = {
    projects,
    timeLine,
    technologies,
  };

  return <Context.Provider value={AppContext}>{children}</Context.Provider>;
};

export default Provider;
