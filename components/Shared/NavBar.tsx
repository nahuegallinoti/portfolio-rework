import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCodepen } from "react-icons/di";

import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="grid grid-cols-nav bg-navColor p-6 border-b-solid border-b-2 ">
        <div className="flex">
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
          <ul className="flex justify-around text-xl">
            <li className="text-white hover:bg-yellow-50 hover:text-black hover:rounded-sm">
              <Link href="#about">
                <a>About</a>
              </Link>
            </li>
            <li className="text-white hover:bg-yellow-50 hover:text-black hover:rounded-sm">
              <Link href="#projects">
                <a>Projects</a>
              </Link>
            </li>
            <li className="text-white hover:bg-yellow-50 hover:text-black hover:rounded-sm">
              <Link href="#tech">
                <a>Technologies</a>
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
