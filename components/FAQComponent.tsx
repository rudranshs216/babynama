import React, { useState } from 'react'

const FAQComponent = ({ Heading, Paragraph }: { Heading: string, Paragraph: string }) => {
    const [click, setClick] = useState(false)
    return (
        <div className='max-w-[500px] w-full rounded bg-[#eeeefa] overflow-hidden'>
            <div className={`flex justify-between items-center ${click ? "bg-[#f07739]" : "bg-[#1f2278]"} border-b border-gray-500 text-white px-2 py-3 rounded`}>
                <h1 className='text-lg font-semibold'>{Heading}</h1>
                <div className='cursor-pointer' onClick={() => setClick(!click)}>
                    {click ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>}
                </div>

            </div>
            { click &&
            <div className={click ? "text-md font-medium rounded bg-[#eeeefa] p-2 overflow-hidden h-[fit-content] ease-in duration-300" : "text-md font-medium rounded bg-[#eeeefa] p-2 overflow-hidden h-[0px] ease-in duration-300"}>
                <p>{Paragraph}</p>
            </div>
             }
                

        </div>
    )
}

export default FAQComponent