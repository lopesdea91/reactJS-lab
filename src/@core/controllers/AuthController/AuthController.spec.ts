import {
  FormErrorOberverSubscribe,
  LoadingObserverSubscribe,
  RedirectObserverSubscribe,
  SignInObserverSubscribe,
  SignOutObserverSubscribe,
} from "../../domain/observer";
import observer from "../../domain/observer/Observer";
import { authController } from "./AuthController";

describe("src/@core/controllers/SignOutController/SignOutController.spec.ts", () => {
  let fields = {
    email: "",
    password: "123456",
  };

  it("method signIn fields error", async () => {
    const loadingSubiscribeMock = jest.fn();
    const formErrorSubiscribeMock = jest.fn();

    const subscribe1 = await observer.subscribe(
      new LoadingObserverSubscribe(loadingSubiscribeMock)
    );
    const subscribe2 = await observer.subscribe(
      new FormErrorOberverSubscribe(formErrorSubiscribeMock)
    );

    fields.email = "fake@email.com";
    await authController.signIn(fields);

    expect(loadingSubiscribeMock).toBeCalledTimes(2);
    expect(formErrorSubiscribeMock).toBeCalledTimes(1);

    subscribe1();
    subscribe2();
  });

  it("method signIn fields ok", async () => {
    const loadingSubiscribeMock = jest.fn();
    const SignInObserverMock = jest.fn();

    const subscribe1 = await observer.subscribe(
      new LoadingObserverSubscribe(loadingSubiscribeMock)
    );
    const subscribe2 = await observer.subscribe(
      new SignInObserverSubscribe(SignInObserverMock)
    );

    fields.email = "joao@email.com";
    await authController.signIn(fields);

    expect(loadingSubiscribeMock).toBeCalledTimes(2);
    expect(SignInObserverMock).toBeCalledTimes(1);

    subscribe1();
    subscribe2();
  });

  it("method signOut", async () => {
    const loadingSubiscribeMock = jest.fn();
    const SignOutObserverMock = jest.fn();
    const RedirectObserverMock = jest.fn();

    const subscribe1 = await observer.subscribe(
      new LoadingObserverSubscribe(loadingSubiscribeMock)
    );
    const subscribe2 = await observer.subscribe(
      new SignOutObserverSubscribe(SignOutObserverMock)
    );
    const subscribe3 = await observer.subscribe(
      new RedirectObserverSubscribe(RedirectObserverMock)
    );

    await authController.signOut();

    expect(loadingSubiscribeMock).toBeCalledTimes(2);
    expect(SignOutObserverMock).toBeCalledTimes(1);

    subscribe1();
    subscribe2();
    subscribe3();
  });
});
