import React from 'react'

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='border-[1px] border-gray-200 bg-white p-4 mx-auto w-full max-w-3xl'>
      {children}
    </div>
  )
}

export default Main
