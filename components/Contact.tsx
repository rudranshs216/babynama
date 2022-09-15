import React, { useEffect, useState } from 'react'
import { GoLocation } from "react-icons/go"
import { MdOutlineMarkEmailUnread } from "react-icons/md"
import { GiWorld } from "react-icons/gi"
import Link from 'next/link'
import axios from 'axios'

type Contact = {
    name: string;
    phone: string;
    email: string;
    message: string;
    department: string
}
const Contact = () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwmb7nwX_uSkuauMEeIHk6ePFKyf5jcxpOSOSBHCrEXLYNgn7IycosdD4YVdQx-oZ1T4Q/exec'
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [department, setDepartment] = useState("");
    axios.defaults.headers.post['Content-Type'] = 'text/plain';

    const handleClick = (e: any) => {
        var data: Contact = {
            name: name,
            email: email,
            phone: phone,
            message: message,
            department: department
        }
        console.log(data);

        e.preventDefault();
        axios.post(scriptURL, JSON.stringify(data)).then((response) => {console.log(response); alert("Message sent Successfully") }
        ).catch(err => console.log(err)
        )
    }
    return (
        <>
            <div className='py-24'>
                <div className='flex flex-col md:flex-row items-center justify-center gap-6 pt-24 pb-12 px-4'>
                    {/* <form name="submit-to-google-sheet" className='flex flex-col max-w-[400px] sm:w-[400px] gap-2 '>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                            <input className='h-[50px] w-full border border-black px-2 rounded-md' value={name} onChange={(e: any) => setName(e.target.value)} placeholder='Name' type="text" />
                            <input className='h-[50px] w-full border border-black px-2 rounded-md' value={email} onChange={(e: any) => setEmail(e.target.value)} placeholder='Email' type="email" name="" id="" />
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                            <input className='h-[50px] w-full border border-black px-2 rounded-md' value={phone} onChange={(e: any) => setPhone(e.target.value)} placeholder='Phone' type="text" />
                            <select className='h-[50px] w-full border-black border px-2 rounded-md' value={department} onChange={(e: any) => setDepartment(e.target.value)} name="" id="">
                                <option value="Select Department">Select Department</option>
                                <option value="Pediatrician">Pediatrician</option>
                            </select>
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                            <textarea className='border p-2 border-black w-full rounded-md resize-none' value={message} onChange={(e: any) => setMessage(e.target.value)} name="" id="" cols={30} placeholder="Message" rows={5}></textarea>
                            <button onClick={handleClick} className='px-6 py-2 border border-black rounded hover:bg-[#f5f6fe] w-[fit-content]'>Submit</button>
                        </div>
                    </form> */}
                    <div className='flex flex-col gap-4 max-w-[400px]'>
                        <h1 className='text-2xl'>Contact Us For Any Informations</h1>
                        <div className='flex gap-4 pb-2 items-center border-b-2 w-[180px]'>
                            <GoLocation size={24} />
                            <h1 className='text-xl'>Location</h1>
                        </div>
                        <p>WeWork Two Horizon Centre, 5th Floor Two Horizon Centre DLF, DLF Phase 5, Gurugram, Haryana 122002</p>
                        <div className='flex gap-4 pb-2 items-center border-b-2 w-[180px]'>
                            <MdOutlineMarkEmailUnread size={24} />
                            <h1 className='text-xl'>Email & Phone</h1>
                        </div>
                        <p>contact@gagahealth.com</p>
                        <p>(+91)9205757093</p>
                        <div className='flex gap-4 pb-2 items-center border-b-2 w-[180px]'>
                            <GiWorld size={24} />
                            <h1 className='text-xl'>Follow Us</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='p-2 cursor-pointer rounded-md bg-[#f5f6fe]'>
                                <Link href="https://www.facebook.com/groups/203625581851750/">

                                    <img src="/images/social/facebook.webp" alt="" />
                                </Link>
                            </div>
                            <div className='p-2 cursor-pointer rounded-md bg-[#f5f6fe]'>
                                <Link href="https://www.instagram.com/babynamahq/">

                                    <img src="/images/social/instagram.webp" alt="" />
                                </Link>
                            </div>
                            <div className='p-2 cursor-pointer rounded-md bg-[#f5f6fe]'>
                                <Link href="https://www.linkedin.com/company/babynama/">

                                    <img src="/images/social/linkedin.webp" alt="" />
                                </Link>
                            </div>
                            <div className='p-2 cursor-pointer rounded-md bg-[#f5f6fe]'>
                                <Link href="https://twitter.com/BabyNama/">

                                    <img src="/images/social/twitter.webp" alt="" />
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Contact