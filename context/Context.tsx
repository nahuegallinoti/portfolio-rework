import { createContext } from "react";
import { IContext } from "./IContext";

const AppCtx = createContext<IContext | null>(null);

export default AppCtx;
