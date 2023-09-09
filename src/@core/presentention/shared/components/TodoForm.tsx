import React, { FC } from 'react'
import { todoController } from '../../../controllers/TodoController'
import Todo from '../../../entities/Todo'
import { useLayoutContext } from '../../../framework/context/layoutContext'
import { Input } from '../ui'
import { delay } from '../../../../utils/delay'
import { todoApi } from '../../../infra/Api/TodoApi'
import { observable_function } from '../../../entities/Observable_function'

interface TodoFormProps {
  execute: (p: React.Dispatch<React.SetStateAction<Todo>>) => () => void
  handleSubmitSuccess: () => void
}
export const TodoForm: FC<TodoFormProps> = ({ execute, handleSubmitSuccess }) => {
  const layoutContext = useLayoutContext()
  const [form, setForm] = React.useState<Todo>({
    id: 0,
    title: '',
    completed: false
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    try {
      observable_function.publish('loading', true)

      await delay(250)

      form.id
        ? await todoApi.update(form.id, form)
        : await todoApi.create(form)

      await delay(250)

      resetForm()

    } catch (error) {
      console.log('... error', error);

    } finally {
      handleSubmitSuccess()

      observable_function.publish('loading', false)
    }
  }
  async function handleDelete() {
    try {
      observable_function.publish('loading', true)

      await todoApi.delete(form.id)

    } catch (error) {
      console.log('... error', error);

    } finally {
      handleSubmitSuccess()

      observable_function.publish('loading', false)
    }
  }
  const resetForm = () => {
    setForm({
      id: 0,
      title: '',
      completed: false
    })
  }

  React.useEffect(() => {
    const executeDown = execute(setForm)
    return () => executeDown()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const buttonSubmitDisabled = layoutContext.loading
  const buttonDeleteDisabled = !form.id || layoutContext.loading

  return (
    <form onSubmit={handleSubmit} className='mb-5'>
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
          disabled={buttonSubmitDisabled}
          className={[
            'px-4 py-1 text-sm border-2 border-gray-900 bg-slate-800 text-gray-200 capitalize',
            buttonSubmitDisabled ? 'disabled:opacity-10 disabled:cursor-not-allowed' : 'hover:bg-white hover:text-gray-900'
          ].filter(Boolean).join(' ')}
          type='submit'
        >
          enviar
        </button>

        <button
          disabled={buttonDeleteDisabled}
          onClick={handleDelete}
          className={[
            'px-4 py-1 text-sm border-2 border-gray-900 bg-slate-800 text-gray-200 capitalize',
            buttonDeleteDisabled ? 'disabled:opacity-10 disabled:cursor-not-allowed' : 'hover:bg-white hover:text-gray-900',
          ].filter(Boolean).join(' ')}
          type='button'
        >
          remover
        </button>
      </div>
    </form>
  )
}
