import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogComponent = ({ Heading, Img, date, slug }: { Heading: string, Img: string | StaticImageData, date: string, slug: string }) => {
    return (
        <div className="group w-full max-w-[400px] sm:w-[400px] p-4 m-4 rounded-lg border shadow-md bg-white border-gray-700">
            <div className="h-[200px] w-full md:w-full relative">
                <Image src={Img} objectFit="cover" layout="fill"
                />
            </div>
            <div className='pt-4 flex flex-col gap-2 justify-between min-h-[150px]'>
                <div>

                    <div className='flex gap-24'>
                        <p className='text-[#1f2278] group-hover:text-[#f17732]'>Babynama</p>
                        <p className='text-[#1f2278] group-hover:text-[#f17732]'>Date: {date}</p>
                    </div>
                    <h1 className='text-2xl font-semibold text-[#1f2278]'>{Heading}</h1>
                </div>
                <Link href={`/blog/${slug}`}>
                <div className='w-[fit-content] bg-[#e1e2f6] text-[#565acf] px-6 py-2 rounded-lg text-md font-medium group-hover:text-white group-hover:bg-[#f17732] cursor-pointer'>
                    <p>Read More</p>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default BlogComponent