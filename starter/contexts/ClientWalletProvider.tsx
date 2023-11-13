'use client';

import type { WalletProviderProps } from '@solana/wallet-adapter-react';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
  PhantomWalletAdapter,
} from '@solana/wallet-adapter-phantom';
import {
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-solflare';
import { useMemo } from 'react';

export function ClientWalletProvider(
  props: Omit<WalletProviderProps, 'wallets'>,
): JSX.Element {
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter()
    ],
    [],
  );

  return (
    <WalletProvider wallets={wallets} autoConnect {...props}>
      <WalletModalProvider {...props} />
    </WalletProvider>
  );
}

export default ClientWalletProvider;
