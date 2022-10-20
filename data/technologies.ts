import { ITechnology } from "../interfaces/ITechnology";

export const technologies: ITechnology[] = [
  {
    type: "Front-End",
    description: "Beautiful and scalable SPA",
    icon: [
      {
        name: "html",
        height: 50,
        width: 50,
      },
      {
        name: "css",
        height: 50,
        width: 50,
      },
      {
        name: "js",
        height: 10,
        width: 40,
      },
      {
        name: "react",
        height: 10,
        width: 40,
      },
      {
        name: "angular",
        height: 10,
        width: 40,
      },
    ],
  },
  {
    type: "Back-End",
    description: "API REST and microservices",
    icon: [
      {
        name: "node",
        height: 35,
        width: 35,
      },
      {
        name: "csharp",
        height: 50,
        width: 50,
      },
    ],
  },
  {
    type: "Databases",
    description: "Persist and retrieve data",
    icon: [
      {
        name: "mongo",
        height: 50,
        width: 50,
      },
      {
        name: "mysql",
        height: 50,
        width: 50,
      },
      {
        name: "sqlserver",
        height: 50,
        width: 50,
      },
    ],
  },
];
