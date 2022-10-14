import React from "react";
import { IconType } from "react-icons/lib";

export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  source: string;
  visit: string;
  icon: any;
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
