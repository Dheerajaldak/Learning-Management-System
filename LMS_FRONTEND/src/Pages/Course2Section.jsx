// import { Link } from 'react-router-dom';
// import { motion } from "framer-motion";
// import courseImage from "../Assets/Images/cartoon_char.png";

// const fadeIn = (direction, delay) => {
//   return {
//     hidden: {
//       y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
//       x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
//       opacity: 0,
//     },
//     show: {
//       y: 0,
//       x: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         duration: 1.25,
//         delay: delay,
//         ease: [0.25, 0.25, 0.25, 0.75],
//       },
//     },
//   };
// };

// const textVariant = (delay) => {
//   return {
//     hidden: {
//       y: 50,
//       opacity: 0,
//     },
//     show: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         duration: 1.25,
//         delay,
//       },
//     },
//   };
// };

// const CourseSection = () => {
//   return (
//     <motion.section
//       variants={fadeIn("up", 0.2)}
//       initial="hidden"
//       whileInView="show"
//       className="max-w-7xl mx-auto px-4 lg:px-12 py-16 md:py-24"
//     >
//       <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
//         {/* Left side - Image */}
//         <motion.div
//           variants={fadeIn("right", 0.3)}
//           className="w-full md:w-1/2 overflow-hidden"
//           layout // Add layout property to the container
//         >
//           <motion.img
//             variants={fadeIn("up", 0.4)}
//             src={courseImage}
//             alt="Online Learning"
//             className="w-full h-auto max-w-full rounded-lg"
//             initial={{ width: "100%" }}
//             animate={{ width: "100%" }}
//             transition={{
//               type: "spring",
//               stiffness: 100,
//               damping: 25,
//             }}
//             layout // Add layout property to the image
//           />
//         </motion.div>

//         {/* Right side - Content */}
//         <motion.div variants={fadeIn("left", 0.3)} className="w-full md:w-1/2">
//           <motion.span
//             variants={fadeIn("up", 0.4)}
//             className="text-orange-500 font-semibold"
//           >
//             LEARNING COURSES
//           </motion.span>
//           <motion.h2
//             variants={textVariant(0.5)}
//             className="text-3xl md:text-4xl font-bold text-[#333333] dark:text-white mt-4 mb-6"
//           >
//             Unlock Knowledge with Our Expert-Led Courses
//           </motion.h2>
//           <motion.p variants={fadeIn("up", 0.6)} className="text-gray-600 dark:text-gray-400 mb-8">
//             Discover a wide range of online courses designed to help you advance in your career or pursue personal interests. Learn from industry experts and gain valuable skills at your own pace.
//           </motion.p>
//           <motion.div variants={fadeIn("up", 0.7)} className="flex gap-2">
//             <Link
//               to="/courses"
//               className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
//             >
//               Explore Our Courses
//               <motion.svg
//                 variants={fadeIn("left", 0.8)}
//                 className="w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M17 8l4 4m0 0l-4 4m4-4H3"
//                 />
//               </motion.svg>
//             </Link>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default CourseSection;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import courseImage from "../Assets/Images/cartoon_char.png";

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

const textVariant = (delay) => {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay,
      },
    },
  };
};

const CourseSection = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="relative isolate overflow-hidden bg-[#f4f7fa] dark:bg-[#1a202c] py-16 md:py-24"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 ">
        <div className="absolute  -left-1/3 w-1/2 h-1/2 bg-amber-400 dark:bg-amber-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
          {/* Left side - Image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            className="w-full md:w-1/2 overflow-hidden"
            layout
          >
            <motion.img
              variants={fadeIn("up", 0.4)}
              src={courseImage}
              alt="Online Learning"
              className="w-full h-auto max-w-full rounded-lg shadow-lg"
              initial={{ width: "100%" }}
              animate={{ width: "100%" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
              }}
              layout
            />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            className="w-full md:w-1/2"
          >
            <motion.span
              variants={fadeIn("up", 0.4)}
              className="text-amber-500 font-semibold"
            >
              LEARNING COURSES
            </motion.span>
            <motion.h2
              variants={textVariant(0.5)}
              className="text-3xl md:text-4xl font-bold text-[#333333] dark:text-white mt-4 mb-6"
            >
              Unlock Knowledge with Our Expert-Led Courses
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.6)}
              className="text-gray-600 dark:text-gray-400 mb-8"
            >
              Discover a wide range of online courses designed to help you
              advance in your career or pursue personal interests. Learn from
              industry experts and gain valuable skills at your own pace.
            </motion.p>
            <motion.div variants={fadeIn("up", 0.7)} className="flex gap-2">
              <Link
                to="/courses"
                className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
              >
                Explore Our Courses
                <motion.svg
                  variants={fadeIn("left", 0.8)}
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CourseSection;
