import { FC, useEffect } from 'react'
import { useAuthStore, useLoadingStore } from '../../../framework/store'
import observer from '../../../domain/observer/Observer'
import { LoadingObserverSubscribe, SignInObserverSubscribe, SignOutObserverSubscribe } from '../../../domain/observer'
import { useTeleportHook } from '../../../framework/hook'

const SetupAuthStore: FC = () => {
  const authStore = useAuthStore()
  const loadingStore = useLoadingStore()
  const { removeTeleport } = useTeleportHook()

  useEffect(() => {
    observer.subscribe(new SignInObserverSubscribe((value) => {
      authStore.setLogin(true)
      authStore.setData(value)

      removeTeleport({ type: 'modal' })
    }))
    observer.subscribe(new SignOutObserverSubscribe(() => {
      authStore.setLogin(false)
      authStore.setData({
        name: '',
        email: ''
      })
    }))
    observer.subscribe(new LoadingObserverSubscribe(loadingStore.setStatus))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

export default SetupAuthStore
