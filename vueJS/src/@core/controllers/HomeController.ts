import type IMovie from '../domain/Movie'
import MovieGateway, { movieGateway } from '../infra/Gateway/MovieGateway'
import topRatedRandom from '../utils/topRatedRandom'

class HomeController {
  constructor(readonly movieGateway: MovieGateway) {
    this.generageTopTaredIndex()
  }

  private movies: IMovie[] = []
  private topTaredIndex: number[] = []

  async loadData() {
    if (this.movies.length) {
      return
    }
    const result = await movieGateway.getTopRated()

    this.movies = result.items
  }

  getMovies() {
    return this.movies
  }

  generageTopTaredIndex() {
    this.topTaredIndex = topRatedRandom()
  }

  getMoviesTopRated() {
    const movieTopRated: IMovie[] = []

    for (const i of this.topTaredIndex) {
      const movie = this.movies[i]
      movieTopRated.push(movie)
    }

    return movieTopRated
  }
}

export const homeController = new HomeController(movieGateway)
