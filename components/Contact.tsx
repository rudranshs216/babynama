import React from 'react'
import { GoLocation } from "react-icons/go"
import { MdOutlineMarkEmailUnread } from "react-icons/md"
import { GiWorld } from "react-icons/gi"
import Link from 'next/link'

const Contact = () => {
    // const scriptURL = 'https://script.google.com/macros/s/AKfycbxSuMPg1U7LoSHvTWGHdZHHXg1eT3aVFWlJY0H6slFWKG9OHMf5vAVkEK6XwSPNuKTA/exec'
	// const form = document.forms['submit-to-google-sheet'];
  
	// const handleClick = (e : any) => {
	//   e.preventDefault()
	//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
	// 	.then(response => {console.log('Success!', response); alert("Message Sent Successfully")})
	// 	.catch(error => console.error('Error!', error.message))
	// }
    return (
        <div className='py-24'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-6 pt-24 pb-12 px-4'>
                <form name="submit-to-google-sheet" className='flex flex-col max-w-[400px] sm:w-[400px] gap-2 '>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                        <input className='h-[50px] w-full border border-black px-2 rounded-md' placeholder='Name' type="text" />
                        <input className='h-[50px] w-full border border-black px-2 rounded-md' placeholder='Email' type="email" name="" id="" />
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                        <input className='h-[50px] w-full border border-black px-2 rounded-md' placeholder='Phone' type="text" />
                        <select className='h-[50px] w-full border-black border px-2 rounded-md' name="" id="">
                            <option value="Select Department">Select Department</option>
                            <option value="Pediatrician">Pediatrician</option>
                        </select>
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                        <textarea className='border p-2 border-black w-full rounded-md resize-none' name="" id="" cols={30} placeholder="Message" rows={5}></textarea>
                        <button className='px-6 py-2 border border-black rounded hover:bg-[#f5f6fe] w-[fit-content]'>Submit</button>
                    </div>
                </form>
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
    )
}

export default Contact