import { Project, Technology, TimelineItem } from "../types/types";
import { FaStoreAlt } from "react-icons/fa";
import { BiLaugh } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { BsPersonBoundingBox } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { GiAirplaneDeparture } from "react-icons/gi";
export const projects: Project[] = [
  {
    title: "NFT Marketplace",
    description:
      "Marketplace to mint, buy, sell and stake NFT's using custom token (LUNGO Token)",
    tags: ["Angular 13", "Truffle", "Ganache", "Solidity"],
    source: "https://github.com/nahuegallinoti/lungo-token-nft",
    visit: "https://google.com",
    id: 0,
    icon: FaStoreAlt,
  },
  {
    title: "Booking System",
    description:
      "Booking system for hotel, reservation management and tracking of consumption during the stay",
    tags: ["Angular 11", "Angular Material", "Firebase"],
    source: "https://github.com/nahuegallinoti/reservas-app",
    visit: "https://tesis-a16ed.firebaseapp.com/",
    id: 1,
    icon: RiComputerLine,
  },
  {
    title: "Booking Portal",
    description:
      "Portal for booking hotel rooms and services, with a simple and intuitive interface",
    tags: ["Angular 11", "Angular Material", "Firebase"],
    source: "https://github.com/nahuegallinoti/portal-reservas",
    visit: "https://portal-reservas.web.app/",
    id: 2,
    icon: GiAirplaneDeparture,
  },
  {
    title: "Giphy App",
    description: "Web application to search GIFs",
    tags: ["React"],
    source: "https://github.com/nahuegallinoti/giphy-react-app",
    visit: "https://giphy-app-react-hooks.herokuapp.com/",
    id: 3,
    icon: BiLaugh,
  },
  {
    title: "ChatApp",
    description: "Chat app",
    tags: ["React", "Socket.io", "Node.js"],
    source: "https://github.com/nahuegallinoti/chatApp",
    visit: "https://react-socketio-express-chat.herokuapp.com/",
    id: 4,
    icon: BsFillChatDotsFill,
  },
  {
    title: "Posts App",
    description: "App to make posts",
    tags: ["React", "Node.js", "Express", "Tailwind"],
    source: "https://github.com/nahuegallinoti/MERN-stack-posts",
    visit: "https://mern-stack-nagu.herokuapp.com/",
    id: 5,
    icon: BiNews,
  },
  {
    title: "Portfolio",
    description: "Personal portfolio website",
    tags: ["Next.js", "Tailwind"],
    source: "https://github.com/nahuegallinoti/portfolio",
    visit: "https://portfolio-nahuel.herokuapp.com/",
    id: 6,
    icon: BsPersonBoundingBox,
  },
];

export const timeLine: TimelineItem[] = [
  { year: 2016, text: "QA Functional in IOT Project" },
  { year: 2017, text: "QA Leader for Fintech Project" },
  { year: "2018-Actually", text: "Fullstack Web Developer" },
];

export const technologies: Technology[] = [
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
