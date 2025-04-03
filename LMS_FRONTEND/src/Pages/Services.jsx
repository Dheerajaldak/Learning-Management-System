import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { MdOutlineAssignment } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";

const ServicesData = [
  {
    id: 1,
    title: "Web Development",
    link: "#",
    icon: <TbWorldWww />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Mobile Development",
    link: "#",
    icon: <CiMobile3 />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Software Development",
    link: "#",
    icon: <RiComputerLine />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Assignments & Exams",
    link: "#",
    icon: <MdOutlineAssignment />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "SEO optimization",
    link: "#",
    icon: <IoPulseOutline />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "24/7 support",
    link: "#",
    icon: <BiSupport />,
    delay: 0.7,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-white dark:bg-[#1a202c] text-[#333333] dark:text-white">
      <div className="p-8 sm:p-12 md:p-20 pb-14 pt-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-left pb-10">
          LMS Features
        </h1>
        <div
          onClick={() => setIsOpen(true)}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 cursor-grab"
        >
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] dark:bg-[#2d3748] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white dark:hover:bg-[#4a5568] hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4"> {service.icon}</div>
              <h1 className="text-sm sm:text-lg font-semibold text-center px-3">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
        <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </section>
  );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <FiAlertCircle />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                One more thing!
              </h3>
              <p className="text-center mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                aperiam vitae, sapiente ducimus eveniet in velit.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Nah, go back
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  Understood!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Services;
