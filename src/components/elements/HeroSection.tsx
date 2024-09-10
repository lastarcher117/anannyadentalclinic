"use client";
import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  ctaText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  imageSrc,
  title,
  subtitle,
  ctaText,
}) => {
  return (
    <section className="bg-gradient-to-r from-secondary to-white py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative w-full h-[400px]">
              <Image
                src={imageSrc}
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h1 className="text-4xl md:text-5xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              {title}
            </h1>
            <p className="text-xl mb-8 text-gray-700">{subtitle}</p>
            <button className="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
