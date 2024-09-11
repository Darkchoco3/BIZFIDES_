import image from '../assets/OurStory.svg'

const OurStory = () => {
  return (
    <div className="container w-11/12  flex flex-col justify-center py-12 gap-8 md:gap-10 lg:gap-[54px]">
      <div className="flex flex-col gap-[10px] font-inter justify-center items-center">
        <h3 className="text-sm md:text-base xl:text-lg text-primary text-center font-medium">
        OUR STORY
        </h3>
        <h2 className="font-roboto font-bold text-primary text-xl md:text-2xl lg:text-3xl text-center">
        Start-Up Journey
        </h2>
        <p className="text-sm lg:text-base text-neutral-grey-300 text-center max-w-[70ch]">
        Take a look at our transformative process of turning an idea into a thriving business through innovation, persistence, team-work and strategic growth.
        </p>
      </div>
      {/* <div className="rounded-[8px]"> */}
        <img src={image} alt="image" className='rounded-sm w-full'/>
      {/* </div> */}
    </div>
  )
}

export default OurStory
