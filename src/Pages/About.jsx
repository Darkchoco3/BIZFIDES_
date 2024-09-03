import ExternalHero from "../Components/ExternalHero"
import WhatWedo from "../Components/WhatWedo"
import image from '../assets/AboutImg.svg'

const About = () => {
  return (
    <div >
        <ExternalHero
        heading='ABOUT US'
        paragraph='Building Bridges to Your Online Success Empowering Small Businesses to Stand Out'
        image={image}
        altText='image'
        />
        <WhatWedo/>
      <h1 className="h-screen text-center place-content-center">About Page</h1>
    </div>
  )
}

export default About
