import type IMovie from "../../domain/Movie"
import type HttpClient from "../Http/HttpClient"
import { fetchAdapter } from "../Http/FetchAdapter"

const imageUrl = 'https://image.tmdb.org/t/p/w500'

export default class MovieGateway {
  constructor(
    private http: HttpClient
  ) { }

  async getById(id: number) {
    const result = await this.http.get<IMovieResponse>(`${id}`)

    return {
      status: result.status,
      data: parse(result.data)
    }
  }

  async getTopRated() {
    const result = await this.http.get<{
      results: IMovieResponse[]
    }>(`/top_rated`)

    const items: IMovie[] = result.data.results.map(parse)

    return {
      status: result.status,
      items
    }
  }

  // private getIndex(list: number[]): number {
  //   /** get unique numbers between 0 and 20 */

  //   const i = Math.floor(Math.random() * 20)

  //   if (list.includes(i))
  //     return this.getIndex(list)

  //   return i
  // }

  // topRatedRandom() {
  //   /** get array with 5 unique numbers */

  //   const max = 5
  //   const indexList: number[] = []


  //   for (let i = 0; indexList.length < max; i++) {
  //     indexList.push(this.getIndex(indexList))
  //   }

  //   return indexList
  // }
}

export const movieGateway = new MovieGateway(fetchAdapter)

interface IMovieResponse {
  id: number
  backdrop_path: string
  original_language: string
  original_title: string
  overview: string
  poster_path: string
  release_date: string
  title: string
  vote_average: number
  vote_count: number
}
const parse = (data: IMovieResponse): IMovie => {
  return {
    id: data.id,
    backdropPath: `${imageUrl}${data.backdrop_path}`,
    originalLanguage: data.original_language,
    originalTitle: data.original_title,
    overview: data.overview,
    posterPath: `${imageUrl}${data.poster_path}`,
    releaseDate: data.release_date,
    title: data.title,
    voteAverage: data.vote_average,
    voteCount: data.vote_count,
  }
}
