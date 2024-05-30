import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Swiper from "swiper";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: " Furniture Sales Collection ",
    description: "Sales! up to 25% discount",
    img: "/Group 3742.svg",
    img2: '/sofa.svg',
    url: "/",
    bg: "bg-gradient-to-r from-[#DCA3B7] to-[#f3e1e1] ",
  },

  {
    id: 2,
    title: "New Summer Sales Collections",
    description: "Sales! 30% discount",
    img: "/19.svg",
    url: "/",
    bg: "bg-gradient-to-r from-[#f3e1e1] to-pink-50 ",
  },

  {
    id: 3,
    title: " Cosmetics Sales ",
    description: "Sale! up to 40% off",
    img: "/cosmetics.svg",
    url: "/",
    bg: "bg-gradient-to-r from-[#eae9e7] to-[#d8d5d0] ",
  },
  {
    id: 4,
    title: "Accessories Sale ",
    description: "Sale! up to 30% off",
    img: "image 6.svg",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 5,
    title: " Household Sales ",
    description: "Up to -30% discount!.",
    img: "/household.svg",
    url: "/",
    bg: "bg-gradient-to-r from-[#eae9e7] to-[#eae9e7] ",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  //      useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //     }, 3000);

  //     return () => clearInterval(interval);
  //   }, []);

  const imageWidth = (index: number) => {
    switch (index) {
      case 1:
        return "h-1/2 xl:w-[65%] xl:h-1/2 ";
      case 2:
        return "h-1/2 xl:w-1/2 xl:h-full";
      case 3:
        return "h-1/2 xl:w-1/2 xl:h-full";
      case 4:
        return "h-1/2 xl:w-1/2 xl:h-full";
      case 5:
        return " h-1/2 xl:w-1/2 xl:h-full";
    }
  };
  // className = " h-[100vh] lg:h-[calc(100vh-80px)]  overflow-hidden";
  return (
    <div className="h-[calc(100vh-160px)] overflow-hidden ">
      <div
        className="w-max h-full flex items-center transition-all ease-in-out duration-1000 relative"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center bg-red-600">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link to={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-4 ">
                  SHOP NOW
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex items-center justify-center absolute top-[50%] right-0 bg-blue-600">
              <img
                src={slide.img}
                alt=""
                // fill
                // sizes="100%"
                className="block  absolute  bottom-1/2 top-1/2 -translatee-x-[50%] -translate-y-[50%] object-contain h-full w-full "
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
