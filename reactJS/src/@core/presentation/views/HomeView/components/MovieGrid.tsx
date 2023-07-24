import React, { ReactNode } from 'react'

const MovieGrid = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-white grid grid-cols-5 gap-2" >
      {children}
    </div>
  )
}

export default MovieGrid

