import React, { useEffect } from 'react'
import { useLayoutContext } from '../../../framework/context/layoutContext'
import Todo from '../../../entities/Todo'
import Layout from '../../layouts'
import { Title } from '../../shared/ui'
import { TodoForm, TodoTable } from '../../shared/components'
import { todoApi } from '../../../infra/Api/TodoApi'
import { TodoFormObserver, TodoTableObserver, observerValueFunction } from '../../../entities/ObserverValueFunction'

const observer = observerValueFunction

export const ObserverValueFunction = () => {
  const layoutContext = useLayoutContext()

  const getTodos = async () => {
    const todos = await todoApi.getAll({ page: 1, limit: 5 })

    observer.publish(TodoTableObserver({ data: todos }))
  }
  const executeForm = (setForm: React.Dispatch<React.SetStateAction<Todo>>) => {
    let down: Function
    observer.subscribe(TodoFormObserver({ callback: setForm })).then(d => down = d)

    return () => down()
  }
  const executeTable = (setTable: React.Dispatch<React.SetStateAction<Todo[]>>) => {
    let down: Function
    observer.subscribe(TodoTableObserver({ callback: setTable })).then(d => down = d)

    return () => down()
  }
  const editId = (todo: Todo) => {
    observer.publish(TodoFormObserver({ data: todo }))
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
        <Title.Text text='Observer Value Function' />
        <Title.Loading status={layoutContext.loading} />
      </Title.Root>

      <TodoForm execute={executeForm} handleSubmitSuccess={handleSubmitSuccess} />
      <TodoTable execute={executeTable} editId={editId} />
    </Layout>
  )
}