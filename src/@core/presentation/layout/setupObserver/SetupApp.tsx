import { FC, useEffect } from 'react'
import observer from '../../../domain/observer/Observer'
import { RedirectObserverSubscribe } from '../../../domain/observer'
import { useNavigate } from 'react-router-dom'

const SetupAuthStore: FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    observer.subscribe(new RedirectObserverSubscribe(navigate))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

export default SetupAuthStore
