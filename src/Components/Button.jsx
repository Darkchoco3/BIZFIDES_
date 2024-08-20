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
    primary: `bg-primary text-white hover:bg-blue-600 focus:ring-primary`,
    secondary: `bg-secondary text-white hover:bg-primary focus:ring-secondary`,
    accent: `bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-300`,
    outline: `border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary`,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-md',
    lg: 'px-8 py-4 text-lg',
  };

  return (
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
  );
};

export default Button;
