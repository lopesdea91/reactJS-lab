export default interface HttpClient {
  get: <R>(url: string) => Promise<{ data: R; status: number }>
  post: <R>(url: string, input: any) => Promise<{ data: R; status: number }>
  put: <R>(url: string, input: any) => Promise<{ data: R; status: number }>
  delete: (url: string) => Promise<{ status: number }>
}