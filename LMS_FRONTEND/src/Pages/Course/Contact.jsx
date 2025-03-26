// import React, { useState } from "react";
// import HomeLayout from "../../Layouts/HomeLayout";
// import toast from "react-hot-toast";
// import { isEmail } from "../../Helpers/regexMatcher";
// import axiosInstance from "../../Helpers/axiosinstance";

// const Contact = () => {
//   const [userInput, setUserInput] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isEmailValid, setIsEmailValid] = useState(true);

//   function handleInputChange(e) {
//     const { name, value } = e.target;
//     setUserInput({
//       ...userInput,
//       [name]: value,
//     });

//     if (name === "email") {
//       setIsEmailValid(isEmail(value)); // Real-time email validation
//     }
//   }

//   async function onFormSubmit(e) {
//     e.preventDefault();
  
//     if (!userInput.email || !userInput.name || !userInput.message) {
//       toast.error("All fields are mandatory 💬");
//       return;
//     }
  
//     if (!isEmailValid) {
//       toast.error("Invalid email 🚫");
//       return;
//     }
  
//     try {
//       const promise = axiosInstance.post("/miscellaneous/contact", userInput); // This is the promise we want to pass
  
//       toast.promise(promise, {
//         loading: "Submitting your message...",
//         success: "Form submitted successfully",
//         error: "Failed to submit the form",
//       });
  
//       const response = await promise;  // Wait for the response here
  
//       if (response?.data?.success) {
//         setUserInput({
//           name: "",
//           email: "",
//           message: "",
//         });
//       }
  
//     } catch (err) {
//       toast.error("Operation Failed");
//       console.error("Error during form submission:", err.response || err);
//     }
//   }

//   return (
//     <HomeLayout>
//       <div className=" p-2 flex items-center justify-center h-screen bg-[#f4f7fa] dark:bg-gradient-to-br from-gray-800 via-gray-900 to-black">
//         <form
//           noValidate
//           onSubmit={onFormSubmit}
//           className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 text-black dark:text-white max-w-sm w-full"
//         >
//           <h1 className="text-2xl font-semibold text-center text-yellow-400">Contact Us</h1>

//           <div className="flex flex-col w-full gap-2">
//             <label htmlFor="name" className="text-lg font-semibold text-gray-700 dark:text-gray-300">
//               Name
//             </label>
//             <input
//               type="text"
//               className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 px-4 py-2 rounded-md shadow-sm text-black dark:text-white"
//               id="name"
//               name="name"
//               value={userInput.name}
//               placeholder="Enter your name"
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className="flex flex-col w-full gap-2">
//             <label htmlFor="email" className="text-lg font-semibold text-gray-700 dark:text-gray-300">
//               Email
//             </label>
//             <input
//               type="email"
//               className={`bg-gray-100 dark:bg-gray-700 border ${isEmailValid ? "border-gray-300 dark:border-gray-600" : "border-red-500"} focus:outline-none focus:ring-2 focus:ring-yellow-500 px-4 py-2 rounded-md shadow-sm text-black dark:text-white`}
//               id="email"
//               name="email"
//               value={userInput.email}
//               placeholder="Enter your email"
//               onChange={handleInputChange}
//             />
//             {!isEmailValid && (
//               <p className="text-red-500 text-sm mt-1">Please enter a valid email</p>
//             )}
//           </div>

//           <div className="flex flex-col w-full gap-2">
//             <label htmlFor="message" className="text-lg font-semibold text-gray-700 dark:text-gray-300">
//               Message
//             </label>
//             <textarea
//               onChange={handleInputChange}
//               className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 px-4 py-2 rounded-md shadow-sm resize-none h-32 text-black dark:text-white"
//               id="message"
//               name="message"
//               value={userInput.message}
//               placeholder="Enter your message"
//             />
//           </div>

//           <button
//             className="w-full bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded-md py-2 text-lg font-semibold text-white"
//             type="submit"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </HomeLayout>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import HomeLayout from "../../Layouts/HomeLayout";
import toast from "react-hot-toast";
import { isEmail } from "../../Helpers/regexMatcher";
import axiosInstance from "../../Helpers/axiosinstance";

