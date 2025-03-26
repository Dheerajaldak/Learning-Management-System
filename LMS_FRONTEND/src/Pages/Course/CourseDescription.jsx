import { Navigate, useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function CourseDescription() {
  const { state } = useLocation();
  const { role, data } = useSelector((state) => state.auth);
  const [isSyllabusOpen, setSyllabusOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (state) {
      setLoading(false);
    }
  }, [state]);

  const toggleSyllabus = () => setSyllabusOpen(!isSyllabusOpen);

  if (loading) {
    return (
      <HomeLayout>
        <div className="min-h-screen flex justify-center items-center dark:bg-gray-900 bg-[#f4f7fa] text-white gap-4">
          <span className="loading loading-ring loading-xl"></span>{" "}
          <p className="text-xl">Loading...</p>
        </div>
      </HomeLayout>
    );
  }

  return (
    <HomeLayout>
      <div className="min-h-screen pt-16 px-6 sm:px-16 lg:px-32 flex flex-col items-center justify-start bg-[#f4f7fa] dark:bg-gray-900 text-gray-700  dark:text-white ">
        {/* Course Thumbnail and Info Section */}
        <h1 className="text-4xl md:text-5xl   font-extrabold tracking-tight text-neutral-900 dark:text-white">
          <span className="">Course</span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600">
           Overview
          </span>
        </h1>
        <div className="w-full max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-10 py-10">
          <div className="space-y-6">
            <div className="relative group">
              <img
                className="w-full h-72 object-cover rounded-lg shadow-xl transition-transform duration-300 transform group-hover:scale-105"
                src={state?.thumbnail?.secure_url || "placeholder.jpg"}
                alt="Course Thumbnail"
              />
            </div>
            <div className="space-y-6 text-lg">
              <div className="flex flex-col items-center text-center text-xl font-medium">
                <p className="text-gray-300">
                  <span className="font-semibold text-yellow-400">
                    Total Lectures:{" "}
                  </span>
                  {state?.numbersOfLectures || "N/A"}
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold text-yellow-400">
                    Instructor:{" "}
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
                    className="bg-yellow-500 text-lg rounded-md font-semibold px-6 py-3 w-full sm:w-3/4 lg:w-1/2 hover:bg-yellow-400 focus:outline-none transition ease-in-out duration-300 transform hover:scale-105 shadow-xl"
                  >
                    Watch Lectures
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/checkout")}
                    className="bg-yellow-500 text-lg rounded-md font-semibold px-6 py-3 w-full sm:w-3/4 lg:w-1/2 hover:bg-yellow-400 focus:outline-none transition ease-in-out duration-300 transform hover:scale-105 shadow-xl"
                  >
                    Subscribe Now
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Course Description Section */}
          <div className="space-y-4 text-xl text-gray-300">
            <h1 className="text-4xl font-bold text-center text-yellow-400 mb-4">
              {state?.title}
            </h1>
            <p className="font-semibold text-yellow-400 text-lg">
              Course Description
            </p>
            <p className="text-lg leading-relaxed">{state?.description}</p>
          </div>
        </div>

        {/* Course Syllabus Section */}
        <div className="mt-12 w-full max-w-screen-lg text-center dark:bg-gray-800 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl text-yellow-400 font-bold mb-6">
            Course Syllabus
          </h2>
          <button
            className="bg-yellow-500 text-lg rounded-md font-semibold px-6 py-3 mb-6 hover:bg-yellow-400 focus:outline-none transition ease-in-out duration-300 transform hover:scale-105"
            onClick={toggleSyllabus}
          >
            {isSyllabusOpen ? "Hide Syllabus" : "Show Syllabus"}
          </button>
          {isSyllabusOpen && (
            <ul className="list-disc text-lg text-gray-300 space-y-4">
              {state?.syllabus?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Instructor Info Section */}
        <div className="mt-12 w-full max-w-screen-lg text-center dark:bg-gray-800 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl text-yellow-400 font-bold mb-6">
            Instructor Info
          </h2>
          <p className="text-xl text-gray-300">
            Instructor Name: {state?.createdBy || "N/A"}
          </p>
          <p className="text-lg text-gray-300">
            About the Instructor: {state?.instructorBio || "No Bio Available"}
          </p>
          <p className="text-lg text-gray-300">
            Qualifications: {state?.instructorQualifications || "Not Available"}
          </p>
          <button className="bg-yellow-500 text-lg rounded-md font-semibold px-6 py-3 mt-6 hover:bg-yellow-400 focus:outline-none transition ease-in-out duration-300 transform hover:scale-105">
            Contact Instructor
          </button>
        </div>

        {/* Reviews and Ratings Section */}
        <div className="mt-12 w-full max-w-screen-lg text-center dark:bg-gray-800 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl text-yellow-400 font-bold mb-6">
            Reviews & Ratings
          </h2>
          <div className="flex justify-center items-center mb-6">
            <span className="text-yellow-400 text-2xl">★★★★☆</span>
            <span className="ml-4 text-xl text-gray-300">
              (4.5 / 5) - 200 Reviews
            </span>
          </div>
          <button className="bg-yellow-500 text-lg rounded-md font-semibold px-6 py-3 mb-6 hover:bg-yellow-400 focus:outline-none transition ease-in-out duration-300 transform hover:scale-105">
            Add a Review
          </button>
        </div>

        {/* Related Courses Section */}
        <div className="mt-12 w-full max-w-screen-lg text-center dark:bg-gray-800 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl text-yellow-400 font-bold mb-6">
            Related Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {state?.relatedCourses?.map((course, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <img
                  className="w-full h-48 object-cover rounded-lg"
                  src={course.thumbnail}
                  alt={course.title}
                />
                <h3 className="text-xl text-yellow-400 mt-4">{course.title}</h3>
                <p className="text-gray-300">{course.shortDescription}</p>
                <button className="bg-yellow-500 text-lg rounded-md font-semibold px-6 py-3 mt-4 hover:bg-yellow-400 focus:outline-none transition ease-in-out duration-300 transform hover:scale-105">
                  View Course
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Subscribe Button (Sticky) */}
        <div className="fixed bottom-16 right-6 z-10">
          {role !== "ADMIN" && data?.subscription?.status !== "ACTIVE" && (
            <button
              onClick={() => {
                navigate("/checkout");
              }}
              className="bg-yellow-500 text-lg rounded-xl font-semibold px-6 py-2 hover:bg-yellow-400 focus:outline-none transition ease-in-out duration-300 transform hover:scale-105 shadow-xl"
            >
              Purchase
            </button>
          )}
        </div>
      </div>
    </HomeLayout>
  );
}

export default CourseDescription;
