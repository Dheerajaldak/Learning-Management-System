// import { useDispatch, useSelector } from "react-redux";
// import HomeLayout from "../../Layouts/HomeLayout";
// import { Link, useNavigate } from "react-router-dom";
// import { cancelCourseBundle } from "../../Redux/Slices/RazorpaySlice";
// import { getUserData } from "../../Redux/Slices/AuthSlice";
// import toast from "react-hot-toast";

// function Profile() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const userData = useSelector((state) => state?.auth?.data);

// async function handleCancellation() {
//   toast("Initiating cancellation")
//   await dispatch(cancelCourseBundle());
//   await dispatch(getUserData())
//   toast.success("Cancellation completed")
//   navigate("/")
// }

//   return (
//     <HomeLayout>
//       <div className="relative isolate overflow-hidden min-h-[90vh] flex items-center justify-center p-4">
//         {/* Background Gradient */}
//       <div className="absolute inset-0 -z-10">
//          <div
//           className="absolute inset-0 opacity-30 dark:hidden"
//           style={{
//             backgroundImage:
//               "linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
//             backgroundSize: "40px 40px",
//           }}
//         ></div>
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage:
//               "radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
//             backgroundSize: "20px 20px",
//           }}
//         ></div>
//       </div>
//         <div className="my-10 flex flex-col gap-6 rounded-lg p-6 text-white w-full max-w-md shadow-xl bg-gray-800">
//           {/* Profile Avatar */}
//           <img
//             src={userData?.avatar?.secure_url}
//             className="w-32 h-32 m-auto rounded-full border-4 border-yellow-500"
//             alt="User Avatar"
//           />

//           {/* Full Name */}
//           <h3 className="text-2xl font-semibold text-center capitalize">{userData?.fullName}</h3>

//           {/* User Details Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <p className="font-medium">Email:</p>
//             <p className="text-gray-300">{userData?.email}</p>

//             <p className="font-medium">Role:</p>
//             <p className="text-gray-300">{userData?.role}</p>

//             <p className="font-medium">Subscription:</p>
//             <p className={`text-${userData?.subscription?.state === 'active' ? 'green' : 'red'}-500`}>
//               {userData?.subscription?.state === "active" ? "Active" : "Inactive"}
//             </p>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row sm:gap-4 sm:justify-between">
//             <Link
//               to="/changepassword"
//               className="w-full sm:w-[48%] bg-yellow-600 hover:bg-yellow-500 transition-all duration-300 rounded-md font-semibold py-2 text-center mb-4 sm:mb-0"
//             >
//               Change Password
//             </Link>

//             <Link
//               to="/user/editprofile"
//               className="w-full sm:w-[48%] bg-yellow-600 hover:bg-yellow-500 transition-all duration-300 rounded-md font-semibold py-2 text-center"
//             >
//               Edit Profile
//             </Link>
//           </div>

//           {/* Cancel Subscription Button //created insted of active */}
//           {userData?.subscription?.status === "active" && (
//             <button onClick={handleCancellation} className="w-full bg-red-600 hover:bg-red-500 transition-all duration-300 rounded-md font-semibold py-2 text-center mt-4">
//               Cancel Subscription
//             </button>
//           )}
//         </div>
//       </div>
//     </HomeLayout>
//   );
// }

// export default Profile;

