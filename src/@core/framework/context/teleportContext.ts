import { ReactNode, createContext } from "react";

interface ITeleportContext {
  teleportMap: Map<string, ReactNode>;
  addTeleport: (p: { type: string; el: ReactNode }) => void;
  removeTeleport: (p: { type: string }) => void;
  hasTeleport: (p: { type: string }) => boolean;
}

export const TeleportContext = createContext({} as ITeleportContext);
