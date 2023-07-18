import { delay } from "../../utils/delay";
import Observable from "../entities/Observable";
import { layoutController } from "./LayoutController";
import { LayoutControllerBase } from "./LayoutControllerBase";

export type TodoSearch = {
  page: number
  limit: number
}

class TodoListController extends Observable {
  constructor(private readonly layoutController: LayoutControllerBase) {
    super()
  }

  private todoSearch: TodoSearch = { page: 1, limit: 10 }

  public setSearch(values: Partial<TodoSearch>) {
    this.todoSearch = {
      ...this.todoSearch,
      ...values
    }
  }
  public async getTodos() {
    await this.layoutController.setLoading(true)

    const { page, limit } = this.todoSearch
    const url = `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}&_sort=id&_order=desc`
    const todoData = await fetch(url).then(r => r.json())

    await delay(500)

    await this.layoutController.setLoading(false)

    await this.notify('todoList', todoData)

    await this.notify('todoListFetch', false)
  }
}

export const todoListController = new TodoListController(layoutController)