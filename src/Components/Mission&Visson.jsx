import mission from "../assets/Mission.svg";
import vision from "../assets/Vission.svg";
const MissionVisson = () => {
  return (
    <div className="bg-neutral-grey-100 flex flex-col gap-[2rem] lg:gap-[3.75rem] container w-11/12 py-[3rem] lg:py-[6.25rem]">
      <div className="flex items-center lg:gap-[3.125rem] xl:gap-[9.375rem] flex-col gap-8 md:gap-12 text-center lg:flex-row lg:text-start">
        <img src={mission} alt="mission" className="2xl:flex-1 hidden lg:block"/>
        <div className="flex flex-col gap-2 lg:gap-[20px] 2xl:flex-1">
          <h2 className="font-bold font-roboto text-xl lg:text-[2.5rem] text-neutral-black">
            Mission
          </h2>
          <p className="text-sm md:text-base lg:text-xl font-inter text-neutral-grey-300 max-w-[48ch] md:max-w-[70ch] lg:max-w-[48ch] ">
            At Bizfides, we empower businesses to thrive online through elevated
            digital presence and meaningful engagement. We craft innovative
            strategies for brand visibility, customer connections, and
            measurable results. Our commitment is to deliver excellence and
            drive sustained success.
          </p>
        </div>
      </div>

      <div className="flex  items-center lg:gap-[50px] xl:gap-[14.5rem] flex-col gap-8 md:gap-12 text-center lg:flex-row lg:text-start">
      <div className="flex flex-col gap-2 lg:gap-[20px] 2xl:flex-1">
          <h2 className="font-bold font-roboto text-xl lg:text-[2.5rem] text-neutral-black">
            Vision
          </h2>
          <p className="text-sm md:text-base lg:text-xl font-inter text-neutral-grey-300 max-w-[35ch] md:max-w-[70ch] lg:max-w-[41ch]">
            Bizfides aims to lead digital transformation globally. We strive for
            excellence in online presence, innovation, and digital experiences.
            Empowering businesses to thrive and reach their full potential.
          </p>
        </div>
        <img src={vision} alt="vision"  className="hidden lg:block 2xl:flex-1"/>  
      </div>
    </div>
  );
};

export default MissionVisson;
