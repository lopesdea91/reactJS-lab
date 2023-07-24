import HttpClient from "./HttpClient"

const movieURL = 'https://api.themoviedb.org/3/movie/'
const apiKey = 'api_key=116b521d2dd4e4a124e15199a22d117e'


class FetchAdapter implements HttpClient {
  async get<R>(url: string) {
    const res = await fetch(`${movieURL}${url}?${apiKey}`).then(r => r.json())

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