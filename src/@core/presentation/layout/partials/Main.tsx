import React, { FC, ReactNode } from 'react'

export const Main: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='mx-auto max-w-3xl'>
      {children}
    </div>
  )
}
