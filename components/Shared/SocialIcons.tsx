import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const SocialIcons = () => {
  return (
    <div>
      <ul className="flex justify-around text-xl gap-5">
        <li className="text-white hover:bg-yellow-50 hover:text-black hover:rounded-sm">
          <a
            href="https://github.com/nahuegallinoti"
            aria-label="Github Repository"
          >
            <AiFillGithub size="2rem"></AiFillGithub>
          </a>
        </li>
        <li className="text-white hover:bg-yellow-50 hover:text-blue-600 hover:rounded-sm">
          <a
            href="https://www.linkedin.com/in/nahuel-gallinoti-1b482213a/"
            aria-label="Linkedin Profile"
          >
            <AiFillLinkedin size="2rem"></AiFillLinkedin>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
