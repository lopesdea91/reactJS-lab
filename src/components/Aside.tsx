import React from 'react'
import useTeleport from '../hook/useTeleport'
import Count from './Count'
import Form from './Form'
import TextUppercase from './TextUppercase'

const Aside = () => {
  const { addElement, removeElement } = useTeleport()

  const btnHeader1 = () => {
    addElement({ portalType: 'header', element: <TextUppercase /> })
  }
  const btnHeader2 = () => {
    addElement({ portalType: 'header', element: <Count /> })
  }
  const btnHeaderReset = () => {
    removeElement({ portalType: 'header' })
  }

  const btnContentText1 = () => {
    addElement({ portalType: 'content1', element: <TextUppercase /> })
  }
  const btnContentButton1 = () => {
    addElement({ portalType: 'content1', element: <Count /> })
  }
  const btnContentForm1 = () => {
    addElement({ portalType: 'content1', element: <Form /> })
  }
  const btnContentReset1 = () => {
    removeElement({ portalType: 'content1' })
  }

  const btnContentText2 = () => {
    addElement({ portalType: 'content2', element: <TextUppercase /> })
  }
  const btnContentButton2 = () => {
    addElement({ portalType: 'content2', element: <Count /> })
  }
  const btnContentForm2 = () => {
    addElement({ portalType: 'content2', element: <Form /> })
  }
  const btnContentReset2 = () => {
    removeElement({ portalType: 'content2' })
  }

  return (
    <div className='border-r-2 border-white/10 p-4 w-44'>
      <ul className='flex flex-col gap-2'>
        <li className='px-2 py-1 cursor-pointer duration-300 rounded hover:bg-white/10' onClick={btnHeader1}>header texto</li>
        <li className='px-2 py-1 cursor-pointer duration-300 rounded hover:bg-white/10' onClick={btnHeader2}>header button</li>
        <li className='px-2 py-1 cursor-pointer duration-300 rounded hover:bg-white/10' onClick={btnHeaderReset}>header reset</li>

        <hr className='border-[1px] border-white/10' />

        <li className='px-2 py-1 cursor-pointer duration-300 rounded hover:bg-white/10' onClick={btnContentText1}>1. content texto</li>
        <li className='px-2 py-1 cursor-pointer duration-300 rounded hover:bg-white/10' onClick={btnContentButton1}>1. content button</li>
        <li className='px-2 py-1 cursor-pointer duration-300 rounded hover:bg-white/10' onClick={btnContentForm1}>1. content form</li>
        <li className='px-2 py-1 cursor-pointer duration-300 rounded hover:bg-white/10' onClick={btnContentReset1}>1. content reset</li>

        <hr className='border-[1px] border-white/10' />

        <li className='px-2 py-1 cursor-pointer duration-300 rounded hover:bg-white/10' onClick={btnContentText2}>2. content texto</li>
        <li className='px-2 py-1 cursor-pointer duration-300 rounded hover:bg-white/10' onClick={btnContentButton2}>2. content button</li>
        <li className='px-2 py-1 cursor-pointer duration-300 rounded hover:bg-white/10' onClick={btnContentForm2}>2. content form</li>
        <li className='px-2 py-1 cursor-pointer duration-300 rounded hover:bg-white/10' onClick={btnContentReset2}>2. content reset</li>
      </ul>
    </div>
  )
}

export default Aside
