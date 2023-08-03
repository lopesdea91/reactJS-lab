import React, { FC } from 'react'
import useTeleport from '../hook/useTeleport'

const Header: FC = () => {
  const { TeleportOut } = useTeleport()

  return (
    <div className='mx-auto max-w-3xl px-4 h-20 flex items-center justify-between border-b-[1px] border-b-white/10'>
      <span>Header</span>

      <TeleportOut teleportType='header' />
    </div>
  )
}

export default Header
