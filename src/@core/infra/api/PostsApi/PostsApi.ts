import { Response } from "./PostsApi.types";
import { IHttpClient } from "../../http";
import { parseResponseDataHelper } from "./PostsApi.hepers";
import { IPost } from "../../../domain/entities/Post";

export const postsApi = (http: IHttpClient) => ({
  get: async () => {
    const url = "https://jsonplaceholder.typicode.com/posts?_limit=12";

    const { status, data } = await http.get<Response[]>(url);

    const itemsParsed: IPost[] = data.map(parseResponseDataHelper);

    return {
      status,
      data: itemsParsed,
    };
  },
  getById: async (id: number) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    const { status, data } = await http.get<Response>(url);

    const itemsParsed: IPost = parseResponseDataHelper(data);

    return {
      status,
      data: itemsParsed,
    };
  },
});
