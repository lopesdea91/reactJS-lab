import { ObserverInput, ObserverOutput } from "./ObserverValueFunction.types";

export const TodoFormObserver = (input: ObserverInput): ObserverOutput => {
  return { ...input, name: "todo.form" };
};
export const TodoTableObserver = (input: ObserverInput): ObserverOutput => {
  return { ...input, name: "todo.table" };
};
