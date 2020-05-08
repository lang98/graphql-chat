"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const chat_1 = require("./resolver/chat");
exports.pubsub = new graphql_yoga_1.PubSub();
async function setup() {
    const schema = await type_graphql_1.buildSchema({
        resolvers: [chat_1.default],
        emitSchemaFile: true,
    });
    const server = new graphql_yoga_1.GraphQLServer({ schema, context: { pubsub: exports.pubsub } });
    server.start(() => console.log("Server is running on http://localhost:4000"));
}
setup();
//# sourceMappingURL=index.js.map