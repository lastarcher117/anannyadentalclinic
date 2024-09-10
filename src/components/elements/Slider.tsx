"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";

const Slider = () => {
  const slides = [
    {
      image: "images/slider/image1.jpg",
      title: "State-of-the-art Facilities",
      description:
        "Experience dental care with our modern equipment and comfortable environment.",
    },
    {
      image: "images/slider/image2.jpg",
      title: "Expert Dental Team",
      description:
        "Our experienced professionals are dedicated to your oral health.",
    },
    {
      image: "images/slider/image3.jpg",
      title: "Comprehensive Dental Services",
      description:
        "From routine check-ups to advanced procedures, weve got you covered.",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        loop={true}
        className="w-full h-[400px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-8">
              <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
              <p className="text-center">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          width: 30px !important;
          height: 30px !important;
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          color: #000 !important;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 16px !important;
        }
      `}</style>
    </div>
  );
};

export default Slider;
