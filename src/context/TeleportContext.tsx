import { createContext, ReactNode } from "react";
import { TeleportType } from "../types";

interface ITeleportContext {
  teleportMap: Map<TeleportType, ReactNode>;
  addTeleportItem: (portalType: TeleportType, component: ReactNode) => void;
  removeTeleportItem: (portalType: TeleportType) => void;
}

export const TeleportContext = createContext({} as ITeleportContext);
