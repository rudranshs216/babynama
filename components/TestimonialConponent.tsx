import React from 'react'

const TestimonialConponent = ({ Paragraph, Details, Name, imgSrc }: { Paragraph: string, Details: string, Name: string, imgSrc: string }) => {
    return (
        <div className='bg-[#f5f6fe] px-4 py-8 w-full rounded-3xl sm:w-[600px] flex flex-col gap-6 justify-between min-h-[280px] sm:min-h-[240px]'>
            <div>
                <p className='text-lg sm:text-xl'>{Paragraph}</p>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-lg sm:text-xl'>{Name}</p>
                    <p className='text-md sm:text-lg uppercase'>{Details}</p>
                </div>
                <div>
                    <img className='sm:w-24 w-12 h-12 sm:h-24 object-cover rounded-full' src={imgSrc} alt={Name} />
                </div>
            </div>
        </div>
    )
}

export default TestimonialConponent