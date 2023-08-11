import { FeedbackObserver } from "../domain/Observer";
import { appController } from "./AppController";
import { IAppInterface } from "./AppInterface";

export class HomeController {
  constructor(private readonly app: IAppInterface) {}

  async onSubmit(fields: { email: string; password: string }) {
    try {
      this.app.watch("loading", true);
      this.app.watch("feedbackInitial", null);

      // exemplo de erro
      if (fields.email === "test1@email.com") {
        throw Error("email ou senha incorretos");
      }

      // exemplo de sucesso
      this.app.watch(
        "feedback",
        new FeedbackObserver("success", "Seja bem vindo!")
      );
    } catch (err) {
      const error = err as Error;

      if (error.message === "email ou senha incorretos") {
        this.app.watch("feedbackForm", error.message);
      }
    } finally {
      this.app.watch("loading", false);
    }
  }
}

export const homeController = new HomeController(appController);
