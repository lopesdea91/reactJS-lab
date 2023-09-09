import { ObserverSubscribe, ObserverPublish } from "./Observable.types";

class Observable_class {
  public items: Map<string, Function>;

  constructor() {
    this.items = new Map();
  }

  async subscribe(observer: ObserverSubscribe) {
    const exist = this.items.get(observer.event);

    if (!exist) {
      this.items.set(observer.event, observer.callback);
    }

    return () => {
      this.items.delete(observer.event);
    };
  }

  async publish(observer: ObserverPublish) {
    const events: Function[] = [];

    Array.from(this.items).forEach(([name, callback]) => {
      if (observer.event === name) {
        events.push(callback(observer?.data));
      }
    });

    await Promise.all(events);
  }
}

export const observable_class = new Observable_class();
