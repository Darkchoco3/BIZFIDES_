import React from 'react'

const Button = ({btnText}) => {
  return (
    <>
    <button className='text-red-500 text-xl md:text-2xl  lg:text-3xl xl:text-4xl  '>{btnText}</button>   
    </>
  )
}

export default Button