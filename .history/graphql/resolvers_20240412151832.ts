import prisma from "../lib/prisma";

export const resolvers = {
    Query:{
        links : async (_parent, args,contex) => await prisma.link.findMany(),
    },
};