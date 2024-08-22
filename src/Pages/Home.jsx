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


const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <Ambassadors/>  
      <About/>
      <Service/>
      <RecentWorks/>
      <Testimonials/>
      <OurTeam/> 
      <Subscribe/>
      <Footer/>  
      


  
    </div>
  )
}

export default Home
