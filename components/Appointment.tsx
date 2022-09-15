import Image from 'next/image'
import React from 'react'
import appointmentImg from "../public/images/appointment/appointment.jpeg"

const Appointment = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-6 py-24 px-6 bg-[#f5f6fe]'>
        <div className='flex mr-6 flex-col items-center w-full max-w-[400px] md:w-[400px]  py-6 px-4 gap-6 rounded-3xl border border-gray-800'>
            <h1 className='text-3xl font-semibold'>Book Appointment</h1>
            <form className='flex flex-col gap-2 w-full' action="">
                <select className='h-[50px] border px-2 rounded-md'>
                    <option value="Select Department">Select Department</option>
                    <option value="Pediatrician">Pediatrician</option>
                </select>
                <input className='h-[50px] border px-2 rounded-md' placeholder='Name' type="text" />
                <input className='h-[50px] border px-2 rounded-md' placeholder='Phone Number' type="text" />
                <input className='h-[50px] border px-2 rounded-md' type="date" name="" id="" />
            </form>
            <button className='bg-gray-800 px-8 py-4 w-[fit-content] rounded-lg text-white'>Appointment Now</button>
        </div>
        <div>
            <Image className='rounded-3xl' src={appointmentImg} loading="lazy" />
            {/* <img className='rounded-3xl' src="/images/appointment/appointment.jpeg" alt="" /> */}
        </div>
    </div>
  )
}

export default Appointment