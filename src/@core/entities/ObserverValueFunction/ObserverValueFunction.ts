import { Observer } from "./ObserverValueFunction.types";

class ObserverValueFunction {
  private observers: Map<string, Function>;

  constructor() {
    this.observers = new Map();
  }
  async subscribe(value: Observer) {
    const exist = this.observers.get(value.name);

    if (!exist) {
      this.observers.set(value.name, value.callback as Function);
    }

    return () => {
      this.observers.delete(value.name);
    };
  }
  async publish(value: Observer) {
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

export const observerValueFunction = new ObserverValueFunction();
