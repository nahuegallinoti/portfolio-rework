import Link from "next/link";
import { DiCodepen } from "react-icons/di";

import React, { useState } from "react";
import SocialIcons from "./SocialIcons";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const genericHamburgerLine = `block h-1 w-8 my-1 rounded-full duration-500 bg-gray-500`;

  return (
    <>
      <nav className="grid grid-cols-nav bg-navColor p-4 border-b-solid border-b-2">
        {/* Burger menu */}
        <section className="flex lg:hidden items-center z-10">
          {/* X */}
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span
              className={`${genericHamburgerLine} ${
                isNavOpen
                  ? "rotate-45 translate-y-1 opacity-50 group-hover:opacity-100 absolute z-20"
                  : ""
              }`}
            ></span>
            <span
              className={`${genericHamburgerLine} ${
                isNavOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`${genericHamburgerLine} ${
                isNavOpen
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100 absolute z-20"
                  : ""
              }`}
            ></span>
          </div>

          {/* Burger menu options */}
          <div
            className={
              isNavOpen
                ? "absolute top-0 left-0 bg-hamburger flex flex-col justify-evenly items-center w-3/4 h-full"
                : "hidden"
            }
          >
            <ul
              onClick={() => setIsNavOpen(false)}
              className="flex flex-col items-center justify-between"
            >
              <li className="border-b border-gray-300 my-8 uppercase first-letter:text-2xl text-white">
                <a href="#about">About</a>
              </li>
              <li className="border-b border-gray-300 my-8 uppercase first-letter:text-2xl text-white">
                <a href="#tech">Technologies</a>
              </li>
              <li className="border-b border-gray-300 my-8 uppercase first-letter:text-2xl text-white">
                <a href="#projects">Projects</a>
              </li>
              <li className="border-b border-gray-300 my-8 uppercase first-letter:text-2xl text-white">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        {/* Full menu */}
        <div className="hidden lg:flex">
          <Link href="/">
            <a className="flex text-xl items-center text-white">
              <DiCodepen size="2rem"></DiCodepen>
              <div>
                <span>Nahuel Dev</span>
              </div>
            </a>
          </Link>
        </div>

        {/* Menu options */}
        <div>
          <ul className="hidden lg:flex justify-around text-xl">
            <li className="text-white hover:bg-yellow-50 hover:text-black hover:rounded-sm p-1">
              <Link href="#about">
                <a>About</a>
              </Link>
            </li>
            <li className="text-white hover:bg-yellow-50 hover:text-black hover:rounded-sm p-1">
              <Link href="#tech">
                <a>Technologies</a>
              </Link>
            </li>
            <li className="text-white hover:bg-yellow-50 hover:text-black hover:rounded-sm p-1">
              <Link href="#projects">
                <a>Projects</a>
              </Link>
            </li>
            <li className="text-white hover:bg-yellow-50 hover:text-black hover:rounded-sm p-1">
              <Link href="#contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        <SocialIcons />
      </nav>
    </>
  );
};

export default NavBar;
