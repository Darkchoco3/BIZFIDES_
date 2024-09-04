import mission from '../assets/Mission.svg'
import vision from '../assets/Vission.svg'
const MissionVisson = () => {
  return (
    <div className="min-h-[1230px] bg-neutral-grey-100 flex flex-col items-center justify-center gap-[60px] container mx-auto py-10">
      <div className="flex max-w-[1240px] lg:max-h-[485px] items-center lg:gap-[50px] xl:gap-[150px] flex-col gap-8 md:gap-12 text-center px-2 lg:flex-row lg:text-start">
        <img src={mission} alt="mission"/>
        <div className='flex flex-col gap-2 lg:gap-[20px] '>
        <h2 className="font-bold font-roboto text-[40px] text-neutral-black">Mission</h2>
        <p className="text-xl font-inter text-neutral-grey-300">At Bizfides, we empower businesses to thrive online through elevated digital presence and meaningful engagement. We craft innovative strategies for brand visibility, customer connections, and measurable results. Our commitment is to deliver excellence and drive sustained success.</p>
        </div>
      </div>
      <div className="flex max-w-[1240px] lg:max-h-[485px] items-center lg:gap-[50px] xl:gap-[150px] flex-col gap-8 md:gap-12 text-center px-2 lg:flex-row-reverse lg:text-start">
        <img src={vision} alt="vision"/>
        <div className='flex flex-col gap-2 lg:gap-[20px]'>
        <h2 className="font-bold font-roboto text-[40px] text-neutral-black">Vision</h2>
        <p className="text-xl font-inter text-neutral-grey-300">Bizfides aims to lead digital transformation globally. We strive for excellence in online presence, innovation, and digital experiences. Empowering businesses to thrive and reach their full potential.</p>
        </div>
      </div>
    </div>
  )
}

export default MissionVisson
