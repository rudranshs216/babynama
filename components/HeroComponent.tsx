import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "../public/images/heroImage.jpeg";

const HeroComponent = () => {
  return (
    <div className="bg-[#f5f5f5] justify-center sm:justify-start relative  lg:min-h-[800px] w-full px-6 sm:px-12 flex flex-col gap-12 lg:gap-0 lg:flex-row items-start lg:items-center pt-24 pb-16 lg:py-24 sm:h-[600px] h-full lg:h-[700px]">
      <img
        className="max-w-[1440px] w-full h-full absolute right-0 top-0 bottom-0 hidden sm:block sm:object-right object-cover"
        src="/images/heroImage.jpeg"
      />
      <div className="max-w-[600px] w-[100%] relative z-1">
        <h1 className="text-3xl text-[#1f2278] lg:text-5xl font-bold mb-12">
          Get Immediate Access to Pediatricians 24x7 by joining Babynama
          community
        </h1>
        <div className="flex flex-wrap gap-6">
          <Link href="https://bit.ly/3IRQQAP">
            <div className="py-2 px-6 rounded-lg bg-[#f17732] w-[fit-content] text-white text-lg font-medium cursor-pointer shadow-sm">
              Join Our Doctors Community
            </div>
          </Link>
          <Link href="https://bit.ly/3OnU00h">
            <div className="py-2 px-6 rounded-lg bg-[#f17732] w-[fit-content] text-white text-lg font-medium cursor-pointer shadow-sm">
              Chat with a Pediarician Now
            </div>
          </Link>
        </div>
      </div>
      <div className="max-w-[1000px] block sm:hidden w-[100%]">
        <Image
          src={img}
          loading="eager"
        />
      </div>
    </div>
  );
};

export default HeroComponent;
