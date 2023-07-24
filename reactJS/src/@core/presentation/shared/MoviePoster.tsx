import React from 'react'

const MoviePoster = ({ posterPath, className }: { posterPath: string, className?: string }) => {
  return (
    <img
      className={`block object-cover object-top rounded-md opacity-80 duration-500 group-hover:opacity-100 ${className}`}
      src={posterPath}
      alt='example'
    />
  )
}

export default MoviePoster
