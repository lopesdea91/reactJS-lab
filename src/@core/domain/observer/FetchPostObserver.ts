import { ObserverPublish, ObserverSubscribe } from "./ObserverAbstract";

type FetchPostObserverData = "fetch" | "reset";

export class FetchPostObserverSubscribe implements ObserverSubscribe {
  readonly name = "setup.fetchPost";
  constructor(readonly callback: (value: FetchPostObserverData) => void) {}
}

export class FetchPostObserverPublish implements ObserverPublish {
  readonly name = "setup.fetchPost";
  constructor(readonly data: FetchPostObserverData) {}
}
