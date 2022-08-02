import Image, { StaticImageData } from 'next/image'
import React from 'react'

const DoctorProfile = ({ Name, Degree, Para, Img }: { Name: string, Degree: string, Para: string, Img: string | StaticImageData }) => {
    return (<div className="w-full max-w-[400px] sm:w-[400px] py-4 m-4 rounded-lg border shadow-md bg-gray-800 hover:bg-gray-900 border-gray-700">
        <div className="flex flex-col items-center pb-10">
            <div className='mb-3 w-32 h-32 overflow-hidden rounded-full shadow-lg'>
                <Image src={Img} objectFit="cover" loading="lazy" />
            </div>
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{Name}</h5>
            <h6 className="text-md text-center mx-2 text-gray-700 dark:text-gray-200 mb-2">{Degree}</h6>
            <span className="text-sm w-[250px] text-center mx-2 text-gray-400">{Para}</span>
            {/* <div className="flex mt-4 space-x-3 lg:mt-6">
            <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
        </div> */}
        </div>
    </div>

    )
}

export default DoctorProfile
