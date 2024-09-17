import { ApolloProvider } from '@apollo/client';
import createApolloClient from './apollo-client';

const ApolloProviderWrapper = ({ children, initialApolloClient }) => {
  const client = initialApolloClient || createApolloClient();

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;