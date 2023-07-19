import React from 'react'
import { homeController } from '../../../../controllers/homeController'
import Observer from '../../../../entities/Observer'
import Todo from '../../../../entities/Todo'

interface Cardprops {
  id: number
}
const Card = ({ id }: Cardprops) => {
  const [status, setStatus] = React.useState(true)
  const [todo, setTodo] = React.useState<Todo | null>(null)

  const nameCard = `card-${id}`
  const keyReloadCard = `key-card-${id}`

  async function getTodo() {
    setStatus(true)

    const todoData = await homeController.getTodoById(id)
    setTodo(todoData)

    setStatus(false)
  }

  async function handler() {
    await homeController.register(new Observer(nameCard, (data: Todo) => {
      setTodo(data)
      setStatus(false)
    }))
    await homeController.register(new Observer(keyReloadCard, () => {
      getTodo()
    }))

    await homeController.cardReady(keyReloadCard)

    await getTodo()
  }

  React.useEffect(() => {
    handler()

    return () => {
      homeController.unregister(nameCard)
      homeController.unregister(keyReloadCard)
      homeController.cardUnMonted(keyReloadCard)
    }
  }, [])

  return (
    <div className='border-[1px] border-gray-400 p-2 rounded-sm shadow-sm cursor-pointer hover:bg-slate-100 hover:shadow-lg' onClick={getTodo}>
      <div className='flex items-center justify-between'>
        <h3>Card: (id: {id})</h3>
        <span className='text-xs'>{status ? 'loading' : ''}</span>
      </div>

      <p className='text-sm text-gray-500 truncate'>{status ? '...' : todo?.title}</p>
    </div>
  )
}

export default Card
