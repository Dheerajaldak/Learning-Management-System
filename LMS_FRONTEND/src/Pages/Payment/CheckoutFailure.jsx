import { useState, useEffect } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";

function CheckoutFailure() {
    const [timer, setTimer] = useState(5); // 5 seconds countdown

    useEffect(() => {
        const countdown = setInterval(() => {
            if (timer === 0) {
                clearInterval(countdown);
                window.location.href = "/checkout"; // Redirect to checkout page after 5 seconds
            } else {
                setTimer(timer - 1);
            }
        }, 1000); // Countdown every second
    }, [timer]);

    // Right-click event handler for animation effect
    const handleRightClick = (e) => {
        e.preventDefault();
        const x = e.clientX;
        const y = e.clientY;

        const ripple = document.createElement("div");
        ripple.style.position = "absolute";
        ripple.style.width = "100px";
        ripple.style.height = "100px";
        ripple.style.borderRadius = "50%";
        ripple.style.background = "rgba(255, 255, 255, 0.6)";
        ripple.style.left = `${x - 50}px`;
        ripple.style.top = `${y - 50}px`;
        ripple.style.animation = "ripple-animation 0.6s ease-out";

        document.body.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600); // Remove ripple after animation
    };

    return (
        <HomeLayout>
            <div
                className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black"
                onContextMenu={handleRightClick} // Listen for right-click
            >
                <div className="w-96 h-[30rem] flex flex-col justify-center items-center bg-gray-900 rounded-xl shadow-2xl overflow-hidden relative transform transition-all ease-in-out duration-300 hover:scale-105">
                    <h1 className="bg-red-500 absolute text-center top-0 w-full py-4 text-2xl font-bold text-white rounded-t-xl">
                        Payment Failed
                    </h1>

                    <div className="px-6 flex flex-col items-center justify-center space-y-4 mt-14">
                        <RxCrossCircled className="text-red-500 text-7xl animate__animated animate__fadeIn animate__delay-1s" />

                        <div className="text-center space-y-3">
                            <h2 className="text-xl font-semibold text-gray-100">
                                Oops! Your payment failed.
                            </h2>
                            <p className="text-gray-300">
                                Please try again later.
                            </p>
                        </div>
                    </div>

                    {/* Countdown Timer */}
                    <div className="absolute bottom-24 text-xl text-gray-200 font-bold">
                        <p>Redirecting in: {timer}s</p>
                    </div>

                    <Link
                        to="/checkout"
                        className="absolute bottom-0 w-full py-3 text-xl font-semibold text-white bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-300 rounded-b-xl text-center"
                    >
                        Try Again
                    </Link>
                </div>
            </div>
        </HomeLayout>
    );
}

export default CheckoutFailure;
