import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={
        [
          'px-4 py-1 text-sm border-2 border-gray-900 bg-slate-800 text-gray-200 hover:bg-white hover:text-gray-900 capitalize',
          className
        ].join('')}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
