import React from "react";
import VideoImg from "../../../public/Images/callbg.jpg";
import VideoImg2 from "../../../public/Images/cropped.jpg";
import { FaPlay } from "react-icons/fa";

const Video = () => {
  return (
    <>
      <section id="video">
        <div className="relative">
          <img
            src={VideoImg}
            alt="vieoImg"
            className="hidden md:block w-full h-110 object-cover"
          />
          <img
            src={VideoImg2}
            alt="vieoImg"
            className="md:hidden w-full h-110 object-cover"
          />
          <button className="absolute left-8 top-20 md:top-50 md:left-34 bg-[#663A30] hover:bg-white border border-white md:border-0 cursor-pointer rounded-full h-22 w-22 flex items-center justify-center z-10 group transition-transform duration-300 ease-in-out hover:scale-95 hover:transalte-y-1 ripple-bg-gray-300">
            <FaPlay size={32} className="text-white group-hover:text-[#663a30]" />
          </button>
          <div className="absolute inset-0 text-white/80 md:max-w-6xl px-6 md:px-16 py-18 md:py-24 mx-auto border-l border-l-white flex flex-col justify-end ">
            <span className="uppercase">Discount 20%</span>
            <h2 className="text-4xl md:text-6xl md:leading-18">
              Bringing the joy of creativity! <br />Book An Appointment
            </h2>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
