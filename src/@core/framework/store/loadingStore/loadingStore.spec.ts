import { renderHook, waitFor } from "@testing-library/react";
import { ILoadingStore, useLoadingStore } from "./";

describe("src/@core/framework/store/loadingStore", () => {
  it("change values", async () => {
    const { result } = renderHook<ILoadingStore, unknown>(useLoadingStore);

    expect(result.current.loading).toBeFalsy();

    await waitFor(() => {
      result.current.setStatus(true);
    });

    expect(result.current.loading).toBeTruthy();
  });
});
