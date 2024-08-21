import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Service from '../Components/Service'
import Ambassadors from '../Components/Ambassadors'

const Home = () => {
  return (
    <div>
      <Hero/>
      {/* <About/> */}
      <Ambassadors/>  
      <About/>
      <Service/>
    </div>
  )
}

export default Home
