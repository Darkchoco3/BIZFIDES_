import React from 'react'
import About from '../Components/About'
import OurTeam from '../Components/OurTeam'
import RecentWorks from '../Components/RecentWorks'
import Service from '../Components/Service'
import Ambassadors from '../Components/Ambassadors'
import Testimonial from '../Components/Testimonial'

const Home = () => {
  return (
    <div>
      <Ambassadors/>  
      <About/>
      <Service/>
      <RecentWorks/>
      <OurTeam/>   
      <Testimonial />


  
    </div>
  )
}

export default Home
