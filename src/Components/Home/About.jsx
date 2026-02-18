import React from "react";
import BgImage from "../../../public/Images/backgroundflower11.png";
import AboutImg1 from '../../../public/Images/About/about123.jpg'
import AboutImg2 from '../../../public/Images/About/imageabout1.jpg'
const About = () => {
  return (
    <>
      <section id="about" className="bg-[#FFF6EF]">
        <div className="md:relative md:max-w-8xl mx-auto py-12 md:px-16 md:py-24">
          <img
            src={BgImage}
            alt="Background flower"
            className="hidden md:block h-screen w-auto object-cover"
          />
          <div className="md:absolute inset-0 px-6 md:px-16 md:py-24">
            <div className="md:grid grid-cols-2 gap-18">
               <div>
                 <div className="flex flex-col gap-4 items-start justify-between">
                  <span className="upercase text-[#663A30]">
                    Know More About Us
                  </span>
                  <h2 className="text-3xl md:text-[3.4rem] md:leading-14">
                    There is a kind beauty in imperfection
                  </h2>
                  <p className="text-justify text-md">Magna ea officia fugiat Lorem commodo labore commodo deserunt occaecat occaecat irure dolor nulla consectetur. Amet cupidatat anim irure minim qui ea tempor velit. Ullamco est dolore magna fugiat officia voluptate qui aute esse qui dolor ea nulla do.</p>
                  <button className="flex items-center justify-center h-10 w-32 text-sm bg-[#663a30] cursor-pointer transition ease-out duration-300 hover:-translate-y-2 text-white uppercase">About Us</button>
                </div>
                <div className="relative flex flex-col md:flex-row-reverse mt-10 md:mt-16 gap-6 md:gap-0">
                    <img src={AboutImg2} alt="Makeup" className="w-auto h-90 object-cover" />
                    <div className="md:absolute md:left-0 md:bottom-2  bg-[#663a30] text-white md:h-46 md:w-90 px-4 py-4">
                        <h3 className="text-xl md:text-2xl md:leading-14">There is a Kind of beauty.</h3>
                        <p className="text-justify">Occaecat nostrud sint sunt aliqua nostrud. Deserunt eu occaecat sunt sunt tempor commodo adipisicing.</p>
                    </div>
                </div>
               </div>
              <div className="relative">
                    <div className="border border-[#663A30]/20 h-80 w-88 md:h-140 md:w-110" />
                    <img src={AboutImg1} alt="Makeup" className="absolute inset-0 h-86 md:h-160 w-full sm:w-auto object-cover pt-4 pl-4 md:pt-6 md:pl-6" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
