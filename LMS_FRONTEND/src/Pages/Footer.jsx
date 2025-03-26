import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Section 1: About Us */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">
              <Link to="/about" className="hover:text-gray-400 cursor-pointer"> {/* Changed cursor-progress to cursor-pointer */}
                About Us
              </Link>
            </h3>
            <p className="text-sm">
              Welcome to our Learning Management System. We are dedicated to
              providing high-quality education and resources to help you achieve
              your learning goals.
            </p>
            <div className="mt-4">
              <p className="text-gray-300 hover:text-white cursor-pointer text-sm">
                Developed By
                <a
                  href="https://www.linkedin.com/in/dheeraj-aldak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-all ease-in-out duration-300 ml-1" // Added ml-1 for spacing
                >
                  Dheeraj Aldak
                </a>
              </p>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-1"> {/* Added space-y-2 for spacing */}
              <li className="">
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li className="">
                <Link to="/about" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li className="">
                <Link to="/courses" className="hover:text-gray-300">
                  Courses
                </Link>
              </li>
              <li className="">
                <Link to="/course/description" className="hover:text-gray-300">
                  Course Description
                </Link>
              </li>
              <li className="">
                <Link to="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
              <li className="">
                <Link to="/login" className="hover:text-gray-300">
                  Login
                </Link>
              </li>
              <li className="">
                <Link to="/signup" className="hover:text-gray-300">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Instructors */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Instructors</h3>
            <ul className="text-sm space-y-2"> {/* Added space-y-2 for spacing */}
              <li className="">
                <Link to="/instructors" className="hover:text-gray-300">
                  Become an Instructor
                </Link>
              </li>
              {/* Add more instructor-related links as needed */}
            </ul>
          </div>

          {/* Section 4: Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="text-sm space-y-2">  {/* Added space-y-2 for spacing */}
              <li className="">
                <Link to="/blog" className="hover:text-gray-300">
                  Blog
                </Link>
              </li>
              <li className="">
                <Link to="/faq" className="hover:text-gray-300 cursor-help">
                  FAQs
                </Link>
              </li>
              {/* Add more resource links as needed */}
            </ul>
          </div>
          {/* Column 2: Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <Link to="/contact" className="hover:text-gray-400 cursor-pointer">  {/* Changed cursor-grab to cursor-pointer */}
                Contact Us
              </Link>
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="mailto:dheerajaldak.cse20@aitrc.edu.in"
                  className="hover:text-gray-300 transition-colors"
                >
                  Email: dheerajaldak.cse20@aitrc.edu.in
                </a>
              </li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Learning Lane, Anytown, India</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4 text-sm">
          &copy; {new Date().getFullYear()} Our Learning Platform. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
