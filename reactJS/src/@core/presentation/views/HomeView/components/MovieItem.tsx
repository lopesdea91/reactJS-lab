import React from 'react'
import { useNavigate } from 'react-router-dom';
import IMovie from '../../../../../../../@core/domain/Movie';
import MoviePoster from '../../../shared/MoviePoster';
import MovieTitle from './MovieTitle';

const MovieItem = ({ movie }: { movie: IMovie }) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      className="group aspect-w-4 aspect-h-5 rounded-md cursor-pointer"
    >
      <MoviePoster posterPath={movie.posterPath} />

      <MovieTitle className="mt-auto py-2">
        {movie.title}
      </MovieTitle>
    </div>
  )
}

export default MovieItem
