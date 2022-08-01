import React from 'react'
import HIWComponent from './HIWComponent'

const HIW = () => {
    return (
        <div className='py-12 flex flex-col justify-center items-center bg-[#f5f6fe] '>
            <h1 className='sm:text-5xl text-3xl mb-4 text-center font-semibold'>How It Works?</h1>
            <div className='sm:p-4 flex flex-wrap justify-center'>
                <HIWComponent Heading='JOIN OUR COMMUNITY' Paragraph='We’re super-accessible, super-affordable and super-convenient. Just join us on WhatsApp, and you’re in for an exclusive access to pediatricians 24x7 for FREE!'/>
                <HIWComponent Heading='GET ANSWERS IN 10 MINS.' Paragraph='Whether it’s a pre-consultation/second opinion or what may seem like a silly concern, just drop in your queries and get an answer from our trusted pediatricians in 10 mins for FREE. You can also consult the pediatricians on call/video call if needed.'/>
                <HIWComponent Heading='STAY CONNECTED FOR MORE!' Paragraph='Join us on Facebook, Instagram and YouTube for added guidance, a community of pediatricians & like-minded parents, informative videos, expert opinions and much more!'/>

            </div>
        </div>
    )
}

export default HIW