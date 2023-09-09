class ObserverEventCallback_class {
  private items: Map<string, Function>;

  constructor() {
    this.items = new Map();
  }

  async subscribe(event: string, callback: Function) {
    const exist = this.items.get(event);

    if (!exist) {
      this.items.set(event, callback);
    }

    return () => {
      this.items.delete(event);
    };
  }

  async publish(event: string, params: unknown) {
    const events: Function[] = [];

    Array.from(this.items).forEach(([name, callback]) => {
      if (event === name) {
        events.push(callback(params));
      }
    });

    await Promise.all(events);
  }
}

export const observerEventCallback_class = new ObserverEventCallback_class();
