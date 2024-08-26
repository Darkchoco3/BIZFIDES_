import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import OurTeam from '../Components/OurTeam'
import RecentWorks from '../Components/RecentWorks'
import Service from '../Components/Service'
import Ambassadors from '../Components/Ambassadors'
import Testimonials from '../Components/Testimonial'
import Footer from '../Layouts/Footer'
import Subscribe from '../Components/Subscribe'
import Sub from '../Components/Sub'

const Home = () => {
  return (
    <div className=''>
      <div className="">
      <Hero/>
      <Ambassadors/> 
      <div className="grid gap-[3.125rem]">
      <About/>
      <Service/>
      </div>
        </div> 
      <div className="grid gap-[3.125rem]">
      <Sub/>
      <RecentWorks/>
      <OurTeam/>
      <Testimonials/>
      <Subscribe/>
      <Footer/>  
        </div> 
      
      
      
      


    </div>
  )
}

export default Home
