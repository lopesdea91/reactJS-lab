import { ObserverPublish, ObserverSubscribe } from "./ObserverAbstract";

export class Observable {
  private observers: Map<
    ObserverSubscribe["name"],
    ObserverSubscribe["callback"]
  > = new Map();

  constructor() {
    this.observers = new Map();
  }

  async subscribe(value: ObserverSubscribe) {
    const exist = this.observers.get(value.name);

    if (!exist) {
      this.observers.set(value.name, value.callback);
    }

    return () => {
      this.observers.delete(value.name);
    };
  }
  async publish(value: ObserverPublish) {
    const events: Function[] = [];

    Array.from(this.observers).forEach(([name, callback]) => {
      if (value.name === name) {
        events.push(!!value?.data ? callback(value?.data) : callback());
      }
    });

    await Promise.all(events);
  }
}

const observer = new Observable();

export default observer;
