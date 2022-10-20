export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  source: string;
  visit: string;
};

export type TimelineItem = {
  year: string | number;
  text: string;
};

export type Technology = {
  type: string;
  description: string;
  icon: any[];
};
