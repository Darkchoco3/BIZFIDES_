const WhatWedoCard = ({what, i}) => {
  return (
    <div className='w-[370px] h-[474px] rounded-[55px] shadow-[0px_0px_12px_8px_rgba(0,0,0,0.02)] p-4 font-inter flex flex-col gap-[24px] border border-neutral-grey-100' key={i}>
      <img src={what.img} alt={what.title} className='rounded-[35px]' />
      <div className="flex flex-col gap-[7px]">
      <h3 className='text-secondary text-center text-xl font-semibold'>{what.title}</h3>
      <p className='text-sm text-neutral-grey-300 text-center'>{what.desc}</p>
      </div>
    </div>
  )
}

export default WhatWedoCard
