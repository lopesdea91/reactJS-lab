import React, { ReactNode } from 'react'

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <main className="max-w-4xl mx-auto px-4">
      {children}
    </main>
  )
}

export default Main
