import MovieGateway, { movieGateway } from "../infra/Gateway/MovieGateway";

class MovieController {
  constructor(readonly movieGateway: MovieGateway) {
  }

  async getMovies(id: number) {
    const result = await movieGateway.getById(id)

    return result
  }
}

export const movieController = new MovieController(movieGateway)