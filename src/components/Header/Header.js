import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-Q&A.png";
const Header = () => {
  return (
    <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/home"
              className="flex
              items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              {" "}
              Home
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/topics"
              className="flex
              items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Topics
            </Link>
          </li>
        </ul>
        <div className="flex items-center justify-between w-48">
          <div className="w-16">
            <img src={logo} alt="BigCo Inc. logo" />
          </div>
          <p className="dark:text-violet-400 text-2xl font-bold">IQ Checker</p>
        </div>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/statistics"
              className="flex
              items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Statistics
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/blog"
              className="flex
              items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              {" "}
              Blog
            </Link>
          </li>
        </ul>
        <button title="Button" type="button" className="p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;