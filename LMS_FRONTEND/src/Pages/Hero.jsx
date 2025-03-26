// import React from "react";

// const Hero = () => {
//   return (
//     <div className="relative isolate overflow-hidden">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-amber-400 dark:bg-amber-500 rounded-full blur-3xl opacity-20"></div>
//         {/* Added background patterns */}
//         <div
//           className="absolute inset-0 opacity-30 dark:hidden"
//           style={{
//             backgroundImage:
//               "linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
//             backgroundSize: "40px 40px",
//           }}
//         ></div>
//         <div
//           className="absolute inset-0 dark:hidden"
//           style={{
//             backgroundImage:
//               "radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
//             backgroundSize: "20px 20px",
//           }}
//         ></div>
//       </div>

//       <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24 xl:py-28">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
//           <div className="space-y-6 lg:space-y-7">
//             <div className="space-y-4 lg:space-y-5">
//               <div className="flex flex-wrap items-center gap-2">
//                 <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-900 text-amber-400">
//                   NEW
//                 </span>
//                 <h2 className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-neutral-900 text-amber-400 font-medium text-sm backdrop-blur-sm border border-neutral-800/50 whitespace-nowrap">
//                   <i className="bx bx-trending-up mr-1"></i> Next Generation Learning
//                 </h2>
//               </div>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
//                 <span className="block mb-1">Learn</span>
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600">
//                   Without Limits
//                 </span>
//               </h1>
//               <p className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl font-light">
//                 Elevate your web projects with our streamlined design system powered by the latest Tailwind CSS v4. Create stunning user experiences with state-of-the-art theme switching.
//               </p>
//               <div className="flex gap-3 items-center">
//                 <div className="h-px bg-neutral-300 dark:bg-neutral-700 w-12"></div>
//                 <p className="uppercase text-xs tracking-widest text-neutral-500 dark:text-neutral-400 font-medium">
//                   Transition seamlessly
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-wrap gap-3 lg:gap-4">
//               <button className="px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-900 hover:bg-black text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-neutral-900 font-medium shadow hover:shadow-neutral-900/20 dark:hover:shadow-amber-500/20 flex items-center transition group whitespace-nowrap">
//                 <i className="bx bx-code-alt mr-2 lg:mr-3 text-lg lg:text-xl group-hover:rotate-12 transition-transform"></i>
//                 <span>Start Coding</span>
//               </button>
//               <button className="px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium flex items-center transition group whitespace-nowrap">
//                 <i className="bx bx-book-open mr-2 lg:mr-3 text-lg lg:text-xl opacity-70 group-hover:opacity-100 transition-opacity"></i>
//                 <span>Documentation</span>
//               </button>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-5 sm:items-center pt-6 lg:pt-7 border-t border-neutral-200 dark:border-neutral-800">
//               <div className="flex -space-x-3">
//                 <img src="https://randomuser.me/api/portraits/women/21.jpg" alt="User" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white dark:border-neutral-900 object-cover" />
//                 <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="User" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white dark:border-neutral-900 object-cover" />
//                 <img src="https://randomuser.me/api/portraits/women/24.jpg" alt="User" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white dark:border-neutral-900 object-cover" />
//                 <span className="flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white dark:border-neutral-900 bg-neutral-900 dark:bg-amber-500 text-white dark:text-neutral-900 text-xs font-medium">
//                   +5K
//                 </span>
//               </div>
//               <div className="space-y-1">
//                 <div className="flex items-center">
//                   <i className="bx bxs-star text-amber-500 mr-1"></i>
//                   <i className="bx bxs-star text-amber-500 mr-1"></i>
//                   <i className="bx bxs-star text-amber-500 mr-1"></i>
//                   <i className="bx bxs-star text-amber-500 mr-1"></i>
//                   <i className="bx bxs-star-half text-amber-500 mr-1"></i>
//                   <span className="text-neutral-600 dark:text-neutral-400 text-sm ml-1 whitespace-nowrap">
//                     4.8/5
//                   </span>
//                 </div>
//                 <p className="text-neutral-600 dark:text-neutral-400 text-sm whitespace-nowrap">
//                   Trusted by <span className="font-bold text-neutral-900 dark:text-white">5,000+</span> developers worldwide
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="relative bg-white dark:bg-neutral-900 p-4 lg:p-5 xl:p-6 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800">
//               <div className="flex items-center justify-between mb-3 lg:mb-4">
//                 <div className="flex items-center gap-2">
//                   <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-red-500"></span>
//                   <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-amber-500"></span>
//                   <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-green-500"></span>
//                 </div>
//                 <div className="text-xs text-neutral-500 dark:text-neutral-400 whitespace-nowrap">
//                   dark-mode.jsx
//                 </div>
//               </div>
//               <div className="h-56 md:h-64 lg:h-60 xl:h-72 rounded-lg bg-neutral-100 dark:bg-neutral-800 overflow-hidden relative">
//                 <img
//                   src="https://golsedtech.com/wp-content/uploads/2024/06/hero-img.png"
//                   alt="Code snippet for light mode"
//                   className="w-full h-full object-cover object-left-top dark:hidden"
//                 />
//                 <img
//                   src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhcm5pbmclMjBtYW5hZ2VtZW50JTIwc3lzdGVtfGVufDB8fDB8fHww"
//                   alt="Code snippet for dark mode"
//                   className="w-full h-full object-cover object-left-top dark:block"
//                 />
//                 <div className="absolute bottom-4 right-4">
//                   <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-amber-500 to-indigo-900 flex items-center justify-center text-white shadow-lg animate-pulse">
//                     <i className="bx bx-brightness-half text-xl lg:text-2xl"></i>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-3 lg:mt-4 flex justify-between items-center flex-wrap gap-2">
//                 <div className="flex gap-2 flex-wrap">
//                   <span className="px-2.5 py-1 lg:px-3 rounded-full bg-neutral-900 text-amber-400 text-xs font-medium flex items-center whitespace-nowrap">
//                     <i className="bx bxl-tailwind-css mr-1"></i> Tailwind v4
//                   </span>
//                   <span className="px-2.5 py-1 lg:px-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-indigo-900 dark:text-indigo-400 border border-neutral-200 dark:border-neutral-700 text-xs font-medium flex items-center whitespace-nowrap">
//                     <i className="bx bxl-react mr-1"></i> React
//                   </span>
//                 </div>
//                 <button className="w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 flex items-center justify-center rounded-full bg-amber-500 text-neutral-900 hover:bg-amber-600 transition">
//                   <i className="bx bx-copy text-sm"></i>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="hidden md:block absolute top-16 right-[15%] lg:top-20 lg:right-[20%] animate-bounce delay-300">
//         <div className="bg-neutral-900 text-white px-2.5 py-1.5 rounded-lg text-xm lg:text-sm flex items-center shadow-lg whitespace-nowrap">
//           <i className="bx bx-check-circle mr-1 text-amber-500"></i> Accessible
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import Navbar from "./Nav";
import { Link } from "react-router-dom";
import PopUpModal from "./Popupmodel";

