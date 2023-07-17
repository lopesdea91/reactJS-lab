import React, { useEffect } from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Main from './components/Main'
import { useLocation } from 'react-router-dom'
import { todoController } from '../../controllers/TodoController'

const Layout = ({ children }: { children: React.ReactNode }) => {
  // const location = useLocation()

  // useEffect(() => {
  //   console.log('... todoController', todoController.teste());
  // }, [location.pathname])

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
