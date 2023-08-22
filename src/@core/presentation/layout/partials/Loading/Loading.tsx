import { cssMerge } from '../../../../../utils'

export const Loading = () => {
  return (
    <div className={cssMerge(
      'h-screen w-screen flex items-center justify-center text-white/75 bg-slate-900'
    )}>
      Carregando ...
    </div>
  )
}