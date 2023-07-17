import React from 'react'
import Observer from '../../../../entities/Observer'
import { todoController } from '../TodoController'
import Todo from '../../../../entities/Todo'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const navigate = useNavigate()
  const [form, setForm] = React.useState<Todo>({
    id: 0,
    title: '',
    completed: false
  })

  React.useEffect(() => {
    todoController.register(new Observer('todoForm', (data: Todo) => {
      setForm(data)
    }))

    return () => {
      todoController.unregister('todoForm')
    }
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    try {
      form.id
        ? todoController.updateTodo()
        : todoController.createTodo()

    } catch (error) {
      console.log('... error', error);
    } finally {
      navigate('/todo-list')
    }
  }

  async function handleDelete() {
    try {
      await todoController.deleteTodo()
    } catch (error) {
      console.log('... error', error);
    } finally {
      navigate('/todo-list')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col gap-1 mb-3'>
        <label htmlFor="title">Title</label>
        <input
          className='border-[1px]'
          id='title'
          name='title'
          type='text'
          value={form.title}
          onChange={(e) => {
            setForm((prev) => ({ ...prev, title: e.target.value }))
            todoController.setForm({
              title: e.target.value
            })
          }}
        />
      </div>

      <div className='flex items-center gap-2'>
        <button
          className='px-4 py-1 text-sm border-2 border-gray-900 bg-slate-800 text-gray-200 hover:bg-white hover:text-gray-900 capitalize'
          type='submit'>
          enviar
        </button>

        <button
          disabled={!form.id}
          onClick={handleDelete}
          className='px-4 py-1 text-sm border-2 border-gray-900 bg-slate-800 text-gray-200 hover:bg-white hover:text-gray-900 disabled:opacity-20 capitalize'
          type='button'>
          remover
        </button>
      </div>
    </form>
  )
}

export default Form
