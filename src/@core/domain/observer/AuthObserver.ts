import { IAuth } from "../entities/Auth";
import { ObserverPublish, ObserverSubscribe } from "./ObserverAbstract";

// SignIn
type SignInObserverData = IAuth;

export class SignInObserverSubscribe implements ObserverSubscribe {
  readonly name = "setup.SignIn";
  constructor(readonly callback: (value: SignInObserverData) => void) {}
}
export class SignInObserverPublish implements ObserverPublish {
  readonly name = "setup.SignIn";
  constructor(readonly data: SignInObserverData) {}
}

// SignOut
export class SignOutObserverSubscribe implements ObserverSubscribe {
  readonly name = "setup.SignOut";
  constructor(readonly callback: Function) {}
}
export class SignOutObserverPublish implements ObserverPublish {
  readonly name = "setup.SignOut";
}
