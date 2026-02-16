import React, { useEffect, useState } from "react";
import LogoImg from "../../public/Images/Logo/Logo.png";
import CloseImg from "../../public/Images/Icons/close.png";
import MenuImg from "../../public/Images/Icons/menu.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

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

    setMobileOpen(false);
  };

  const handleScrollToTop = () => {
    smoothScrollTo(0, 1000);
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="px-8 py-4 shadow-xs w-screen">
        {/* Desktop Menu Start */}
        <div className="flex items-center justify-between">
          <Link to={'/'}><img
            src={LogoImg}
            alt="Website Logo"
            className="h-auto w-36 object-cover"
          /></Link>
          <ul className="hidden md:flex gap-12 text-lg text-[#663a30]">
            <li>
              <button onClick={handleScrollToTop} disabled={isScrolling} className="cursor-pointer">Home</button>
            </li>
            <li>
              <button onClick={() => handleScrollTo("about")} disabled={isScrolling} className="cursor-pointer">About</button>
            </li>
            <li>
              <button onClick={() => handleScrollTo("services")} disabled={isScrolling} className="cursor-pointer">Service</button>
            </li>
            <li>
              <button onClick={() => handleScrollTo("gallery")} disabled={isScrolling} className="cursor-pointer">Gallery</button>
            </li>
            <li>
              <button onClick={() => handleScrollTo("experiences")} disabled={isScrolling} className="cursor-pointer">Experiences</button>
            </li>
          </ul>
          <button className="hidden md:block bg-[#663A30] cursor-pointer hover:bg-[#663A30]/90 text-white uppercase h-12 w-34 ">
            Contact Us
          </button>
          <button
            className="md:hidden rounded-full h-16 w-16 bg-white/90 border border-black/30 flex items-center justify-center"
            onClick={() => setMobileOpen(true)}
          >
            <img
              src={MenuImg}
              alt="Menu Button"
              className="w-10 h-10 object-contain shrink-0"
            />
          </button>
        </div>
        {/* Desktop Menu End */}
      </nav>

      {mobileOpen && (
        <>
            <div
        onClick={() => setMobileOpen(false)}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
      />

          <aside className="fixed top-0 right-0 h-full bg-white w-80 px-4 py-8 z-20 shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <a href="/">
                  <img
                    src={LogoImg}
                    alt="Image Logo"
                    className="h-14 w-auto object-cover"
                  />
                </a>
                <button
                  className="bg-[#663A30] flex items-center justify-center w-10 h-10 rounded-md"
                  onClick={() => setMobileOpen(false)}
                >
                  <img
                    src={CloseImg}
                    alt="Close Button"
                    className="w-6 h-6 object-contain shrink-0 invert"
                  />
                </button>
              </div>

              {/* mobile menu start */}
              <ul className="leading-10 text-[#663A30]">
                <li>
                  <button onClick={handleScrollToTop} disabled={isScrolling} className="uppercase font-semibold">Home</button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo("about")} disabled={isScrolling} className="uppercase font-semibold">About</button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo("services")} disabled={isScrolling} className="uppercase font-semibold">Services</button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo("gallery")} disabled={isScrolling} className="uppercase font-semibold">Gallery</button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo("experiences")} disabled={isScrolling} className="uppercase font-semibold">
                    Experiences
                  </button>
                </li>
              </ul>
              {/* mobile menu end */}
            </div>
          </aside>
        </>
      )}
    </>
  );
};

export default Navbar;
