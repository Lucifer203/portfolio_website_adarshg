// "use client";
// import React, { useState } from "react";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";

// const Home = () => {
//   const [showNavbar, setShowNavbar] = useState(false);
//   return (
//     <div>
//       <Navbar show={showNavbar} />
//       <Hero setShowNavbar={setShowNavbar} />
//     </div>
//   );
// };

// export default Home;

"use client";
import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import ContactSection from "./components/Contact";
import Skills from "./components/Skills";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div>
      <Navbar show={showNavbar} />
      <Hero setShowNavbar={setShowNavbar} />
      {/* <section className="h-screen  flex items-center justify-center"> */}
        <About />
        <Education />
        <Skills/>
        <ContactSection />
      {/* </section> */}
    </div>
  );
};

export default Home;
