import Image from 'next/image'
import React from 'react'

const HeroComponent = () => {
    return (
        <div className='bg-[#f5f6fe] w-full px-6 sm:px-12 flex flex-col gap-12 lg:gap-0 lg:flex-row items-start lg:items-center pt-24 pb-16 lg:py-24  h-full lg:h-[700px]'>
            <div className='max-w-[540px] w-[100%]'>
                <h1 className='text-3xl lg:text-5xl font-semibold mb-12'>Get Immediate Access to Pediatricians 24x7 for FREE from our Babynama community</h1>
                <div className='flex flex-wrap gap-6'>

                <div className='py-2 px-6 rounded-lg bg-[#f17732] w-[fit-content] text-white text-lg font-medium cursor-pointer shadow-sm'>Join Our Doctors Community</div>
                <div className='py-2 px-6 rounded-lg bg-[#f17732] w-[fit-content] text-white text-lg font-medium cursor-pointer shadow-sm'>Chat with a Pediarician Now</div>
                </div>
            </div>
            <div className='max-w-[900px] lg:w-[100%]'>
                <img src="/images/image.webp"/>
            </div>

        </div>
    )
}

export default HeroComponent