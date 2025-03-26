
import React from "react";
import { FaBell } from "react-icons/fa";
import BgImage from "../Assets/Images/bg.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Subscribe = () => {
  return (
    <section className="bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="relative py-24 md:py-48 bg-cover bg-center bg-no-repeat"
     
      >
        {/* <div className="absolute inset-0 dark:bg-blue-500/20"></div> */}
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center relative isolate overflow-hidden"
        >
          
           {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-1/4 h-1/4 bg-blue-400 dark:bg-blue-500 rounded-full blur-3xl opacity-30"></div>
      </div>

          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto ">
            <h1 className="text-[#333333] text-4xl font-bold !leading-snug">
              450K+ Students are learning from us
            </h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima
            </p>
            <Link
              to="/checkout"
              className="primary-btn !mt-8 inline-flex items-center gap-4 group "
            >
              Subscribe Now
              <FaBell className="animate-bounce group-hover:text-lg duration-200" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
