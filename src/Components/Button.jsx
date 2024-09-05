import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  onClick,
  icon = null,
  className = '',
  ...props
}) => {
  const baseStyles = `rounded-xl focus:outline-none focus:ring transition ease-in-out duration-150 ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`;

  const variants = {
    primary: `bg-primary text-white hover:bg-[hsla(237, 62%, 16%, 1)] focus:ring-primary`,
    secondary: `bg-secondary text-white hover:bg-primary focus:ring-secondary`,
    outline: `border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary`,
  };

  const sizes = {
    sm: 'grid',
    md: 'px-6 py-3 text-md',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <>
    {/* <button className='text-green-500 text-xl md:text-2xl  lg:text-3xl xl:text-4xl  '>{btnText}</button> */}
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} flex items-center`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
    </>
  )
}
    


export default Button;
