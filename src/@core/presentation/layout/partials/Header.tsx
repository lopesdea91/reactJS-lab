import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()

  return (
    <div className='bg-slate-800 text-zinc-200 shadow-md mb-3'>
      <div className='mx-auto max-w-3xl flex items-center h-16'>
        <h1 className='text-lg mr-4'>MyApp</h1>
        <ul className='text-sm mr-auto flex items-center'>
          <li
            className='cursor-pointer duration-150 hover:opacity-90 hover:bg-white/10 px-4 py-1'
            onClick={() => navigate('/')}
          >
            Home
          </li>
          <li
            className='cursor-pointer duration-150 hover:opacity-90 hover:bg-white/10 px-4 py-1'
            onClick={() => navigate('/about')}
          >
            About
          </li>
        </ul>
        <span>Olá (NAME-USER)</span>
      </div>
    </div>
  )
}