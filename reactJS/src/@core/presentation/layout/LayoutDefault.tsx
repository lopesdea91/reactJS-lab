import React, { ReactNode } from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Container from './components/Container'

const LayoutDefault = ({ children }: { children: ReactNode }) => {
  const title = 'reactJS'

  return (
    <Container>
      <Header title={title} />

      <Main>
        {children}
      </Main>

      <Footer />
    </Container>
  )
}

export default LayoutDefault

