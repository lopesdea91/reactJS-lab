import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = ({ className, ...rest }: InputProps) => {
  return (
    <input
      className={
        [
          'px-4 py-1 text-sm border-2 border-gray-900 bg-slate-800 text-gray-200 hover:bg-white hover:text-gray-900 capitalize',
          className
        ].join('')}
      {...rest}
    />
  )
}

export default Input
