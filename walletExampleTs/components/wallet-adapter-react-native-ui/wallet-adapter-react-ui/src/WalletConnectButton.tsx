import {useWallet} from '@solana/wallet-adapter-react';
import React, {FC, useCallback, useMemo} from 'react';
import {ButtonProps} from 'react-native';
import Button from './Button';

export const WalletConnectButton: FC<ButtonProps> = ({
  onPress,
  children,
  ...props
}) => {
  const {wallet, connect, connecting, connected} = useWallet();

  const handlePress = useCallback(
    event => {
      if (onPress) {
        onPress(event);
      }
      if (!event.defaultPrevented) {
        connect().catch(() => {});
      }
    },
    [onPress, connect],
  );

  const content = useMemo(() => {
    if (children) {
      return children;
    }
    if (connecting) {
      return 'Connecting ...';
    }
    if (connected) {
      return 'Connected';
    }
    if (wallet) {
      return 'Connect';
    }
    return 'Connect Wallet';
  }, [children, connecting, connected, wallet]);

  return (
    <Button disabled={false} onPress={handlePress} {...props}>
      {content}
    </Button>
  );
};
