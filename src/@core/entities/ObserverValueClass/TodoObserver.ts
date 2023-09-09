import Todo from "../Todo";
import {
  ObserverPublish,
  ObserverSubscribe,
} from "./Observer.types";

type TodoFormObserverData = Todo;

export class TodoFormObserverSubscribe implements ObserverSubscribe {
  readonly name = "todo.form";
  constructor(readonly callback: (p: TodoFormObserverData) => void) {}
}

export class TodoFormObserverPublish implements ObserverPublish {
  readonly name = "todo.form";
  constructor(readonly data: TodoFormObserverData) {}
}

type TodoTableObserverData = Todo[];

export class TodoTableObserverSubscribe implements ObserverSubscribe {
  readonly name = "todo.table";
  constructor(readonly callback: (p: TodoTableObserverData) => void) {}
}

export class TodoTableObserverPublish implements ObserverPublish {
  readonly name = "todo.table";
  constructor(readonly data: TodoTableObserverData) {}
}
