import React from 'react'
import About from '../Components/About'
import Service from '../Components/Service'
import Ambassadors from '../Components/Ambassadors'
import Testimonial from '../Components/Testimonial'
import Footer from '../Layouts/Footer'

const Home = () => {
  return (
    <div>
      <Ambassadors/>  
      <About/>
      <Service/>
      <Testimonial />


  <Footer/>
    </div>
  )
}

export default Home
