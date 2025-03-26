import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Slices/AuthSlice";
import { AiOutlineSun } from "react-icons/ai";
import { IoMoonOutline } from "react-icons/io5";

function HomeLayout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const role = useSelector((state) => state?.auth?.role);

  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   if (savedTheme === "dark") {
  //     document.documentElement.classList.add("dark");
  //     setIsDarkMode(true);
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     setIsDarkMode(false);
  //   }
  // }, []);

  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  //   if (isDarkMode) {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   } else {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   }
  // };

  function changeWidth() {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "auto";
  }

  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "0";
  }

  async function handleLogout(e) {
    e.preventDefault();
    const res = await dispatch(logout());
    if (res?.payload?.success) {
      navigate("/");
    } else {
      toast.error("Logout failed. Please try again!");
    }
  }

  return (
    <div className="min-h-[90vh] bg-[#f4f7fa] dark:bg-[#1a202c] transition-colors duration-300">
      <div className=" drawer absolute left-0 z-50 w-fit">
        <input className="drawer-toggle" id="my-drawer" type="checkbox" />
        <div className="drawer-content fixed">
          <label htmlFor="my-drawer" className=" cursor-pointer relative">
            <FiMenu
              onClick={changeWidth}
              size={"32px"}
              className="font-bold text-black m-4 dark:text-white transition-colors duration-300"
            />
          </label>
        </div>
        <div className="drawer-side w-0">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-200 text-base-content relative">
            <li className="w-fit absolute right-2 z-50 ">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={24} />
              </button>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>

            {isLoggedIn && role === "ADMIN" && (
              <li>
                <Link to="/admin/dashboard"> Admin DashBoard</Link>
              </li>
            )}
            {isLoggedIn && role === "ADMIN" && (
              <li>
                <Link to="/course/create"> Create new course</Link>
              </li>
            )}
            <li>
              <Link to="/courses">All Courses</Link>
            </li>

            <li>
              <Link to="/contact">Contact Us</Link>
            </li>

            <li>
              <Link to="/about">About Us</Link>
            </li>
            {!isLoggedIn && (
              <li className="absolute bottom-4 w-[90%] px-4">
                <div className="w-full flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0 items-center justify-center">
                  <button className="px-6 py-3 font-semibold rounded-md w-full md:w-1/2 text-black bg-yellow-500 hover:bg-yellow-400 transition duration-300 ease-in-out">
                    <Link to="/login">Login</Link>
                  </button>
                  <button className="px-6 py-3 font-semibold rounded-md w-full md:w-1/2 text-yellow-600 bg-white border border-yellow-500 hover:bg-yellow-50 transition duration-300 ease-in-out">
                    <Link to="/signup">Signup</Link>
                  </button>
                </div>
              </li>
            )}

            {isLoggedIn && (
              <li className="absolute bottom-4 w-[90%] px-4">
                <div className="w-full flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0 items-center justify-center">
                  <button className="px-6 py-3 font-semibold rounded-md w-full md:w-1/2 text-white bg-yellow-600 hover:bg-yellow-500 transition duration-300 ease-in-out">
                    <Link to="/user/profile">Profile</Link>
                  </button>
                  <button className="px-6 py-3 font-semibold rounded-md w-full md:w-1/2 text-yellow-600 bg-white border border-yellow-600 hover:bg-yellow-50 transition duration-300 ease-in-out">
                    <Link onClick={handleLogout}>Logout</Link>
                  </button>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Dark/Light Mode Toggle Button */}
      {/* <button
        onClick={toggleTheme}
        className="fixed top-5 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
      >
        {isDarkMode ? (
          <AiOutlineSun className="h-6 w-6" />
        ) : (
          <IoMoonOutline className="h-6 w-6" />
        )}
      </button> */}

      {children}

      <Footer />
    </div>
  );
}

export default HomeLayout;
