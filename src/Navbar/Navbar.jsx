"use client";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      <nav className="bg-[#212121]/95 backdrop-blur-md border border-white/10 text-white px-3 sm:px-4 py-2 fixed top-4 left-1/2 -translate-x-1/2 rounded-xl h-14 w-[92vw] sm:w-fit max-w-4xl flex items-center justify-between gap-2 sm:gap-4 md:gap-6 z-[200] shadow-lg">
     
        <a href="/" className="shrink-0">
          <img
            src="/images/logo.png"
            alt="logo"
            className="h-5 sm:h-6 w-[75px] sm:w-[90px] md:w-[100px] object-contain"
          />
        </a>

        <ul className="hidden md:flex items-center gap-1">
          <li className="hover:bg-black rounded-md duration-300 text-[15px]">
            <a href="/" className="block px-3 py-1.5">Product</a>
          </li>
          <li className="hover:bg-black rounded-md duration-300 text-[15px]">
            <a href="/" className="block px-3 py-1.5">Features</a>
          </li>
          <li className="hover:bg-black rounded-md duration-300 text-[15px]">
            <a href="/" className="block px-3 py-1.5">Power</a>
          </li>
          <li className="hover:bg-black rounded-md duration-300 text-[15px]">
            <a href="/" className="block px-3 py-1.5">Experience</a>
          </li>
        </ul>

        <div className="flex items-center gap-2 shrink-0">
          <button className="bg-[#840da7] hover:bg-purple-900 duration-300 text-white text-xs sm:text-sm md:text-[15px] font-semibold px-2.5 sm:px-3.5 md:px-4 h-9 sm:h-10 md:h-[42px] rounded-md ">
            BUY FOR 24$
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-1.5 hover:bg-black rounded-md text-lg leading-none"
            aria-label="Toggle Menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden fixed top-20 left-1/2 -translate-x-1/2 bg-[#212121]/95 backdrop-blur-md border border-white/10 text-white rounded-xl p-3 flex flex-col gap-1.5 w-[92vw] max-w-sm text-center z-[200] shadow-xl">
          <li>
            <a href="#" onClick={() => setOpen(false)} className="block px-3 py-2 hover:bg-black rounded-md">
              Product
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setOpen(false)} className="block px-3 py-2 hover:bg-black rounded-md">
              Features
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setOpen(false)} className="block px-3 py-2 hover:bg-black rounded-md">
              Power
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setOpen(false)} className="block px-3 py-2 hover:bg-black rounded-md">
              Experience
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;
