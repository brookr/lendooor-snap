"use client";

import Link from "next/link";
import WalletIcon from "../public/icons/WalletIcon";
import { Button } from "./ui/button";
import { useSDK, MetaMaskProvider } from "@metamask/sdk-react";
import { formatAddress } from "../lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import Image from 'next/image';

export const ConnectWalletButton = () => {
  const { sdk, connected, connecting, account } = useSDK();

  const connect = async () => {
    try {
      await sdk?.connect();
    } catch (err) {
      console.warn(`No accounts found`, err);
    }
  };

  const disconnect = () => {
    if (sdk) {
      sdk.terminate();
    }
  };

  return (
    <div className="relative">
      {connected ? (
        <Popover>
          <PopoverTrigger>
            <Button>{formatAddress(account)}</Button>
          </PopoverTrigger>
          <PopoverContent className="mt-2 w-44 bg-gray-100 border rounded-md shadow-lg right-0 z-10 top-10">
            <button
              onClick={disconnect}
              className="block w-full pl-2 pr-4 py-2 text-left text-[#F05252] hover:bg-gray-200"
            >
              Disconnect
            </button>
          </PopoverContent>
        </Popover>
      ) : (
        <Button disabled={connecting} onClick={connect}>
          <WalletIcon className="mr-2 h-4 w-4" /> Connect Wallet
        </Button>
      )}
    </div>
  );
};

export const NavBar = () => {
  const host =
    typeof window !== "undefined" ? window.location.host : "defaultHost";

  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Next-Metamask-Boilerplate",
      url: host,
    },
  };

  return (
    <nav className="flex items-center justify-between max-w-screen-xl px-6 mx-auto py-7 rounded-xl">
      <Link href="http://localhost:8000" className="flex gap-1 px-6">
        <Image src="/logo-lendooor.svg" alt="Lender Logo" width={40} height={40} />
        <span className="hidden text-2xl font-bold sm:block">
          <span className="text-gray-900">NFT Lendooor</span>
        </span>
      </Link>
      <div className="flex gap-4 px-6">
        <ConnectWalletButton />
      </div>
    </nav>
  );
};

export default NavBar;
