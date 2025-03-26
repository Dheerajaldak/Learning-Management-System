import React from "react";
import Mic from "../../src/Assets/compimg/microsoft_logo.svg";
import Wal from "../../src/Assets/compimg/walmart_logo.svg";
import Acc from "../../src/Assets/compimg/accenture_logo.svg";
import Ado from "../../src/Assets/compimg/adobe_logo.svg";
import google from "../../src/Assets/compimg/google.png";
import Pay from "../../src/Assets/compimg/paypal_logo.svg";
import slack from "../../src/Assets/compimg/slack.png";
import amazon from "../../src/Assets/compimg/amazon.png";

const CompanyLogo = () => {
  const logos = [google, Mic, Wal, Acc, Ado, Pay, slack, amazon];

  return (
    <div className="w-full  mx-auto py-4 overflow-hidden flex flex-col sm:flex-row sm:items-center items-start bg-[#f4f7fa] dark:bg-[#1a202c] transition-colors duration-300">
      {/* Left side text */}
      <div className="w-full sm:w-[300px] px-8 py-4 text-gray-800 dark:text-gray-100 border-l-4 border-blue-500 bg-white dark:bg-gray-800 sm:text-base text-xl font-semibold sm:text-left mb-8 sm:mb-0">
      Trusted by learners <br /> from
      </div>

      {/* Right side logos */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-8 sm:gap-8">
          {/* Logos */}
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="mx-4 sm:mx-6 h-8 sm:h-10 w-32 sm:w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          ))}
          {/* Duplicate logos for seamless loop */}
          {logos.map((logo, index) => (
            <img
              key={`duplicate-${index}`}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="mx-4 sm:mx-6 h-8 sm:h-10 w-32 sm:w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;
