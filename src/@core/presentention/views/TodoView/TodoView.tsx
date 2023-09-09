import React from 'react'
import Layout from '../../layouts'
import { useParams } from 'react-router-dom'
import { todoController } from '../../../controllers/TodoController'
import Form from './components/Form'
import { useLayoutContext } from '../../../framework/context/layoutContext'

const TodoView = () => {
  const layoutContext = useLayoutContext()
  const params = useParams()
  const isEdit = Number.isInteger(Number(params.id))
  const currentAction = isEdit ? 'update' : 'create'

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
      {/* <Title title={`Page: ${currentAction} todo`}>
        <TitleLoading status={layoutContext.loading} />
      </Title> */}
      <Form />
    </Layout>
  )
}

export default TodoView
