import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import NotFound from "./Pages/NotFound";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import CourseList from "./Pages/Course/CourseList";
import Contact from "./Pages/Course/Contact";
import Denied from "./Pages/Denied";
import CourseDescription from "./Pages/Course/CourseDescription";
import RequireAuth from "./Components/Auth/RequireAuth";
import CreateCourse from "./Pages/Course/CreateCourse";
import Profile from "./Pages/User/Profile";
import EditProfile from "./Pages/User/EditProfile";
import Checkout from "./Pages/Payment/Checkout";
import CheckoutSuccess from "./Pages/Payment/CheckoutSuccess";
import CheckoutFailure from "./Pages/Payment/CheckoutFailure";
import Displaylecture from "./Pages/Dashboard/Displaylectures";
import AddLecture from "./Pages/Dashboard/Addlecture";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard";
import LandingPage from "./Pages/LandingPage";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 relative transition-colors duration-300 isolate">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-30 dark:hidden"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
          <div
            className="absolute inset-0 dark:hidden"
            style={{
              backgroundImage:
                "radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>
        <button
          onClick={toggleDarkMode}
          className="fixed top-3 lg:top-4 right-3 lg:right-4 w-9 h-9 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-amber-500 text-neutral-950 shadow-lg hover:bg-amber-600 transition-colors z-10"
        >
          <i
            className={`bx bx-${darkMode ? "sun" : "moon"} text-lg lg:text-xl`}
          ></i>
        </button>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/courses" element={<CourseList />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/denied" element={<Denied />}></Route>
          <Route path="/course/description" element={<CourseDescription />}></Route>

          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
            <Route path="/course/create" element={<CreateCourse />}></Route>
            <Route path="/course/addlecture" element={<AddLecture />}></Route>
            <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/user/editprofile" element={<EditProfile />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/success" element={<CheckoutSuccess />} />
            <Route path="/checkout/fail" element={<CheckoutFailure />} />
            <Route path="/course/displaylectures" element={<Displaylecture />} />
          </Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
       
      </div>
    </>
  );
}

export default App;