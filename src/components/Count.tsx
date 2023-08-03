import React, { useState } from 'react'

export default function Count() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(prev => prev + 1)} className='border-[1px] border-white/20 px-4 py-2 rounded text-xs'>Count: {count}</button>
  )
}
