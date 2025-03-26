import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from framer-motion
import HomePageImage from "../Assets/Images/elearning.png";

// Fade-in animation for various elements
const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const HomePage = () => {
  return (
    <div className=" relative isolate overflow-hidden py-20 text-white flex flex-col sm:flex-row items-center justify-center gap-10 mx-4 sm:mx-16 bg-[#f4f7fa] dark:bg-[#1a202c] transition-colors duration-300">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-1/3 h-1/3 bg-blue-400 dark:bg-blue-500 rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* Image Section */}
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        className="w-full sm:w-1/2 flex items-center justify-center order-1 sm:order-2 mt-6 sm:mt-0"
      >
        <motion.img
          variants={fadeIn("up", 0.4)}
          src={HomePageImage}
          alt="homepage image"
          className="max-w-[250px] sm:max-w-[350px] md:max-w-[380px] w-full h-auto object-contain"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView="show"
        className="w-full sm:w-1/2 space-y-6  sm:text-left order-2 sm:order-1"
      >
        <motion.h1
          variants={fadeIn("up", 0.4)}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#333333] dark:text-white"
        >
          Find out best&nbsp;
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600">
            Online Courses
          </span>
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 0.5)}
          className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl font-light"
        >
          We have a large library of courses taught by highly skilled and
          qualified faculties at a very affordable cost.
        </motion.p>
        <div className="flex gap-3 items-center">
          <div className="h-px bg-neutral-300 dark:bg-neutral-700 w-12"></div>
          <p className="uppercase text-xs tracking-widest text-neutral-500 dark:text-neutral-400 font-medium">
            Start your journey
          </p>
        </div>
        <motion.div
          variants={fadeIn("up", 0.6)}
          className="space-y-4 sm:space-y-0 sm:space-x-4 mt-6 flex flex-col sm:flex-row items-center sm:justify-start"
        >
          {/* Buttons */}
          <div className="w-full flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <Link to="/courses">
              <motion.button
                variants={fadeIn("up", 0.7)}
                className="px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-900 hover:bg-black text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-neutral-900 font-medium shadow hover:shadow-neutral-900/20 dark:hover:shadow-amber-500/20 flex items-center transition group whitespace-nowrap"
              >
                <i className="bx bx-book-open mr-2 lg:mr-3 text-lg lg:text-xl group-hover:rotate-12 transition-transform"></i>
                <span>Explore Courses</span>
              </motion.button>
            </Link>

            <Link to="/contact">
              <motion.button
                variants={fadeIn("up", 0.8)}
                className="px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium flex items-center transition group whitespace-nowrap"
              >
                <i className="bx bx-envelope mr-2 lg:mr-3 text-lg lg:text-xl opacity-70 group-hover:opacity-100 transition-opacity"></i>
                <span>Contact Us</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;

// import React from "react";
// import { Link } from "react-router-dom";
// import HomePageImage from "../Assets/Images/elearning.png";

// function HomePage() {
//   return (
//     <div className=" text-white flex flex-col sm:flex-row items-center justify-center gap-10 mx-4 sm:mx-16 h-[90vh]">
//       {/* Image Section */}
//       <div className="w-full sm:w-1/2 flex items-center justify-center order-1 sm:order-2 mt-6 sm:mt-0">
//         <img
//           src={HomePageImage}
//           alt="homepage image"
//           className="max-w-[250px] sm:max-w-[350px] md:max-w-[380px] w-full h-auto object-contain"
//         />
//       </div>

//       {/* Text Section */}
//       <div className="w-full sm:w-1/2 space-y-6 text-center sm:text-left order-2 sm:order-1">
//         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
//           Find out best&nbsp;
//           <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text font-bold">
//             Online Courses
//           </span>
//         </h1>

//         {/* Paragraph */}
//         <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 tracking-wide leading-relaxed">
//           We have a large library of courses taught by highly skilled and
//           qualified faculties at a very affordable cost. Explore the best
//           learning opportunities online.
//         </p>

//         {/* Buttons Section */}
//         <div className="mt-6 w-full sm:w-auto flex flex-col sm:flex-row items-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
//           <div className="w-full flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
//             <Link to="/courses">
//               <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out mb-4 sm:mb-0 w-full sm:w-auto">
//                 Explore courses
//               </button>
//             </Link>
//             <Link to="/contact">
//               <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out w-full sm:w-auto">
//                 Contact Us
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;
