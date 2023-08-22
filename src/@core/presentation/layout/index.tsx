import { FC, ReactNode } from 'react'
import { usePrepareStoreHook } from '../../framework/hook'
import { Header, Loading, Main, Modal } from './partials'
import SetupObserver from './setupObserver'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { pending } = usePrepareStoreHook()

  return (
    <>
      <SetupObserver />

      {pending
        ? (
          <Loading />
        ) : (
          <>
            <Modal />
            <Header />
            <Main>
              {children}
            </Main>
          </>
        )
      }
    </>
  )
}

export default Layout
