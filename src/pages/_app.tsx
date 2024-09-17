import { AppProps } from 'next/app';
import ApolloProviderWrapper from '../apollo-provider';
import createApolloClient from '../apollo-client';

import '../styles/global.css'
import {ApolloClient, gql, InMemoryCache} from "@apollo/client";
const MyApp = ({ Component, pageProps }: AppProps) => {
  const client = new ApolloClient({
    uri: 'https://api.escuelajs.co/graphql',
    cache: new InMemoryCache()
  })



  return (
    <ApolloProviderWrapper initialApolloClient={client}>
      <Component {...pageProps} />
    </ApolloProviderWrapper>
  );
};

export default MyApp;