function ObserverEventCallback_fn() {
  const items: Map<string, Function> = new Map();

  async function subscribe(event: string, callback: Function) {
    const exist = items.get(event);

    if (!exist) {
      items.set(event, callback);
    }

    return () => {
      items.delete(event);
    };
  }

  async function publish(event: string, params: unknown) {
    const events: Function[] = [];

    Array.from(items).forEach(([name, callback]) => {
      if (event === name) {
        events.push(callback(params));
      }
    });

    await Promise.all(events);
  }

  return { subscribe, publish };
}

export const observerEventCallback_fn = ObserverEventCallback_fn();
