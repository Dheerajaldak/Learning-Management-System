import React from "react";
import { Link } from "react-router-dom";  


const CourseSection = () => {
  const courses = [
    {
      title: "Web Development ",
      instructor: "Dheeraj Aldak",
      rating: 4.5,
      reviews: 122,
      price: 1099.99,
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_1280.jpg", // Replace with your actual image path
    },
    {
      title: "Machine Learning",
      instructor: "Richard James",
      rating: 4.5,
      reviews: 122,
      price: 999.99,
      imageUrl:
        "https://cdn.pixabay.com/photo/2022/08/06/17/22/artificial-intelligence-7369040_1280.jpg", // Replace with your actual image path
    },
    {
      title: "Logic Building",
      instructor: "Richard James",
      rating: 4.5,
      reviews: 122,
      price: 599.00,
      imageUrl:
        "https://images.pexels.com/photos/6615069/pexels-photo-6615069.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with your actual image path
    },
    {
      title: "Data Science",
      instructor: "Richard James",
      rating: 4.5,
      reviews: 122,
      price: 1000,
      imageUrl:
        "https://images.pexels.com/photos/9783353/pexels-photo-9783353.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with your actual image path
    },
    
  ];

  return (
    <div className="p-8 bg-[#f4f7fa] dark:bg-[#1a202c] transition-colors duration-300">
       <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-4">
            Learn from the best
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mx-auto max-w-2xl font-light">
            Discover our top-rated courses across various categories. From coding
            and design to business and wellness, our courses are crafted to
            deliver results.
          </p>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-0 sm:px-24">
        {courses.map((course) => (
          <div
            key={course.title}
            className="border border-gray-400 rounded-lg overflow-hidden  dark:border-gray-800 dark:bg-[#2d3748]  hover:scale-105 cursor-pointer transition-transform duration-300 hover:shadow-2xl"
          >
            <img
              src={course.imageUrl}
              alt={course.title}
              className="w-full h-50 object-cover transition-transform duration-300 transform "
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                {course.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {course.instructor}
              </p>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-4 h-4 text-yellow-500 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3.22l1.62 4.97h5.28l-4.25 3.08 1.62 4.97-4.27-3.09-4.27 3.09 1.62-4.97-4.25-3.08h5.28L10 3.22z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {course.rating.toFixed(1)}
                </span>
                <span className="text-sm text-gray-500 ml-1 dark:text-gray-400">
                  ({course.reviews})
                </span>
              </div>
              <p className="text-lg font-bold text-gray-800 dark:text-white">
                ₹ {course.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
     
      {/* <div className="items-center text-center mt-8 border flex">
          <Link to="/courses">
            <button className=" px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-900 text-white dark:bg-amber-500 dark:text-neutral-900 font-medium shadow hover:bg-black dark:hover:bg-amber-600 flex items-center justify-center transition group whitespace-nowrap">
              <span className="mr-2">Show all courses</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </Link>
        </div> */}
  
      

      <div className="text-center mt-8">
        <Link to="/courses">
          <button className=" border border-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-500 font-semibold py-2 px-4 rounded dark:text-white">
            <div className="flex items-center gap-2  transition-all transform hover:scale-105">
            Show all courses
            <svg
              
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
            
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseSection;

// import React from "react";
// import { Link } from "react-router-dom";  

// const CourseSection = () => {
//   const courses = [
//     {
//       title: "Web Development ",
//       instructor: "Dheeraj Aldak",
//       rating: 4.5,
//       reviews: 122,
//       price: 1099.99,
//       imageUrl:
//         "https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_1280.jpg",
//     },
//     {
//       title: "Machine Learning",
//       instructor: "Richard James",
//       rating: 4.5,
//       reviews: 122,
//       price: 999.99,
//       imageUrl:
//         "https://cdn.pixabay.com/photo/2022/08/06/17/22/artificial-intelligence-7369040_1280.jpg",
//     },
//     {
//       title: "Logic Building",
//       instructor: "Richard James",
//       rating: 4.5,
//       reviews: 122,
//       price: 599.00,
//       imageUrl:
//         "https://images.pexels.com/photos/6615069/pexels-photo-6615069.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//     {
//       title: "Data Science",
//       instructor: "Richard James",
//       rating: 4.5,
//       reviews: 122,
//       price: 1000,
//       imageUrl:
//         "https://images.pexels.com/photos/9783353/pexels-photo-9783353.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//   ];

//   return (
//     <div className="relative isolate overflow-hidden bg-[#f4f7fa] dark:bg-[#1a202c] transition-colors duration-300 py-16">
//       {/* Background Gradient */}
//       {/* <div className="absolute inset-0 -z-10">
//         <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-amber-400 dark:bg-amber-500 rounded-full blur-3xl opacity-20"></div>
//       </div> */}
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-4">
//             Learn from the best
//           </h2>
//           <p className="text-neutral-600 dark:text-neutral-400 mx-auto max-w-2xl font-light">
//             Discover our top-rated courses across various categories. From coding
//             and design to business and wellness, our courses are crafted to
//             deliver results.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//           {courses.map((course) => (
//             <div
//               key={course.title}
//               className="border border-neutral-300 dark:border-neutral-700 rounded-lg overflow-hidden dark:bg-[#1a202c] transition-all duration-300"
//             >
//               <img
//                 src={course.imageUrl}
//                 alt={course.title}
//                 className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-105"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
//                   {course.title}
//                 </h3>
//                 <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
//                   {course.instructor}
//                 </p>
//                 <div className="flex items-center mb-2">
//                   {[...Array(5)].map((_, index) => (
//                     <svg
//                       key={index}
//                       className="w-4 h-4 text-yellow-500 mr-1"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10 3.22l1.62 4.97h5.28l-4.25 3.08 1.62 4.97-4.27-3.09-4.27 3.09 1.62-4.97-4.25-3.08h5.28L10 3.22z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   ))}
//                   <span className="text-sm text-neutral-700 dark:text-neutral-300">
//                     {course.rating.toFixed(1)}
//                   </span>
//                   <span className="text-sm text-neutral-500 ml-1 dark:text-neutral-400">
//                     ({course.reviews})
//                   </span>
//                 </div>
//                 <p className="text-lg font-bold text-neutral-900 dark:text-white">
//                   ₹ {course.price.toFixed(2)}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Link to="/courses">
//             <button className="px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-900 text-white dark:bg-amber-500 dark:text-neutral-900 font-medium shadow hover:bg-black dark:hover:bg-amber-600 flex items-center justify-center transition group whitespace-nowrap">
//               <span className="mr-2">Show all courses</span>
//               <svg
//                 className="w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M17 8l4 4m0 0l-4 4m4-4H3"
//                 />
//               </svg>
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseSection;
