import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import process from "process";

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'http://host.docker.internal:52265/graphql/?populate=*',
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`
      }
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;