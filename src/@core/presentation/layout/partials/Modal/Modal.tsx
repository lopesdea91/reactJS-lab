import { FC } from 'react'
import { useTeleportHook } from '../../../../framework/hook/useTeleport'
import Button from '../../../shared/ui/Button'

export const Modal: FC = () => {
  const { TeleportOut, hasTeleport, removeTeleport } = useTeleportHook()

  const hasModal = hasTeleport({ type: 'modal' })

  if (!hasModal) return null

  function close() {
    removeTeleport({ type: 'modal' })
  }

  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white px-8 py-6 mx-4 shadow-lg rounded-md w-full max-w-sm'>
        <div className='-mt-2 mb-1 flex items-center justify-end'>
          <Button onClick={close}>X</Button>
        </div>

        <TeleportOut type='modal' />
      </div>
    </div>
  )
}
