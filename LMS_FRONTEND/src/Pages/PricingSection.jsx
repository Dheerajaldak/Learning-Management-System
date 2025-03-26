import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Importing framer-motion

const PricingSection = () => {
  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <div className="py-5 sm:py-10 px-4 sm:px-8 md:px-20 bg-[#f4f7fa] dark:bg-[#1a202c] transition-colors duration-300">
      <h5 className="text-center text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-[#333333] dark:text-white leading-tight">
        Designed for businesses and educational teams like yours
      </h5>
      <p className="text-center text-sm sm:text-lg font-light text-gray-500 dark:text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto">
        Our LMS platform offers tailored solutions to help teams enhance their
        learning processes and boost employee skill growth. Start your journey
        with us today.
      </p>

      <div className="p-8 flex justify-center gap-6 overflow-x-auto sm:flex flex-wrap">
        {/* Starter Pricing Card */}
        <motion.div
          className="flex flex-col gap-4 border-2 border-[#0e1c30] rounded-lg p-4 sm:p-6 cursor-pointer w-full sm:w-[250px] md:w-[300px] dark:border-[#4a5568] dark:bg-[#2d3748] dark:text-white"
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          whileHover="hover"
          viewport={{ once: false }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
            Starter
          </h3>
          <p className="font-light text-gray-500 sm:text-sm dark:text-gray-400">
            Perfect for individual users or small teams starting with online
            training.
          </p>
          <div className="flex justify-center items-baseline my-6">
            <span className="mr-2 text-4xl font-bold">₹999</span>
            <span className="text-gray-500 dark:text-gray-400">/year</span>
          </div>
          <ul className="space-y-3 text-left text-gray-900 dark:text-white">
            {[
              "1 user license",
              "Basic course creation tools",
              "Standard customer support",
              "Access to 100+ courses",
              "Basic analytics and reports",
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/checkout"
            className="bg-neutral-900 text-white hover:bg-black focus:ring-1 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:text-neutral-900 dark:bg-amber-500 dark:hover:bg-amber-600 dark:focus:ring-black transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Get started
          </Link>
          
        </motion.div>

        {/* Team Pricing Card */}
        <motion.div
          className="flex flex-col gap-4 border-2 border-[#0e1c30] rounded-lg p-4 sm:p-6 cursor-pointer w-full sm:w-[250px] md:w-[300px] dark:border-[#4a5568] dark:bg-[#2d3748] dark:text-white"
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          whileHover="hover"
          viewport={{ once: false }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
            Team
          </h3>
          <p className="font-light text-gray-500 sm:text-sm dark:text-gray-400">
            For growing teams needing collaboration tools and advanced
            analytics.
          </p>
          <div className="flex justify-center items-baseline my-6">
            <span className="mr-2 text-4xl font-bold">₹4999</span>
            <span className="text-gray-500 dark:text-gray-400">/year</span>
          </div>
          <ul className="space-y-3 text-left text-gray-900 dark:text-white">
            {[
              "Up to 10 user licenses",
              "Advanced course creation tools",
              "Priority customer support",
              "Access to 500+ courses",
              "Advanced analytics and reports",
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/checkout"
            className="bg-neutral-900 text-white hover:bg-black focus:ring-1 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:text-neutral-900 dark:bg-amber-500 dark:hover:bg-amber-600 dark:focus:ring-black transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Get started
          </Link>
        </motion.div>

        {/* Enterprise Pricing Card */}
        <motion.div
          className="flex flex-col gap-4 border-2 border-[#0e1c30] rounded-lg p-4 sm:p-6 cursor-pointer w-full sm:w-[250px] md:w-[300px] dark:border-[#4a5568] dark:bg-[#2d3748] dark:text-white"
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          whileHover="hover"
          viewport={{ once: false }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
            Enterprise
          </h3>
          <p className="font-light text-gray-500 sm:text-sm dark:text-gray-400">
            Ideal for large organizations with complex needs and dedicated
            support.
          </p>
          <div className="flex justify-center items-baseline my-6">
            <span className="mr-2 text-4xl font-extrabold">₹14999</span>
            <span className="text-gray-500 dark:text-gray-400">/year</span>
          </div>
          <ul className="space-y-3 text-left text-gray-900 dark:text-white">
            {[
              "Unlimited user licenses",
              "Custom course creation tools",
              "24/7 dedicated support",
              "Access to 1000+ courses",
              "Custom reporting & analytics",
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/checkout"
            className="bg-neutral-900 text-white hover:bg-black focus:ring-1 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:text-neutral-900 dark:bg-amber-500 dark:hover:bg-amber-600 dark:focus:ring-black transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Get started
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingSection;
