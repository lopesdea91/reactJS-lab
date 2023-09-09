export class ObserverSubscribe {
  constructor(readonly event: string, readonly callback: Function) {}
}

export class ObserverPublish {
  constructor(readonly event: string, readonly data?: unknown) {}
}
