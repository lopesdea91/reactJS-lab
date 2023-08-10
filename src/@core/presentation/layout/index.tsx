import React, { FC, ReactNode } from 'react'
import { Header, Main } from './partials'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        {children}
      </Main>
    </>
  )
}

export default Layout
