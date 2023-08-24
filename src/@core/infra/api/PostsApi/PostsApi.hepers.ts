import { IPost } from "../../../domain/entities/Post";
import { Response } from "./PostsApi.types";

export const parseResponseDataHelper = (data: Response): IPost => {
  return {
    id: data.id,
    title: data.title,
    body: data.body,
  };
};
