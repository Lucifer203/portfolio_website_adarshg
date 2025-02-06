import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-6 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-[#31A3DC]">About Me</h2>
      </div>

      {/* Content Container (Same Width as Education Section) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl items-center w-full">
        {/* Image Section */}
        <div className="mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200">
            <Image
              alt="Adarsh Photo"
              src={"/images/hacker.jpg"}
              width={350}
              height={350}
              className="rounded-2xl"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Computer Engineer</h2>
          <p className="text-gray-600 leading-relaxed">
            A tech enthusiast with proficiency in web development, always eager
            to learn and explore new technologies. Passionate about Artificial
            Intelligence and continuously expanding my knowledge in AI and its
            applications. Striving to innovate and build impactful solutions
            every day!
          </p>

          {/* Info Grid (Aligned Width) */}
          <div className="grid grid-cols-1 md:grid-cols-2 text-gray-700 gap-x-10 gap-y-3">
            <div className="space-y-3">
              <p>
                <span className="font-semibold">Name:</span> Adarsh Ghimire
              </p>
              <p>
                <span className="font-semibold">Degree:</span> Bachelors
              </p>
            </div>
            <div className="space-y-3">
              <p>
                <span className="font-semibold">Birthday:</span> 5 March 2003
              </p>
              <p>
                <span className="font-semibold">Experience:</span> 1 Year
              </p>
            </div>
            <div className="space-y-3">
              <p>
                <span className="font-semibold">Phone:</span> +977 9867112611
              </p>
              <p>
                <span className="font-semibold">Address:</span> Resunga-1, Gulmi
              </p>
            </div>
            <div className="space-y-3">
              <p>
                <span className="font-semibold">Email:</span>
                adarshghimire10@gmail.com
              </p>
              <p>
                <span className="font-semibold">Freelance:</span> Available
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-6 mt-4">
            <button className="px-6 py-3 border-2 border-[#31A3DC] rounded-full font-medium text-[#31A3DC] hover:bg-[#31A3DC] hover:text-white transition-all">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
