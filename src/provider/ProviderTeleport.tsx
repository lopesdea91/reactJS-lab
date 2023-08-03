import { FC, ReactNode, useState } from "react";
import { TeleportContext } from "../context/TeleportContext";
import { TeleportType } from "../types";

export const ProviderTeleport: FC<{ children: ReactNode }> = ({ children }) => {
  const [teleportMap, setTeleportMap] = useState(new Map());

  const addTeleportItem = (portalType: TeleportType, component: ReactNode) => {
    teleportMap.set(portalType, component);

    setTeleportMap(new Map(teleportMap));
  }

  const removeTeleportItem = (portalType: TeleportType) => {
    teleportMap.delete(portalType);

    setTeleportMap(new Map(teleportMap));
  }

  return (
    <TeleportContext.Provider value={{ teleportMap, addTeleportItem, removeTeleportItem }}>
      {children}
    </TeleportContext.Provider>
  )
}