import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../../Layouts/HomeLayout";
import { Link, useNavigate } from "react-router-dom";
import { cancelCourseBundle } from "../../Redux/Slices/RazorpaySlice";
import { getUserData, updateProfile } from "../../Redux/Slices/AuthSlice";
import toast from "react-hot-toast";
import { FaFacebook, FaLinkedin, FaGithub, FaCamera } from "react-icons/fa";
import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import coverimg from "../../Assets/Images/coverimg.jpeg";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state?.auth?.data);
  const userId = useSelector((state) => state?.auth?.data?._id);

  const [data, setData] = useState({
    previewImage: userData?.avatar?.secure_url,
    fullName: userData?.fullName,
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

  async function onFormSubmit(e) {
    e.preventDefault();

    if (!data.avatar) {
      toast.error("Please select a profile picture.");
      return;
    }

    const formData = new FormData();
    formData.append("avatar", data.avatar);

    try {
      await dispatch(updateProfile([data.userId, formData]));
      await dispatch(getUserData());
      toast.success("Profile picture updated successfully");
      setData({
        ...data,
        previewImage: userData?.avatar?.secure_url,
        avatar: undefined,
      });
    } catch (error) {
      console.error("Error updating profile picture:", error);
      toast.error(
        error?.response?.data?.message || "Failed to update profile picture ⚠"
      );
    }
  }

  async function handleCancellation() {
    toast("Initiating cancellation");
    await dispatch(cancelCourseBundle());
    await dispatch(getUserData());
    toast.success("Cancellation completed");
    navigate("/");
  }

  return (
    <HomeLayout>
      <div className="relative isolate overflow-hidden min-h-[90vh] flex items-center justify-center p-4 dark:bg-gray-900 dark:text-white">
        {/* Background Image with Camera Icon */}
        <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-xl p-6 dark:bg-gray-800 dark:border-gray-700">
          <div
            className="relative h-48 bg-cover bg-center rounded-t-lg"
            style={{
              backgroundImage: `url(${coverimg})`,
            }}
          >
            <button className="absolute bottom-2 right-2 bg-gray-200 rounded-md p-1 dark:bg-gray-600">
              <FaCamera className="text-gray-600 dark:text-gray-200" />
            </button>
          </div>

          {/* Profile Picture with Camera Icon and Update Form */}
          <div className="relative -mt-16 ml-8">
            <div className="relative">
              <label htmlFor="image_uploads" className="cursor-pointer">
                {data.previewImage ? (
                  <img
                    src={data.previewImage}
                    className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-700"
                    alt="User Avatar"
                  />
                ) : (
                  <BsPersonCircle className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-700" />
                )}
              </label>
              <input
                type="file"
                onChange={handleImageUpload}
                className="hidden"
                id="image_uploads"
                name="image_uploads"
                accept=".jpg, .png, .svg, .jpeg"
              />
              <button className="absolute bottom-2 left-24 bg-gray-200 rounded-full p-1 dark:bg-gray-600">
                <FaCamera className="text-gray-600 dark:text-gray-200" />
              </button>
            </div>
          </div>

          {/* Profile Content */}
          <div className="mt-2 m-6">
            {/* Name and Title */}
            <h2 className="text-2xl mb-6 font-semibold capitalize text-neutral-700 dark:text-neutral-300">
              {userData?.fullName}
            </h2>

            <p className="text-gray-500 dark:text-gray-400">
              Role:- {userData?.role}
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Email:- {userData?.email}
            </p>
            <div className="flex gap-2">
              <p className="text-gray-500 dark:text-gray-400">Subscription:-</p>
              <p
                className={`text-${
                  userData?.subscription?.state === "active" ? "green" : "red"
                }-500`}
              >
                {userData?.subscription?.state === "active"
                  ? "Active"
                  : "Inactive"}
              </p>
            </div>

            {/* Description */}
            <p className="mt-3 text-base lg:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl font-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus eveniet, alias, repudiandae a explicabo vero quas
              excepturi nisi assumenda saepe aspernatur. Quo veritatis ratione
              aperiam.
            </p>
            {/* Social Links */}
            <div className=" mt-4 flex space-x-4 items-center">
              <p className=" text-gray-600 font-medium dark:text-gray-300">
                Follow me on
              </p>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black dark:text-white dark:hover:text-gray-500"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 lg:gap-4 px-6">
            <Link
              to="/changepassword"
              className="px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-900 hover:bg-black text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-neutral-900 font-medium shadow hover:shadow-neutral-900/20 dark:hover:shadow-amber-500/20 flex items-center transition group whitespace-nowrap"
            >
              <i className="bx bx-reset mr-2 lg:mr-3 text-lg lg:text-xl group-hover:rotate-12 transition-transform"></i>
              <span> Change Password</span>
            </Link>

            <Link
              to="/user/editprofile"
              className="px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-900 hover:bg-black text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-neutral-900 font-medium shadow hover:shadow-neutral-900/20 dark:hover:shadow-amber-500/20 flex items-center transition group whitespace-nowrap"
            >
              <i className="bx bxs-edit mr-2 lg:mr-3 text-lg lg:text-xl group-hover:rotate-12 transition-transform"></i>
              <span> Edit Profile</span>
            </Link>

            <button
              onClick={onFormSubmit}
              className="px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium flex items-center transition group whitespace-nowrap"
            >
              <i className="bx bx-save mr-2 lg:mr-3 text-lg lg:text-xl opacity-70 group-hover:opacity-100 transition-opacity"></i>
              <span>Save</span>
            </button>
          </div>

          {/* Cancel Subscription Button //created insted of active */}
          {userData?.subscription?.status === "active" && (
            <button
              onClick={handleCancellation}
              className="w-full bg-red-600 hover:bg-red-500 transition-all duration-300 rounded-md font-semibold py-2 text-center mt-4"
            >
              Cancel Subscription
            </button>
          )}
        </div>
      </div>
    </HomeLayout>
  );
}

export default Profile;
