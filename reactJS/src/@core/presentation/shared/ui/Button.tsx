import React, { HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> { }

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className="px-2 py-1 font-semibold text-xs text-red-600 uppercase rounded border-b-4 border-b-red-600 bg-gray-200"
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
