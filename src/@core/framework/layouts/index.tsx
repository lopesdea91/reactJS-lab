import React from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Main from './components/Main'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className='w-screen h-screen bg-gray-100'
    >
      <Header />
      <Menu />
      <Main>
        {children}
      </Main>
    </div>
  )
}

export default Layout
