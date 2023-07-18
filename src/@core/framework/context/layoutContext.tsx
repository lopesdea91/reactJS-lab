import { createContext, useContext } from "react";

interface IContext { loading: boolean }

export const LayoutContext = createContext<IContext>({
  loading: false
})

export const useLayoutContext = () => {
  const state = useContext(LayoutContext)

  return state
}