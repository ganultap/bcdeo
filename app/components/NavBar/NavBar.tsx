"use client";
import React, { useState } from "react";
import Image from "next/image";
const links = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Users", url: "/users" },
  { label: "Extra", url: "//bcdeo/bingo.html", target: "_blank" }, // Added target="_blank"
  { label: "JobSheets", url: "/jobsheets", target: "_blank" }, // Added target="_blank"
];

const listItems = links.map((link) => (
  <li key={link.label} className="px-3 py-2 rounded hover:bg-amber-500 hover:text-white">
    <a href={link.url} target={link.target}>{link.label}</a>
  </li>
));

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="container relative m-auto p-3 flex justify-between items-center">
        <a href="/">
          <Image
            className="hover:scale-125 transition duration-500 cursor-pointer drop-shadow-md"
            src="/favicon.ico"
            alt="DPWH"
            width="50"
            height="40"
          />
        </a>
        <nav className={isOpen ? "flex" : " hidden md:flex"}>
          <ul className="flex bg-white absolute md:relative flex-col md:flex-row w-full shadow md:shadow-none text-center top-12 left-0 md:top-0 md:flex">
            {listItems}
          </ul>
        </nav>
        <div className="md:hidden">
          <button
            className="flex justify-center items-center"
            onClick={toggleNavbar}
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={isOpen ? "hidden" : "flex"}
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={isOpen ? "flex" : "hidden"}
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
