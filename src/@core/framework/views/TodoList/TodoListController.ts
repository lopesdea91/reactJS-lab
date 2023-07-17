import Observable from "../../../entities/Observable";

export type TodoSearch = {
  page: number
  limit: number
}

class TodoListController extends Observable {
  private todoSearch: TodoSearch = { page: 1, limit: 10 }

  public setSearch(values: Partial<TodoSearch>) {
    this.todoSearch = {
      ...this.todoSearch,
      ...values
    }
  }
  public async getTodos() {
    const { page, limit } = this.todoSearch
    const url = `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}&_sort=id&_order=desc`
    const todoData = await fetch(url).then(r => r.json())

    await new Promise(res => {
      setTimeout(res, 1500)
    })

    await this.notify('todoList', todoData)
    await this.notify('todoListFetch', false)
  }
}

export const todoListController = new TodoListController()