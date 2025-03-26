import React from "react";
import avatar1 from "../../src/Assets/Avatar/avatar-1.png";
import avatar2 from "../../src/Assets/Avatar/avatar-2.png";
import avatar3 from "../../src/Assets/Avatar/avatar-3.png";
import avatar4 from "../../src/Assets/Avatar/avatar-4.png";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: "This learning platform has revolutionized the way I approach skill development and training sessions.",
    name: "Sophia Perez",
    title: "Head of Learning @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "The interactive modules and assessments have taken our team's learning experience to new heights.",
    name: "Jamie Lee",
    title: "CEO @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "The content delivery system is seamless, and the real-time feedback is invaluable for learners.",
    name: "Alisa Hester",
    title: "Learning Specialist @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "We’ve seen tremendous growth in our employee engagement and knowledge retention rates.",
    name: "Alec Whitten",
    title: "CLO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 transition-colors duration-300">
      <div className="mx-auto px-2">
       
        <h2 className="text-5xl text-center tracking-tighter font-medium text-gray-900 dark:text-white">
          Beyond Expectations.
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl text-center mt-5">
          Our innovative LMS platform has reshaped the learning experience for countless organizations.
        </p>
        <div
          className="flex overflow-hidden mt-10"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)",
          }}
        >
          <motion.div
            initial={{ translateX: "-50%" }} // Start from the right edge
            animate={{ translateX: "0%" }}
            transition={{
              duration: 60, // Adjust speed as needed
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex gap-5 flex-none"
          >
            
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`} 
                className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.1),rgb(255,255,255,0.05))] text-gray-900 dark:text-white"
              >
                <div className="text-lg tracking-tight md:text-2xl">
                  "{testimonial.text}"
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <div className="relative ">
                    <img
                      src={testimonial.avatarImg}
                      alt={`Avatar for ${testimonial.name}`}
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-lg "
                    />
                  </div>
                  <div className="">
                    <div>{testimonial.name}</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
