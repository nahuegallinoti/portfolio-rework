import { createContext } from "react";
import { IContext } from "../types/context.type";

const initialState: IContext = {
  projects: [],
  timeLine: [],
  technologies: [],
};

const AppCtx = createContext<IContext>(initialState);

export default AppCtx;
