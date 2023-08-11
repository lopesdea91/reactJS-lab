import React, { FC, ReactNode } from 'react'
import { Feedback, Header, Main } from './partials'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        <Feedback />
        {children}
      </Main>
    </>
  )
}

export default Layout
