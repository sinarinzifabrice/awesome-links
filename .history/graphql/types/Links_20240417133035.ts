import { objectType } from "nexus";
import { User } from "./User";

export const Link = objectType({
    name: 'Link',
    definition(t) {
        t.int('id');
        t.string('title');
        t.string('url');
        t.string('description');
        t.string('imageUrl');
        t.string('category');
        t.string('users', {
            type: user,
            async resolve(_parent, _args, ctx){
                return await ctx.prisma.link 
            }
        });
    },
});