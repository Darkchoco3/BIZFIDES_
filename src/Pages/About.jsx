import ExternalHero from "../Components/ExternalHero"
import MissionVisson from "../Components/Mission&Visson"
import OurStory from "../Components/OurStory"
import OurTeam from "../Components/OurTeam"
import Subscribe from "../Components/Subscribe"
import Testimonials from "../Components/Testimonial"
import WhatWedo from "../Components/WhatWedo"
import Footer from "../Layouts/Footer"
import image from '../assets/AboutImg.svg'

const About = () => {
  return (
    <div className="grid gap-[54px] " >
        <ExternalHero
        heading='About Us'
        paragraph='Building Bridges to Your Online Success Empowering Small Businesses to Stand Out'
        image={image}
        altText='image'
        />
        <WhatWedo/>
        <div>
        <div className="bg-neutral-grey-100">
        <MissionVisson/>
        </div>
        <OurStory/>
        <OurTeam/>
        <Testimonials/>
        </div>
        <Subscribe/>
        <div></div>
    </div>
  )
}

export default About
