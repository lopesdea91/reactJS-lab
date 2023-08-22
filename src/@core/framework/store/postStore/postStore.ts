import { create } from "zustand";
import { IPost } from "../../../domain/entities/Post";

interface ISearch {
  page: number;
}

interface IPostStore {
  data: {
    posts: IPost[];
    search: ISearch;
  };
  setPosts: (p: IPost[]) => void;
  setSearch: (p: ISearch) => void;
}

export const usePostStore = create<IPostStore>((set, get) => ({
  data: {
    posts: [],
    search: {
      page: 1,
    },
  },
  setPosts: (value) =>
    set((state) => {
      const newData = structuredClone(state.data);
      newData.posts = value;

      return {
        ...state,
        data: newData,
      };
    }),
  setSearch: (value) =>
    set((state) => {
      const newData = structuredClone(state.data);
      newData.search = value;

      return {
        ...state,
        data: newData,
      };
    }),
}));
