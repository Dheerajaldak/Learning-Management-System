// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { createNewCourse } from "../../Redux/Slices/CourseSlice";
// import HomeLayout from "../../Layouts/HomeLayout";
// import { AiOutlineArrowLeft } from "react-icons/ai";
// import toast from "react-hot-toast";

// function CreateCourse() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [userInput, setUserInput] = useState({
//     title: "",
//     category: "",
//     createdBy: "",
//     description: "",
//     thumbnail: null,
//     previewImage: "",
//   });

//   function handleImageUpload(e) {
//     e.preventDefault();
//     const uploadImage = e.target.files[0];
//     if (uploadImage) {
//       const fileReader = new FileReader();
//       fileReader.readAsDataURL(uploadImage);
//       fileReader.addEventListener("load", function () {
//         // console.log("Image Loaded:", this.result);
//         setUserInput({
//           ...userInput,
//           previewImage: this.result,
//           thumbnail: uploadImage,
//         });
//       });
//     }
//   }

//   function handleUserInput(e) {
//     const { name, value } = e.target;
//     setUserInput({
//       ...userInput,
//       [name]: value,
//     });
//   }

//   async function onFormSubmit(e) {
//     e.preventDefault();
//     if (
//       !userInput.title ||
//       !userInput.category ||
//       !userInput.description ||
//       !userInput.thumbnail ||
//       !userInput.createdBy
//     ) {
//       toast.error("All fields are mandatory ❗❗");
//       return;
//     }

//     const response = await dispatch(createNewCourse(userInput));
//     if (response?.payload?.success) {
//       setUserInput({
//         title: "",
//         category: "",
//         createdBy: "",
//         description: "",
//         thumbnail: null,
//         previewImage: "",
//       });
//       navigate("/courses");
//     }
//   }
//   return (
//     <HomeLayout>
//       <div className="flex items-center justify-center h-[100vh]">
//         <form
//           onSubmit={onFormSubmit}
//           className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-[700px] my-10 shadow-[0_0_10px_black] relative"
//         >
//           <Link
//             onClick={() => navigate("/previous-route")}
//             className="absolute top-8 text-2xl link text-accent cursor-pointer"
//           >
//             <AiOutlineArrowLeft />
//           </Link>

//           <h1 className="text-center text-2xl font-bold">Create New Course</h1>

//           <main className="grid grid-cols-2 gap-x-10">
//             <div className="gap-y-6">
//               <div>
//                 <label htmlFor="image_uploads" className="cursor-pointer">
//                   {userInput.previewImage ? (
//                     <img
//                       className="w-full h-44 m-auto border"
//                       src={userInput.previewImage}
//                     />
//                   ) : (
//                     <div className="w-full h-44 m-auto flex items-center justify-center border">
//                       <h1 className="font-bold text-lg">
//                         Upload your course thumbnail
//                       </h1>
//                     </div>
//                   )}
//                 </label>

//                 <input
//                   type="file"
//                   className="hidden"
//                   id="image_uploads"
//                   accept=".jpeg, .jpg, .png"
//                   name="image_uploads"
//                   onChange={handleImageUpload}
//                 />
//               </div>

//               <div className="flex flex-col gap-1">
//                 <label htmlFor="title" className="text-lg font-semibold">
//                   Course title
//                 </label>
//                 <input
//                   required
//                   type="text"
//                   name="title"
//                   id="title"
//                   placeholder="Enter course title"
//                   className="bg-transparent px-2 py-1 border "
//                   value={userInput.title}
//                   onChange={handleUserInput}
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col gap-1">
//               <div className="flex flex-col gap-1">
//                 <label htmlFor="createdBy" className="text-lg font-semibold">
//                   Course Instructor
//                 </label>
//                 <input
//                   required
//                   type="text"
//                   name="createdBy"
//                   id="createdBy"
//                   placeholder="Enter course instructor"
//                   className="bg-transparent px-2 py-1 border "
//                   value={userInput.createdBy}
//                   onChange={handleUserInput}
//                 />
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label htmlFor="category" className="text-lg font-semibold">
//                   Course Category
//                 </label>
//                 <input
//                   required
//                   type="text"
//                   name="category"
//                   id="category"
//                   placeholder="Enter course category"
//                   className="bg-transparent px-2 py-1 border "
//                   value={userInput.category}
//                   onChange={handleUserInput}
//                 />
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label htmlFor="description" className="text-lg font-semibold">
//                   Course Description
//                 </label>
//                 <textarea
//                   required
//                   type="text"
//                   name="description"
//                   id="description"
//                   placeholder="Enter course description"
//                   className="bg-transparent px-2 py-1 h-24 overflow-y-scroll border resize-none "
//                   value={userInput.description}
//                   onChange={handleUserInput}
//                 />
//               </div>
//             </div>
//           </main>
//           <button
//             className="w-full py-2 rounded-sm font-semibold text-lg bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer"
//             type="submit"
//           >
//             Create Course
//           </button>
//         </form>
//       </div>
//     </HomeLayout>
//   );
// }

