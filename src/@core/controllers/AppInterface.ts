export interface IAppInterface {
  // Observeble
  subscribeWatcher: (event: string, callback: Function) => Promise<void>;
  unsubscribeWatcher: (event: string) => Promise<void>;
  watch: (event: string, data: unknown) => Promise<void>;

  // redirect

  // notify
}
