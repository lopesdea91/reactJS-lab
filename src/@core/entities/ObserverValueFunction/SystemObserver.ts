import { ObserverInput, ObserverOutput } from "./ObserverValueFunction.types";

export const LoadingObserver = (input: ObserverInput = {}): ObserverOutput => {
  return { ...input, name: "loading" };
};
