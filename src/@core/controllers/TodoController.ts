import { delay } from "../../utils/delay";
import Observable from "../entities/Observable";
import Todo from "../entities/Todo";
import { layoutController } from "./LayoutController";
import { LayoutControllerBase } from "./LayoutControllerBase";

const url = `https://jsonplaceholder.typicode.com/todos`

class TodoController extends Observable {
  constructor(private readonly layoutController: LayoutControllerBase) {
    super()
  }

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
    await this.layoutController.setLoading(true)

    const todoData: Todo = await fetch(`${url}/${id}`).then(r => r.json())

    this.todoForm = {
      id: todoData.id,
      title: todoData.title,
      completed: todoData.completed,
    }

    await delay(500)

    await this.layoutController.setLoading(false)

    await this.notify('todoForm', todoData)
  }

  public async createTodo() {
    await this.layoutController.setLoading(true)

    try {
      const body = JSON.stringify({
        // id: form.id,
        title: this.todoForm.title,
        completed: false,
        userId: 1
      })

      await fetch(url, { method: 'POST', body }).then(r => r.json())

      await delay(500)

    } catch (error) {
      console.log('... error', error);
    }

    await this.layoutController.setLoading(false)
  }

  public async updateTodo() {
    await this.layoutController.setLoading(true)

    try {
      const id = this.todoForm.id

      const body = JSON.stringify({
        id: this.todoForm.id,
        title: this.todoForm.title,
        completed: false,
        userId: 1
      })

      await fetch(`${url}/${id}`, { method: 'PUT', body }).then(r => r.json())

      await delay(500)

    } catch (error) {
      console.log('... error', error);
    }

    await this.layoutController.setLoading(false)
  }

  public async deleteTodo() {
    await this.layoutController.setLoading(true)

    try {
      const id = this.todoForm.id

      await fetch(`${url}/${id}`, { method: 'DELETE' }).then(r => r.json())

    } catch (error) {
      console.log('... error', error);
    }

    await this.layoutController.setLoading(false)
  }
}

export const todoController = new TodoController(layoutController)