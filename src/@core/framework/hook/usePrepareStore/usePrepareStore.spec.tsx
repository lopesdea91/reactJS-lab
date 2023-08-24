import { renderHook } from "@testing-library/react";
import { usePrepareStoreHook } from "./";
import { ReactNode } from "react";
import { AppProvider } from "../../providers";

describe("src/@core/framework/store/loadingStore", () => {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <AppProvider>{children}</AppProvider>
  )

  it("render hook without value", async () => {
    const { result } = renderHook<{ pending: boolean }, unknown>(() => usePrepareStoreHook(), { wrapper });

    expect(result.current.pending).toBeFalsy();
  });

  it("render hook with value", async () => {
    window.localStorage.setItem('auth-reactJS-observerZustand', JSON.stringify({ email: 'joao@email.com' }))

    const { result } = renderHook<{ pending: boolean }, unknown>(() => usePrepareStoreHook(), { wrapper });

    expect(result.current.pending).toBeFalsy();
  });
});
