import '../styles/tailwind.css';
import Layout from '../components/Layout';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apollo';

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <ApolloProvider>

    </ApolloProvider>
    
  );
}

export default MyApp;
