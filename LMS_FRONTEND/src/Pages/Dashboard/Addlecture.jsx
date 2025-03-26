import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft, AiOutlineCloudUpload } from "react-icons/ai"; // Import the cloud upload icon
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addCourseLecture } from "../../Redux/Slices/LectureSlice";
import HomeLayout from "../../Layouts/HomeLayout";

function AddLecture() {
  const courseDetails = useLocation().state;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!courseDetails || !courseDetails._id) {
      toast.error("Course not found.");
      navigate("/courses");
    }
  }, [courseDetails, navigate]);

  const [userInput, setUserInput] = useState({
    id: courseDetails?._id,
    lecture: undefined,
    title: "",
    description: "",
    videoSrc: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  function handleVideo(e) {
    const video = e.target.files[0];
    const source = window.URL.createObjectURL(video);
    setUserInput({
      ...userInput,
      lecture: video,
      videoSrc: source,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    if (!userInput.lecture || !userInput.title || !userInput.description) {
      toast.error("All fields are mandatory");
      return;
    }

    try {
      const response = await dispatch(addCourseLecture(userInput));
      if (response?.payload?.success) {
        toast.success("Lecture added successfully!");
        navigate(-1);
        setUserInput({
          id: courseDetails?._id,
          lecture: undefined,
          title: "",
          description: "",
          videoSrc: "",
        });
      } else {
        toast.error(response?.payload?.message || "Failed to add lecture");
      }
    } catch (error) {
      console.error("Error adding lecture:", error);
      toast.error("Failed to add lecture.");
    }
  }

  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-screen dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-black bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400">
        <form
          onSubmit={onFormSubmit}
          className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 text-black dark:text-white w-full max-w-sm"
        >
          <header className="flex items-center justify-center relative w-full">
            <button
              className="absolute left-2 text-xl text-green-500 dark:text-green-400"
              onClick={() => navigate(-1)}
            >
              <AiOutlineArrowLeft />
            </button>
            <h1 className="text-2xl font-semibold text-center text-yellow-400 dark:text-yellow-400">
              Add New Lecture
            </h1>
          </header>
  
          <div className="flex flex-col w-full gap-3">
            <input
              type="text"
              name="title"
              placeholder="Enter the title of the lecture"
              onChange={handleInputChange}
              className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 px-4 py-2 rounded-md shadow-sm text-black dark:text-white"
              value={userInput.title}
            />
            <textarea
              name="description"
              placeholder="Enter the description of the lecture"
              onChange={handleInputChange}
              className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 px-4 py-2 rounded-md shadow-sm resize-none h-32 text-black dark:text-white"
              value={userInput.description}
            />
  
            {/* Video Upload Section */}
            <div className="relative">
              {userInput.videoSrc ? (
                <div className="relative">
                  <video
                    muted
                    src={userInput.videoSrc}
                    controls
                    controlsList="nodownload"
                    disablePictureInPicture
                    className="w-full h-44 rounded-lg object-cover"
                  />
                </div>
              ) : (
                <div
                  className="w-full h-44 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-500 dark:border-gray-400 bg-gray-200 dark:bg-gray-700 cursor-pointer"
                  onClick={() => document.getElementById("lecture").click()} // Trigger file input when clicked
                >
                  <AiOutlineCloudUpload className="text-4xl text-gray-400 dark:text-gray-300 mb-2" /> {/* Upload Icon */}
                  <label
                    htmlFor="lecture"
                    className="font-semibold text-gray-400 dark:text-gray-300"
                  >
                    Choose your video
                  </label>
                  <input
                    type="file"
                    id="lecture"
                    name="lecture"
                    onChange={handleVideo}
                    accept="video/mp4, video/mkv, video/*"
                    className="hidden"
                  />
                </div>
              )}
              <small className="text-gray-400 dark:text-gray-300">Max size: 50MB</small>
            </div>
          </div>
  
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-500 dark:hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded-md py-2 text-lg font-semibold text-white"
          >
            Add New Lecture
          </button>
        </form>
      </div>
    </HomeLayout>
  );
  
}

export default AddLecture;
