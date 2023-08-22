import {
  LoadingObserverPublish,
  RedirectObserverPublish,
  SignInObserverPublish,
  SignOutObserverPublish,
} from "../../domain/observer";
import observer from "../../domain/observer/Observer";

export class AuthController {
  async signIn({ email }: { email: string; password: string }) {
    try {
      await observer.publish(new LoadingObserverPublish(true));

      if (email !== "joao@email.com") {
        throw Error("email ou senha incorretos");
      }

      await new Promise((res) => setTimeout(res, 1250));

      window.localStorage.setItem(
        "auth-reactJS-observerZustand",
        JSON.stringify({
          email,
        })
      );

      await observer.publish(
        new SignInObserverPublish({
          name: email.split("@")[0],
          email,
        })
      );
    } catch (err) {
      const error = err as Error;

      console.log("... error", error);
    } finally {
      await observer.publish(new LoadingObserverPublish(false));
    }
  }

  async signOut() {
    try {
      await observer.publish(new LoadingObserverPublish(true));

      await new Promise((res) => setTimeout(res, 1250));

      await observer.publish(new SignOutObserverPublish());

      await observer.publish(new RedirectObserverPublish("/"));

      window.localStorage.removeItem("auth-reactJS-observerZustand");
    } catch (err) {
      const error = err as Error;

      console.log("... error", error);
    } finally {
      await observer.publish(new LoadingObserverPublish(false));
    }
  }
}

export const authController = new AuthController();
