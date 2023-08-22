import { FC, ReactNode } from 'react'
import { TeleportProvider } from './TeleportProvider'

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <TeleportProvider>
      {children}
    </TeleportProvider>
  )
}
