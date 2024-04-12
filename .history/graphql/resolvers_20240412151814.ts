import prisma from "../lib/prisma";

export const resolvers = {
    Query:{
        links : async (_) => await prisma.link.findMany(),
    },
};