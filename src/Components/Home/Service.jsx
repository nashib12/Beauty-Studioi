import React from "react";
import ServiceImg1 from "../../../public/Images/Services/service1.jpg";
import ServiceImg2 from "../../../public/Images/Services/service2.jpg";
import ServiceImg3 from "../../../public/Images/Services/service3.jpg";
import ServiceImg4 from "../../../public/Images/Services/service4.jpg";

const Service = () => {
  const serviceList = [
    {
      id: 1,
      img: ServiceImg1,
      alt: "Cinematic makeup",
      price: "15",
      title: "Cinematic Makeup",
    },
    {
      id: 2,
      img: ServiceImg2,
      alt: "Fashion makeup",
      price: "10",
      title: "Fashion Makeup",
    },
    {
      id: 3,
      img: ServiceImg3,
      alt: "Bridal makeup",
      price: "20",
      title: "Bridal Makeup",
    },
    {
      id: 4,
      img: ServiceImg4,
      alt: "Hair style",
      price: "10",
      title: "Hair Style",
    },
  ];
  return (
    <>
      <section id="services">
        <div className="px-6 py-12 md:py-24 flex flex-col text-[#663A30] text-center gap-4">
          <span className="uppercase">Get Beautiful With Us</span>
          <h2 className="text-3xl md:text-6xl">
            Highlight Your Natural Beauty With Us
          </h2>
          <p>
            Reprehenderit et commodo cupidatat eu in sunt occaecat est in minim
            proident aliquip incididunt.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 mt-6">
            {serviceList.map((item) => (
              <div key={item.id} className="relative">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-auto h-130 object-cover "
                />
                <div className="absolute inset-0 w-auto h-130 bg-black/20" />
                <div className="absolute bottom-4 bg-white px-4 py-6 h-26 w-60 text-center left-1/2 transform -translate-x-1/2 overflow-hidden">
                  <span className="text-sm">Disc {item.price}%</span>
                  <h3 className="text-2xl mt-1">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mt-6">
            <button className="uppercase bg-[#663a30] text-center h-12 w-48 text-white cursor-pointer text-sm transform ease-out duration-300 hover:-translate-y-3">
              View All Services
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
