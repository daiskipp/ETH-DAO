import { Sepolia } from '@thirdweb-dev/chains';
import {ThirdwebProvider } from '@thirdweb-dev/react';
import type { AppProps } from 'next/app';
import HeadComponent from '../components/head';
import '../styles/globals.css';

const clientid = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={Sepolia} clientId={clientid}>
      <HeadComponent/>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;