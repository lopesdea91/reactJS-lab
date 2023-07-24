import React, { useEffect, useState } from 'react'
import { homeController } from '../../../controllers/HomeController'
import IMovie from '../../../domain/Movie'
import LayoutDefault from '../../layout/LayoutDefault'
import TopRatedGrid from './components/TopRatedGrid'
import TopRatedItem from './components/TopRatedItem'
import MovieGrid from './components/MovieGrid'
import MovieItem from './components/MovieItem'
import TitleView from '../../shared/TitleView'
import Button from '../../shared/ui/Button'

const HomeView = () => {
  const [movies, setMovies] = useState<IMovie[]>([])
  const [movieTopRated, setMovieTopRated] = useState<IMovie[]>([])

  async function getMovies() {
    const result = homeController.getMovies()
    setMovies(result)
  }

  async function getMoviesTopRated() {
    homeController.generageTopTaredIndex()
    const result = homeController.getMoviesTopRated()
    setMovieTopRated(result)
  }
  async function getData() {
    await homeController.loadData()
    await getMovies()
    await getMoviesTopRated()
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

  return (
    <LayoutDefault>
      {/* TOP RATED */}
      <TitleView
        title="Top rated"
        action={
          <Button onClick={getMoviesTopRated}>ramdon</Button>
        }
      />
      <TopRatedGrid className="mb-8">
        {movieTopRated.map(movie => (
          <TopRatedItem
            key={`topRated-item-${movie.id}`}
            movie={movie}
          />
        ))}
      </TopRatedGrid>

      {/* MOVIE LIST */}
      <TitleView title="Movies" />

      <MovieGrid>
        {movies.map(movie => (
          <MovieItem
            key={`movie-item-${movie.id}`}
            movie={movie}
          />
        ))}
      </MovieGrid>
    </LayoutDefault>
  )
}

export default HomeView
