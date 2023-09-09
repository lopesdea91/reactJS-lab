import React from 'react'
import { homeController } from '../../../../controllers/homeController'
import Todo from '../../../../entities/Todo'
import { observable_function } from '../../../../entities/Observable_function'
import { todoApi } from '../../../../infra/Api/TodoApi'
import { LoadingObserver, observerValueFunction } from '../../../../entities/ObserverValueFunction'
import { delay } from '../../../../../utils/delay'

interface Cardprops {
  id: number
}
const CardItem = ({ id }: Cardprops) => {
  const [status, setStatus] = React.useState(true)
  const [todo, setTodo] = React.useState<Todo | null>(null)

  const nameCard = `card-${id}`
  const keyReloadCard = `key-card-${id}`

  async function getTodo() {
    observerValueFunction.publish(LoadingObserver({ data: true }))
    setStatus(true)

    await delay(1500)

    const todoData = await todoApi.getById(id)

    setTodo(todoData)

    observerValueFunction.publish(LoadingObserver({ data: false }))
    setStatus(false)
  }

  function up() {
    let nameDown: Function
    let reloadDown: Function

    observable_function.subscribe({
      event: nameCard,
      callback: (data: Todo) => {
        setTodo(data)
        setStatus(false)
      }
    }).then(d => nameDown = d)

    observable_function.subscribe({
      event: keyReloadCard,
      callback: getTodo
    }).then(d => reloadDown = d)

    homeController.cardReady(keyReloadCard)

    getTodo()

    return () => {
      nameDown()
      reloadDown()
    }
  }

  React.useEffect(() => {
    const down = up()

    return () => down()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className='border-[1px] border-gray-400 p-2 rounded-sm shadow-sm cursor-pointer hover:bg-slate-100 hover:shadow-lg'
      onClick={() => getTodo()}
    >
      <div className='flex items-center justify-between'>
        <h3>Card: (id: {id})</h3>
        <span className='text-xs'>{status ? 'loading' : ''}</span>
      </div>

      <p className='text-sm text-gray-500 truncate'>{status ? '...' : todo?.title}</p>
    </div>
  )
}

const CardRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
      {children}
    </div>
  )
}

export const Card = {
  Root: CardRoot,
  Item: CardItem,
}
