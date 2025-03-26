import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Importing framer-motion
import { reviews } from "../../utils/content";

export default function Reviews() {
  // State to manage the animated number
  const [count, setCount] = useState(0);
  const targetCount = 12653; // The target number

  useEffect(() => {
    let start = 0;
    const end = targetCount;
    const duration = 2000; // Animation duration in ms
    const increment = Math.ceil((end - start) / (duration / 50)); // Increment value every 50ms

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(start);
      }
    }, 50);

    return () => clearInterval(counter); // Cleanup on unmount
  }, []);

  // Variants for animated number counter
  const counterVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  // Variants for review images (fade-in and scale-up)
  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Stagger effect for images
  const listVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Apply stagger effect to each image
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      className="m-auto flex max-w-[90rem] flex-wrap items-center gap-x-4 gap-y-4 px-24 max-xl:gap-x-3 max-xl:px-16 max-lg:px-8 max-md:px-6 py-8 sm:py-4 bg-[#f4f7fa] dark:bg-[#1a202c] transition-colors duration-300"
      initial="hidden"
      whileInView="show" // Trigger animation when in view
      viewport={{ once: false }} // Trigger animation each time it comes into view (not just once)
    >
      {/* Review images list with stagger effect */}
      <motion.ul
        className="flex"
        initial="hidden"
        whileInView="show" // Trigger animation when in view
        variants={listVariant}
        viewport={{ once: false }} // Animation happens every time it enters the viewport
      >
        {reviews.map((review) => (
          <motion.li
            key={review.id}
            className="-mr-4 last:mr-0"
            variants={imageVariant} // Apply image animation
          >
            <img
              className="border-primary-100 h-12 rounded-full border-2 max-xl:h-10"
              src={review.src}
              alt={review.alt}
            />
          </motion.li>
        ))}
      </motion.ul>

      {/* Text section with animated number counter */}
      <motion.p
        className="text-slate-500 dark:text-blue-200 text-xl/loose font-light max-lg:text-base/loose"
        initial="hidden"
        whileInView="show" // Trigger animation when in view
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
        }}
        viewport={{ once: false }} // Animation happens every time it enters the viewport
      >
        Trusted by{" "}
        <motion.span
          variants={counterVariant} // Apply counter animation
          className="tracking-tighter text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text font-bold"
        >
          {count.toLocaleString()}+
        </motion.span>
        productivity junkies
      </motion.p>
    </motion.section>
  );
}
