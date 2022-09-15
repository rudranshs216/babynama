import Head from 'next/head'
import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const contact = () => {
  return (
    <div>
       <Head>
        <title>BabyNama - Contact</title>
        <link rel="icon" href="images/ff.webp" type="image/x-icon" />
        <link rel="shortcut icon" type="image/x-icon" href="images/ff.webp" />
      </Head>
        <Navbar />
        <Contact />
        <Footer />
    </div>
  )
}

export default contact