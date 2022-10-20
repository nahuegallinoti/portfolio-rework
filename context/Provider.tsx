import React, { useContext, useEffect } from "react";
import Context from "./Context";

import { IContext } from "../types/context.type";
import axios from "axios";

type Props = {
  children: React.ReactNode;
};

const initialState: IContext = {
  projects: [],
  technologies: [],
  timeLine: [],
};

const Provider = ({ children }: Props) => {
  const [state, setState] = React.useState<IContext>(initialState);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const proj = axios.get<any>("/api/projects");
    const tech = axios.get<any>("/api/technologies");
    const time = axios.get<any>("/api/timeline");

    axios.all([proj, tech, time]).then(
      axios.spread((...responses) => {
        setState({
          projects: responses[0].data,
          technologies: responses[1].data,
          timeLine: responses[2].data,
        });
      })
    );
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
};

const useProjects = () => {
  const context = useContext(Context);
  const projects = context.projects;

  return [projects];
};

const useTimeLine = () => {
  const context = useContext(Context);
  const timeLine = context.timeLine;

  return [timeLine];
};

const useTechnologies = () => {
  const context = useContext(Context);
  const technologies = context.technologies;

  return [technologies];
};

export { Provider as default, useProjects, useTimeLine, useTechnologies };
