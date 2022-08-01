import React from 'react'
import BlogComponent from './BlogComponent'

const Blog = () => {
  return (
    <div id='blog' className='py-12 flex flex-col justify-center items-center'>
        <h1 className='sm:text-5xl text-3xl mb-4 font-semibold'>Our Latest News</h1>
        <div className='sm:p-4 flex flex-wrap justify-center'>
            <BlogComponent Heading='Almonds for Children - Benefits and Side Effects' Img="images/blog/grid/b-1.webp"/>
            <BlogComponent Heading='Food Pyramid for Children' Img="images/blog/grid/b-2.webp"/>
            <BlogComponent Heading='Omega 3 Fatty acids for Kids' Img="images/blog/grid/b-3.webp"/>
            <BlogComponent Heading='Spinning Junk into Joy' Img="images/blog/grid/b-4.webp"/>
            <BlogComponent Heading='Importance of Nutrition for Children' Img="images/blog/grid/b-5.webp"/>
        </div>
    </div>
  )
}

export default Blog