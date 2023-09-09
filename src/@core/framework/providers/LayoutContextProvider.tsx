import React from 'react'
import { LayoutContext } from '../context/layoutContext'
import { LoadingObserver, observerValueFunction } from '../../entities/ObserverValueFunction'

export const LayoutContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = React.useState<boolean>(false)

  React.useEffect(() => {
    let down: Function
    observerValueFunction.subscribe(LoadingObserver({ callback: setLoading })).then(d => down = d)

    return () => {
      down()
    }
  }, [])

  return (
    <LayoutContext.Provider value={{ loading }}>
      {children}
    </LayoutContext.Provider>
  )
}
