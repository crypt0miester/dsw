'use client';

import { Connection, Keypair } from '@solana/web3.js';
import React, { useContext, useEffect, useMemo, useState } from 'react';

export type ENV = 'mainnet-beta' | 'testnet' | 'devnet' | 'localnet';

export const ENDPOINTS = [
  {
    name: 'mainnet-beta' as ENV,
    endpoint: 'https://api.mainnet-beta.solana.com/',
  },
  {
    name: 'devnet' as ENV,
    endpoint: 'https://api.devnet.solana.com/',
  },
];

const DEFAULT = ENDPOINTS[0].endpoint;

interface ConnectionConfig {
  connection: Connection;
  endpoint: string;
  env: ENV;
  setEndpoint: (val: string) => void;
}

const ConnectionContext = React.createContext<ConnectionConfig>({
  endpoint: DEFAULT,
  setEndpoint: () => { },
  connection: new Connection(DEFAULT, 'recent'),
  env: ENDPOINTS[0].name,
});

export function ConnectionProvider({
  children = undefined,
}: {
  children: React.ReactNode;
}) {
  const [endpoint, setEndpoint] = useState(ENDPOINTS[0].endpoint);

  const connection = useMemo(
    () => new Connection(endpoint, 'recent'),
    [endpoint],
  );

  const env =
    ENDPOINTS.find((end) => end.endpoint === endpoint)?.name ||
    ENDPOINTS[0].name;

  return (
    <ConnectionContext.Provider
      value={{
        endpoint,
        setEndpoint,
        connection,
        env,
      }}
    >
      {children}
    </ConnectionContext.Provider>
  );
}

export function useConnection() {
  return useContext(ConnectionContext).connection as Connection;
}

export function useConnectionConfig() {
  const context = useContext(ConnectionContext);
  return {
    endpoint: context.endpoint,
    setEndpoint: context.setEndpoint,
    env: context.env,
  };
}
