import Link from 'next/link'
import React from 'react'

const HIWComponent = ({Heading,Paragraph}: {Heading:string, Paragraph: string}) => {
  return (
    <div className="w-full max-w-[400px] sm:w-[400px] m-4 rounded-lg border shadow-md bg-gray-800 hover:bg-gray-900 border-gray-700 px-4 py-6 flex flex-col items-center justify-between">
       <div className='mb-4'>

        <h1 className='mb-4 text-2xl text-center font-medium text-white'>{Heading}</h1>
        <p className='text-md text-center text-gray-200'>{Paragraph}</p>
       </div>
        <Link href="https://bit.ly/3IRQQAP">
            <div className='w-[fit-content] bg-white px-6 py-2 rounded-lg hover:bg-gray-100 cursor-pointer'>
                <p>Join Us</p>
            </div>
        </Link>
    </div>
  )
}

export default HIWComponent