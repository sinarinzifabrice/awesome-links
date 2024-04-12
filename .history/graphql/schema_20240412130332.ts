import { gql } from "apollo-server-micro";

export const typeDefs = gql`
    type Link {
        id: String
        title: String
        description: String
        url: String
        category: String
        imageURl: String
        users:[String]
    }

    type Query 
`