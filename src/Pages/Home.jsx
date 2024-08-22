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
    <div>
      <Hero/>
      <Ambassadors/>  
      <About/>
      <Service/>
      <Sub/>
      <RecentWorks/>
      <Testimonials/>
      <OurTeam/> 
      <Subscribe/>
      <Footer/>  
      


    </div>
  )
}

export default Home
