import { sponsor } from '../DB/data';
import dot from '../assets/Group 2008.png';
import LazyLoad from 'react-lazy-load';
import { InfiniteMovingCards } from './utils/infinite-moving-cards';


const Ambassadors = () => {

  return (
    <div className="pt-[0.8125rem]">
      <div className="overflow-hidden relative flex justify-center gap-[25px] max-h-[51px] md:max-h-[197px]">
        <div className="md:flex hidden">
           <InfiniteMovingCards
            items={sponsor}
            direction='right'
            speed='slow'
           />
        </div>
        <div className='flex md:hidden'>
          {sponsor.map((a, i) => ( 
            <img
            src={a.img}
            key={i}
            className="w-[10rem] md:min-w-[4rem] lg:min-w-[9rem]"
            alt={`Sponsor ${i + 1}`}
            loading='lazy'
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
