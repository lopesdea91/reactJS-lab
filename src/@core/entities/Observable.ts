import { delay } from "../../utils/delay"
import Observer from "./Observer"

export default class Observable {
  public observers: Observer[] = []

  constructor() {
    this.observers = []
  }

  async register(observer: Observer) {
    await delay()

    const exist = this.observers.find(el => el.event === observer.event)

    if (!exist) {
      this.observers.push(observer)
    }
  }

  async unregister(event: string) {
    await delay()

    this.observers = this.observers.filter(el => el.event !== event)
  }

  async notify(event: string, data: unknown) {
    await delay(100)

    for (const observer of this.observers) {
      if (observer.event === event) {
        observer.callback(data)
      }
    }
  }
}