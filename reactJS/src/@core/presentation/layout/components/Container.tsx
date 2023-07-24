import React, { ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screnn h-screen bg-gradient-to-b from-slate-900 to-black overflow-y-auto">
      {children}
    </div>
  )
}

export default Container
