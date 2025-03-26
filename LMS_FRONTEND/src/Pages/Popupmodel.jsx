import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PopUpModal = ({ isLoggedIn }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasModalShown = localStorage.getItem("modalShown");
    if (!isLoggedIn && !hasModalShown) {
      const timer = setTimeout(() => {
        setShowModal(true);
        localStorage.setItem("modalShown", "true"); // Set flag to prevent future displays
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);

  const closeModal = () => {
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-[#464b4f] p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          <span className="mb-1">Welcome</span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600">
            to LMS !
          </span>
          
        </h1>
        <p className="text-neutral-700 dark:text-neutral-300">Thanks for visiting!</p>
        <p className="text-neutral-700 dark:text-neutral-300 mb-2">
          To start learning 👨‍🎓, please log in to your account.
        </p>

        <div className="flex gap-2 justify-end">
          <Link
            to="/login"
            className="px-4 py-1 rounded-lg bg-neutral-900 hover:bg-black text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-neutral-900 font-medium shadow-md transition transform"
          >
            <i className="bx bx-log-in mr-1 text-sm"></i>Login
          </Link>

          <button
            onClick={closeModal}
            className="px-2 py-1 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium border border-gray-400 shadow-md hover:shadow-lg transition duration-200"
          >
            <i className="bx bx-x mr-1 text-sm"></i>Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpModal;