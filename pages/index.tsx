import type { NextPage } from 'next'
import About from '../components/About'
import Appointment from '../components/Appointment'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import HeroComponent from '../components/HeroComponent'
import HIW from '../components/HIW'
import Navbar from '../components/Navbar'
import OurServices from '../components/OurServices'
import OurTeam from '../components/OurTeam'
import Testimonials from '../components/Testimonials'

const Home: NextPage = () => {
  return (
   <div>
    <Navbar/>
    <HeroComponent />
    <About/>
    <HIW />
    <OurServices/>
    <Appointment />
    <Testimonials />
    <OurTeam />
    <Blog />
    <Footer />


   </div>
  )
}

export default Home
