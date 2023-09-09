import React from 'react'
import Layout from '../../layouts'
import { todoListController } from '../../../controllers/TodoListController'
import { useLayoutContext } from '../../../framework/context/layoutContext'
import { TodoForm, TodoTable } from './components'
import { Title } from '../../shared/ui'

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
      <Title.Root>
        <Title.Text text='Page: todo list' />
        <Title.Loading status={layoutContext.loading} />
      </Title.Root>

      <TodoForm />
      <TodoTable />
    </Layout>
  )
}

export default TodoListView
