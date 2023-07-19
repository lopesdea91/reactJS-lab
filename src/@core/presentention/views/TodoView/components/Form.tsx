import React from 'react'
import Observer from '../../../../entities/Observer'
import { todoController } from '../../../../controllers/TodoController'
import Todo from '../../../../entities/Todo'
import { useNavigate } from 'react-router-dom'
import { useLayoutContext } from '../../../../framework/context/layoutContext'
import Input from '../../../shared/Input'

const Form = () => {
  const navigate = useNavigate()
  const layoutContext = useLayoutContext()
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
        ? await todoController.updateTodo()
        : await todoController.createTodo()

    } catch (error) {
      console.log('... error', error);

    } finally {
      navigate('/todo-list')
    }
  }

  async function handleDelete() {
    await todoController.deleteTodo()

    navigate('/todo-list')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col gap-1 mb-3'>
        <label htmlFor="title">Title</label>
        <Input
          className='border-[1px] px-2'
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
          disabled={layoutContext.loading}
        />
      </div>

      <div className='flex items-center gap-2'>
        <button
          disabled={layoutContext.loading}
          className='px-4 py-1 text-sm border-2 border-gray-900 bg-slate-800 text-gray-200 hover:bg-white hover:text-gray-900 capitalize'
          type='submit'
        >
          enviar
        </button>

        <button
          disabled={!form.id || layoutContext.loading}
          onClick={handleDelete}
          className={[
            'px-4 py-1 text-sm border-2 border-gray-900 bg-slate-800 text-gray-200 disabled:opacity-20 capitalize',
            form.id ? 'hover:bg-white hover:text-gray-900' : '',
          ].join(' ')}
          type='button'
        >
          remover
        </button>
      </div>
    </form>
  )
}

export default Form
