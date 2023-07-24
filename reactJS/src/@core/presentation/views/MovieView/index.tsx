import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import IMovie from '../../../domain/Movie'
import { movieController } from '../../../controllers/MovieController'
import LayoutDefault from './../../layout/LayoutDefault'
import MoviePoster from '../../shared/MoviePoster'
import TitleView from '../../shared/TitleView'
import Link from '../../shared/ui/Link'

const MovieView = () => {
  const params = useParams()
  const currentId = params.id

  const [movie, setMovie] = useState<IMovie>({
    id: 0,
    backdropPath: '',
    originalLanguage: '',
    originalTitle: '',
    overview: '',
    posterPath: '',
    releaseDate: '',
    title: '',
    voteAverage: 0,
    voteCount: 0
  })

  async function getData() {
    const res = await movieController.getMovies(Number(currentId))

    setMovie(prev => ({
      ...prev,
      posterPath: res.data.posterPath,
      backdropPath: res.data.backdropPath,
      originalLanguage: res.data.originalLanguage,
      title: res.data.title,
      overview: res.data.overview,
      releaseDate: res.data.releaseDate,
      voteCount: res.data.voteCount,
      voteAverage: res.data.voteAverage,
    }))
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])


  return (
    <LayoutDefault>
      <TitleView title="Info" />
      <div className="sm:grid grid-cols-5 gap-4 py-4 min-h[240px]">
        <div className="sm:col-span-1 overflow-hidden">
          {movie.posterPath && <MoviePoster posterPath={movie.posterPath} className="h-full" />}
        </div>
        <div className="sm:col-span-4 flex flex-col">
          <div className="text-gray-200 flex flex-col gap-2 mb-3">
            <p className="text-sm">Title: {movie.title}</p>
            <p className="text-sm">Data: {movie.releaseDate}</p>
            <p className="text-sm">Original language: {movie.originalLanguage}</p>
          </div>

          <div className="mt-auto flex gap-2">
            <Link to={movie.posterPath} external target="_blank">see poster</Link>
            <Link to={movie.backdropPath} external target="_blank">see backdrop</Link>
          </div>
        </div>
      </div>

      <TitleView title="Sinopse" />
      <div className="relative bg-black/50 shadow-lg min-h-[485px]">
        {movie.posterPath && (
          <MoviePoster
            posterPath={movie.backdropPath}
            className="h-full w-full object-cover object-center opacity-50"
          />
        )}
        <p
          className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] italic text-gray-200 p-4"
        >
          {movie.overview}
        </p>
      </div>
    </LayoutDefault>
  )
}

export default MovieView
