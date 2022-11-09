

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-700	 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="/" className="ml-3 text-s">
          <img className="devabdul"  src="https://fontmeme.com/permalink/221109/78aa0079b1cc22c7956e86e0a906a4f1.png" alt="DEVBIGBOSS"/>
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#home" className="mr-5 hover:text-black text-white">
            Home
          </a>
          <a href="#about" className="mr-5 hover:text-black text-white">
            About Me
          </a>
          <a href="#projects" className="mr-5 hover:text-black text-white">
            Past Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-black text-white">
            Skills
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-700 border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}