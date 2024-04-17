import { objectType } from "nexus";
import { User } from "./User";

export const Link = objectType({
    name: 'Link',
    definition(t) {
        t.string()
    },
});