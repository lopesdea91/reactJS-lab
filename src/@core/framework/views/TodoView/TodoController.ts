import Observable from "../../../entities/Observable";
import Todo from "../../../entities/Todo";

const url = `https://jsonplaceholder.typicode.com/todos`

class TodoController extends Observable {
  private todoForm: Todo = {
    id: 0,
    title: '',
    completed: false
  }

  public getForm(): Todo {
    return this.todoForm
  }
  public setForm(values: Partial<Todo>) {
    this.todoForm = {
      ...this.todoForm,
      ...values
    }
  }

  public async getTodoById(id: number) {
    const todoData: Todo = await fetch(`${url}/${id}`).then(r => r.json())

    this.todoForm = {
      id: todoData.id,
      title: todoData.title,
      completed: todoData.completed,
    }

    await new Promise(res => {
      setTimeout(res, 1500)
    })

    await this.notify('todoForm', todoData)
    await this.notify('todoFetch', false)
  }

  public async createTodo() {
    const body = JSON.stringify({
      // id: form.id,
      title: this.todoForm.title,
      completed: false,
      userId: 1
    })

    return await fetch(url, { method: 'POST', body }).then(r => r.json())
  }
  public async updateTodo() {
    const id = this.todoForm.id

    const body = JSON.stringify({
      id: this.todoForm.id,
      title: this.todoForm.title,
      completed: false,
      userId: 1
    })

    return await fetch(`${url}/${id}`, { method: 'PUT', body }).then(r => r.json())
  }
  public async deleteTodo() {
    const id = this.todoForm.id

    return await fetch(`${url}/${id}`, { method: 'DELETE' }).then(r => r.json())
  }
}

export const todoController = new TodoController()