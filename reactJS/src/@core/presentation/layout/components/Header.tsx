import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ title }: { title: string }) => {
  return (
    <header
      className="flex items-center justify-between max-w-4xl mx-auto px-4 py-6 border-b-[1px] border-b-white/25"
    >
      <Link to="/" className="text-2xl font-bold text-red-600"> MovieFlix </Link>
      <span className="text-lg font-semibold text-gray-200 capitalize">{title}</span>
    </header>
  )
}

export default Header
