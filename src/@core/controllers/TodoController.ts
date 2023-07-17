import Observable from "../entities/Observable"
import Todo from "../entities/Todo"

export type Search = {
  page: number
  limit: number
}
class TodoController extends Observable {
  // constructor() {
  //   super()
  // }

  public search: Search = { page: 1, limit: 10 }

  public async getTodos() {
    const { page, limit } = this.search
    const url = `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
    const todoData: Todo[] = await fetch(url).then(res => res.json())

    this.notify('todoList', todoData)

    // this.notify('controllerData', {
    //   search: { page, limit },
    //   length: todoData.length
    // })

    // this.notify('level3', { page, limit })
  }

  public setSearch(values: Partial<Search>) {
    this.search = structuredClone({
      ...this.search,
      ...values
    })
  }

  teste() {
    return this.observers
  }
}

export const todoController = new TodoController()