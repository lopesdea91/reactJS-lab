import React from 'react'
import { todoListController } from '../../../../controllers/TodoListController'
import Observer from '../../../../entities/Observer'
import Todo from '../../../../entities/Todo'
import { useNavigate } from 'react-router-dom'

const Table = () => {
  const navigate = useNavigate()
  const [todos, setTodo] = React.useState<Todo[]>([])

  React.useEffect(() => {
    todoListController.register(new Observer('todoList', (data: Todo[]) => {
      setTodo(data)
    }))

    return () => {
      todoListController.unregister('todoList')
    }
  }, [])

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className='border-[1px] border-gray-900 bg-gray-800/75 text-white capitalize text-center px-2 py-1'>action</th>
          <th className='border-[1px] border-gray-900 bg-gray-800/75 text-white capitalize text-center px-2 py-1'>id</th>
          <th className='border-[1px] border-gray-900 bg-gray-800/75 text-white capitalize text-left px-2 py-1'>title</th>
          <th className='border-[1px] border-gray-900 bg-gray-800/75 text-white capitalize text-center px-2 py-1'>done</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <tr key={todo.id}>
            <td className='border-[1px] border-gray-900 capitalize px-2 py-1 text-center'>
              <button
                className='border-[1px] border-gray-900 font-sm px-2 hover:bg-gray-800/75 hover:text-white'
                onClick={() => navigate(`/todo/${todo.id}`)}
              >Edit</button>
            </td>
            <td className='border-[1px] border-gray-900 capitalize px-2 py-1 text-center'>{todo.id}</td>
            <td className='border-[1px] border-gray-900 capitalize px-2 py-1'>{todo.title}</td>
            <td className='border-[1px] border-gray-900 capitalize px-2 py-1 text-center'>{todo.completed ? 'done' : 'pending'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
