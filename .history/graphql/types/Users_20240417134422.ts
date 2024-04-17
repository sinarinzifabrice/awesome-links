import { enumType, objectType } from "nexus";
import { Link } from "./Links";

export const User = objectType({
    name: 'User',
    definition(t) {
        t.string('id');
        t.string('title');
        t.string('url');
        t.string('description');
        t.string('imageUrl');
        t.string('category');
        t.string('users', {
            type: Link,
            async resolve(parent, _args, ctx){
                return await ctx.prisma.link
                .findUnique({
                    where: {
                        id: parent.id,
                    },
                })
                .users();
            },
        });
    },
});