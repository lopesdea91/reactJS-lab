import React from 'react'

const CardRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
      {children}
    </div>
  )
}

export default CardRoot
