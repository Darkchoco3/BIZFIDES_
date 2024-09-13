import { sponsor } from '../DB/data';
import dot from '../assets/Group 2008.png';
import InfiniteMovingCards from '../Components/utils/Infinite-moving-cards'


const Ambassadors = () => {

  return (
    <div className="pt-[0.8125rem]">
      <div className="overflow-hidden relative flex justify-center gap-[25px] max-h-[51px] md:max-h-[197px] max-w-11/12">
        <div className="md:flex hidden w-11/12">
            <InfiniteMovingCards
            items={sponsor}
            direction='right'
            speed='fast'
           />
        </div>
        {/* <div className='flex md:hidden'>
          {sponsor.map((a, i) => ( 
            <img
            src={a.img}
            key={i}
            className="w-[10rem] md:min-w-[4rem] lg:min-w-[9rem]"
            alt={`Sponsor ${i + 1}`}
          />
        ))}
        </div> */}
      </div>
    </div>
  );
};

export default Ambassadors;
