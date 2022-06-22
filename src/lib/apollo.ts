import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4obg9b11mht01z7dzhd74hz/master',
  cache: new InMemoryCache(),
})
