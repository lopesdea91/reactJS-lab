import React from 'react'
import Layout from '../../layouts'
import Table from './components/Table'
import { todoListController } from '../../../controllers/TodoListController'
import { useLayoutContext } from '../../../framework/context/layoutContext'
import Title from '../../shared/Title'
import TitleLoading from '../../shared/TitleLoading'

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
      <Title title='Page: todo list'>
        <TitleLoading status={layoutContext.loading} />
      </Title>
      <Table />
    </Layout>
  )
}

export default TodoListView
