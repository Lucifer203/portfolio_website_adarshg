// import React, { useState } from "react";
// import {
//   FaJs,
//   FaReact,
//   FaHtml5,
//   FaCss3,
//   FaPython,
//   FaDatabase,
// } from "react-icons/fa";
// import {
//   SiTypescript,
//   SiWebpack,
//   SiBabel,
//   SiNpm,
//   SiTensorflow,
//   SiPytorch,
//   SiKeras,
//   SiPandas,
//   SiNumpy,
//   SiScikitlearn,
//   SiJupyter,
//   SiTableau,
//   SiLlvm,
// } from "react-icons/si";
// import { BiPowerOff } from "react-icons/bi";

// const Skills = () => {
//   const [activeTab, setActiveTab] = useState("web");

//   const skillCategories = {
//     web: {
//       title: "Web Development",
//       color: "bg-blue-500",
//       skills: [
//         {
//           name: "JavaScript",
//           icon: FaJs,
//           level: "Expert",
//           color: "bg-yellow-400",
//         },
//         {
//           name: "HTML",
//           icon: FaHtml5,
//           level: "Expert",
//           color: "bg-orange-500",
//         },
//         { name: "CSS", icon: FaCss3, level: "Expert", color: "bg-blue-400" },
//         { name: "React", icon: FaReact, level: "Expert", color: "bg-cyan-400" },
//       ],
//     },
//     ai: {
//       title: "Artificial Intelligence",
//       color: "bg-purple-500",
//       skills: [
//         {
//           name: "Python",
//           icon: FaPython,
//           level: "Expert",
//           color: "bg-blue-500",
//         },
//         {
//           name: "PyTorch",
//           icon: SiPytorch,
//           level: "Intermediate",
//           color: "bg-red-500",
//         },
//         {
//           name: "Machine Learning",
//           icon: FaPython,
//           level: "Expert",
//           color: "bg-green-500",
//         },
//         {
//           name: "NLP",
//           icon: FaPython,
//           level: "Intermediate",
//           color: "bg-purple-500",
//         },
//       ],
//     },
//     data: {
//       title: "Data Science",
//       color: "bg-green-500",
//       skills: [
//         {
//           name: "Python",
//           icon: FaPython,
//           level: "Expert",
//           color: "bg-blue-500",
//         },
//         {
//           name: "SQL",
//           icon: FaDatabase,
//           level: "Expert",
//           color: "bg-blue-400",
//         },
//         {
//           name: "Pandas",
//           icon: SiPandas,
//           level: "Expert",
//           color: "bg-blue-600",
//         },
//         { name: "NumPy", icon: SiNumpy, level: "Expert", color: "bg-cyan-500" },
//         {
//           name: "Scikit-learn",
//           icon: SiScikitlearn,
//           level: "Intermediate",
//           color: "bg-orange-500",
//         },
//         {
//           name: "Jupyter",
//           icon: SiJupyter,
//           level: "Expert",
//           color: "bg-orange-600",
//         },
//       ],
//     },
//   };

//   const getLevelColor = (level) => {
//     switch (level) {
//       case "Expert":
//         return "bg-green-200";
//       case "Intermediate":
//         return "bg-yellow-200";
//       case "Noob":
//         return "bg-blue-200";
//     }
//   };

//   return (
//     <>
//       <div className="flex flex-col items-center mt-10">
//         {/* <h2 className="text-2xl font-semibold">Skills & Expertise</h2> */}
//         <h2 className="text-4xl font-extrabold text-[#31A3DC]">
//           Skills & Expertise
//         </h2>

//         {/* <div className="flex flex-row space-x-32 mt-8">
//           <button
//             type="button"
//             className="p-2 rounded-xl hover:bg-[#31A3DC] hover:text-white bg-gray-200"
//           >
//             Web Development
//           </button>
//           <button
//             type="button"
//             className="p-2 rounded-xl hover:bg-[#31A3DC] hover:text-white bg-gray-200"
//           >
//             {" "}
//             Artificial Intelligence
//           </button>
//           <button
//             type="button"
//             className="p-2 rounded-xl hover:bg-[#31A3DC] hover:text-white bg-gray-200"
//           >
//             {" "}
//             Data Science
//           </button>
//         </div> */}

//         <div className="flex justify-center space-x-4 mb-8 mt-5">
//           {Object.keys(skillCategories).map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveTab(category)}
//               className={`px-6 py-2 rounded-full transition-all duration-300 ${
//                 activeTab === category
//                   ? skillCategories[category].color + " text-white"
//                   : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//               }`}
//             >
//               {skillCategories[category].title}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {skillCategories[activeTab].skills.map((skill, index) => (
//             <div
//               key={index}
//               className="relative group bg-white p-6 rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
//             >
//               <div className="flex flex-col items-center ">
//                 <div className={`p-4 rounded-full ${skill.color} text-white`}>
//                   <skill.icon className="w-8 h-8" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {skill.name}
//                 </h3>
//                 {/* <span>{skill.level}</span> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Skills;

import React, { useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
} from "react-icons/si";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("web");

  const skillCategories = {
    web: {
      title: "Web Development",
      color: "bg-blue-500",
      skills: [
        {
          name: "JavaScript",
          icon: FaJs,
          color: "bg-yellow-400",
        },
        {
          name: "HTML",
          icon: FaHtml5,
          color: "bg-orange-500",
        },
        { name: "CSS", icon: FaCss3, color: "bg-blue-400" },
        { name: "React", icon: FaReact, color: "bg-cyan-400" },
      ],
    },
    ai: {
      title: "Artificial Intelligence",
      color: "bg-purple-500",
      skills: [
        {
          name: "Python",
          icon: FaPython,
          color: "bg-blue-500",
        },
        {
          name: "TensorFlow",
          icon: SiTensorflow,
          color: "bg-orange-500",
        },
        {
          name: "PyTorch",
          icon: SiPytorch,
          color: "bg-red-500",
        },
      ],
    },
    data: {
      title: "Data Science",
      color: "bg-green-500",
      skills: [
        {
          name: "Python",
          icon: FaPython,
          color: "bg-blue-500",
        },
        {
          name: "SQL",
          icon: FaDatabase,
          color: "bg-blue-400",
        },
        {
          name: "Pandas",
          icon: SiPandas,
          color: "bg-blue-600",
        },
        { name: "NumPy", icon: SiNumpy, color: "bg-cyan-500" },
        {
          name: "Scikit-learn",
          icon: SiScikitlearn,
          color: "bg-orange-500",
        },
      ],
    },
  };

  return (
    <div className=" bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-[#31A3DC] mb-12">
          Skills & Expertise
        </h2>

        <div className="flex justify-center space-x-4 mb-8">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === category
                  ? skillCategories[category].color + " text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {skillCategories[category].title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillCategories[activeTab].skills.map((skill, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className={`p-4 rounded-full ${skill.color} text-white`}>
                  <skill.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