// export default CreateCourse;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createNewCourse } from "../../Redux/Slices/CourseSlice";
import HomeLayout from "../../Layouts/HomeLayout";
import { AiOutlineArrowLeft } from "react-icons/ai";
import toast from "react-hot-toast";
import { AiOutlineCloudUpload } from "react-icons/ai";

function CreateCourse() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    title: "",
    category: "",
    createdBy: "",
    description: "",
    thumbnail: null,
    previewImage: "",
  });

  function handleImageUpload(e) {
    e.preventDefault();
    const uploadImage = e.target.files[0];
    if (uploadImage) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadImage);
      fileReader.addEventListener("load", function () {
        setUserInput({
          ...userInput,
          previewImage: this.result,
          thumbnail: uploadImage,
        });
      });
    }
  }

  function handleUserInput(e) {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    if (
      !userInput.title ||
      !userInput.category ||
      !userInput.description ||
      !userInput.thumbnail ||
      !userInput.createdBy
    ) {
      toast.error("All fields are mandatory ❗❗");
      return;
    }

    const response = await dispatch(createNewCourse(userInput));
    if (response?.payload?.success) {
      setUserInput({
        title: "",
        category: "",
        createdBy: "",
        description: "",
        thumbnail: null,
        previewImage: "",
      });
      navigate("/courses");
    }
  }

 return (
  <HomeLayout>
    <div className="flex items-center justify-center min-h-screen bg-[#f4f7fa] dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-black text-black dark:text-white">
      <form
        onSubmit={onFormSubmit}
        className="flex flex-col gap-6 p-6 sm:w-[90%] md:w-[700px] rounded-lg shadow-xl bg-white dark:bg-gray-800 relative"
      >
        {/* Back Button */}
        <Link
          to="/courses"
          className="absolute top-8 left-8 text-2xl text-accent cursor-pointer hidden sm:block"
        >
          <AiOutlineArrowLeft />
        </Link>

        <h1 className="text-center text-3xl font-semibold text-black dark:text-white">
          Create New Course
        </h1>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column - Image and Title */}
          <div className="flex flex-col gap-6">
            <div className="relative">
              <label htmlFor="image_uploads" className="cursor-pointer block ">
                {userInput.previewImage ? (
                  <img
                    className="w-full h-44 rounded-lg border-2 border-gray-500 dark:border-gray-400 object-cover"
                    src={userInput.previewImage}
                  />
                ) : (
                  <div className="w-full h-44 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-500 dark:border-gray-400 bg-white dark:bg-gray-800">
                    <AiOutlineCloudUpload className="text-4xl text-gray-400 dark:text-gray-300 mb-2" />
                    <h1 className="font-semibold text-lg text-gray-400 dark:text-gray-300">
                      Upload Course Thumbnail
                    </h1>
                  </div>
                )}
              </label>

              <small className="text-gray-400 dark:text-gray-300">Max size: 15MB</small>
              <input
                type="file"
                className="hidden"
                id="image_uploads"
                accept=".jpeg, .jpg, .png"
                name="image_uploads"
                onChange={handleImageUpload}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-lg font-medium text-black dark:text-white">
                Course Title
              </label>
              <input
                required
                type="text"
                name="title"
                id="title"
                placeholder="Enter course title"
                className="bg-transparent px-4 py-2 border border-gray-600 dark:border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500 text-black dark:text-white"
                value={userInput.title}
                onChange={handleUserInput}
              />
            </div>
          </div>

          {/* Right Column - Instructor, Category, Description */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="createdBy" className="text-lg font-medium text-black dark:text-white">
                Instructor
              </label>
              <input
                required
                type="text"
                name="createdBy"
                id="createdBy"
                placeholder="Enter instructor's name"
                className="bg-transparent px-4 py-2 border border-gray-600 dark:border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500 text-black dark:text-white"
                value={userInput.createdBy}
                onChange={handleUserInput}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="category" className="text-lg font-medium text-black dark:text-white">
                Category
              </label>
              <input
                required
                type="text"
                name="category"
                id="category"
                placeholder="Enter course category"
                className="bg-transparent px-4 py-2 border border-gray-600 dark:border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500 text-black dark:text-white"
                value={userInput.category}
                onChange={handleUserInput}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="text-lg font-medium text-black dark:text-white">
                Description
              </label>
              <textarea
                required
                name="description"
                id="description"
                placeholder="Enter course description"
                className="bg-transparent px-4 py-2 h-24 border border-gray-600 dark:border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500 resize-none text-black dark:text-white"
                value={userInput.description}
                onChange={handleUserInput}
              />
            </div>
          </div>
        </main>

        <button
          className="w-full py-3 rounded-lg font-semibold text-lg bg-yellow-600 hover:bg-yellow-500 transition-all duration-300 cursor-pointer"
          type="submit"
        >
          Create Course
        </button>
      </form>
    </div>
  </HomeLayout>
);

}

export default CreateCourse;
