import type { AppProps } from "next/app";
import { Sepolia } from '@thirdweb-dev/chains';
import {ThirdwebProvider } from '@thirdweb-dev/react';
import HeadComponent from '../components/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={Sepolia} clientId={process.env.NEXT_PUBLIC_CLIENT_ID}>
      <HeadComponent/>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;