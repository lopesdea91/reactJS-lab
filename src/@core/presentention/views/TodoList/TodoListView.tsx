import React from 'react'
import Layout from '../../layouts'
import Table from './components/Table'
import { todoListController } from '../../../controllers/TodoListController'
import { useLayoutContext } from '../../../framework/context/layoutContext'

const TodoListView = () => {
  const layoutContext = useLayoutContext()

  async function handler() {
    await todoListController.getTodos()
  }

  React.useEffect(() => {
    handler()
  }, [])

  return (
    <Layout>
      <div className='flex items-center justify-between mb-3'>
        <h1 className='text-2xl'>Page: todo list</h1>
        {layoutContext?.loading && <span className='inline-block text-lg'>loading ...</span>}
      </div>

      <Table />
    </Layout>
  )
}

export default TodoListView
