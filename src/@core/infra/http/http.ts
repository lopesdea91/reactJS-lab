import { IHttpClient } from "./";

class Http implements IHttpClient {
  async get<R>(url: string) {
    const response = await fetch(url, { method: "GET" });
    const result = await response.json();
    return {
      status: response.status,
      data: result as R,
    };
  }
  async post<T, R>(url: string, input: T) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(input),
    });
    const result = await response.json();

    return {
      status: response.status,
      data: result as R,
    };
  }
  async put<T, R>(url: string, input: T) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(input),
    });
    const result = await response.json();

    return {
      status: response.status,
      data: result as R,
    };
  }
  async delete(url: string) {
    const response = await fetch(url, {
      method: "DELETE",
    });

    return {
      status: response.status,
    };
  }
}

export const http = new Http();
