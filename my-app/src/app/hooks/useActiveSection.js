"use client";
// import { useEffect, useState } from 'react';

// const useActiveSection = (sectionIds) => {
//   const [activeSection, setActiveSection] = useState('');

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       { rootMargin: '-50% 0px -50% 0px', threshold: 0.5 }
//     );

//     sectionIds.forEach((id) => {
//       const element = document.getElementById(id);
//       if (element) observer.observe(element);
//     });

//     return () => {
//       sectionIds.forEach((id) => {
//         const element = document.getElementById(id);
//         if (element) observer.unobserve(element);
//       });
//     };
//   }, [sectionIds]);

//   return activeSection;
// };

// export default useActiveSection;

// hooks/useActiveSection.js
import { useEffect, useState } from "react";

const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // 60% of the section is visible
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [sectionIds]);

  return activeSection;
};

export default useActiveSection;
