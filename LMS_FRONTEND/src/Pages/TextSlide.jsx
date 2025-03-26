import React, { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';

const TextSlide = () => {
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ['start end', 'end start'],
  });

  const transformTop = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);

  return (
    <section className="section">
      <h2
        className="text-4xl md:text-6xl lg:text-6xl flex flex-col overflow-hidden tracking-tighter"
        ref={titleRef}
      >
        <motion.span
          className="whitespace-nowrap"
          style={{ x: transformTop }}
        >
          Some nice words from my past clients
        </motion.span>
        <motion.span
          className="whitespace-nowrap self-end text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text"
          style={{ x: transformBottom }}
        >
          Some nice words from my past clients
        </motion.span>
      </h2>
    </section>
  );
};

export default TextSlide;
