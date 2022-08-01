import Link from 'next/link'
import React from 'react'

const BlogComponent = ({Heading, Img}: {Heading:string, Img: string}) => {
  return (
    <div className="w-full max-w-[400px] sm:w-[400px] p-4 m-4 rounded-lg border shadow-md bg-gray-800 hover:bg-gray-900 border-gray-700">
        <div className='w-full'>
            <img className='w-full' src={Img} alt="" />
        </div>
        <div className='pt-4 flex flex-col gap-2 justify-between min-h-[150px]'>
            <div>

            <div className='text-white flex gap-24'>
                <p>Babynama</p>
                <p>Date</p>
            </div>
            <h1 className='text-white text-2xl font-medium'>{Heading}</h1>
            </div>
            <div className='w-[fit-content] bg-white px-6 py-2 rounded-lg hover:bg-gray-100 cursor-pointer'>
                <p>Read More</p>
            </div>
        </div>
    </div>
  )
}

export default BlogComponent