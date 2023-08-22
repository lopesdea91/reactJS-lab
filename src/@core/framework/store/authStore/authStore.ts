import { create } from "zustand";
import { IAuth } from "../../../domain/entities/Auth";

interface IAuthStore {
  data: {
    logged: boolean;
    user: IAuth;
  };
  setLogin: (p: boolean) => void;
  setData: (p: IAuth) => void;
}

export const useAuthStore = create<IAuthStore>((set, get) => ({
  data: {
    logged: false,
    user: {
      name: "",
      email: "",
    },
  },
  setLogin: (value) =>
    set((state) => {
      const newData = structuredClone(state.data);
      newData.logged = value;

      return {
        ...state,
        data: newData,
      };
    }),
  setData: (value) =>
    set((state) => {
      const newData = structuredClone(state.data);
      newData.user = value;

      return {
        ...state,
        data: newData,
      };
    }),
}));
