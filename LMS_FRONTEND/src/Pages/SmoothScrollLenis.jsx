import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { FiMapPin } from "react-icons/fi";

export const SmoothScrollLenis = () => (
  <div className="bg-zinc-950">
    <Hero />
    <Schedule />
    <div className="h-screen" />
  </div>
);

const SECTION_HEIGHT = 1500;

const Hero = () => (
  <div
    className="relative w-full"
    style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
  >
    <CenterImage />
    <ParallaxImages />
    <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
  </div>
);

const CenterImage = () => {
  const { scrollY } = useScroll();
  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );
  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        opacity,
        backgroundSize,
        clipPath,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => (
  <div className="relative z-10 mx-auto max-w-5xl px-4 pt-[200px]">
    <ParallaxImg
      src="https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGhhY2tpbmd8ZW58MHx8MHx8fDA%3D"
      alt="Example 1"
      start={-200}
      end={200}
      className="w-1/3 sm:w-1/2 md:w-1/3 lg:w-1/4"
    />
    <ParallaxImg
      src="https://cdn.pixabay.com/photo/2024/02/22/02/45/computer-8589003_1280.png"
      alt="Example 2"
      start={200}
      end={-250}
      className="mx-auto w-2/3 sm:w-1/2 md:w-2/3 lg:w-2/3"
    />
    <ParallaxImg
      src="https://images.unsplash.com/photo-1568027762272-e4da8b386fe9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhhY2tpbmd8ZW58MHx8MHx8fDA%3D"
      alt="Example 3"
      start={-200}
      end={200}
      className="ml-auto w-1/3 sm:w-1/2 md:w-1/3 lg:w-1/4"
    />
  </div>
);

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      style={{ opacity, transform }}
      ref={ref}
      src={src}
      alt={alt}
      className={`${className} object-cover`}
    />
  );
};

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Launch Schedule
      </motion.h1>
      <ScheduleItem title="Hello ji" date="Mar 21" location="Hyderabad" />
      <ScheduleItem title="Hello ji again" date="Mar 27" location="India" />
 
    </section>
  );
};

const ScheduleItem = ({ title, date, location }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 8, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};
