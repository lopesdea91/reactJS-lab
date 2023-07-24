import React, { ReactNode } from 'react'

const MovieTitle = ({ children, className, ...rest }: { children: ReactNode, className?: string }) => {
  return (
    <p className={`text-sm text-gray-200 text-center truncate py-4 px-2 bg-black/50 h-min ${className}`} {...rest}>
      {children}
    </p>
  )
}

export default MovieTitle
