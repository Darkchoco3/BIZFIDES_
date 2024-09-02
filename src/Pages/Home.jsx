import React from 'react'
import About from '../Components/About'
import Service from '../Components/Service'
import Hero from '../Components/Hero.jsx'
import OurTeam from '../Components/OurTeam.jsx'
import Ambassadors from '../Components/Ambassadors'
import Testimonials from '../Components/Testimonial'
import Footer from '../Layouts/Footer'
import Subscribe from '../Components/Subscribe'
import Sub from '../Components/Sub'

const Home = () => {
  return (
    <div className="grid gap-[3.125rem">
      <div className="">
        <Hero />
      <Ambassadors/> 
      <div className="grid gap-[3.125rem]"> 
      <About/>
      <Service/>
    </div>
    </div>

    <Sub />
    
    <OurTeam/>
    <Testimonials/>
    <Subscribe />
    <Footer />
    </div>
  )
}

export default Home
