import React from 'react'
import { LayoutContext } from '../context/layoutContext'
import { layoutController } from '../../controllers/LayoutController'
import Observer from '../../entities/Observer'

export const LayoutContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = React.useState<boolean>(false)

  React.useEffect(() => {
    layoutController.register(new Observer('loading', (value: boolean) => {
      setLoading(value)
    }))

    return () => {
      layoutController.unregister('loading')
    }
  }, [])

  return (
    <LayoutContext.Provider value={{
      loading
    }}>
      {/* <div className='flex gap-2'>
        <button className='bg-red-300 px-3' onClick={(() => setLoading(true))}>1</button>
        <button className='bg-red-300 px-3' onClick={(() => setLoading(false))}>2</button>
      </div> */}
      {children}
    </LayoutContext.Provider>
  )
}
