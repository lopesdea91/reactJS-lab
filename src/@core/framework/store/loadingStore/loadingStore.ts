import { create } from "zustand";

interface ILoadingStore {
  loading: boolean;
  setStatus: (p: boolean) => void;
}

export const useLoadingStore = create<ILoadingStore>((set, get) => ({
  loading: false,
  setStatus: (value) =>
    set((state) => {
      return {
        ...state,
        loading: value,
      };
    }),
}));
