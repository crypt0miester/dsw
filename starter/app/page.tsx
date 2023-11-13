'use client';
import { WalletMultiButton } from '../ui/WalletMultiButton';
import { useEffect, useState } from "react";
import { useWallet } from '@solana/wallet-adapter-react';
import { generatedAppSpecificKeypair } from './dsw';

if (typeof Buffer === "undefined") {
  global.Buffer = require("buffer/").Buffer;
}

export default function Page() {

  const [hydration, setHydration] = useState(false);
  const { connected, publicKey, signMessage } = useWallet();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHydration(true);
    }
  }, [hydration]);
  useEffect(() => {
    if (connected) {
      signThis()
    }
  }, [connected]);
  if (!hydration)
    return (
      <div></div>
    );

  const signThis = async () => {
    if (!signMessage) return;
    if (!publicKey) return;
    await generatedAppSpecificKeypair(publicKey, "DSW Test", signMessage)
  }
  return (
    <div className="space-y-6">
      <div className="space-y-8 text-white">
        <WalletMultiButton className="px-4 mx-auto" />
      </div>
    </div>
  );
}
