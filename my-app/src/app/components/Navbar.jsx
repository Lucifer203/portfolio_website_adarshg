import React from "react";
import useActiveSection from "../hooks/useActiveSection";

const Navbar = ({ show }) => {
  const sectionIds = ["hero", "about", "skills", "service", "blog", "contact"];
  const activeSection = useActiveSection(sectionIds);

  const linkClass = (id) =>
    `hover:text-[#31A3DC] cursor-pointer transition ${
      activeSection === id ? "text-[#31A3DC] font-bold " : ""
    }`;

  return (
    <nav
      className={`fixed top-0 z-50 left-0 w-full h-16 flex items-center justify-between px-10 shadow-md bg-white transition-transform ${
        show
          ? "translate-y-0 transition-all transition-discrete ease-linear duration-300"
          : "-translate-y-full duration-150"
      }`}
    >
      {/** Logo Section */}
      <div className="text-2xl font-bold">
        <span className="text-[#31A3DC]">A</span>G
      </div>

      {/** Navigation Links */}
      <div className="flex space-x-6 text-gray-700 font-medium">
        {sectionIds.map((id) => (
          <a key={id} href={`#${id}`} className={linkClass(id)}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>

      {/** Hire Me Button */}
      <div>
        <a href="/hire">
          <button className="px-5 py-2 border-2 border-[#31A3DC] text-[#31A3DC] rounded-full hover:bg-[#31A3DC] hover:text-white transition">
            Hire Me
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
