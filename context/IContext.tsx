import { Project, Technology, TimelineItem } from "../types/types";

export interface IContext {
  projects: Project[];
  timeLine: TimelineItem[];
  technologies: Technology[];
}