const Contact = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(true);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });

    if (name === "email") {
      setIsEmailValid(isEmail(value)); // Real-time email validation
    }
  }

  async function onFormSubmit(e) {
    e.preventDefault();
  
    if (!userInput.email || !userInput.name || !userInput.message) {
      toast.error("All fields are mandatory 💬");
      return;
    }
  
    if (!isEmailValid) {
      toast.error("Invalid email 🚫");
      return;
    }
  
    try {
      const promise = axiosInstance.post("/miscellaneous/contact", userInput); // This is the promise we want to pass
  
      toast.promise(promise, {
        loading: "Submitting your message...",
        success: "Form submitted successfully",
        error: "Failed to submit the form",
      });
  
      const response = await promise;  // Wait for the response here
  
      if (response?.data?.success) {
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      }
  
    } catch (err) {
      toast.error("Operation Failed");
      console.error("Error during form submission:", err.response || err);
    }
  }

  return (
    <HomeLayout>
    <div className="relative isolate overflow-hidden lg:px-16 bg-[#f4f7fa] dark:bg-[#1a202c]">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-amber-400 dark:bg-amber-500 rounded-full blur-3xl opacity-20"></div>
        <div
          className="absolute inset-0 opacity-30 dark:hidden"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24 xl:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Side: Text Content */}
          <div className="space-y-6 lg:space-y-7">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              <span className="block mb-1">Contact Us</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600">
                We'd Love to Hear From You
              </span>
            </h1>
            <p className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl font-light">
              Reach out with any questions or feedback. Our team is ready to assist you.
            </p>
          </div>

          {/* Right Side: Contact Form */}
          <div className="space-y-6 lg:space-y-7 w-full max-w-lg">
            <form
              noValidate
              onSubmit={onFormSubmit}
              className="flex flex-col items-center justify-center gap-6 p-8 rounded-xl shadow-lg bg-white dark:bg-gray-800 text-black dark:text-white w-full"
            >
              {/* Name */}
              <div className="flex flex-col w-full gap-2">
              <h1 className="text-2xl font-bold text-center text-amber-400">Contact</h1>
                <label htmlFor="name" className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 px-4 py-2 rounded-md shadow-sm text-black dark:text-white"
                  id="name"
                  name="name"
                  value={userInput.name}
                  placeholder="Enter your name"
                  onChange={handleInputChange}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col w-full gap-2">
                <label htmlFor="email" className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  className={`bg-gray-100 dark:bg-gray-700 border ${isEmailValid ? "border-gray-300 dark:border-gray-600" : "border-red-500"} focus:outline-none focus:ring-2 focus:ring-yellow-500 px-4 py-2 rounded-md shadow-sm text-black dark:text-white`}
                  id="email"
                  name="email"
                  value={userInput.email}
                  placeholder="Enter your email"
                  onChange={handleInputChange}
                />
                {!isEmailValid && (
                  <p className="text-red-500 text-sm mt-1">Please enter a valid email</p>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col w-full gap-2">
                <label htmlFor="message" className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  onChange={handleInputChange}
                  className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 px-4 py-2 rounded-md shadow-sm resize-none h-32 text-black dark:text-white"
                  id="message"
                  name="message"
                  value={userInput.message}
                  placeholder="Enter your message"
                />
              </div>

              {/* Submit Button */}
              <button
                className="w-full bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded-md py-2 text-lg font-semibold text-white"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Floating CTA Button */}
      <div className="hidden md:block absolute top-10 left-[5%] lg:top-40 lg:left-[30%] animate-bounce delay-300">
        <div className="bg-neutral-900 text-white px-2.5 py-1.5 rounded-lg text-xm lg:text-sm flex items-center shadow-lg whitespace-nowrap">
          <i className="bx bx-check-circle mr-1 text-amber-500"></i> Contact Us Now
        </div>
      </div>
    </div>
    </HomeLayout>
  );
};

export default Contact;
