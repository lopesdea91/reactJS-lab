import React from 'react'

interface TitleProps {
  title: string
  children?: React.ReactNode
}
const Title = ({ title, children }: TitleProps) => {
  return (
    <div className='flex items-center justify-between mb-3'>
      <h1 className='text-2xl'>{title}</h1>

      {children}
    </div>
  )
}

export default Title
