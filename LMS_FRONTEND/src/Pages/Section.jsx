import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import starsBg from "../Assets/Images/stars.png";
import gridLines from "../Assets/Images/grid-lines.png";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { Link } from "react-router-dom";
// Custom hook to track mouse position relative to an element
const useRelativeMousePosition = (to) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      updateMousePosition(event);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [to]);

  return [mouseX, mouseY];
};

const Section = () => {
  const sectionRef = useRef(null);
  const borderedDivRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Transform background position based on scroll
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);

  // Use useMotionTemplate to dynamically update the mask image
  const maskImage = useMotionTemplate`radial-gradient(20% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section
      className="px-4  py-20 md:py-20 bg-white dark:bg-[#1a202c] transition-colors duration-300"
      ref={sectionRef}
    >
      <div className="">
        <motion.div
          ref={borderedDivRef} // Added ref to the motion.div
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative group"
          animate={{
            backgroundPositionX: "100%", // You can animate with a percentage or pixel value
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          style={{
            backgroundPositionY,
            backgroundImage: `url(${starsBg})`,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(181,193,243)] dark:bg-[rgb(50,19,97)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{ backgroundImage: `url(${gridLines})` }}
          ></div>
          <motion.div
            className="absolute inset-0 bg-[rgb(146,161,236)] dark:bg-[rgb(50,19,97)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{ maskImage, backgroundImage: `url(${gridLines})` }}
          ></motion.div>

          <div className="relative">
            <h2 className="text-5xl max-w-sm mx-auto tracking-tighter text-center font-medium text-gray-800 dark:text-white">
              AI-Driven Courses For Everyone
            </h2>
            <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-gray-700 dark:text-gray-300 px-4 mt-5 tracking-tight">
              Achieve clear, impactful learning outcomes without complexity.
            </p>
            <div className=" flex justify-center mt-4">
              <Link
                to="/checkout"
                className="flex items-center justify-center border  bg-gray-100 dark:bg-gray-800 py-2 px-6 rounded-md text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg dark:hover:shadow-xl"
              >
                <span className="mr-2 text-base font-semibold">Buy Now</span>
                <BiSolidPurchaseTag className="hover:animate-bounce group-hover:text-lg transition-all duration-200" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section;

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import starsBg from "../Assets/Images/stars.png";
// import gridLines from "../Assets/Images/grid-lines.png";

// const Section = () => {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   // Transform background position based on scroll
//   const backgroundPositionY = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [-300, 300]
//   );

//   return (
//     <section className="py-20" ref={sectionRef}>
//       <div className="container md:py-24">
//         <motion.div
//           className="border border-white/15 py-24 rounded-xl overflow-hidden relative group"
//           // Animate background position X
//           animate={{
//             backgroundPositionX: "100%", // You can animate with a percentage or pixel value
//           }}
//           transition={{
//             repeat: Infinity,
//             duration: 60,
//             ease: "linear",
//           }}
//           style={{
//             backgroundPositionY,
//             backgroundImage: `url(${starsBg})`,
//             // backgroundSize: "200% 100%", // Makes sure the background is large enough to animate
//           }}
//         >
//           <div
//             className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
//             style={{ backgroundImage: `url(${gridLines})` }}
//           ></div>
//           <motion.div
//             className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_0px_0px,black,transparent)] opacity-0 group-hover:opacity-100 transition duration-700"
//             style={{ backgroundImage: `url(${gridLines})` }}
//           ></motion.div>

//           <div className="relative">
//             <h2 className="text-5xl max-w-sm mx-auto tracking-tighter text-center font-medium">
//               AI-driven courses for everyone.
//             </h2>
//             <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight">
//               Achieve clear, impactful learning outcomes without complexity.
//             </p>
//             <div className="flex justify-center mt-8">
//               <button className="border py-2 px-6 rounded">
//                 Buy course...
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Section;
