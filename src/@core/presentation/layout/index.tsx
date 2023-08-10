import React, { FC, ReactNode } from 'react'
import Header from './partials/Header'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
