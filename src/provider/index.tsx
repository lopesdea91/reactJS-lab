import { FC, ReactNode } from "react"
import { ProviderTeleport } from "./ProviderTeleport"

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ProviderTeleport>
      {children}
    </ProviderTeleport>
  )
}

export default AppProvider