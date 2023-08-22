import React from "react";
import { useTeleportHook } from "../useTeleport";
import { AuthForm } from "../../../presentation/shared/form/AuthForm";
import { useAuthStore } from "../../store";

export const usePrepareStoreHook = () => {
  const [pending, setStatus] = React.useState(true);
  const { addTeleport } = useTeleportHook();
  const authStore = useAuthStore();

  async function init() {
    const storageData = window.localStorage.getItem("auth-reactJS-observerZustand");
    const { email } = (storageData ? JSON.parse(storageData) : {}) as { email?: string };

    if (email) {
      authStore.setData({
        name: '',
        email
      })
    } else {
      addTeleport({
        type: "modal",
        el: <AuthForm />,
      });

    }

    await new Promise((resolve) => {
      setTimeout(resolve, 1250);
    });

    setStatus(false);
  }

  React.useEffect(() => {
    init();
  }, []);

  return {
    pending,
  };
};
