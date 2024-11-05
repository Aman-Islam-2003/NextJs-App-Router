"use client";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navItems = [
    { name: "Home", url: "/" },
    { name: "Gallery", url: "/gallery" },
    {
      name: "Sites",
      url: "/sites",
    },
    { name: "3D Models", url: "/3d-models" },
    { name: "Blogs & News", url: "/blogs" },
    { name: "About Us", url: "/about" },
  ];
  return (
    <nav className="bg-[#00000040] p-4 w-full">
      <div className="flex justify-between items-center">
        <div className="text-white text-md font-medium uppercase">
          Heritage of Swat Valley
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="text-white hover:text-gray-300"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/contact"
            className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-800 transition"
          >
            CTA/Contact
          </a>
        </div>
        <button
          onClick={() => setIsMobile(!isMobile)}
          className="md:hidden text-white focus:outline-none"
        >
          <RxHamburgerMenu/>
        </button>
      </div>
      {isMobile && (
        <div className="md:hidden mt-2 space-y-2">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="block text-white hover:text-gray-300"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/contact"
            className="block border border-white text-white px-2 py-1 rounded-lg mt-2 hover:bg-white hover:text-gray-800 transition w-1/3 text-center"
          >
            CTA/Contact
          </a>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
