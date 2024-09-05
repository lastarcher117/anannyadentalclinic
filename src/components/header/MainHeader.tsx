import React from "react";
import Link from "next/link";
import Image from "next/image";

interface MainHeaderProps {}

const MainHeader: React.FC<MainHeaderProps> = () => {
  return (
    <div className="bg-black shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.jpg" alt="Logo" width={200} height={50} />
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-800">
            Home
          </Link>
          <Link href="/services" className="text-white hover:text-gray-800">
            Services
          </Link>
          <Link href="/about" className="text-white hover:text-gray-800">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-800">
            Contact
          </Link>
        </nav>

        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary hover:text-black transition duration-300">
          Book Appointment
        </button>

        {/* Mobile menu button */}
        <button className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MainHeader;
