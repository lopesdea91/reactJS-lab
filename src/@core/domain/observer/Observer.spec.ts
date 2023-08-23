import { Observable } from "./Observer";
import {
  FormErrorOberverPublish,
  FormErrorOberverSubscribe,
} from "./FormErrorOberver";

describe("src/@core/domain/observer/Observer", () => {
  const myObserver = new Observable();

  it("method subscribe", async () => {
    const subscribeMock = jest.fn();

    /** add subscribe */
    myObserver.subscribe(new FormErrorOberverSubscribe(subscribeMock));

    /** try subscribe again */
    myObserver.subscribe(new FormErrorOberverSubscribe(subscribeMock));

    myObserver.publish(new FormErrorOberverPublish("message example"));

    expect(subscribeMock).toBeCalledTimes(1);
  });
});
