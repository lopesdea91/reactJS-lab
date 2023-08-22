import { ObserverPublish, ObserverSubscribe } from "./ObserverAbstract";

type LoadingObserverData = boolean;

export class LoadingObserverSubscribe implements ObserverSubscribe {
  readonly name = "setup.loading";
  constructor(readonly callback: (val: LoadingObserverData) => void) {}
}

export class LoadingObserverPublish implements ObserverPublish {
  readonly name = "setup.loading";
  constructor(readonly data: LoadingObserverData) {}
}
