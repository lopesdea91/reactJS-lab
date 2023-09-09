import {
  ObserverPublish,
  ObserverSubscribe,
} from "./Observer.types";

class ObserverValueClass {
  private observers: Map<
    ObserverSubscribe["name"],
    ObserverSubscribe["callback"]
  >;

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
        events.push(
          !!(value?.data !== undefined) ? callback(value?.data) : callback()
        );
      }
    });

    await Promise.all(events);
  }
}

export const observerValueClass = new ObserverValueClass();
