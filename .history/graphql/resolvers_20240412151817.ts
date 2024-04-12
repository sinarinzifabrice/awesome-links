import prisma from "../lib/prisma";

export const resolvers = {
    Query:{
        links : async (_parent) => await prisma.link.findMany(),
    },
};