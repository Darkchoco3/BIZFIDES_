import React from 'react'
import About from '../Components/About'
import OurTeam from '../Components/OurTeam'
import RecentWorks from '../Components/RecentWorks'
import Service from '../Components/Service'
import Ambassadors from '../Components/Ambassadors'

const Home = () => {
  return (
    <div>
      <Ambassadors/>  
      <About/>
      <Service/>
      <RecentWorks/>
      <OurTeam/>   
    </div>
  )
}

export default Home
