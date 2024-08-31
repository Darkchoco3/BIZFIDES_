import React from 'react'

const TeamsCard = ({
    name,
    image,
    number,
    role

}) => {
  return (
    <>
        <div className="relative flex flex-col items-center"
            >
              {/* Number Badge */}
              <div className="bg-white rounded-full w-[4.063rem] absolute -top-7 z-40 p-2">
                <div className="font-inter w-[3.125rem] h-12 rounded-full bg-primary text-white text-xl flex items-center justify-center">
                  {number}
                </div>
              </div>

              {/* Member Image */}
              <img src={image} alt={name} className="z-20 pb-6 lg:pb-5 xl:pb-6" />

              {/* Background Shape (Semicircle) */}
              <div className="absolute rounded-b-[12.5rem] min-w-[17rem] min-h-[11.75rem] bg-secondary -bottom-0 z-10"></div>

              {/* Name and Role Box */}
              <div className="absolute bottom-10 lg:bottom-8 xl:bottom-10 rounded-b-[12.5rem] min-h-[6.563rem] min-w-[13.125rem] text-center bg-white pt-6 z-30">
                <h3 className="text-sm 2xl:text-2xl font-bold font-inter text-neutral-black">
                  {name}
                </h3>
                <p className="text-sm lg:text-xs xl:text-sm 2xl:text-base text-gray-600 font-inter text-neutral-black ">
                  {role}
                </p>
              </div>
            </div>
            
    </>
  )
}

export default TeamsCard