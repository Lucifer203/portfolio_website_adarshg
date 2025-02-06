"use client";
import React, { useState, useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Typewriter from "typewriter-effect";

const Hero = ({ setShowNavbar }) => {
  const heroRef = useRef(null);
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        const scrollPosition = window.scrollY;

        console.log(
          "Scroll Position:",
          scrollPosition,
          "Hero Height:",
          heroHeight
        ); // Debugging Log

        setShowNavbar(scrollPosition > heroHeight * 0.5);
        setShowArrow(scrollPosition < heroHeight * 0.01);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setShowNavbar]);

  return (
    <>
      {/* <div className="h-screen ">Hero</div> */}
      <section
        ref={heroRef}
        id="hero"
        className="h-screen flex flex-col md:flex-row items-center justify-center bg-[#31A3DC] text-white px-10 gap-8 relative"
      >
        <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src="/images/adarsh.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col items-start text-left space-y-3 ">
          <h2 className="text-lg font-light">I'm</h2>
          <h1 className="text-6xl font-extrabold tracking-wide text-white  outline-text">
            Adarsh Ghimire
          </h1>
          <p className="text-2xl flex items-center">
            <Typewriter
              options={{
                strings: ["An Engineer", "Web Developer", "An AI Enthusiast"],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
          <div className="flex space-x-6 mt-4">
            <button className="px-6 py-3 border-2 border-white rounded-full font-medium hover:bg-white hover:text-[#31A3DC] transition-all">
              Download CV
            </button>
          </div>
        </div>
        {showArrow && (
          <div className="absolute bottom-10 flex justify-center w-full animate-bounce">
            <MdOutlineKeyboardArrowDown
              size={40}
              className="text-white cursor-pointer"
            />
          </div>
        )}
      </section>
    </>
  );
};

export default Hero;
