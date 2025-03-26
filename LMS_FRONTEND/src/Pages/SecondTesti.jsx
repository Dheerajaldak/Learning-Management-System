import React, { useState, useEffect } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { motion } from "framer-motion";

// Import images
import avatar1 from "../../src/Assets/Avatar/avatar-1.png";
import avatar2 from "../../src/Assets/Avatar/avatar-2.png";
import avatar3 from "../../src/Assets/Avatar/avatar-3.png";
import avatar4 from "../../src/Assets/Avatar/avatar-4.png";

// Testimonials data
const testimonials = [
  {
    quote: "This platform has completely changed the way I deliver lessons and engage with students.",
    name: "Emma Roberts",
    title: "Teacher @ Green Valley High",
    avatarImg: avatar1,
  },
  {
    quote: "Using these interactive tools has transformed the way we conduct online courses and assessments.",
    name: "John Smith",
    title: "Instructor @ LearnX Academy",
    avatarImg: avatar2,
  },
  {
    quote: "The interface is so user-friendly, and the resources provided have made learning more accessible for all my students.",
    name: "Olivia Davis",
    title: "Professor @ Tech University",
    avatarImg: avatar3,
  },
  {
    quote: "Our course completion rates have improved significantly thanks to this powerful LMS tool.",
    name: "Liam Williams",
    title: "Curriculum Coordinator @ EduGlobal",
    avatarImg: avatar4,
  },
];


const SecondTesti = () => {
  const [selectedTestimonialIndex, setSelectedTestimonialIndex] = useState(0);

  // Auto change the testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-[300px] py-10 sm:py-10 px-4 sm:px-8 md:px-20 bg-[#f4f7fa] dark:bg-[#1a202c] transition-colors duration-300">
      <div className="max-w-7xl mx-auto ">
        <div 
              className="relative rounded-3xl px-6 md:px-10 lg:px-16 py-16 lg:py-16 border-2 border-[#0e1c30] dark:border-[#4a5568] dark:bg-[#2d3748] dark:text-white transition-all duration-300 hover:shadow-lg flex flex-col items-center md:flex-row gap-3"
              // className="relative rounded-3xl px-6 md:px-10 lg:px-16 py-16 lg:py-16 border-4 flex flex-col items-center md:flex-row gap-3 lg:mx-20 hover:border-purple-300 transition-all duration-500"
              // className="relative rounded-3xl px-6 md:px-10 lg:px-16 py-16 lg:py-16 border-2 border-[#0e1c30] dark:border-[#4a5568] flex flex-col items-center md:flex-row gap-3 lg:mx-20 hover:shadow-lg"

       >
          <div className="absolute text-5xl text-purple-600 top-0 left-6 md:left-16 -translate-y-1/2">
            <RiDoubleQuotesL />
          </div>

          {/* Animated Testimonial Block with Fade and Scale */}
          <motion.div
            key={testimonials[selectedTestimonialIndex].name}
            initial={{ opacity: 0, scale: 0.8 }} // Initial state (invisible and small)
            animate={{ opacity: 1, scale: 1 }} // Final state (visible and normal size)
            exit={{ opacity: 0, scale: 1.2 }} // Exit state (invisible and slightly zoomed out)
            transition={{ duration: 0.6 }} // Transition time for the effect
          >
            <blockquote className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-300 w-full md:w-2/3">
                {testimonials[selectedTestimonialIndex].quote}
              </p>
              <cite className="not-italic flex items-center gap-4 w-full md:w-1/3">
                <img
                  src={testimonials[selectedTestimonialIndex].avatarImg}
                  alt={testimonials[selectedTestimonialIndex].name}
                  className="w-16 h-16 object-cover rounded-full"
                />
                <div>
                  <div className="font-bold text-lg">
                    {testimonials[selectedTestimonialIndex].name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {testimonials[selectedTestimonialIndex].title}
                  </div>
                </div>
              </cite>
            </blockquote>
          </motion.div>

          {/* Testimonial Index Circles (Horizontal Alignment) */}
          <div className="flex  justify-center gap-2 mt-4 md:flex-col lg:flex-col">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  selectedTestimonialIndex === index
                    ? "bg-purple-400"
                    : "bg-gray-200"
                }`}
                onClick={() => setSelectedTestimonialIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondTesti;
