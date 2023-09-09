import React, { useEffect } from 'react'
import { useLayoutContext } from '../../../framework/context/layoutContext'
import Todo from '../../../entities/Todo'
import Layout from '../../layouts'
import { Title } from '../../shared/ui'
import { TodoForm, TodoTable } from '../../shared/components'
import { todoApi } from '../../../infra/Api/TodoApi'
import { TodoFormObserverPublish, TodoFormObserverSubscribe, TodoTableObserverPublish, TodoTableObserverSubscribe, observerValueClass } from '../../../entities/ObserverValueClass'

const observer = observerValueClass

export const ObserverValueClass = () => {
  const layoutContext = useLayoutContext()

  const getTodos = async () => {
    const todos = await todoApi.getAll({ page: 1, limit: 5 })

    observer.publish(new TodoTableObserverPublish(todos))
  }
  const executeForm = (setForm: React.Dispatch<React.SetStateAction<Todo>>) => {
    let down: Function
    observer.subscribe(new TodoFormObserverSubscribe(setForm)).then(d => down = d)

    return () => down()
  }
  const executeTable = (setTable: React.Dispatch<React.SetStateAction<Todo[]>>) => {
    let down: Function
    observer.subscribe(new TodoTableObserverSubscribe(setTable)).then(d => down = d)

    return () => down()
  }
  const editId = (todo: Todo) => {
    observer.publish(new TodoFormObserverPublish(todo))
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
        <Title.Text text='Observer Value Class' />
        <Title.Loading status={layoutContext.loading} />
      </Title.Root>

      <TodoForm execute={executeForm} handleSubmitSuccess={handleSubmitSuccess} />
      <TodoTable execute={executeTable} editId={editId} />
    </Layout>
  )
}