import Observer from "./Observer"

export default class Observable {
  public observers: Observer[] = []

  constructor() {
    this.observers = []
  }

  async register(observer: Observer) {
    await new Promise(resolve => {
      const exist = this.observers.find(el => el.event === observer.event)

      if (!exist) {
        this.observers.push(observer)
      }

      resolve('ok')
    })
  }

  async unregister(event: string) {
    await new Promise(resolve => {
      this.observers = this.observers.filter(el => el.event !== event)

      resolve('ok')
    })
  }

  async notify(event: string, data: unknown) {
    await new Promise(resolve => {
      // for (const observer of this.observers) {
      //   if (observer.event === event) {
      //     observer.callback(data)
      //   }
      // }

      this.observers.forEach((observer) => {
        if (observer.event === event) {
          observer.callback(data)
        }
      })

      resolve('ok')
    })
  }
}