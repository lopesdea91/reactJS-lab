import { ObserverPublish, ObserverSubscribe } from "./ObserverAbstract";

type RedirectObserverData = string;

export class RedirectObserverSubscribe implements ObserverSubscribe {
  readonly name = "setup.redirect";
  constructor(readonly callback: (val: RedirectObserverData) => void) {}
}

export class RedirectObserverPublish implements ObserverPublish {
  readonly name = "setup.redirect";
  constructor(readonly data: RedirectObserverData) {}
}
