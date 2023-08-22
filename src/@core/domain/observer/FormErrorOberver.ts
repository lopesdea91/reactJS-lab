import { ObserverPublish, ObserverSubscribe } from "./ObserverAbstract";

export class FormErrorOberverSubscribe implements ObserverSubscribe {
  readonly name = "form-error";
  constructor(readonly callback: Function) {}
}
export class FormErrorOberverPublish implements ObserverPublish {
  readonly name = "form-error";
  constructor(readonly data: unknown) {}
}
