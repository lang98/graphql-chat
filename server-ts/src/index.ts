import { GraphQLServer, PubSub } from "graphql-yoga";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import ChatResolver from "./resolver/chat";

export const pubsub = new PubSub();

async function setup() {
  const schema = await buildSchema({
    resolvers: [ChatResolver],
    emitSchemaFile: true,
  });
  const server = new GraphQLServer({ schema, context: { pubsub } });
  server.start(() => console.log("Server is running on http://localhost:4000"));
}

setup();
