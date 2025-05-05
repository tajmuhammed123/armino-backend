const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
require("dotenv").config();

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: (err) => {
      console.error("GraphQL Error:", err);
      return err;
    },
  });

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    const { url } = await server.listen({ port: 4000 });
    console.log(`🚀 Server running at ${url}`);
  } catch (err) {
    console.error("❌ Server failed to start:", err);
  }
};

startServer();
