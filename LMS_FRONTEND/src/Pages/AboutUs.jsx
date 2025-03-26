import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import aboutMainImage from "../Assets/Images/aboutMainImage.png";
import { celebrities } from "../Constants/CelebrityData";
import CarouselSlide from "../Components/CarouselSlide";
import Companies from "./Companies";
import Testimonials from "./Testimonials";

function AboutUs() {
  return (
    <HomeLayout>
      <div className="relative isolate overflow-hidden lg:px-16 bg-[#f4f7fa] dark:bg-[#1a202c] text-white dark:text-white transition-colors duration-300">
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
              backgroundImage:
                "radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        {/* Main content (heading, paragraph, image) */}
        <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24 xl:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Section (Heading and Paragraph) */}
            <section className="space-y-6 lg:space-y-7">
              <div className="space-y-4 lg:space-y-5">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                  <span className="block mb-1">Empowering Minds,</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600">
                    Shaping Futures
                  </span>
                </h1>
                <p className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl font-light">
                  Our goal is to provide affordable and quality education to the world. We are providing a platform for aspiring teachers and students to share their skills, creativity, and knowledge with each other to empower and contribute to the growth and wellness of mankind.
                </p>
              </div>
            </section>

            {/* Right Section (Image) */}
            <div className="relative">
              <img
                id="aboutImage"
                style={{
                  filter: "drop-shadow(0px 10px 10px rgb(0,0,0));",
                }}
                alt="about main image"
                className="max-w-full h-auto drop-shadow-2xl"
                src={aboutMainImage}
              />
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Carousel Section */}
        <div className="w-full flex justify-center my-16">
          <div className="carousel w-full sm:w-[90%] md:w-[80%] lg:w-2/3 xl:w-1/2">
            {celebrities &&
              celebrities.map((celebrity) => (
                <CarouselSlide
                  {...celebrity}
                  key={celebrity.slideNumber}
                  totalSlides={celebrities.length}
                />
              ))}
          </div>
        </div>
        
      </div>

      {/* Companies Section */}
      <Companies />
    </HomeLayout>
  );
}

export default AboutUs;
