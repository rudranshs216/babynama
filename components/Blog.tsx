import React from 'react'
import BlogComponent from './BlogComponent'
import blogPic1 from "../public/images/blog/grid/b-1.webp"
import blogPic2 from "../public/images/blog/grid/b-2.webp"
import blogPic3 from "../public/images/blog/grid/b-3.webp"
import blogPic4 from "../public/images/blog/grid/b-4.webp"
import blogPic5 from "../public/images/blog/grid/b-5.webp"

const Blog = () => {
  return (
    <div id='blog' className='py-12 flex flex-col justify-center items-center'>
        <h1 className='sm:text-5xl text-3xl mb-4 font-semibold'>Our Latest News</h1>
        <div className='sm:p-4 flex flex-wrap justify-center'>
            <BlogComponent Heading='Almonds for Children - Benefits and Side Effects' Img={blogPic1}/>
            <BlogComponent Heading='Food Pyramid for Children' Img={blogPic2}/>
            <BlogComponent Heading='Omega 3 Fatty acids for Kids' Img={blogPic3}/>
            <BlogComponent Heading='Spinning Junk into Joy' Img={blogPic4}/>
            <BlogComponent Heading='Importance of Nutrition for Children' Img={blogPic5}/>
        </div>
    </div>
  )
}

export default Blog