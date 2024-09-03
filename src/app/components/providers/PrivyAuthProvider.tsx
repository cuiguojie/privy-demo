'use client';

import { PrivyProvider } from '@privy-io/react-auth';

import { sepolia } from 'viem/chains';

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <PrivyProvider
      appId={ process.env.NEXT_PUBLIC_PRIVY_APP_ID as string }
      config={{
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
        },
        loginMethods: ['email', 'google'],
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
        defaultChain: sepolia,
      }}
    >
      {children}
    </PrivyProvider>
  );
}
