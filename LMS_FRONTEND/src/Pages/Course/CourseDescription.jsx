import { Link, useNavigate, useLocation } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function CourseDescription() {
  const { state } = useLocation();
  const { role, data } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (state) {
      setLoading(false);
    }
  }, [state]);

  if (loading) {
    return (
      <HomeLayout>
        <div className="min-h-screen flex justify-center items-center dark:bg-gray-900 bg-[#f4f7fa] text-white gap-4">
          <span className="loading loading-ring loading-xl"></span>
          <p className="text-xl">Loading...</p>
        </div>
      </HomeLayout>
    );
  }

  return (
    <HomeLayout>
      <div className="min-h-screen pt-16 px-4 sm:px-8 md:px-16 lg:px-32 flex flex-col items-center justify-start bg-[#f4f7fa] dark:bg-gray-900 text-gray-700 dark:text-white">
        {/* Course Thumbnail and Info Section */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-8">
          <span className="">Course</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600">
            Overview
          </span>
        </h1>
        <div className="w-full max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 py-8 md:py-10">
          <div className="space-y-6">
            <div className="relative group">
              <img
                className="w-full h-64 md:h-72 object-cover rounded-lg shadow-xl transition-transform duration-300 transform group-hover:scale-105"
                src={state?.thumbnail?.secure_url || "placeholder.jpg"}
                alt="Course Thumbnail"
              />
            </div>
            <div className="space-y-4 md:space-y-6 text-lg">
              <div className="flex flex-col items-center text-center text-xl font-medium">
                <p className="text-neutral-700 dark:text-white">
                  <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600">
                    Total Lectures:
                  </span>
                  {state?.numbersOfLectures || "N/A"}
                </p>
                <p className="text-neutral-700 dark:text-white">
                  <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600">
                    Instructor:
                  </span>
                  {state?.createdBy || "Not Available"}
                </p>
              </div>
              <div className="flex justify-center">
                {role === "ADMIN" || data?.subscription?.status === "ACTIVE" ? (
                  <button
                    onClick={() =>
                      navigate("/course/displaylectures", {
                        state: { ...state },
                      })
                    }
                    className="bg-yellow-500 text-lg rounded-md font-semibold px-4 py-2 md:px-6 md:py-3 w-full sm:w-3/4 lg:w-1/2 hover:bg-yellow-400 focus:outline-none transition ease-in-out duration-300 transform hover:scale-105 shadow-xl"
                  >
                    Watch Lectures
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/checkout")}
                    className="px-4 py-2 md:px-6 md:py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-900 hover:bg-black text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-neutral-900 font-medium shadow hover:shadow-neutral-900/20 dark:hover:shadow-amber-500/20 flex items-center transition group whitespace-nowrap"
                  >
                    <i className="bx bxs-offer mr-2 lg:mr-3 text-lg lg:text-xl group-hover:rotate-12 transition-transform"></i>
                    <span>Subscribe Now</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Course Description Section */}
          <div className="space-y-4 text-lg md:text-xl text-gray-300">
            <h1 className="text-3xl md:text-4xl mb-4 font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600">
              {state?.title}
            </h1>
            <p className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Course Description
            </p>
            <p className="text-base md:text-lg leading-relaxed text-neutral-700 dark:text-white">
              {state?.description}
            </p>
          </div>
        </div>

        {/* Course Syllabus Section */}
        <div className="mt-8 md:mt-12 w-full max-w-screen-lg text-center dark:bg-gray-800 bg-white p-6 md:p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl mb-6 font-extrabold tracking-tight text-neutral-900 dark:text-white">
            <span className="">Course</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600">
              Syllabus
            </span>
          </h1>
        </div>

        {/* Instructor Info Section */}
        <div className="mt-8 md:mt-12 w-full max-w-screen-lg text-center dark:bg-gray-800 bg-white p-6 md:p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-extrabold tracking-tight text-neutral-900 dark:text-white">
            <span className="">Instructor</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600">
              Information
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 dark:text-white">
            Instructor Name: {state?.createdBy || "N/A"}
          </p>
          <p className="text-base md:text-lg text-neutral-700 dark:text-white">
            About the Instructor: {state?.instructorBio || "No Bio Available"}
          </p>
          <p className="text-base md:text-lg text-neutral-700 dark:text-white">
            Qualifications: {state?.instructorQualifications || "Not Available"}
          </p>
          <Link to="/contact">
            <button className="px-4 py-2 md:px-6 md:py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium flex items-center transition group whitespace-nowrap mt-4 md:mt-6">
              <i className="bx bx-envelope mr-2 lg:mr-3 text-lg lg:text-xl opacity-70 group-hover:opacity-100 transition-opacity"></i>
              <span>Contact Us</span>
            </button>
          </Link>
        </div>

        {/* Reviews and Ratings Section */}
        <div className="mt-8 md:mt-12 w-full max-w-screen-lg text-center dark:bg-gray-800 bg-white p-6 md:p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-extrabold tracking-tight text-neutral-900 dark:text-white">
            <span className="">Reviews </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600">
              & Ratings
            </span>
          </h1>
          <div className="flex justify-center items-center mb-6">
            <span className="text-amber-500 text-2xl">★★★★☆</span>
            <span className="ml-4 text-lg md:text-xl text-neutral-700 dark:text-white">
              (4.5 / 5) - 200 Reviews
            </span>
          </div>
          <button className="bg-yellow-500 text-lg rounded-md font-semibold px-4 py-2 md:px-6 md:py-3 mb-6 hover:bg-yellow-400 focus:outline-none transition ease-in-out duration-300 transform hover:scale-105">
            Add a Review
          </button>
        </div>

        {/* Floating Subscribe Button (Sticky) */}
        <div className="fixed bottom-4 md:bottom-8 right-4 md:right-6 z-10">
          {role !== "ADMIN" && data?.subscription?.status !== "ACTIVE" && (
            <button
              onClick={() => navigate("/checkout")}
              className="px-4 py-2 md:px-6 md:py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-900 hover:bg-black text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-neutral-900 font-medium shadow hover:shadow-neutral-900/20 dark:hover:shadow-amber-500/20 flex items-center transition group whitespace-nowrap"
            >
              <i className="bx bxs-badge-dollar mr-2 lg:mr-3 text-lg lg:text-xl group-hover:rotate-12 transition-transform"></i>
              <span>Purchase</span>
            </button>
          )}
        </div>
      </div>
    </HomeLayout>
  );
}

export default CourseDescription;