import Observable from "../entities/Observable";
import Todo from "../entities/Todo";

const url = `https://jsonplaceholder.typicode.com/todos`

class HomeController extends Observable {
  private nameCards: string[] = []

  public async cardReady(nameCard: string) {
    this.nameCards.push(nameCard)
  }
  async cardUnMonted(nameCard: string) {
    this.nameCards = this.nameCards.filter(currentNameCard => currentNameCard !== nameCard)
  }
  public reloadCards() {
    for (const nameCard of this.nameCards) {
      this.notify(nameCard, undefined)
    }
  }

  public async getTodoById(id: number) {
    const todoData: Todo = await fetch(`${url}/${id}`).then(r => r.json())

    return todoData
  }
}

export const homeController = new HomeController()