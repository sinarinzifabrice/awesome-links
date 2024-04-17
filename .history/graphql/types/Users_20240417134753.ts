import { enumType, objectType } from "nexus";
import { Link } from "./Links";
import { Role } from "@prisma/client";

export const User = objectType({
    name: 'User',
    definition(t) {
        t.string('id');
        t.string('name');
        t.string('email');
        t.string('image');
        t.field('role', {type:Role});
        t.list.field('bookma', {
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