import React, { FC } from 'react'
import Todo from '../../../entities/Todo'

interface TodoTableProps {
  execute: (p: React.Dispatch<React.SetStateAction<Todo[]>>) => () => void
  editId: (todo: Todo) => void
}
export const TodoTable: FC<TodoTableProps> = ({ execute, editId }) => {
  const [todos, setTodo] = React.useState<Todo[]>([])

  React.useEffect(() => {
    const executeDown = execute(setTodo)

    return () => {
      executeDown()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                onClick={() => editId(todo)}
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