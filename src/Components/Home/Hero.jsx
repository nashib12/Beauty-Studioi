import React from "react";
import HeroImg from "../../../public/Images/hero-images245.jpg";
import HeroImgBg from "../../../public/Images/background-foundation.png";
import PhoneImg from "../../../public/Images/Icons/call.png";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <img
          src={HeroImg}
          alt="Hero Image"
          className="h-140 md:h-full w-auto object-cover"
        />
        <img
          src={HeroImgBg}
          alt="Hero Image Background"
          className="absolute inset-0 hidden md:block h-full w-auto object-cover"
        />
        <div className="absolute inset-0 h-140 md:h-full w-full bg-[#663A30]/30" />
        <div className="absolute inset-0 md:max-w-3xl flex items-start justify-center text-white px-4 md:px-24 flex-col gap-6">
          <span className="uppercase">Welcome to Fabulux </span>
          <h1 className="text-5xl md:text-[4.1rem] md:leading-18">
            We Can Create What You Imagine.
          </h1>
          <p className="text-sm md:text-md">
            Qui velit magna elit veniam. Dolore esse occaecat incididunt
            occaecat in exercitation voluptate tempor ad anim qui laborum. Nulla
            est anim incididunt Lorem dolor occaecat sunt.
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-4 md:gap-8">
            <button className="uppercase cursor-pointer transform ease-out duration-300 hover:-translate-y-3 flex items-center justify-center h-12 w-46 border border-white bg-[#663A30] text-sm">
              Discover More
            </button>
            <button className="uppercase cursor-pointer transform ease-out duration-300 hover:-translate-y-3 w-64 ">
              <a href="tel:980-0000000">
                <div className="flex justify-start items-center md:justify-center gap-3">
                  <button className="rounded-full bg-white h-8 w-8 md:h-12 md:w-12 flex items-center justify-center">
                    <img
                      src={PhoneImg}
                      alt="Phone Logo"
                      className="w-4 h-4 md:w-8 md:h-8 object-contain shrink-0"
                    />
                  </button>
                  <div className="flex flex-col items-start">
                    <span className="text-white/40 text-sm">
                      Make Appointment
                    </span>
                    +977 980-0000000
                  </div>
                </div>
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
