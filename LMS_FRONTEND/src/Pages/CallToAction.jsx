import { motion, useAnimate } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

function CallToAction() {
  const [isHovered, setIsHovered] = useState(false);
  const animation = useRef();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, ease: "linear", repeat: Infinity }
    );
  }, [animate, scope]);

  useEffect(() => {
    if (animation.current) {
      if (isHovered) {
        animation.current.speed = 0.5; // Decrease speed on hover
      } else {
        animation.current.speed = 1;   // Normal speed when not hovered
      }
    }
  }, [isHovered]); // Dependency on isHovered

  return (
    <section className="py-6">
      <div className="overflow-x-clip p-4 flex">
        <motion.div
          ref={scope}
          className="flex flex-none gap-16 pr-16 text-5xl md:text-7xl font-medium group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-purple-400 text-6xl">&#10038;</span>
              <span className="group-hover:text-blue-300"><Link to="/checkout">Try it for free</Link> </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default CallToAction;