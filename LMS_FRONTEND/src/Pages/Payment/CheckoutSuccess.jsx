// import { useEffect } from "react";
// import { AiFillCheckCircle } from "react-icons/ai";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";

// import HomeLayout from "../../Layouts/HomeLayout";
// import { getUserData } from "../../Redux/Slices/AuthSlice";

// function CheckoutSuccess() {
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getUserData());
//     }, [dispatch]); // Added dependency array to prevent unnecessary rerenders

//     return (
//         <HomeLayout>
//             <div className="min-h-[90vh] flex items-center justify-center bg-gray-900">
//                 <div className="w-96 h-[30rem] flex flex-col justify-center items-center bg-white bg-opacity-10 backdrop-blur-lg shadow-2xl rounded-3xl p-6 relative overflow-hidden">
//                     {/* Success Banner */}
//                     <h1 className="bg-green-700 text-white absolute top-0 w-full py-4 text-2xl font-bold rounded-t-3xl">
//                         Payment Successful
//                     </h1>

//                     <div className="px-6 flex flex-col items-center justify-center space-y-4">
//                         <AiFillCheckCircle className="text-green-500 text-6xl animate-pulse mb-4" />
//                         <div className="text-center space-y-3">
//                             <h2 className="text-xl font-semibold text-white">Welcome to the Pro Bundle!</h2>
//                             <p className="text-gray-300 text-md">
//                                 Now you can enjoy all the courses with your new access.
//                             </p>
//                         </div>
//                     </div>

//                     <Link
//                         to="/"
//                         className="bg-green-700 hover:bg-green-800 transition-all duration-300 ease-in-out absolute bottom-0 w-full py-3 text-xl font-semibold text-white text-center rounded-b-3xl"
//                     >
//                         Go to Dashboard
//                     </Link>
//                 </div>
//             </div>
//         </HomeLayout>
//     );
// }

// export default CheckoutSuccess;

import { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import { getUserData } from "../../Redux/Slices/AuthSlice";

function CheckoutSuccess() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserData());
        setTimeout(() => {
            // Redirect after 5 seconds for better UX
            window.location.href = "/";
        }, 9000); // You can adjust the time for redirection
    }, [dispatch]);

    return (
        <HomeLayout>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black">
                <div className="w-96 h-[30rem] flex flex-col justify-center items-center bg-gray-900 rounded-xl shadow-2xl overflow-hidden relative transform transition-all ease-in-out duration-300 hover:scale-105">
                    <h1 className="bg-green-500 absolute text-center top-0 w-full py-4 text-2xl font-bold text-white rounded-t-xl">
                        Payment Successful
                    </h1>

                    <div className="px-6 flex flex-col items-center justify-center space-y-4 mt-14">
                        <AiFillCheckCircle className="text-green-500 text-7xl animate__animated animate__fadeIn animate__delay-1s" />

                        <div className="text-center space-y-3">
                            <h2 className="text-xl font-semibold text-gray-100">
                                Welcome to the Pro Bundle
                            </h2>
                            <p className="text-gray-300">
                                You now have access to all our premium courses. Enjoy learning!
                            </p>
                        </div>
                    </div>

                    <Link to="/" className="absolute bottom-0 w-full py-3 text-xl font-semibold text-white bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-300 rounded-b-xl text-center">
                        Go to Dashboard
                    </Link>
                </div>
            </div>
        </HomeLayout>
    );
}

export default CheckoutSuccess;

