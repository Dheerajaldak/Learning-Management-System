import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../../Layouts/HomeLayout";
import { useState } from "react";
import toast from "react-hot-toast";
import { getUserData, updateProfile } from "../../Redux/Slices/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";

function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state?.auth?.data?._id);

  const [data, setData] = useState({
    previewImage: "",
    fullName: "",
    avatar: undefined,
    userId: userId,
  });

  function handleImageUpload(e) {
    e.preventDefault();
    const uploadImage = e.target.files[0];
    if (uploadImage) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadImage);
      fileReader.onload = function () {
        setData({
          ...data,
          previewImage: fileReader.result,
          avatar: uploadImage,
        });
      };
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();

    // Validate the form inputs
    if (!data.fullName || !data.avatar) {
      toast.error("All fields are mandatory");
      return;
    }
    if (data.fullName.length < 3) {
      toast.error("Name cannot be of less than 3 characters");
      return;
    }

    // Prepare formData
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("avatar", data.avatar);

    // Dispatch update profile and user data fetching
    try {
      // Correctly pass the userId and formData
      await dispatch(updateProfile([data.userId, formData]));

      // Fetch the updated user data
      await dispatch(getUserData());

      navigate("/user/profile");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error?.response?.data?.message || "Failed to update profile ⚠");
    }
  }

  return (
    <HomeLayout>
      <div className="relative isolate overflow-hidden  min-h-screen">
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
              backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        <div className="flex items-center justify-center min-h-screen">
          <form
            onSubmit={onFormSubmit}
            className="flex flex-col justify-center gap-6 p-6 rounded-lg w-96 bg-gray-800 dark:bg-neutral-900 text-white shadow-2xl border border-neutral-700 dark:border-neutral-600"
          >
            <h1 className="text-center text-3xl font-bold text-amber-400">Edit Profile</h1>
            <label htmlFor="image_uploads" className="flex flex-col cursor-pointer">
              {data.previewImage ? (
                <img
                  className="w-28 h-28 rounded-full mx-auto relative"
                  src={data.previewImage}
                  alt="Profile Preview"
                />
              ) : (
                <BsPersonCircle className="w-28 h-28 rounded-full mx-auto" />
              )}
              <FaCamera/> 
            </label>
            
            <input
              type="file"
              onChange={handleImageUpload}
              className="hidden"
              id="image_uploads"
              name="image_uploads"
              accept=".jpg, .png, .svg, .jpeg"
            />

            <div className="flex flex-col gap-3">
              <label htmlFor="fullName" className="text-lg font-semibold text-neutral-100">
                Full Name
              </label>
              <input
                type="text"
                required
                name="fullName"
                id="fullName"
                placeholder="Enter your name"
                className="bg-neutral-700 dark:bg-neutral-800 text-neutral-200 px-4 py-2 rounded-lg border border-neutral-600 dark:border-neutral-500"
                value={data.fullName}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 transition-all ease-in-out duration-300 text-neutral-900 py-2 rounded-lg shadow-md"
            >
              Update Profile
            </button>
            <Link to="/user/profile">
              <p className="text-center text-amber-400 hover:text-amber-500 cursor-pointer">
                Go back to profile
              </p>
            </Link>
          </form>
        </div>
      </div>
    </HomeLayout>
  );
}

export default EditProfile;
