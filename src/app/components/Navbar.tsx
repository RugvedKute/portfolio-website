"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);

    document.body.style.overflow = show ? "auto" : "hidden";
  };

  return (
    <div>
      {show && (
        <div className="fixed inset-0 z-20 bg-white flex justify-center items-center">
          <div
            className="absolute top-4 right-4 cursor-pointer"
            onClick={handleClick}
          >
            <XIcon />
          </div>
          <ul className="text-slate-600 text-center text-xl font-semibold">
            <li
              className="cursor-pointer hover:underline mb-5"
              onClick={handleClick}
            >
              <a href="#work-section">Work</a>
            </li>
            <li
              className="cursor-pointer hover:underline mb-5"
              onClick={handleClick}
            >
              <a href="#about-section">About</a>
            </li>
            <li
              className="cursor-pointer hover:underline mb-5"
              onClick={handleClick}
            >
              <a href="#project-section">Project</a>
            </li>
          </ul>
        </div>
      )}
      <div className="fixed top-0 left-0 w-full z-0 bg-white">
        <nav className="flex justify-between px-10 py-5 items-center border-b-2 border-slate-200">
          <h1 className="text-2xl font-bold text-slate-grey-700">
            Rugved Kute
          </h1>
          <div
            className="cursor-pointer hidden max-sm:flex"
            onClick={handleClick}
          >
            <BarIcon />
          </div>
          <ul className="flex gap-5 text-slate-grey-700 max-sm:hidden">
            <li className="cursor-pointer hover:underline">
              {" "}
              <a href="#work-section">Work</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#about-section">About</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#project-section">Project</a>
            </li>

            <li className="cursor-pointer hover:underline">
              <a
                href="https://drive.google.com/file/d/1KAE4HnkslUbLLaqZId0hUfXTIFvq0IZG/view?usp=drive_link"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

function BarIcon() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
        />
      </svg>
    </div>
  );
}

function XIcon() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}
