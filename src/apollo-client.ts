import {ApolloClient, gql, InMemoryCache, NormalizedCacheObject, useMutation} from '@apollo/client';

const client :ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'https://api.escuelajs.co/graphql',
  cache: new InMemoryCache()
})


export const REFRESH_TOKEN = gql`
  mutation rt($rToken: String!){
  refreshToken(
    refreshToken: $rToken
) {
    access_token
    refresh_token
  }
}
`;
export const AUTH_TOKEN = gql`
query {
  myProfile {
    id
    name
    avatar
  }
}
`;

export const  LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`;

export default client;