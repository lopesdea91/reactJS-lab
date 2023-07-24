import React, { HTMLAttributes } from 'react'

interface TopRatedGridProps extends HTMLAttributes<HTMLDivElement> { }

const TopRatedGrid = ({ children, className, ...rest }: TopRatedGridProps) => {
  return (
    <div
      className={`flex items-center gap-[1px] ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}

export default TopRatedGrid
