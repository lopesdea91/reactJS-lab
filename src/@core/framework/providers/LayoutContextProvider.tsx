import React from 'react'
import { LayoutContext } from '../context/layoutContext'
import { layoutController } from '../../controllers/LayoutController'
import Observer from '../../entities/Observer'

export const LayoutContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = React.useState<boolean>(false)

  function handler() {
    layoutController.register(new Observer('loading', (value: boolean) => {
      setLoading(value)
    }))
  }

  React.useEffect(() => {
    handler()

    return () => {
      layoutController.unregister('loading')
    }
  }, [])

  return (
    <LayoutContext.Provider value={{
      loading
    }}>
      {children}
    </LayoutContext.Provider>
  )
}
