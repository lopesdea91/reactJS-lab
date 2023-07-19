import Observer from "./Observer"

export default class Observable {
  public observers: Observer[] = []

  constructor() {
    this.observers = []
  }

  async register(observer: Observer) {
    // await delay(25)

    const exist = this.observers.find(el => el.event === observer.event)

    if (!exist) {
      this.observers.push(observer)
    }
  }

  async unregister(event: string) {
    // await delay(25)

    this.observers = this.observers.filter(el => el.event !== event)
  }

  async notify(event: string, data: unknown) {
    // await delay(25)

    for (const observer of this.observers) {
      if (observer.event === event) {
        observer.callback(data)
      }
    }
  }
}