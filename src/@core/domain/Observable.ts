interface Observer {
  event: string;
  callback: Function;
}

export default class Observable {
  private observers: Observer[] = [];

  constructor() {
    this.observers = [];
  }

  async subscribeWatcher(event: string, callback: Function) {
    const exist = this.observers.find((el) => el.event === event);
    if (!exist) {
      this.observers.push({ event, callback });
    }
  }

  async unsubscribeWatcher(event: string) {
    this.observers = this.observers.filter((el) => el.event !== event);
  }

  async watch(event: string, data?: unknown) {
    for (const observer of this.observers) {
      if (observer.event === event) {
        observer.callback(data);
      }
    }
  }
}
