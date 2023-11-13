import "../styles/globals.css";
import "../styles/wallet-adapter.css";

import React from 'react';
import { ConnectionProvider } from '../contexts/ConnectionContextProvider';
import { ClientWalletProvider } from '../contexts/ClientWalletProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>DSW Test</title>
      </head>
      <body className="overflow-y-scroll bg-zinc-900">
        <ConnectionProvider>
          <ClientWalletProvider>
            <div className="flex flex-col mx-10 py-8">
              <div className="space-y-6">
                <div className="rounded-xl border border-zinc-800 bg-black p-8">
                  {children}
                </div>
              </div>

              <div className="col-start-3 col-end-4 mt-28 flex items-center justify-center">
                <div className="text-sm text-zinc-600">
                  Created by miester.
                </div>
              </div>
            </div>
          </ClientWalletProvider>
        </ConnectionProvider>
      </body>
    </html>
  );
}
