import Observable from "../domain/Observable";

export class AppController extends Observable {
  public redirect(to: string) {
    this.watch("redirect", to);
  }
}

export const appController = new AppController();
