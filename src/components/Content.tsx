import React from 'react'
import useTeleport from '../hook/useTeleport'

const Content = () => {
  const { TeleportOut } = useTeleport()

  return (
    <div className='p-4 grow flex flex-col gap-2'>
      <div className="bg-white/10 p-4 rounded-sm">
        <h1 className='mb-3 pb-1 border-b border-b-white/10'>1. Content</h1>
        <TeleportOut teleportType='content1' />
      </div>

      <div className="bg-white/10 p-4 rounded-sm">
        <h1 className='mb-3 pb-1 border-b border-b-white/10'>2. Content</h1>
        <TeleportOut teleportType='content2' />
      </div>
    </div>
  )
}

export default Content
