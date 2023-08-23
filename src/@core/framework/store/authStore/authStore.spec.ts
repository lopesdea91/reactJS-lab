import { renderHook, waitFor } from "@testing-library/react";
import { IAuthStore, useAuthStore } from "./";

describe("src/@core/framework/store/authStore", () => {
  it("change values", async () => {
    const { result } = renderHook<IAuthStore, unknown>(useAuthStore);

    expect(result.current.data).toEqual({
      logged: false,
      user: {
        name: "",
        email: "",
      },
    });

    await waitFor(() => {
      result.current.setData({
        name: "pedro",
        email: "pedro@email.com",
      });

      result.current.setLogin(true);
    });

    expect(result.current.data).toEqual({
      logged: true,
      user: {
        name: "pedro",
        email: "pedro@email.com",
      },
    });
  });
});
