// import React from "react";
// import { useNavigate } from "react-router-dom";

// const CourseCard = ({ data }) => {
//   const navigate = useNavigate();

//   return (
//     <div
//       onClick={() => navigate("/course/description/", { state: { ...data } })}
//       className="relative w-[16rem] h-[320px] sm:h-[350px] rounded-lg cursor-pointer group overflow-hidden bg-transparent border border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300 ease-out transform hover:scale-105"
//     >
//       {/* Image with Hover Zoom Effect */}
//       <img
//         src={data?.thumbnail?.secure_url}
//         alt="course thumbnail"
//         className="h-32 w-full object-cover rounded-tl-lg rounded-tr-lg group-hover:scale-110 transition-transform duration-300 ease-in-out"
//       />

//       {/* Overlay for the Image */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"></div>

//       {/* Card Content */}
//       <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent rounded-b-lg">
//         <h2 className="text-sm font-semibold text-white truncate">{data?.title}</h2>
//         <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 mt-2">
//           {data?.description}
//         </p>

//         {/* Additional Info Section */}
//         <div className="text-xs sm:text-sm text-gray-200 space-y-1 mt-3">
//           <p>
//             <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text font-bold">Category:</span> {data?.category}
//           </p>
//           <p>
//             <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text font-bold">Lectures:</span> {data?.numbersOfLectures}
//           </p>
//           <p>
//             <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text font-bold">Instructor:</span> {data?.createdBy}
//           </p>
//         </div>

//         {/* Hover Action Button */}
//         <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out mt-3">
//           <button className="w-full py-2 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400">
//             View More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { FiMoreVertical } from "react-icons/fi";

const CourseCard = ({ data }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [ratingStars, setRatingStars] = useState(data?.rating || 0);
  const [heartAnimations, setHeartAnimations] = useState([]);
  const menuRef = useRef(null);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  const toggleFavorite = () => {
    setIsFavorite((prevState) => !prevState);
    createHeartAnimation();
  };

  const handleStarClick = (index) => setRatingStars(index + 1);

  const handleMenuOptionClick = (option) => {
    setIsMenuOpen(false);
    const route = {
      "Description": "/course/description/",
      "Report": "/course/report/",
      "Add to Cart": "/course/AddtoCart/",
      "Share": "/course/share/",
      "Details": "/course/details/"
    }[option];
    if (route) navigate(route, { state: { ...data } });
  };

  const createHeartAnimation = () => {
    const id = Date.now();
    setHeartAnimations((prevAnimations) => [...prevAnimations, { id }]);
    setTimeout(() => {
      setHeartAnimations((prevAnimations) =>
        prevAnimations.filter((animation) => animation.id !== id)
      );
    }, 1000);
  };

  return (
    <div
      onClick={(e) => {
        if (
          !e.target.closest(".menu-container") &&
          !e.target.closest(".star-container")
        ) {
          navigate("/course/description/", { state: { ...data } });
        }
      }}
      className="relative border border-gray-400 rounded-lg overflow-hidden dark:border-gray-800 dark:bg-[#2d3748] transition-all duration-300 cursor-pointer group"
    >
      {/* More menu */}
      <div
        className="absolute top-2 right-2 text-gray-400 dark:text-gray-300 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={(e) => {
          e.stopPropagation();
          toggleMenu();
        }}
      >
        <FiMoreVertical size={20} />
      </div>

      {isMenuOpen && (
        <div
          ref={menuRef} // Set reference to the menu container
          className="absolute top-8 right-2 bg-white dark:bg-[#2d3748] border border-gray-300 rounded-lg shadow-lg p-2 w-32 menu-container"
        >
          <ul className="text-sm text-gray-700 dark:text-gray-300">
            {["Description", "Details", "Share", "Add to Cart", "Report"].map(
              (option) => (
                <li
                  key={option}
                  className="p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMenuOptionClick(option);
                  }}
                >
                  {option}
                </li>
              )
            )}
          </ul>
        </div>
      )}

      {/* Thumbnail */}
      <img
        src={data?.thumbnail?.secure_url}
        alt="course thumbnail"
        className="w-full h-40 object-cover"
      />

      {/* Like Icon */}
      <div
        className="absolute top-2 left-2 text-gray-500 dark:text-gray-300 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite();
        }}
      >
        {isFavorite ? (
          <MdFavorite size={24} className="text-red-500" />
        ) : (
          <MdFavoriteBorder size={24} className="text-gray-500 dark:text-gray-300" />
        )}
      </div>

      {/* Heart Animation */}
      {heartAnimations.map((animation) => (
        <MdFavorite
          key={animation.id}
          size={30}
          className="absolute text-red-500 animate-heart-float"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Course Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
          {data?.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {data?.createdBy}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-2 star-container">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-4 h-4 mr-1 text-yellow-500 cursor-pointer ${
                index < ratingStars ? "text-yellow-600" : "text-gray-400"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              onClick={(e) => {
                e.stopPropagation();
                handleStarClick(index);
              }}
            >
              <path
                fillRule="evenodd"
                d="M10 3.22l1.62 4.97h5.28l-4.25 3.08 1.62 4.97-4.27-3.09-4.27 3.09 1.62-4.97-4.25-3.08h5.28L10 3.22z"
                clipRule="evenodd"
              />
            </svg>
          ))}
          <span className="text-sm text-gray-700 dark:text-gray-300">4.5</span>
          <span className="text-sm text-gray-500 ml-1 dark:text-gray-400">
            (122)
          </span>
        </div>

        {/* Price & Buy Button */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-lg font-bold text-gray-800 dark:text-white">
            ₹ 999.99
          </p>

          <p className="flex items-center gap-2 text-sm font-bold text-green-900 dark:text-green-100 hover:scale-110 transition-all duration-300 ease-in-out">
            <span className="ml-1">
              <GiMoneyStack />
            </span>
            Buy
          </p>
        </div>
      </div>

      {/* Heart Float Animation */}
      <style>
        {`
          @keyframes heartFloat {
            0% {
              transform: translate(-50%, -50%) translateY(0);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%) translateY(-50px);
              opacity: 0;
            }
          }

          .animate-heart-float {
            animation: heartFloat 1s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default CourseCard;
