import { ObserverSubscribe } from "./Observable.types";

function Observable_function() {
  const items: Map<string, Function> = new Map();

  async function subscribe(observer: ObserverSubscribe) {
    const exist = items.get(observer.event);

    if (!exist) {
      items.set(observer.event, observer.callback);
    }

    return () => {
      items.delete(observer.event);
    };
  }

  async function publish(event: string, data: unknown) {
    const events: Function[] = [];

    Array.from(items).forEach(([name, callback]) => {
      if (event === name) {
        events.push(callback(data));
      }
    });

    await Promise.all(events);
  }

  return { subscribe, publish };
}

export const observable_function = Observable_function();
