import React from 'react'
import Layout from '../../layouts'
import { useParams } from 'react-router-dom'
import { todoController } from './TodoController'
import Observer from '../../../entities/Observer'
import Form from './components/Form'

const TodoView = () => {
  const [feting, setFeting] = React.useState<boolean>(false)
  const params = useParams()

  async function handler() {
    if (Number.isInteger(Number(params.id))) {
      setFeting(true)

      await todoController.register(new Observer('todoFetch', () => {
        setFeting(false)
      }))

      await todoController.getTodoById(parseInt(params.id as string))
    } else {
      setFeting(false)
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
        <h1 className='text-2xl'>Page: todo</h1>
        {feting && <span className='inline-block text-lg'>loading ...</span>}
      </div>

      <Form />
    </Layout>
  )
}

export default TodoView
