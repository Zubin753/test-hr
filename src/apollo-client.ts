import {ApolloClient, gql, InMemoryCache} from '@apollo/client';



const client = new ApolloClient({
  uri: 'https://api.escuelajs.co/graphql',
  cache: new InMemoryCache()
})

export const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      name
      avatar
    }
  }
`;



export const SEND_REFRESH = gql`
  mutation refresh($token: String){
  refreshToken(
    refreshToken: $token
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