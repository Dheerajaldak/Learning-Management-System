// import React, { useState } from "react";
// import HomeLayout from "../Layouts/HomeLayout";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { toast } from "react-hot-toast";
// import { login } from "../Redux/Slices/AuthSlice";

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [previewImage, setPreviewImage] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   function handleUserInput(e) {
//     const { name, value } = e.target;
//     setLoginData({
//       ...loginData,
//       [name]: value,
//     });
//   }

//   async function onLogin(event) {
//     event.preventDefault();
//     if (!loginData.email || !loginData.password) {
//       toast.error("Please fill all the details ❓", {
//         position: "top-right",
//       });
//       return;
//     }
//     //dispatch create account action
//     const response = await dispatch(login(loginData));

//     if (response?.payload?.success) navigate("/");
//     setSignupData({
//       email: "",
//       password: "",
//     });
//   }

//   return (
//     <HomeLayout>
//       <div className="flex items-center justify-center p-10">
//         <form
//           noValidate
//           onSubmit={onLogin}
//           className="flex flex-col justify-center gap-3 p-4 rounded-lg text-white w-full max-w-sm shadow-[0_0_10px_black]"
//         >
//           <h1 className="text-center text-2xl font-bold mb-4">Login Page</h1>

//           <div className="flex flex-col gap-1">
//             <label htmlFor="email" className="font-semibold">
//               Email
//             </label>
//             <input
//               type="email"
//               required
//               name="email"
//               id="email"
//               placeholder="Enter your email.."
//               className="bg-transparent px-3 py-2 border rounded-md"
//               onChange={handleUserInput}
//               value={loginData.email}
//             />
//           </div>

//           <div className="flex flex-col gap-1 relative">
//             <label htmlFor="password" className="font-semibold">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 required
//                 name="password"
//                 id="password"
//                 placeholder="Enter your password.."
//                 className="bg-transparent px-3 py-2 border rounded-md w-full pr-10"
//                 onChange={handleUserInput}
//                 value={loginData.password}
//               />
//               <span
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? (
//                   <AiOutlineEyeInvisible size={20} />
//                 ) : (
//                   <AiOutlineEye size={20} />
//                 )}
//               </span>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold mt-4"
//           >
//             Login
//           </button>

//           <p className="text-center mt-2">
//             Donot have an account?
//             <Link to="/signup" className=" link text-accent cursor-pointer">
//               Signup
//             </Link>
//           </p>
//         </form>
//       </div>
//     </HomeLayout>
//   );
// };

// export default Login;

import React, { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { login } from "../Redux/Slices/AuthSlice";
import { isEmail } from "../Helpers/regexMatcher"; // Importing the email validation helper

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);

  // Handle user input change
  function handleUserInput(e) {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });

    // Real-time email validation
    if (name === "email") {
      setIsEmailValid(isEmail(value));
    }
  }

  // Handle login form submission
  async function onLogin(event) {
    event.preventDefault();

    if (!loginData.email || !loginData.password) {
      toast.error("Please fill all the details ❓", {
        position: "top-right",
      });
      return;
    }

    if (!isEmailValid) {
      toast.error("Invalid email 🚫");
      return;
    }

    // Dispatch login action
    const response = await dispatch(login(loginData));

    if (response?.payload?.success) {
      navigate("/");
    } else {
      toast.error("Login failed! Please check your credentials.");
    }

    setLoginData({
      email: "",
      password: "",
    });
  }

  return (
    <HomeLayout>
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-900">
  <form
    noValidate
    onSubmit={onLogin}
    className="flex flex-col items-center justify-center gap-4 p-6 rounded-xl shadow-lg bg-gray-800 text-white max-w-sm w-full dark:bg-gray-900 dark:text-gray-200"
  >
    <h1 className="text-2xl font-semibold text-center text-yellow-400 mb-3 dark:text-yellow-300">
      Login Page
    </h1>

    <div className="flex flex-col w-full gap-2">
      <label htmlFor="email" className="text-lg font-semibold text-gray-300 dark:text-gray-400">
        Email
      </label>
      <input
        type="email"
        className={`bg-gray-700 border ${
          isEmailValid ? "border-gray-600" : "border-red-500"
        } focus:outline-none focus:ring-2 focus:ring-yellow-500 px-4 py-2 rounded-md shadow-sm text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300`}
        id="email"
        name="email"
        value={loginData.email}
        placeholder="Enter your email"
        onChange={handleUserInput}
      />
      {!isEmailValid && (
        <p className="text-red-500 text-sm mt-1">Please enter a valid email</p>
      )}
    </div>

    <div className="flex flex-col w-full gap-2 relative">
      <label htmlFor="password" className="text-lg font-semibold text-gray-300 dark:text-gray-400">
        Password
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className="bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 px-4 py-2 rounded-md shadow-sm w-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
          id="password"
          name="password"
          value={loginData.password}
          placeholder="Enter your password"
          onChange={handleUserInput}
        />
        {/* Only show the eye button when the password field has value */}
        {loginData.password && (
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </span>
        )}
      </div>
    </div>

    <button
      type="submit"
      className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-md py-2 text-lg font-semibold text-white mt-4 dark:bg-yellow-500 dark:hover:bg-yellow-400"
    >
      Login
    </button>

    <p className="text-center mt-2 dark:text-gray-400">
      Don’t have an account?
      <Link to="/signup" className="text-yellow-400 hover:underline cursor-pointer dark:text-yellow-300">
        Signup
      </Link>
    </p>
  </form>
</div>
    </HomeLayout>
  );
};

export default Login;

