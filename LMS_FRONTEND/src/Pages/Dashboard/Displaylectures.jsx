import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import { deleteCourseLecture, getCourseLectures } from "../../Redux/Slices/LectureSlice";

function DisplayLectures() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { lectures } = useSelector((state) => state.lecture);
  const { role } = useSelector((state) => state.auth);

  const [currentVideo, setCurrentVideo] = useState(0);

  async function onLectureDelete(courseId, lectureId) {
    console.log("Deleting lecture:", courseId, lectureId);  // Log values for debugging
    await dispatch(deleteCourseLecture({ courseId, lectureId }));

    // Re-fetch the updated lectures after deletion (ensure your API is syncing the data correctly)
    await dispatch(getCourseLectures(courseId));
  }

  useEffect(() => {
    if (!state) navigate("/courses");
    dispatch(getCourseLectures(state._id)); // Get the lectures for the course
  }, [dispatch, state, navigate]);

  // Debugging: Check if the lecture URLs are valid
  const getVideoUrl = () => {
    const videoUrl = lectures[currentVideo]?.lectures?.secure_url;
    return videoUrl;
  };

  return (
    <HomeLayout>
      <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-white mx-[5%]">
        <div className="text-center text-3xl font-semibold text-yellow-500">
          {state?.title}
        </div>

        {lectures && lectures.length > 0 ? (
          <div className="flex flex-col lg:flex-row justify-between gap-10 w-full max-w-screen-xl">
            {/* Left section for playing videos and displaying course details */}
            <div className="space-y-5 lg:w-[60%] p-4 rounded-lg shadow-xl dark:bg-gray-800 bg-white">
              {/* Check if video URL exists before rendering */}
              {getVideoUrl() ? (
                <div className="relative w-full pb-[56.25%]">
                  <video
                    src={getVideoUrl()}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
                    controls
                    disablePictureInPicture
                    muted
                    controlsList="nodownload"
                    onError={(e) => {
                      console.error("Error loading video for URL: ", e.target.src);
                      alert("There was an error loading the video. Please try again later.");
                    }}
                  />
                </div>
              ) : (
                <div>Video could not be loaded. Please try again later.</div>
              )}

              <div className="text-lg">
                <h1 className="font-semibold text-yellow-500">Title:</h1>
                <p>{lectures[currentVideo]?.title}</p>
                <h2 className="font-semibold text-yellow-500 mt-4">Description:</h2>
                <p className="text-gray-400 line-clamp-4">{lectures[currentVideo]?.description}</p>
              </div>
            </div>

            {/* Right section for displaying list of lectures */}
            <ul className="lg:w-[35%] w-full p-4 rounded-lg shadow-xl dark:bg-gray-800 bg-white space-y-4">
              <li className="font-semibold text-xl text-yellow-500 flex items-center justify-between">
                <p>Lectures List</p>
                {role === "ADMIN" && (
                  <button
                    onClick={() => navigate("/course/addlecture", { state: { ...state } })}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md font-semibold text-sm transition-all"
                  >
                    Add New Lecture
                  </button>
                )}
              </li>
              {lectures &&
                lectures.map((lecture, idx) => (
                  <li
                    className="space-y-2 dark:bg-gray-700 bg-gray-700 p-3 rounded-md shadow-md"
                    key={`${lecture._id}-${idx}`}
                  >
                    <p
                      className="cursor-pointer text-yellow-400 hover:underline"
                      onClick={() => setCurrentVideo(idx)}
                    >
                      <span>Lecture {idx + 1}: </span>
                      {lecture?.title}
                    </p>
                    {role === "ADMIN" && (
                      <button
                        onClick={() => onLectureDelete(state?._id, lecture._id)}
                        className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md font-semibold text-sm transition-all"
                      >
                        Delete Lecture
                      </button>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        ) : (
          role === "ADMIN" && (
            <button
              onClick={() => navigate("/course/addlecture", { state: { ...state } })}
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md font-semibold text-sm transition-all"
            >
              Add New Lecture
            </button>
          )
        )}
      </div>
    </HomeLayout>
  );
}

export default DisplayLectures;
