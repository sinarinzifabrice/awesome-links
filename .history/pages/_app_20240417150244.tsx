import '../styles/tailwind.css';
import Layout from '../components/Layout';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import apo

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
