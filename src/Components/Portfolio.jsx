import React from 'react'
import ExternalHero from './ExternalHero';
import heroImage from '../assets/PortfolioHeroImage.svg'

const Portfolio = () => {
  return (
    <>
        <section className=''>
            <ExternalHero heading={"Portfolio"}
            paragraph={"Discover how we’ve helped small businesses like yours grow from concept to reality"}
            image={heroImage}
            altText={"Portfolio Image"}
            />
        </section>
    </>
  )
}

export default Portfolio