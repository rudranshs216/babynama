import React from 'react'
import Slideshow from './SlideShow'

const Testimonials = () => {
  return (
    <div className='bg-gray-800 py-16 px-4'>
      <h1 className='text-center text-white text-3xl sm:text-5xl mb-8 font-semibold'>Testimonials</h1>
      <div className='flex justify-center'>
        <Slideshow />
      </div>
    </div>
  )
}

export default Testimonials