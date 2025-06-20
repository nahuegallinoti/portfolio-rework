import Link from "next/link";
import { DiCodepen } from "react-icons/di";
import React, { useState } from "react";
import SocialIcons from "./SocialIcons";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const genericHamburgerLine = `block h-1 w-8 my-1 rounded-full duration-500 bg-dark-400`;

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#tech", label: "Technologies" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsNavOpen(prev => !prev);
  const closeMenu = () => setIsNavOpen(false);

  return (
    <nav 
      className="
        sticky top-0 z-50
        grid grid-cols-nav 
        glass
        p-4 border-b border-dark-700/50
        backdrop-blur-xl
      " 
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Mobile menu button */}
      <section className="flex lg:hidden items-center z-10">
        <button
          className="
            relative group p-2 rounded-lg
            hover:bg-dark-700/50
            focus:outline-none focus:ring-2 focus:ring-primary-400
            transition-colors duration-200
          "
          onClick={toggleMenu}
          aria-label={isNavOpen ? "Close menu" : "Open menu"}
          aria-expanded={isNavOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`${genericHamburgerLine} ${
              isNavOpen
                ? "rotate-45 translate-y-1 opacity-80 absolute"
                : ""
            }`}
            aria-hidden="true"
          />
          <span
            className={`${genericHamburgerLine} ${
              isNavOpen ? "opacity-0" : ""
            }`}
            aria-hidden="true"
          />
          <span
            className={`${genericHamburgerLine} ${
              isNavOpen
                ? "-rotate-45 -translate-y-3 opacity-80 absolute"
                : ""
            }`}
            aria-hidden="true"
          />
        </button>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`
            ${isNavOpen ? "translate-x-0" : "-translate-x-full"}
            fixed top-0 left-0 
            bg-gradient-to-b from-dark-900 to-dark-800
            backdrop-blur-xl border-r border-dark-700/50
            flex flex-col justify-center items-center 
            w-3/4 h-screen
            transform transition-transform duration-300 ease-in-out
          `}
          aria-hidden={!isNavOpen}
        >
          <ul className="flex flex-col items-center space-y-8" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href}
                  className="
                    text-2xl font-semibold text-dark-100
                    hover:text-primary-300
                    pb-2 border-b-2 border-transparent
                    hover:border-primary-400
                    transition-all duration-300
                    focus:outline-none focus:text-primary-300
                  "
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Overlay for mobile menu */}
        {isNavOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[-1] lg:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </section>

      {/* Logo/Brand */}
      <div className="hidden lg:flex">
        <Link href="/">
          <a className="
            flex items-center gap-3 text-xl font-bold
            text-white hover:text-primary-300
            transition-colors duration-200
            group
          ">
            <DiCodepen 
              size="2rem" 
              className="text-primary-400 group-hover:text-primary-300 transition-colors duration-200"
            />
            <span className="text-white">Nahuel Dev</span>
          </a>
        </Link>
      </div>

      {/* Desktop menu */}
      <div className="hidden lg:flex justify-center">
        <ul className="flex items-center space-x-8" role="list">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <a className="
                  relative px-4 py-2 text-lg font-medium
                  text-dark-200 hover:text-primary-300
                  transition-all duration-300
                  hover:scale-105
                  focus:outline-none focus:text-primary-300
                  after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5
                  after:bg-gradient-to-r after:from-primary-400 after:to-accent-500
                  after:transition-all after:duration-300
                  hover:after:w-full hover:after:left-0
                ">
                  {item.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Social Icons */}
      <div className="flex justify-end">
        <SocialIcons />
      </div>
    </nav>
  );
};

export default NavBar;
