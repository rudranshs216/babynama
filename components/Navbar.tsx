import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose, AiFillPhone } from "react-icons/ai";

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("black");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 40) {
        setColor("#f5f6fe");
      } else {
        setColor("transparent");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className={`fixed left-0 top-0 w-full z-[99] ease-in duration-300 py-4 ${
        color === "transparent" ? "" : "shadow-md"
      }`}
    >
      <div className="max-w-[1400px] m-auto flex justify-between items-center px-4 text-white ">
        <Link href="/" className="cursor-pointer">
          <img
            className="w-[180px] sm:w-[200px] cursor-pointer"
            src="/images/logo.png"
          />
        </Link>
        <ul
          style={{ color: `${textColor}` }}
          className="hidden lg:flex gap-6 items-center"
        >
          {/* <li className='p-2'>
                        <Link href='/'>Home</Link>
                    </li> */}
          <li className="font-semibold text-lg text-[#1f2278] hover:text-[#f17732]">
            <Link href="/#about">About</Link>
          </li>
          <li className="font-semibold text-lg text-[#1f2278] hover:text-[#f17732]">
            <Link href="/#service">Our Services</Link>
          </li>
          <li className="group relative">
            <p className="cursor-pointer font-semibold text-lg text-[#1f2278] group-hover:text-[#f17732]">
              Baby Tracking
            </p>
            <div
              className="absolute h-0 group-hover:h-fit top-6 flex w-fit
         flex-col drop-shadow-lg font-medium text-[16px] rounded-sm overflow-hidden "
            >
              <div className="h-2"></div>
              <div className="text-[#1f2278] hover:text-[#f17732] w-[200px] py-2 px-2 bg-sky-100 hover:bg-white">
                <Link
                  className="text-black hover:text-[#f17732]"
                  href="/tools/growth-calculator"
                >
                  Growth Calculator
                </Link>
              </div>
              <div className="text-[#1f2278] hover:text-[#f17732] w-[200px] py-2 px-2 bg-sky-100 hover:bg-white">
                <Link
                  className="text-black hover:text-[#f17732]"
                  href="/tools/development-checker"
                >
                  Development Checker
                </Link>
              </div>
            </div>
          </li>

          <li className="font-semibold text-lg text-[#1f2278] hover:text-[#f17732]">
            <Link href="/#doctor">Our Doctors</Link>
          </li>
          <li className="font-semibold text-lg text-[#1f2278] hover:text-[#f17732]">
            <Link href="/blog">Blog</Link>
          </li>
          {/* <li className='font-medium text-lg text-[#1f2278] hover:text-[#f17732]'>
                        <Link href='/video'>Video</Link>
                    </li> */}

          {/* <li className='flex items-center justify-center px-2'>
                        <div className='flex  text-white gap-2 items-center py-2 px-6 bg-[#004f4f] rounded-full cursor-pointer hover:bg-[#1b7777]'>
                            <AiFillPhone size={24} />
                            <p>(+91)9205757093</p>

                        </div>
                    </li> */}
          <li className="flex items-center text-white">
            <Link href="/contact">
              <div className="py-2 px-6 bg-[#004f4f] rounded-full cursor-pointer hover:bg-[#1b7777]">
                Contact Us
              </div>
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block lg:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: "white" }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: "black" }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center  w-full h-screen bg-black text-center ease-in duration-300"
              : "lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            {/* <li onClick={handleNav} className='p-4 text-3xl sm:text-4xl hover:text-gray-500'>
                            <Link href='/'>Home</Link>
                        </li> */}
            <li
              onClick={handleNav}
              className="p-4 text-3xl sm:text-4xl hover:text-gray-500"
            >
              <Link href="/#about">About</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl sm:text-4xl hover:text-gray-500"
            >
              <Link href="/#service">Our Services</Link>
            </li>
            <li
              onClick={() => setShowDropDown(true)}
              className="group p-4 text-3xl sm:text-4xl"
            >
              <p>Baby Tracking</p>
              <div
                onClick={() => setShowDropDown(false)}
                className={`${showDropDown ? "flex" : "hidden"} mt-4 w-full
         flex-col drop-shadow-lg`}
              >
                <div className="w-full text-[18px] py-1">
                  <Link href="/tools/growth-calculator">Growth Calculator</Link>
                </div>
                <div className="w-full text-[18px] py-1">
                  <Link href="/tools/development-checker">
                    Development Checker
                  </Link>
                </div>
              </div>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl sm:text-4xl hover:text-gray-500"
            >
              <Link href="/#doctor">Our Doctors</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl sm:text-4xl hover:text-gray-500"
            >
              <Link href="/blog">Blog</Link>
            </li>
            {/* <li onClick={handleNav} className='p-4 text-3xl sm:text-4xl hover:text-gray-500'>
                            <Link href='/video'>Video</Link>
                        </li> */}
            <li className="flex items-center justify-center mb-4">
              <div className="flex items-center gap-4 py-2 px-6 bg-[#004f4f] rounded-full cursor-pointer text-2xl sm:text-3xl hover:bg-[#1b7777]">
                <AiFillPhone size={24} />
                <p>(+91)9205757093</p>
              </div>
            </li>
            <li className="flex justify-center">
              <Link href="/contact">
                <div className="py-2 px-6 bg-[#004f4f] rounded-full cursor-pointer text-2xl sm:text-3xl hover:bg-[#1b7777]">
                  Contact Us
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
