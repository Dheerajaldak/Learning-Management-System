// import React, { useEffect, useState } from "react";
// import { getAllCourses } from "../../Redux/Slices/CourseSlice";
// import HomeLayout from "../../Layouts/HomeLayout";
// import { useDispatch, useSelector } from "react-redux";
// import CourseCard from "../../Components/CourseCard";

// const CourseList = () => {
//   const dispatch = useDispatch();
//   const { courseData } = useSelector((state) => state.course);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   async function loadCourse() {
//     await dispatch(getAllCourses());
//   }

//   useEffect(() => {
//     loadCourse();
//   }, []);

//   const filteredCourses = courseData?.filter((course) => {
//     const titleMatch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
//     const categoryMatch = selectedCategory === "All" || course.category === selectedCategory;
//     return titleMatch && categoryMatch;
//   });

//   const categories = ["All", "Fitness", "Music", "Business", "Lifestyle", "Personal Development", "Coding", "Design", "Marketing", "Photography", "Language", "Cooking", "Art", "Science", "Math"]; // Example with more categories

//   return (
//     <HomeLayout>
//       <div className="min-h-[90vh] pt-8 p-4 flex flex-col gap-6 text-white">

//       <h1 className="font-semibold text-center text-2xl sm:text-4xl text-black  dark:text-white">
//           Explore the courses made by{" "}
//           <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text font-bold">Industry experts</span>
//         </h1>

//         {/* Search Bar */}
//         <div className="relative w-full max-w-md mx-auto">
//           <input
//             type="text"
//             placeholder="Search courses.."
//             className="w-full bg-gray-800 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//             />
//           </svg>
//         </div>

//         {/* Category Filters with Scroll */}
//         <div className="w-full max-w-md mx-auto overflow-x-auto whitespace-nowrap flex gap-4 py-2"> {/* Added scroll */}
//           {categories.map((category) => (
//             <button
//               key={category}
//               className={`px-4 py-2 rounded-md ${
//                 selectedCategory === category
//                   ? "bg-yellow-500 text-black"
//                   : "bg-gray-700 text-white hover:bg-gray-600"
//               }`}
//               onClick={() => setSelectedCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* <div className="mb-10 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-8">
//           {filteredCourses?.map((element) => (
//             <CourseCard key={element._id} data={element} />
//           ))}
//         </div> */}

//           <div className="px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-0 sm:px-20">
//           {filteredCourses?.map((element) => (
//             <CourseCard key={element._id} data={element} />
//           ))}
//         </div>
//       </div>
//     </HomeLayout>
//   );
// };

// export default CourseList;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../Redux/Slices/CourseSlice";
import HomeLayout from "../../Layouts/HomeLayout";
import CourseCard from "../../Components/CourseCard";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { FaCog, FaLaptopCode, FaPaintBrush, FaCamera } from "react-icons/fa"; // React Icons
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"; // Headless UI components

const CourseList = () => {
  const dispatch = useDispatch();
  const { courseData } = useSelector((state) => state.course);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Display 4 cards per page

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  const filteredCourses = courseData?.filter((course) => {
    const titleMatch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = selectedCategory === "All" || course.category === selectedCategory;
    return titleMatch && categoryMatch;
  });

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const currentItems = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Categories with React Icons
  const categories = [
    { name: "All", icon: <FaSearch /> },
    { name: "Learning", icon: <FaCog /> },
    { name: "Coding", icon: <FaLaptopCode /> },
    { name: "Design", icon: <FaPaintBrush /> },
    { name: "Photography", icon: <FaCamera /> },
  ];

  return (
    <HomeLayout>
      <div className="min-h-[90vh] pt-8 p-4 flex flex-col gap-4 dark:text-gray-300">
        {/* Title Section */}
        <h1 className="font-semibold text-center text-2xl sm:text-4xl text-black dark:text-white">
          Explore the courses made by{" "}
          <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text font-bold">
            Industry experts
          </span>
        </h1>

        {/* Search and Category Filter Section */}
        <div className="flex justify-between items-center max-w-4xl mx-auto gap-2">
          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search courses.."
              className="border border-gray-400 w-full bg-transparent dark:text-gray-300 rounded-full py-1 px-4 focus:outline-none focus:border-transparent focus:ring-1 focus:ring-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Category Filter Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex items-center gap-x-2 px-4 py-1 bg-transparent border border-gray-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600">
                {selectedCategory} <FaChevronDown className="text-gray-600 dark:text-white" />
              </MenuButton>
            </div>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-none"
            >
              <div className="py-1">
                {categories.map((category) => (
                  <MenuItem key={category.name}>
                    <button
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      <span className="flex items-center gap-2">
                        {category.icon} {category.name}
                      </span>
                    </button>
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Menu>
        </div>

        {/* Course Cards Section */}
        <div className="px-0 sm:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
            {currentItems?.map((course) => (
              <CourseCard key={course._id} data={course} />
            ))}
          </div>
        </div>

        {/* Pagination Section */}
        <div className="join mt-2 flex justify-center">
          {/* Previous Page Button */}
          <button
            className="join-item btn bg-gray-800 dark:bg-gray-700 text-white dark:text-gray-300 hover:bg-gray-600 dark:hover:bg-gray-600 transition-colors"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            «
          </button>
          {/* Current Page Button */}
          <button className="join-item btn bg-gray-800 dark:bg-gray-700 text-white dark:text-gray-300 hover:bg-gray-600 dark:hover:bg-gray-600 transition-colors">
            Page {currentPage}
          </button>
          {/* Next Page Button */}
          <button
            className="join-item btn bg-gray-800 dark:bg-gray-700 text-white dark:text-gray-300 hover:bg-gray-600 dark:hover:bg-gray-600 transition-colors"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
      </div>
    </HomeLayout>
  );
};

export default CourseList;

