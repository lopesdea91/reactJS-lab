import Observer from "./Observer"

export default class Observable {
  private observers: Observer[] = []

  constructor() {
    this.observers = []
  }

  register(observer: Observer) {
    this.observers.push(observer)
  }

  unregister(event: string) {
    this.observers.slice(this.observers.findIndex(el => el.event === event), 1)
  }

  notify(event: string, data: unknown) {
    for (const observer of this.observers) {
      if (observer.event === event) {
        observer.callback(data)
      }
    }
  }
}