import React, { FC, ReactNode, useMemo } from 'react';
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { WalletAdapterNetwork } from './wallet-adapter-base';
import { clusterApiUrl } from '@solana/web3.js';
import { ConnectionProvider } from './wallet-adapter-react-native/ConnectionProvider';
// import { WalletModalProvider as ReactUIWalletModalProvider } from '@solana/wallet-adapter-react-ui';

const WalletContextProvider: FC<{ children: ReactNode }> = ({}) => {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network],
  );

  //   const { enqueueSnackbar } = useSnackbar();
  //   const onError = useCallback(
  //     (error: WalletError) => {
  //       enqueueSnackbar(
  //         error.message ? `${error.name}: ${error.message}` : error.name,
  //         { variant: 'error' },
  //       );
  //       console.error(error);
  //     },
  //     [enqueueSnackbar],
  //   );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect={autoConnect}>
        {/* <ReactUIWalletModalProvider>{children}</ReactUIWalletModalProvider> */}
      </WalletProvider>
    </ConnectionProvider>
  );
};

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <WalletContextProvider>{children}</WalletContextProvider>
);
