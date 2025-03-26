import {  BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <>
      <footer className="relative left-0 bottom-0 py-4 px-4 sm:py-5 sm:px-16 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800">
        {/* Copyright Text */}
        <section className="text-sm sm:text-base text-center sm:text-left mb-3 sm:mb-0">
          <span>&#169; {year} LMS Platform. All rights reserved.</span>
        </section>

        {/* Social Media Icons */}
        <section className="flex items-center justify-center gap-4 sm:gap-6 text-2xl sm:text-3xl text-white">
          <a
            href="https://github.com/Dheerajaldak"
            target="_blank" rel="noopener noreferrer"
            className="hover:text-black  transition-all ease-in-out duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank" rel="noopener noreferrer"
            className="hover:text-pink-600 transition-all ease-in-out duration-300"
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/dheeraj-aldak/"
             target="_blank" rel="noopener noreferrer"
            className="hover:text-blue-500 transition-all ease-in-out duration-300"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.twitter.com"
             target="_blank" rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-all ease-in-out duration-300"
          >
            <BsTwitter />
          </a>
        </section>
      </footer>
    </>
  );
}

export default Footer;
