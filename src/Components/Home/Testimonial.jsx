import React, { useState, useEffect, useCallback } from "react";
import BgImg from "../../../public/Images/flower-bg.png";
import QuoteImg from "../../../public/Images/Icons/quote.png";
import useEmblaCarousel from "embla-carousel-react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Testimonial = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const goPrev = () => emblaApi?.scrollPrev();
  const goNext = () => emblaApi?.scrollNext();
  const scrollTo = (index) => emblaApi?.scrollTo(index);

  const slides = [
    {
      index: 1,
      content:
        "Ullamco non esse nisi aliquip officia occaecat velit fugiat. Duis quis ullamco nostrud sint eu magna ipsum nostrud duis ad commodo ut eu.",
      title: "Jhon Doe",
      post: "Designer",
    },
    {
      index: 2,
      content:
        "Nisi culpa do commodo nulla elit commodo tempor labore velit nostrud. Cupidatat irure voluptate Lorem eiusmod aliquip quis anim fugiat aliquip tempor minim cillum.",
      title: "Maria Smith",
      post: "Photographer",
    },
    {
      index: 3,
      content:
        "Reprehenderit ad eiusmod sint incididunt dolore velit cupidatat qui. Exercitation amet aliqua veniam consequat in id ipsum aliquip dolore amet.",
      title: "Max Smith",
      post: "Artist",
    },
    {
      index: 4,
      content:
        "Consequat adipisicing aute velit cillum est ipsum sunt laboris Lorem. Est laborum sit aute fugiat Lorem ea id nulla officia ea veniam.",
      title: "Maria Doe",
      post: "Choreographer",
    },
    {
      index: 5,
      content:
        "Proident ad nisi excepteur nisi labore esse eu excepteur pariatur est. Dolore consequat cillum non excepteur ex exercitation incididunt aute esse.",
      title: "Amy Smith",
      post: "Makeup Artist",
    },
  ];

  return (
    <section id="testimonials" className="bg-[#663a30]">
      <div className="relative">
        <img
          src={BgImg}
          alt="Background"
          className="hidden md:block h-100 w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#663a30]/30" />

        <div className="absolute -top-12 md:-top-16 left-1/2 -translate-x-1/2 flex justify-center items-center rounded-full border border-white bg-[#663a30] h-28 w-28 md:h-36 md:w-36">
          <img src={QuoteImg} className="h-12 w-12 md:h-16 md:w-16" />
        </div>

        <div className="md:absolute inset-0 md:max-w-5xl mx-auto px-6 py-24 md:py-36 flex flex-col items-center">
          <div className="flex items-center gap-6 w-full">
            <button onClick={goPrev} className="text-white z-10">
              <BsArrowLeft className="h-6 w-6 md:h-12 md:w-12" />
            </button>

            <div className="overflow-hidden w-full" ref={emblaRef}>
              <div className="flex">
                {slides.map((item) => (
                  <div
                    key={item.index}
                    className="flex-[0_0_100%] px-2"
                  >
                    <div className="text-white transition-all duration-500">
                      <p className="text-md md:text-lg leading-6 md:leading-8 text-justify md:text-center">{item.content}</p>
                      <h3 className="text-3xl mt-6 text-center mb-1">{item.title}</h3>
                      <p className="text-md md:text-lg text-center">{item.post}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={goNext} className="text-white z-10">
              <BsArrowRight className="h-6 w-6 md:h-12 md:w-12" />
            </button>
          </div>

          <div className="flex gap-3 mt-10 justify-center z-10">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === selectedIndex ? "bg-white scale-125" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
