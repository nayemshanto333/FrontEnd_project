import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { button, Button } from "@nextui-org/react";

const CarouselClub = ({isDark}) => {
  const cardData = [
    { img: "Calendar.png", text: "Dec 12 2022" },
    { img: "Mark.png", text: "TBS  Lagos" },
    { img: "Clock.png", text: "9:00 PM " },
    { img: "Tag.png", text: "N20,000" },
  ];

  const CarouselData = [
    {
      id: 1,
      image: "carousel1.png",
      title:
        "GTCO Food and Drink Festival 2022: Africa’s Biggest Food and Drink Festival",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      id: 2,
      image: "carousel2.png",
      title: "Wizkid made in lagos tour",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },

    {
      id: 3,
      image: "carousel3.png",
      title: "Hello programmers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlider = CarouselData[currentIndex];

  const hadlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? CarouselData.length - 1 : prevIndex - 1
    );
  };
  const hadleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === CarouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDoClick = () => setCurrentIndex(index);
  return (
    <section className="overflow-hidden my-8">
      <div className="relative w-full max-w-screen-2xl mx-auto ">
        <div className="flex justify-between items-center">
          <button
            onClick={hadlePrev}
            className="absolute left-0 transform translate-x-6 items-center justify-center text-[#26395C] bg-indigo-100 p-2 rounded-full hover:bg-indigo-200 "
          >
            <FaArrowLeft className="w-5 h-auto" />
          </button>
          <div className="flex flex-col lg:flex-row w-full px-12 gap-6 items-center">
            <div className="w-full lg:w-1/2 mt-7">
              <h1 className="text-lg sm:text-2xl font-bold text-[#ffffff] lg:ms-7">
                Upcoming Eat & Drink Events
              </h1>
              <img src={currentSlider.image} alt="" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <h2 className="ms-5 sm:ms-0 font-bold text-2xl lg:text-4xl w-[100%] lg:w-[60%] leading-tight text-[#ffffff]">
                {currentSlider.title}
              </h2>
              <p className="text-[#ffffff] text-md lg:text-xl w-[70%] leading-tight">
                {currentSlider.description}
              </p>
              <div className="grid grid-cols-2">
                {cardData.map((index, id) => (
                  <div key={id} className="flex mt-2 mb-2">
                    <img src={index.img} alt="" />
                    <p className="ms-3 font-bold text-lg">{index.text}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-8">
                <Button
                  
                  
                  size="lg"
                  className="w-48 bg-white text-[#0E8BFF] font-bold"
                >
                  Add to cart
                </Button>
                <Button color="primary" size="lg" className="w-48 font-bold">
                  Book Now
                </Button>
              </div>
              <div className="flex gap-4 mt-3">
                <p className="text-xl text-[#ffffff]">Connect with us on:</p>
                <div className="flex gap-4">
                  <img src="Twitter.png" alt="" />
                  <img src="Instagram.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={hadleNext}
            className="absolute right-0 transform -translate-x-6 items-center justify-center text-[#26395C]  bg-indigo-100 p-2 rounded-full hover:bg-indigo-200 "
          >
            <FaArrowRight className="w-5 h-auto" />
          </button>
        </div>
        <div className="flex justify-center items-center gap-2 mt-4">
          {CarouselData.map((_, index) => (
            <button
              onClick={() => handleDoClick(index)}
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-[#0E8BFF]" : "bg-indigo-200"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarouselClub;
