import React, { FC, ReactNode } from 'react'

const Main: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='mx-auto max-w-3xl flex'>
      {children}
    </div>
  )
}

export default Main
