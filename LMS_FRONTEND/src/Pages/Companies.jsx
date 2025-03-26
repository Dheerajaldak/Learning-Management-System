import React from "react";
import Mic from "../../src/Assets/compimg/microsoft_logo.svg";
import Wal from "../../src/Assets/compimg/walmart_logo.svg";
import Acc from "../../src/Assets/compimg/accenture_logo.svg";
import Ado from "../../src/Assets/compimg/adobe_logo.svg";
import Pay from "../../src/Assets/compimg/paypal_logo.svg";
import Google from "../../src/Assets/compimg/google.png";
import udemy from "../../src/Assets/compimg/udemy.png";
import Raz from "../../src/Assets/compimg/razorpay.png";
const Companies = () => {
  return (
    <div>
      <div className="pt-20 px-4 sm:px-6 md:px-10 text-center">
        <p className="text-[1.3rem] font-semibold bg-gradient-to-r from-gray-400 to-gray-600 inline-block text-transparent bg-clip-text">
          The Future of Developer Learning
        </p>
        <br />
        <p className="text-base font-semibold bg-gradient-to-r from-sky-400 to-blue-500 inline-block text-transparent bg-clip-text">
          Trusted by learners from
        </p>

        {/* Infinite Sliding Images with Pause on Hover */}
        <div
          className="overflow-hidden mt-5"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)"
          }}
          
        >
          <div className="companies-wrapper flex animate-slide gap-8 md:gap-16 ">
            {/* First set of images */}
            <img
              src={Mic}
              alt="Microsoft"
              className="w-20 h-auto md:w-28 transition transform hover:scale-110 duration-300"
            />
            <img
              src={Wal}
              alt="Walmart"
              className="w-20 h-auto md:w-28 transition transform hover:scale-110 duration-300"
            />
            <img
              src={Acc}
              alt="Accenture"
              className="w-20 h-auto md:w-28 transition transform hover:scale-110 duration-300"
            />
            <img
              src={Mic}
              alt="Microsoft"
              className="w-20 h-auto md:w-28 transition transform hover:scale-110 duration-300"
            />
            <img
              src={Pay}
              alt="Paypal"
              className="w-20 h-auto md:w-28 transition transform hover:scale-110 duration-300"
            />

            {/* Duplicate the images to create an infinite effect */}
            <img
              src={Google}
              alt="Google"
              className="w-20 h-auto md:w-28 transition transform hover:scale-110 duration-300"
            />
            <img
              src={Wal}
              alt="Walmart"
              className="w-20 h-auto md:w-28 transition transform hover:scale-110 duration-300"
            />
            <img
              src={udemy}
              alt="Accenture"
              className="w-20 h-auto object-contain md:w-28 transition transform hover:scale-110 duration-300"
            />
            <img
              src={Ado}
              alt="Adobe"
              className="w-20 h-auto md:w-28 transition transform hover:scale-110 duration-300"
            />
            <img
              src={Raz}
              alt="Razorpa"
              className="w-20 h-auto object-contain md:w-28 transition transform hover:scale-110 duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
