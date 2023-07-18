import React from 'react'
import { useNavigate } from 'react-router-dom';

const links = [
  { label: 'home', to: '/' },
  { label: 'todo list', to: '/todo-list' },
  { label: 'new todo', to: '/todo/new' },
]

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className='border-b-[1px] border-b-gray-200 bg-white p-4 my-2 mx-auto w-full max-w-3xl flex items-center justify-start gap-2'>
      {links.map(link => (
        <button
          key={link.label}
          onClick={() => navigate(link.to)}
          className='px-4 py-1 text-sm border-2 border-gray-900 bg-slate-800 text-gray-200 hover:bg-white hover:text-gray-900 capitalize'
        >
          {link.label}
        </button>
      ))}
    </div>
  )
}

export default Menu
