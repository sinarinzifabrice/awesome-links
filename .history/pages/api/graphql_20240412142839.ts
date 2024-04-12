import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "../../graphql/schema";
import { resolvers } from "../../graphql/resolvers";
import Cors from 'mi'


const ApolloServer = new ApolloServer({typeDefs, resolvers});
const startServer = ApolloServer.start();

export default async function handler(req, res) {
    await startServer;

    await ApolloServer.createHandler({
        path: '/api/graphql',
    })(req, res);
}