import prisma from "../lib/prisma";

export const resolvers = {
    Query:{
        links : async (_parent, args,) => await prisma.link.findMany(),
    },
};