import React from 'react'
import Layout from '../../layouts'
import { useParams } from 'react-router-dom'
import { todoController } from '../../../controllers/TodoController'
import Form from './components/Form'
import { useLayoutContext } from '../../../framework/context/layoutContext'

const TodoView = () => {
  const params = useParams()
  const isEdit = Number.isInteger(Number(params.id))
  const currentAction = isEdit ? 'update' : 'create'

  const layoutContext = useLayoutContext()

  async function handler() {
    if (isEdit) {
      await todoController.getTodoById(parseInt(params.id as string))
    }
  }

  React.useEffect(() => {
    handler()

    return () => {
      todoController.unregister('todoFetch')
    }
  }, [])

  return (
    <Layout>
      <div className='flex items-center justify-between mb-3'>
        <h1 className='text-2xl'>Page: {currentAction} todo</h1>
        {layoutContext.loading && <span className='inline-block text-lg'>loading ...</span>}
      </div>

      <Form />
    </Layout>
  )
}

export default TodoView
