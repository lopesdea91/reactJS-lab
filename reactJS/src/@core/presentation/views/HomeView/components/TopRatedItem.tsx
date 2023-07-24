import React from 'react'
import IMovie from '../../../../../../../@core/domain/Movie'
import { useNavigate } from 'react-router-dom'
import MovieTitle from './MovieTitle'
import MoviePoster from '../../../shared/MoviePoster'

const TopRatedGrid = ({ movie }: { movie: IMovie }) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      className="group h-60 duration-500 flex-[2] hover:flex-[3] cursor-pointer relative"
    >
      <MoviePoster
        posterPath={movie.posterPath}
        className="h-full w-full object-cover object-center border-[1px] border-white/25 rounded-tl-3xl rounded-br-3xl group-hover:rounded-none"
      />

      <MovieTitle
        className="absolute bottom-[2px] left-[2px] right-[2px] overflow-hidden duration-300 py-0 group-hover:py-4 opacity-0 group-hover:opacity-100"
      >
        {movie.title}
      </MovieTitle>
    </div>
  )
}

export default TopRatedGrid
