import { makeSchema } from "nexus";
import { join } from "path";

export const schema = makeSchema({
    types: [],
    outputs: {
        typegen: join(
            process.cwd(),
            'node_modules',
            '@types',
            'nexus-typegen',
            'inex.d.ts'
        ),
        schema: join(process.cwd(), 'graphql', 'schema.graphql'),
    },
    contextType: {
        export: ""
    }
})