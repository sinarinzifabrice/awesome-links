import prisma from "../lib/prisma";

export const resolvers = {
    Query:{
        links : async (_parent, args,conte) => await prisma.link.findMany(),
    },
};