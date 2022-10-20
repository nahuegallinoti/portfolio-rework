import { IProject } from "../interfaces/IProject";
import { ITechnology } from "../interfaces/ITechnology";
import { ITimelineItem } from "../interfaces/ITimelineItem";

export type IContext = {
  projects: IProject[];
  timeLine: ITimelineItem[];
  technologies: ITechnology[];
};
