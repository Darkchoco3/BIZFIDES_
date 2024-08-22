import React from 'react'
import About from '../Components/About'
import Service from '../Components/Service'
import Ambassadors from '../Components/Ambassadors'
import Testimonial from '../Components/Testimonial'
import Footer from '../Layouts/Footer'
import Subscribe from '../Components/Subscribe'

const Home = () => {
  return (
    <div>
      <Ambassadors/>  
      <About/>
      <Service/>
      <Testimonial />
<Subscribe/>
  <Footer/>
    </div>
  )
}

export default Home
