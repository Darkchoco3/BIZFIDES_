import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Service from '../Components/Service'
import Ambassadors from '../Components/Ambassadors'
import Testimonials from '../Components/Testimonial'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Ambassadors/>  
      <About/>
      <Service/>
      {/* <Testimonials/> */}
    </div>
  )
}

export default Home
