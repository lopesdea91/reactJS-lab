import React from "react"
import { controllerApp } from "../@core/controllers/AppControllers"
import Todo from "../@core/entities/Todo"
import Observer from "../@core/entities/Observer"

export const Table = () => {
  const [todos, setTodos] = React.useState<Todo[]>([])

  React.useEffect(() => {
    controllerApp.register(new Observer('getTodos', (values: Todo[]) => {
      console.log('... event Table');

      setTodos(values);
    }))
  }, [])

  return (
    <div>
      <h3>Table</h3>

      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>done</td>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? 'done' : 'pending'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}