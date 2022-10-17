import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCodepen } from "react-icons/di";

import React, { useState } from "react";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {/* <div className="m-2 p-4 details rounded-lg bg-gray-800/50 w-fit h-2">
        <div>
          <ul>
            {["hola", "chau"].map((tag, i) => (
              <li
                className="tracking-wider text-red-200 hover:font-bold hover:text-white rounded-lg hover:bg-red-900 px-4 hover:cursor-default"
                key={i}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      <nav className="grid grid-cols-nav bg-navColor p-6 border-b-solid border-b-2 ">
        <section className="flex lg:hidden">
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          {/* X */}
          <div
            className={
              isNavOpen
                ? "absolute top-0 left-0 bg-hamburger z-10 flex flex-col justify-evenly items-center w-10/12 h-2/3"
                : "hidden"
            }
          >
            {" "}
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul
              onClick={() => setIsNavOpen(false)}
              className="flex flex-col items-center justify-between"
            >
              <li className="border-b border-gray-200 my-8 uppercase hover:text-white">
                <a href="#about">About</a>
              </li>
              <li className="border-b border-gray-200 my-8 uppercase">
                <a href="#tech">Technologies</a>
              </li>
              <li className="border-b border-gray-200 my-8 uppercase">
                <a href="#projects">Projects</a>
              </li>
              <li className="border-b border-gray-200 my-8 uppercase">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <div className="hidden lg:flex ">
          <Link href="/">
            <a className="flex text-xl items-center text-white">
              <DiCodepen size="2rem"></DiCodepen>
              <div>
                <span>Nahuel Dev</span>
              </div>
            </a>
          </Link>
        </div>

        <div>
          <ul className="hidden lg:flex justify-around text-xl">
            <li className="text-white hover:bg-yellow-50 hover:text-black hover:rounded-sm">
              <Link href="#about">
                <a>About</a>
              </Link>
            </li>
            <li className="text-white hover:bg-yellow-50 hover:text-black hover:rounded-sm">
              <Link href="#tech">
                <a>Technologies</a>
              </Link>
            </li>
            <li className="text-white hover:bg-yellow-50 hover:text-black hover:rounded-sm">
              <Link href="#projects">
                <a>Projects</a>
              </Link>
            </li>
            <li className="text-white hover:bg-yellow-50 hover:text-black hover:rounded-sm">
              <Link href="#contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex justify-around text-xl">
            <li className="text-white hover:bg-yellow-50 hover:text-black hover:rounded-sm">
              <a href="https://github.com/nahuegallinoti">
                <AiFillGithub size="2rem"></AiFillGithub>
              </a>
            </li>
            <li className="text-white hover:bg-yellow-50 hover:text-blue-600 hover:rounded-sm">
              <a href="https://www.linkedin.com/in/nahuel-gallinoti-1b482213a/">
                <AiFillLinkedin size="2rem"></AiFillLinkedin>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
