import { DependencyList, FC, ReactNode, useContext, useEffect } from 'react'
import { TeleportContext } from '../../context/teleportContext'

export const useTeleportHook = () => {
  const { addTeleport, removeTeleport, hasTeleport } = useContext(TeleportContext)

  return { addTeleport, removeTeleport, hasTeleport, TeleportIn, TeleportOut }
}

interface TeleportInProps {
  type: string
  children: ReactNode
  deps?: DependencyList | undefined
}
const TeleportIn: FC<TeleportInProps> = function ({ type, children, deps }) {
  const { addTeleport } = useContext(TeleportContext)

  useEffect(() => {
    addTeleport({ type, el: children })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, deps])

  return null
}

interface TeleportOutProps {
  type: string
}
const TeleportOut: FC<TeleportOutProps> = function ({ type }) {
  const { teleportMap } = useContext(TeleportContext)

  return (teleportMap.get(type) as JSX.Element) || null
}
