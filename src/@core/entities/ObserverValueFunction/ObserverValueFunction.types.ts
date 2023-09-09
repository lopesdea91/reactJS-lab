export interface ObserverInput {
  callback?: Function;
  data?: unknown;
}
export interface ObserverOutput extends ObserverInput {
  name: string;
}

export interface Observer extends ObserverOutput {}
