const { ApolloClient, InMemoryCache } = require("@apollo/client");

export const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});
