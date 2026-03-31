import React from "react";
import bannerImg from "../../assets/banner.png";
import { FaSearch, FaInfo } from "react-icons/fa";
import TooltipButton from "../../components/TooltipButton";
const Hero = () => {
  return (
    <section
      className="h-screen relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center h-full space-y-1">
        <h1 className="text-4xl font-bold">Welcome to our furniture store</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <div className="flex items-center justify-center relative">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for products"
            className="w-full md:w-80 px-4 py-2 rounded-full bg-white/25 border border-gray-300 focus:outline-none"
          />
          <button className="absolute right-3 bg-primary text-white p-2  rounded-full cursor-pointer">
            <FaSearch />
          </button>
        </div>
      </div>
      {/* bottom blur effect */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/10 to-transparent">
      </div>
      {/* hover button for displaying tooltip */}
      
      <div className="hidden md:block absolute bottom-40 left-24 group">
      <TooltipButton position="bottom-10 left-0" />
      </div>
    </section>
  );
};

export default Hero;
