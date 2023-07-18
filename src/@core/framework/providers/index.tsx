import React from 'react'
import { LayoutContextProvider } from './LayoutContextProvider'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutContextProvider>
      {children}
    </LayoutContextProvider>
  )
}

export default Providers
