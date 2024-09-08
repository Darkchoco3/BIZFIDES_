import image from '../assets/OurStory.svg'

const OurStory = () => {
  return (
    <div className="container mx-auto w-11/12 lg:min-h-[883px] flex flex-col justify-center items-center px-4 py-10 gap-8 md:gap-10 lg:gap-[54px]">
      <div className="lg:w-[758px] flex flex-col gap-[10px] font-inter">
        <h3 className="text-base xl:text-lg text-primary text-center font-medium">
        OUR STORY
        </h3>
        <h2 className="font-roboto font-bold text-primary text-3xl sm:text-[48px] text-center">
        Start-Up Journey
        </h2>
        <p className="text-base text-neutral-grey-300 text-center">
        Take a look at our transformative process of turning an idea into a thriving business through innovation, persistence, team-work and strategic growth.
        </p>
      </div>
      <div className="rounded-[8px]">
        <img src={image} alt="image" className='rounded-lg'/>
      </div>
    </div>
  )
}

export default OurStory
