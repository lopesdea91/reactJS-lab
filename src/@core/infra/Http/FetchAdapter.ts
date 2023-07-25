import HttpClient from "./HttpClient"

const movieURL = process.env.API_URL // 'https://api.themoviedb.org/3/movie/'

class FetchAdapter implements HttpClient {
  async get<R>(url: string) {
    const res = await fetch(`${movieURL}${url}`).then(r => r.json())

    return {
      data: res as R,
      status: 200
    }
  }

  async post<R>(url: string, input: any) {

    return {
      data: {} as R,
      status: 200
    }
  }
  async put<R>(url: string, input: any) {

    return {
      data: {} as R,
      status: 200
    }
  }

  async delete(url: string) {

    return {
      status: 200
    }
  }
}

export const fetchAdapter = new FetchAdapter()