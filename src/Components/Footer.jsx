import React, { useState } from "react";
import BgImage from "../../public/Images/flower-bg.png";
import LogoImg from "../../public/Images/Logo/logo-white.png";
import FacebookImg from "../../public/Images/Icons/facebook.png";
import TwitterImg from "../../public/Images/Icons/twitter.png";
import LinkdeinImg from "../../public/Images/Icons/linkedin.png";
import PinterestImg from "../../public/Images/Icons/pinterest.png";
import InstagramImg from "../../public/Images/Icons/instagram.png";

const Footer = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const smoothScrollTo = (targetPosition, duration = 1000) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animation);
      } else {
        setIsScrolling(false);
      }
    };

    setIsScrolling(true);
    requestAnimationFrame(animation);
  };

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 80;
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset;
      const targetPosition = sectionTop - navbarHeight;

      smoothScrollTo(targetPosition, 1200);
    }
  };

  const handleScrollToTop = () => {
    smoothScrollTo(0, 1000);
  };
  return (
    <>
      <footer>
        <div className="bg-[#663A30] md:relative">
        <img
          src={BgImage}
          alt="Flower Background"
          className="hidden md:block w-screen h-120 object-cover"
        />
        <div className="md:absolute inset-0 bg-[#663a30]/40 h-full w-full" />
        <div className="md:absolute inset-0 md:max-w-5xl mx-auto px-4 py-12 md:px-24 md:pt-24 md:pb-12 flex flex-col items-center justify-center gap-6 md:gap-8 text-white">
          <div className="md:max-w-xl mx-auto flex flex-col items-center justify-center gap-6 md:gap-8 text-center">
            <img
              src={LogoImg}
              alt="Logo Image"
              className="w-auto h-28 object-cover"
            />
            <p>
              Eiusmod reprehenderit ex in consectetur voluptate voluptate dolor
              deserunt incididunt dolore ullamco.
            </p>
            <ul className="flex items-center justify-center gap-4 md:gap-18">
              <li>
                <button
                  onClick={handleScrollToTop}
                  disabled={isScrolling}
                  className="cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("about")}
                  disabled={isScrolling}
                  className="cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("services")}
                  disabled={isScrolling}
                  className="cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("gallery")}
                  disabled={isScrolling}
                  className="cursor-pointer"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("experiences")}
                  disabled={isScrolling}
                  className="cursor-pointer"
                >
                  Experiences
                </button>
              </li>
            </ul>
          </div>
          <div className="border-t border-t-white w-full pt-2">
            <ul className="flex items-center justify-center gap-4 md:gap-12 py-4">
              <li>
                <button className="cursor-pointer bg-white rounded-full h-8 w-8 md:h-12 md:w-12 flex items-center justify-center">
                  <img
                    src={FacebookImg}
                    alt="Social Media"
                    className="h-4 w-4 md:h-6 md:w-6 object-contain shrik-0"
                  />
                </button>
              </li>
              <li>
                <button className="cursor-pointer bg-white rounded-full h-8 w-8 md:h-12 md:w-12 flex items-center justify-center">
                  <img
                    src={TwitterImg}
                    alt="Social Media"
                    className="h-4 w-4 md:h-6 md:w-6 object-contain shrik-0"
                  />
                </button>
              </li>
              <li>
                <button className="cursor-pointer bg-white rounded-full h-8 w-8 md:h-12 md:w-12 flex items-center justify-center">
                  <img
                    src={PinterestImg}
                    alt="Social Media"
                    className="h-4 w-4 md:h-6 md:w-6 object-contain shrik-0"
                  />
                </button>
              </li>
              <li>
                <button className="cursor-pointer bg-white rounded-full h-8 w-8 md:h-12 md:w-12 flex items-center justify-center">
                  <img
                    src={LinkdeinImg}
                    alt="Social Media"
                    className="h-4 w-4 md:h-6 md:w-6 object-contain shrik-0"
                  />
                </button>
              </li>
              <li>
                <button className="cursor-pointer bg-white rounded-full h-8 w-8 md:h-12 md:w-12 flex items-center justify-center">
                  <img
                    src={InstagramImg}
                    alt="Social Media"
                    className="h-4 w-4 md:h-6 md:w-6 object-contain shrik-0"
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:max-w-7xl mx-auto text-[#663a30] flex flex-col md:flex-row gap-4 items-center justify-between px-4 py-4 text-sm">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex flex-col md:flex-row gap-2 items-center justify-center md:justify-start">
            <span>&copy; All right reserved {new Date().getFullYear()}.{" "}</span>
          <span>
            Crafted by -{" "}
            <a href="https://sait.com.np/" target="blank">
              S.A I.T Solutions Nepal
            </a>
          </span>
          </div>
        </div>
        <div className="flex gap-2">
          <a href="" className="cursor-pointer">
            Terms & Conditions
          </a>{" "}
          -{" "}
          <a href="" className="cursor-pointer">
            Privacy Policy
          </a>
        </div>
      </div>
      </footer>
    </>
  );
};

export default Footer;
