// import React from "react";
// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <>
//       <div className="w-full h-12 ">
//         {/** Logo Section */}

//         <div>
//             <h2>AG</h2>
//         </div>

//         {/**Navigation Links */}
//         <div className="flex flex-row items-center justify-center gap-8 mt-2 ">
//           <Link href="/">
//             <div className="hover:text-[#31A3DC] cursor-pointer ">Home</div>
//           </Link>
//           <Link href="/about">
//             <div className="hover:text-[#31A3DC] cursor-pointer">About</div>
//           </Link>
//           <Link href="/skill">
//             <div className="hover:text-[#31A3DC] cursor-pointer">Skill</div>
//           </Link>
//           <Link href="/service">
//             <div className="hover:text-[#31A3DC] cursor-pointer">Service</div>
//           </Link>
//           <Link href="/blog">
//             <div className="hover:text-[#31A3DC] cursor-pointer">Blog</div>
//           </Link>
//           <Link href="/contact">
//             <div className="hover:text-[#31A3DC] cursor-pointer">Contact</div>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React from "react";
import Link from "next/link";

const Navbar = ({ show }) => {
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
        <Link href="/">
          <div className="hover:text-[#31A3DC] cursor-pointer">Home</div>
        </Link>
        <Link href="/about">
          <div className="hover:text-[#31A3DC] cursor-pointer">About</div>
        </Link>

        <Link href="/skill">
          <div className="hover:text-[#31A3DC] cursor-pointer">Skill</div>
        </Link>
        <Link href="/service">
          <div className="hover:text-[#31A3DC] cursor-pointer">Service</div>
        </Link>
        <Link href="/portfolio">
          <div className="hover:text-[#31A3DC] cursor-pointer">Portfolio</div>
        </Link>

        <Link href="/blog">
          <div className="hover:text-[#31A3DC] cursor-pointer">Blog</div>
        </Link>
        <Link href="/contact">
          <div className="hover:text-[#31A3DC] cursor-pointer">Contact</div>
        </Link>
      </div>

      {/** Hire Me Button */}
      <div>
        <Link href="/hire">
          <button className="px-5 py-2 border-2 border-[#31A3DC] text-[#31A3DC] rounded-full hover:bg-[#31A3DC] hover:text-white transition">
            Hire Me
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
