// import React from "react";

// const Education = () => {
//   return (
//     <>
//       <section className="flex flex-col items-center justify-center py-10 px-6">
//         <div className=" flex flex-col items-center justify-center py-16 px-6">
//           <h2 className="text-4xl font-extrabold text-[#31A3DC]  ">
//             EDUCATION & EXPERIENCE
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-60">
//           <div className="flex flex-col ">
//             <h3 className="text-2xl font-bold  ">My Education</h3>
//             <div className="flex flex-col">
//               <h4 className="text-xl ">Bachelors in Computer Engineering</h4>
//               <div className="flex flex-row">
//                 <p>
//                   <span>IOE Thapathali Campus</span> | <span>2020-2025</span>
//                 </p>
//               </div>
//               <p className="text-gray-600 leading-relaxed">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Veritatis accusantium et cupiditate exercitationem iusto
//                 voluptates cum non saepe ratione blanditiis?
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-col ">
//             <h3 className="text-2xl font-bold  ">My Experience</h3>
//             <div className="flex flex-col">
//               <h4 className="text-xl ">Front End Developer</h4>
//               <div className="flex flex-row">
//                 <p>
//                   <span>Tuna Technology</span> | <span>Dec 2024 - Present</span>
//                 </p>
//               </div>
//               <p className="text-gray-600 leading-relaxed">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Veritatis accusantium et cupiditate exercitationem iusto
//                 voluptates cum non saepe ratione blanditiis?
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Education;

import React from "react";

const TimelineItem = ({ title, company, duration }) => {
  return (
    <div className="relative pl-8 border-l-2 border-[#31A3DC] pb-8">
      {/* Circle Indicator */}
      <div className="absolute left-[-10px] top-0 w-5 h-5 bg-white border-2 border-[#31A3DC] rounded-full"></div>

      {/* Content */}
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-gray-700 font-medium">
        {company} | {duration}
      </p>
      {/* <p className="text-gray-600 leading-relaxed">{description}</p> */}
    </div>
  );
};

const Education = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center py-10 px-6">
      {/* Section Title */}
      <div className="text-center pb-10">
        <h2 className="text-4xl font-extrabold text-[#31A3DC]">
          EDUCATION & EXPERIENCE
        </h2>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl w-full">
        {/* Education Column */}
        <div>
          <h3 className="text-2xl font-bold mb-6">My Education</h3>
          <TimelineItem
            title="Bachelors in Computer Engineering"
            company="IOE Thapathali Campus"
            duration="2020 - 2025"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusantium et cupiditate exercitationem."
          />
        </div>

        {/* Experience Column */}
        <div>
          <h3 className="text-2xl font-bold mb-6">My Experience</h3>
          <TimelineItem
            title="Front End Developer"
            company="Tuna Technology"
            duration="Dec 2024 - Present"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusantium et cupiditate exercitationem."
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
