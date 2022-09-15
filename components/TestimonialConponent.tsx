import Image, { StaticImageData } from 'next/image'
import React from 'react'

const TestimonialConponent = ({ Paragraph, Details, Name, imgSrc }: { Paragraph: string, Details: string, Name: string, imgSrc: string | StaticImageData }) => {
    return (
        <div className='bg-[#f5f6fe] px-4 py-8 w-full rounded-3xl sm:w-[600px] flex flex-col gap-6 justify-between min-h-[280px] sm:min-h-[240px]'>
            <div>
                <p className='text-[12px] sm:text-[16px]'>{Paragraph}</p>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-[12px] sm:text-[16px]'>{Name}</p>
                    <p className='text-[8px] sm:text-[12px] uppercase'>{Details}</p>
                </div>
                <div className='relative sm:w-24 w-12 h-12 sm:h-24 rounded-full overflow-hidden flex items-center justify-center'>
                    <Image className="rounded-full" objectFit='cover'  src={imgSrc} loading="lazy" />
                </div>
            </div>
        </div>
    )
}

export default TestimonialConponent