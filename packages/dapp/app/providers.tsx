'use client'

import { ReactNode } from 'react'
import { MetaMaskProvider } from "@metamask/sdk-react";

export function Providers({ children }: { children: ReactNode }) {
  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Lendooor",
      url: typeof window !== 'undefined' ? window.location.origin : '',
    },
  };

  return (
    <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
      {children}
    </MetaMaskProvider>
  )
}
