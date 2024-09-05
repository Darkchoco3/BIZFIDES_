import { sponsor } from '../DB/data';
import dot from '../assets/Group 2008.png'

const Ambassadors = () => {

  return (
    <div className="pt-[0.8125rem]">
      <div className="overflow-hidden relative flex justify-center gap-[25px] max-h-[51px] md:max-h-[197px]">
        <div className="flex animate-scroll-marquee">
          {sponsor.map((a, i) => (
            <img
              src={a.img}
              key={i}
              className="w-[10rem] md:min-w-[4rem] lg:min-w-[9rem]"
              alt={`Sponsor ${i + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="lg:flex justify-end hidden animate-pulse">
        <img src={dot} alt="" />
      </div>
    </div>
  );
};

export default Ambassadors;
