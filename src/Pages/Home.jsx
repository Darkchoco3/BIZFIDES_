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
<<<<<<< HEAD
    
      <div className="grid gap-[2rem] lg:gap-[3.125rem]">
=======
    <div className="grid gap-[3.125rem">
>>>>>>> eb4cc6b31774ad5d32dc3e7ea164546085b2a67d
      <div className="">
        <Hero />
      <Ambassadors/> 
<<<<<<< HEAD
      <div className="grid gap-[2rem] lg:gap-[3.125rem]">
      <About/>
      <Service/>
      </div>
      </div>
      
      <Sub/>
      <RecentWorks/>
      <OurTeam/>
      <Testimonials/>
      <Subscribe/>
        </div> 
      
      
      
      
=======
      <div className="grid gap-[3.125rem]"> 
      <About/>
      <Service/>
    </div>
    </div>
>>>>>>> eb4cc6b31774ad5d32dc3e7ea164546085b2a67d

    <Sub />
    
    <OurTeam/>
    <Testimonials/>
    <Subscribe />
    <Footer />
    </div>
  )
}

export default Home
