import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../../../framework/store'
import { cssMerge } from '../../../../../utils'
import { useTeleportHook } from '../../../../framework/hook/useTeleport'
import { AuthForm } from '../../../shared/form/AuthForm'
import { authController } from '../../../../controllers/AuthController'

export const Header = () => {
  const authStore = useAuthStore()
  const navigate = useNavigate()

  return (
    <div className='bg-slate-800 text-zinc-200 shadow-md mb-3'>
      <div className='mx-auto max-w-3xl flex items-center h-16'>
        <h1 className='text-lg mr-4'>MyApp</h1>
        <ul className='text-sm mr-auto flex items-center'>
          <li
            className='cursor-pointer duration-150 hover:opacity-90 hover:bg-white/10 px-4 py-1'
            onClick={() => navigate('/')}
          >
            Home
          </li>
        </ul>

        <ButtonAuth
          logged={authStore.data.logged}
          userName={authStore.data.user.name}
        />
      </div>
    </div>
  )
}

const ButtonAuth: FC<{ logged: boolean, userName: string }> = ({ logged, userName }) => {
  const { addTeleport } = useTeleportHook()

  function openModal() {
    addTeleport({
      type: 'modal',
      el: (<AuthForm />)
    })
  }
  function signOut() {
    authController.signOut()
  }

  return logged ? (
    <div className='flex items-center gap-4'>
      <span className='border-b-2 border-white/25 px-4 py-1'>
        Olá {userName}
      </span>

      <button
        onClick={signOut}
        className={cssMerge(
          'border-2 border-white/25 text-white/50 px-4 py-1 rounded',
          'duration-150 hover:border-white/75 hover:text-white'
        )}
      >
        sair
      </button>
    </div>
  ) : (
    <button
      onClick={openModal}
      className={cssMerge(
        'border-2 border-white/25 text-white/50 px-4 py-1 rounded',
        'duration-150 hover:border-white/75 hover:text-white'
      )}
    >
      Fazer login
    </button>
  )
}