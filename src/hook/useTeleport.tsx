import { FC, ReactNode, useContext, useEffect } from "react";
import { TeleportType } from "../types";
import { TeleportContext } from "../context/TeleportContext";

export default function useTeleport() {
  const { addTeleportItem, removeTeleportItem } = useContext(TeleportContext);

  function addElement(value: { element: ReactNode, portalType: TeleportType }) {
    addTeleportItem(value.portalType, value.element);
  }
  function removeElement(value: { portalType: TeleportType }) {
    removeTeleportItem(value.portalType);
  }

  return { TeleportIn, TeleportOut, addElement, removeElement };
}

const TeleportIn: FC<{ children: ReactNode; teleportType: TeleportType }> = (props) => {
  const { addTeleportItem, removeTeleportItem } = useContext(TeleportContext);

  useEffect(() => {
    addTeleportItem(props.teleportType, props.children);

    return () => removeTeleportItem(props.teleportType);
  }, [props.teleportType, props.children]);

  return null;
};
const TeleportOut: FC<{ teleportType: TeleportType }> = (props) => {
  const { teleportMap } = useContext(TeleportContext);

  const content = teleportMap.get(props.teleportType) as JSX.Element

  return content || null;
};