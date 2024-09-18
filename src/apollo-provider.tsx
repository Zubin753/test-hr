import {ApolloClient, ApolloProvider, NormalizedCacheObject} from '@apollo/client';
import createApolloClient from './apollo-client';
import React, {ReactNode} from "react";

interface ApolloProviderWrapperProps {
  children: ReactNode;
  initialApolloClient?: ApolloClient<NormalizedCacheObject>;
}

const ApolloProviderWrapper: React.FC<ApolloProviderWrapperProps> = ({ children, initialApolloClient }) => {
  const client = initialApolloClient || createApolloClient;
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;