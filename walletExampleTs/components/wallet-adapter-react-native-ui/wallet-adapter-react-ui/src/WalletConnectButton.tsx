import { useWallet } from '@solana/wallet-adapter-react';
import React, {FC} from 'react';
import {ButtonProps} from 'react-native';
import Button from './Button';

export const WalletConnectButton: FC<ButtonProps> = ({onPress, ...props}) => {

  return (
    <Button disabled={false} onPress={onPress} {...props}>
      Connect {/*  //{content} */}
    </Button>
  );
};
