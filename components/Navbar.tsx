import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiFillPhone } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('black');

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 80) {
                setColor('#f5f6fe');
            } else {
                setColor('transparent');
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);

    return (
        <div
            style={{ backgroundColor: `${color}` }}
            className={`fixed left-0 top-0 w-full z-10 ease-in duration-300 ${color === "transparent" ? "" : "shadow-md"}`}
        >
            <div className='max-w-[1240px] m-auto flex justify-between items-center px-4 text-white'>
                <Link href='/' className='cursor-pointer'>
                    <img className='w-[180px] sm:w-[200px]' src="/images/bnlogo.webp" />
                </Link>
                <ul style={{ color: `${textColor}` }} className='hidden lg:flex'>
                    <li className='p-2'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='p-2'>
                        <Link href='/#about'>About</Link>
                    </li>
                    <li className='p-2'>
                        <Link href='/#service'>Our Services</Link>
                    </li>

                    <li className='p-2'>
                        <Link href='/#doctor'>Our Doctors</Link>
                    </li>
                    <li className='p-2'>
                        <Link href='/#blog'>Blog</Link>
                    </li>
                    <li className='p-2'>
                        <Link href='/video'>Video</Link>
                    </li>
                   
                    <li className='flex items-center justify-center px-2'>
                        <div className='flex  text-white gap-2 items-center py-2 px-6 bg-[#004f4f] rounded-full cursor-pointer hover:bg-slate-600'>
                            <AiFillPhone size={24} />
                            <p>(+91)9205757093</p>

                        </div>
                    </li>
                    <li className='flex items-center text-white'>
                        <Link href="/contact">
                            <div className='py-2 px-6 bg-[#004f4f] rounded-full cursor-pointer hover:bg-slate-600'>Contact Us</div>
                        </Link>
                    </li>
                </ul>

                {/* Mobile Button */}
                <div onClick={handleNav} className='block lg:hidden z-10'>
                    {nav ? (
                        <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
                    ) : (
                        <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
                    )}
                </div>
                {/* Mobile Menu */}
                <div
                    className={
                        nav
                            ? 'lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center  w-full h-screen bg-black text-center ease-in duration-300'
                            : 'lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                    }
                >
                    <ul>
                        <li onClick={handleNav} className='p-4 text-3xl sm:text-4xl hover:text-gray-500'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-3xl sm:text-4xl hover:text-gray-500'>
                            <Link href='/#about'>About</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-3xl sm:text-4xl hover:text-gray-500'>
                            <Link href='/#service'>Our Services</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-3xl sm:text-4xl hover:text-gray-500'>
                            <Link href='/#doctor'>Our Doctors</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-3xl sm:text-4xl hover:text-gray-500'>
                            <Link href='/#blog'>Blog</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-3xl sm:text-4xl hover:text-gray-500'>
                            <Link href='/video'>Video</Link>
                        </li>
                        <li className='flex items-center justify-center mb-4'>
                            <div className='flex items-center gap-4 py-2 px-6 bg-[#004f4f] rounded-full cursor-pointer text-2xl sm:text-3xl hover:bg-slate-600'>
                                <AiFillPhone size={24} />
                                <p>(+91)9205757093</p>

                            </div>
                        </li>
                        <li className='flex justify-center'>
                            <Link href="/contact">
                                <div className='py-2 px-6 bg-[#004f4f] rounded-full cursor-pointer text-2xl sm:text-3xl hover:bg-slate-600'>Contact Us</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
