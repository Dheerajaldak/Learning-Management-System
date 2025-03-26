import { motion } from "framer-motion";
import { useState } from "react";
import { frequentlyAskedQuestions } from "../../utils/content.js";

// CaretUp Component
function CaretUp({ width = 1.5, className, alt, activeQuestion }) {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      alt={alt}
      animate={{ rotate: activeQuestion ? 180 : 0 }} // Rotate 180 degrees when activeQuestion is true (click)
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      <path
        d="M19.92 8.94987L13.4 15.4699C12.63 16.2399 11.37 16.2399 10.6 15.4699L4.08002 8.94987"
        strokeWidth={width}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

// FAQ Component
function FAQ({ question, activeQuestion, handleQuestionClick }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.li variants={itemVariants} className="shrink-0 grow-0">
      <button
        className="flex w-full cursor-pointer items-center"
        onClick={() => handleQuestionClick(question.id)}
      >
        <div className="border-gray-300 dark:border-gray-700 mr-6 rounded-xl border-2 p-3.5 max-sm:mr-4 max-sm:p-3">
          <question.Icon
            width={2}
            className="stroke-gray-700 dark:stroke-white"
            alt={question.alt}
          />
        </div>

        <p className="text-gray-800 dark:text-white mr-auto pr-4 text-left text-xl/loose font-medium tracking-tight max-lg:text-lg/8 max-lg:font-semibold max-sm:text-base/6 max-sm:font-medium">
          {question.question}
        </p>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center">
          <CaretUp
            className="stroke-gray-700 dark:stroke-white"
            activeQuestion={activeQuestion === question.id}
            width={2.5}
            alt="Caret Up Icon"
          />
        </div>
      </button>
      <motion.p
        className="text-gray-700 dark:text-gray-300 pt-0 pr-14 pl-20 text-lg/8 font-light max-lg:text-base/loose max-sm:pr-0 max-sm:pl-0"
        initial={{ opacity: 0, maxHeight: 0, visibility: "hidden" }}
        animate={
          activeQuestion === question.id
            ? {
                opacity: 1,
                maxHeight: "300px",
                visibility: "visible",
                paddingTop: "1rem",
              }
            : {}
        }
        transition={{ duration: 0.3, ease: "easeIn" }}
        layout
      >
        {question.answer}
      </motion.p>
    </motion.li>
  );
}

// FAQList Component
function FAQList({ category, questions, activeQuestion, handleQuestionClick }) {
  const [inView, setInView] = useState(false);

  return (
    <motion.ul
      className="m-auto flex max-w-[51.625rem] flex-col gap-y-14 max-lg:gap-y-12"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      key={category}
      layout
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          transition: {
            staggerChildren: 0.25,
            ease: "easeIn",
          },
        },
      }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setInView(true)}
      onViewportLeave={() => setInView(false)}
      viewport={{ once: false, amount: "100%" }}
    >
      {questions.map((question) => (
        <FAQ
          key={question.id}
          question={question}
          activeQuestion={activeQuestion}
          handleQuestionClick={handleQuestionClick}
        />
      ))}
    </motion.ul>
  );
}

// FAQs Component
export default function FAQs() {
  const [category, setActiveCategory] = useState("General");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const categoryObj = frequentlyAskedQuestions
    .filter((obj) => obj.category === category)
    .at(0);
  const questionsArr = categoryObj.questions;

  const handleQuestionClick = (id) =>
    id === activeQuestion ? setActiveQuestion(null) : setActiveQuestion(id);

  const handleCategoryClick = (category) => {
    setActiveQuestion(null);
    setActiveCategory(category);
  };

  return (
    <section className="justify-items-center">
      <div className="w-full max-w-[90rem] py-3 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-md:px-6 bg-[#f4f7fa] dark:bg-[#1a202c] transition-colors duration-300">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10 text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <ul className="mb-16 flex flex-wrap justify-center gap-x-3 gap-y-4 max-lg:mb-18 max-md:justify-start">
          {frequentlyAskedQuestions.map((obj) => (
            <li key={obj.id}>
              <button
                className={`
                  border-gray-300 dark:border-gray-700
                  text-gray-800 dark:text-white
                  transition-all
                  cursor-pointer
                  rounded-full
                  border-2
                  px-8 py-3.5 text-lg
                  max-xl:px-6 max-xl:text-base max-sm:px-3 max-sm:py-2 max-sm:text-xs
                  sm:px-4 sm:py-2 sm:text-sm
                  ${
                    obj.category === category &&
                    "bg-gray-500 text-white border-gray-500 dark:bg-gray-700 dark:border-gray-700"
                  }
                  ${
                    obj.category !== category &&
                    "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                  }
                `}
                onClick={() => handleCategoryClick(obj.category)}
              >
                {obj.category}
              </button>
            </li>
          ))}
        </ul>

        <FAQList
          category={category}
          questions={questionsArr}
          activeQuestion={activeQuestion}
          handleQuestionClick={handleQuestionClick}
        />
      </div>
    </section>
  );
}
