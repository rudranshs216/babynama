import Link from "next/link";
import React from "react";
import { AiFillPhone } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="relative flex flex-col justify-center items-center bg-[#f5f6fe]">
      <img className="rotate-180 relative z-10 w-full top-0" src="images/banner/shape.webp" alt="" />
      <img className="w-full h-full absolute right-0 bottom-0" src="images/banner/img1.webp" alt="" />
      <div className="relative max-w-[1440px] grid grid-cols-1 pr-6 sm:pr-0 gap-4 md:grid-cols-3 py-12 pl-6">
        <div>
          <Link href="/">
            <img className="w-[200px] mb-4" src="/images/logo.png" />
          </Link>
          <p className="mb-4 text-[#1f2278] text-lg font-semibold">
            Babynama is an online platform where you get instant access to
            India's trusted pediatricians at absolutely any time of the day with
            any concern regarding your baby, and get guaranteed responses within
            10 minutes!
          </p>
          <div className="flex w-[fit-content] mb-4 text-white gap-2 items-center py-2 px-6 bg-[#004f4f] rounded-full cursor-pointer hover:bg-[#1b7777]">
            <AiFillPhone size={24} />
            <p>(+91)9205757093</p>
          </div>
          <Link href="/contact">
            <div className="py-2 px-6 w-[fit-content] bg-[#004f4f] rounded-full text-white cursor-pointer hover:bg-[#1b7777]">
              Contact Us
            </div>
          </Link>
        </div>
        <div>
          <h3 className="text-2xl text-[#1f2278] text-center font-semibold">
            Quick Links
          </h3>
          <ul className="flex flex-col justify-center items-center">
            <li className="py-4 text-[#1f2278] text-lg hover:text-[#f17732] font-semibold">
              <Link href="/">Home</Link>
            </li>
            <li className="py-4 text-[#1f2278] text-lg hover:text-[#f17732] font-semibold">
              <Link href="#about">About</Link>
            </li>
            <li className="py-4 text-[#1f2278] text-lg hover:text-[#f17732] font-semibold">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="py-4 text-[#1f2278] text-lg hover:text-[#f17732] font-semibold">
              <Link href="/FAQ">FAQ's</Link>
            </li>
            <li className="py-4 text-[#1f2278] text-lg hover:text-[#f17732] font-semibold">
              <Link href="#doctor">Our Doctors</Link>
            </li>
          </ul>
        </div>
        {/* <div>
                        <h3 className='text-lg sm:text-2xl font-medium'>Our Service</h3>
                        <ul>
                            <li className='py-4 text-[#1f2278] text-md sm:text-lg'>
                                Instant Answers 24x7
                            </li>
                            <li className='py-4 text-[#1f2278] text-md sm:text-lg'>
                                Online Pre-Consultation & Second Opinions
                            </li>
                            <li className='py-4 text-[#1f2278] text-md sm:text-lg'>
                                Growth & Development Tracking + Consultations
                            </li>
                            <li className='py-4 text-[#1f2278] text-md sm:text-lg'>
                                Guidance from Trusted Nutritionists
                            </li>
                        </ul>
                    </div> */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl text-[#1f2278] font-semibold">
            Social Links
          </h3>
          <div className="flex gap-4 mt-6">
            <Link href="https://www.facebook.com/groups/203625581851750/">
              <img
                className="w-6 cursor-pointer"
                src="/images/social/facebook.webp"
                alt="facebook"
              />
            </Link>
            <Link href="https://www.instagram.com/babynamahq/">
              <img
                className="w-6 cursor-pointer"
                src="/images/social/instagram.webp"
                alt="instagram"
              />
            </Link>
            <Link href="https://www.linkedin.com/company/babynama/">
              <img
                className="w-6 cursor-pointer"
                src="/images/social/linkedin.webp"
                alt="linkedin"
              />
            </Link>
            <Link href="https://twitter.com/BabyNama/">
              <img
                className="w-6 cursor-pointer"
                src="/images/social/twitter.webp"
                alt="twitter"
              />
            </Link>
            <Link href="https://www.youtube.com/c/Babynama">
              <img
                className="w-6 cursor-pointer"
                src="/images/social/you.webp"
                alt="youtube"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative py-6 mx-4 sm:mx-12 border-t-2 flex flex-col items-center gap-4">
        <p className="text-md sm:text-xl text-center text-[#1f2278] font-semibold">
          Copyright © 2022 GagaHealth Private Limited
        </p>
        <div className="flex gap-1 sm:gap-2">
          <a
            className="text-sm text-center"
            href="/refund-policy.html"
            target="_blank"
          >
            Refund Policy
          </a>
          <a
            className="text-sm text-center"
            href="/privacy-policy.html"
            target="_blank"
          >
            Privacy Policy
          </a>
          <a
            className="text-sm text-center"
            href="/terms-and-conditions.html"
            target="_blank"
          >
            Terms and Conditions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