const Hero = () => {
  return (
    <>
    <PopUpModal/>
    <div className="relative isolate overflow-hidden lg:px-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-amber-400 dark:bg-amber-500 rounded-full blur-3xl opacity-20"></div>
        {/* Added background patterns */}
        <div
          className="absolute inset-0 opacity-30 dark:hidden"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div
          className="absolute inset-0 "
          style={{
            backgroundImage:
              "radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
      <div ><Navbar/></div>
      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24 xl:py-20">
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="space-y-6 lg:space-y-7">
            <div className="space-y-4 lg:space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-900 text-amber-400">
                  NEW
                </span>
                <h2 className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-neutral-900 text-amber-400 font-medium text-sm backdrop-blur-sm border border-neutral-800/50 whitespace-nowrap">
                  <i className="bx bx-trending-up mr-1"></i> Future of Learning
                </h2>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                <span className="block mb-1">Learn</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600">
                  Without Limits
                </span>
              </h1>
              <p className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl font-light">
                Empower your educational journey with our cutting-edge Learning Management System.  Access courses, connect with instructors, and track your progress, all in one place.
              </p>
              <div className="flex gap-3 items-center">
                <div className="h-px bg-neutral-300 dark:bg-neutral-700 w-12"></div>
                <p className="uppercase text-xs tracking-widest text-neutral-500 dark:text-neutral-400 font-medium">
                  Start your journey
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 lg:gap-4">
              <Link to="/login" className="px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-900 hover:bg-black text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-neutral-900 font-medium shadow hover:shadow-neutral-900/20 dark:hover:shadow-amber-500/20 flex items-center transition group whitespace-nowrap">
                <i className="bx bx-book-open mr-2 lg:mr-3 text-lg lg:text-xl group-hover:rotate-12 transition-transform"></i>
                <span>Get Started</span>
              </Link>
              <button className="px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium flex items-center transition group whitespace-nowrap">
                <i className="bx bx-play mr-2 lg:mr-3 text-lg lg:text-xl opacity-70 group-hover:opacity-100 transition-opacity"></i>
                <span>Watch Demo</span>
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 sm:items-center pt-6 lg:pt-7 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex -space-x-3">
                <img src="https://randomuser.me/api/portraits/women/21.jpg" alt="User" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white dark:border-neutral-900 object-cover" />
                <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="User" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white dark:border-neutral-900 object-cover" />
                <img src="https://randomuser.me/api/portraits/women/24.jpg" alt="User" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white dark:border-neutral-900 object-cover" />
                <span className="flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white dark:border-neutral-900 bg-neutral-900 dark:bg-amber-500 text-white dark:text-neutral-900 text-xs font-medium">
                  10K+
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center">
                  <i className="bx bxs-star text-amber-500 mr-1"></i>
                  <i className="bx bxs-star text-amber-500 mr-1"></i>
                  <i className="bx bxs-star text-amber-500 mr-1"></i>
                  <i className="bx bxs-star text-amber-500 mr-1"></i>
                  <i className="bx bxs-star-half text-amber-500 mr-1"></i>
                  <span className="text-neutral-600 dark:text-neutral-400 text-sm ml-1 whitespace-nowrap">
                    4.9/5
                  </span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm whitespace-nowrap">
                  Trusted by <span className="font-bold text-neutral-900 dark:text-white">10,000+</span> learners
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white dark:bg-neutral-900 p-4 lg:p-5 xl:p-6 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center justify-between mb-3 lg:mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-red-500"></span>
                  <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-amber-500"></span>
                  <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-green-500"></span>
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 whitespace-nowrap">
                  Course Preview
                </div>
              </div>
              <div className="h-56 md:h-64 lg:h-60 xl:h-72 rounded-lg bg-neutral-100 dark:bg-neutral-800 overflow-hidden relative">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ezbJwaLmOeM?si=Z4rzzkR1VgxFwNhK"
                //   src="https://asset.cloudinary.com/drjraeo7y/a6986cb80e0dbfc8c0f277f75110a119"  // Replace with a relevant LMS video
                  title="LMS Course Preview"
                  allowFullScreen
                ></iframe>
                <div className="absolute bottom-4 right-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-amber-500 to-indigo-900 flex items-center justify-center text-white shadow-lg animate-pulse">
                    <i className="bx bx-play text-xl lg:text-2xl"></i>
                  </div>
                </div>
              </div>
              <div className="mt-3 lg:mt-4 flex justify-between items-center flex-wrap gap-2">
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2.5 py-1 lg:px-3 rounded-full bg-neutral-900 text-amber-400 text-xs font-medium flex items-center whitespace-nowrap">
                    <i className="bx bx-video"></i> Online Course
                  </span>
                  <span className="px-2.5 py-1 lg:px-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-indigo-900 dark:text-indigo-400 border border-neutral-200 dark:border-neutral-700 text-xs font-medium flex items-center whitespace-nowrap">
                    <i className="bx bx-book-open"></i>  Accessible
                  </span>
                </div>
                <button className="w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 flex items-center justify-center rounded-full bg-amber-500 text-neutral-900 hover:bg-amber-600 transition">
                  <i className="bx bx-share text-sm"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden md:block absolute top-16 right-[15%] lg:top-40 lg:right-[25%] animate-bounce delay-300">
        <div className="bg-neutral-900 text-white px-2.5 py-1.5 rounded-lg text-xm lg:text-sm flex items-center shadow-lg whitespace-nowrap">
          <i className="bx bx-check-circle mr-1 text-amber-500"></i> Enroll Now
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
