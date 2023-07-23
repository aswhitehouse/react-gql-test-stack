/* eslint-disable no-undef */
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');

const books = [
  { id: '1', title: 'Harry Potter & The Chamber Of Secrets', author: 'JK Rowling' },
  { id: '2', title: 'Lord Of The Rings', author: 'JR Tolkien' },
  { id: '2', title: 'Little Red Riding Hood', author: 'Charles Perrault' },
];

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book!]!
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
};

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();
  app.use(cors());
  server.applyMiddleware({ app });

  const port = 4000;
  app.listen(port, () => {
    console.log(`GraphQL API server running at http://localhost:${port}${server.graphqlPath}`);
  });
};

startServer().catch((error) => {
  console.error('Error starting the server:', error);
});
