"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../../shared/container";
import CustomLink from "../../shared/custom-link";
import { services } from "@/app/data";
import { servicesHeading, servicesText } from "@/app/utils/constants";

const Arrow = ({
  onClick,
  direction,
}: {
  onClick?: () => void;
  direction: "left" | "right";
}) => (
  <button
    onClick={onClick}
    className={`absolute sm:-top-20 -top-8 z-10 bg-cgreen shadow-md text-lg text-gray-600 cursor-pointer font-bold h-8 w-8 rounded-full hover:bg-gray-300 ${
      direction === "left" ? "xl:right-[33%] lg:right-[18%] right-[22%]" : "xl:right-[30%] lg:right-[12%] right-[10%]"
    }`}
  >
    {direction === "left" ? "←" : "→"}
  </button>
);

const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoPlay:true,
    speed: 500,
    slidesToShow: 2.9999, // ✅ default desktop view
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024, // under 1024px → show 2
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // under 640px → show 1
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-16 bg-cgreen">
      <Container className="px-6 relative">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {servicesHeading}
        </h2>
        <p className="text-gray-600 max-w-xl mb-10">{servicesText}</p>
      </Container>

      <div className="w-full px-2">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-3 py-4">
              <div className="bg-white rounded-lg min-h-[400px] shadow-lg h-full p-6 border-t-7 border-indigo-500 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-lg">
                    {service.description}
                  </p>
                  <CustomLink
                    href="#"
                    ariaLabel="Learn more"
                    className="text-indigo-600 font-medium"
                  >
                    Learn more →
                  </CustomLink>
                </div>

                <div className="flex gap-6 items-center pt-4 border-t border-gray-300">
                  {service.logos.map((Logo, i) => (
                    <div
                      key={i}
                      className=" lg:w-32 w-20 flex items-center justify-center"
                    >
                      <Logo className=" w-auto text-gray-700" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
