import React from 'react'
import Layout from '../../layouts'
import Table from './components/Table'
import { todoListController } from './TodoListController'
import Observer from '../../../entities/Observer'

const TodoListView = () => {
  const [feting, setFeting] = React.useState<boolean>(true)

  async function handler() {
    await todoListController.register(new Observer('todoListFetch', () => {
      setFeting(false)
    }))

    await todoListController.getTodos()
  }

  React.useEffect(() => {
    handler()

    return () => {
      todoListController.unregister('todoListFetch')
    }
  }, [])

  return (
    <Layout>
      <div className='flex items-center justify-between mb-3'>
        <h1 className='text-2xl'>Page: todo list</h1>
        {feting && <span className='inline-block text-lg'>loading ...</span>}
      </div>

      <Table />
    </Layout>
  )
}

export default TodoListView
