import React, { useEffect } from 'react'
import { useLayoutContext } from '../../../framework/context/layoutContext'
import Todo from '../../../entities/Todo'
import Layout from '../../layouts'
import { Title } from '../../shared/ui'
import { TodoForm, TodoTable } from '../../shared/components'
import { todoApi } from '../../../infra/Api/TodoApi'
import { observerEventCallback_class } from '../../../entities/ObserverEventCallback_class'
import { observerEventCallback_fn } from '../../../entities/ObserverEventCallback_fn'

const observer = observerEventCallback_class

export const ObserverEventCallback = () => {
  const layoutContext = useLayoutContext()

  const getTodos = async () => {
    const todos = await todoApi.getAll({ page: 1, limit: 5 })

    observer.publish('todoTable', todos)
  }
  const executeForm = (setForm: React.Dispatch<React.SetStateAction<Todo>>) => {
    let down: Function
    observer.subscribe('todoForm', setForm).then(d => down = d)

    return () => down()
  }
  const executeTable = (setTable: React.Dispatch<React.SetStateAction<Todo[]>>) => {
    let down: Function
    observer.subscribe('todoTable', setTable).then(d => down = d)

    return () => down()
  }
  const editId = (todo: Todo) => {
    observer.publish('todoForm', todo)
  }
  const handleSubmitSuccess = () => {
    getTodos()
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <Layout>
      <Title.Root>
        <Title.Text text='Observer Event Callback' />
        <Title.Loading status={layoutContext.loading} />
      </Title.Root>

      <TodoForm execute={executeForm} handleSubmitSuccess={handleSubmitSuccess} />
      <TodoTable execute={executeTable} editId={editId} />
    </Layout>
  )
}