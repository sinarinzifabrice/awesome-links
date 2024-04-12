import { makeS } 

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

    type Query {
        links: [Link]!
    }
`;