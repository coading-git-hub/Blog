"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentDateTime(
        now.toLocaleDateString("en-US", options) +
          " " +
          now.toLocaleTimeString("en-US", { hour12: false })
      );
    };

    updateDateTime(); // Call immediately to set initial state
    const interValId = setInterval(updateDateTime, 1000);

    return () => clearInterval(interValId); // Cleanup on unmount
  }, []);

  return (
    <header className="text-gray-400 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center ml-5">
        <div className="flex-1 text-black">
          <span>{currentDateTime}</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-black justify-center">
          <Link
            href={"http://localhost:3000/"}
            className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105 "
          >
            Home
          </Link>

          <Link
            href={"http://localhost:3000/"}
            className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105 "
          >
            About
          </Link>

          <Link
            href={"http://localhost:3000/"}
            className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105 "
          >
            Blog
          </Link>

          <Link
            href={"http://localhost:3000/"}
            className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105 "
          >
            Contact
          </Link>
        </nav>
        <button className="inline-flex items-center bg-orange-800 border-0 px-3 focus:outline-none hover:bg-red-700 rounded text-white mt-4 md:mt-0 transition-colors duration-300">
          GitHub
        
        <svg
          fill="none"
          stroke="currentcolor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
        </button>
      </div>
    </header>
  );
}
