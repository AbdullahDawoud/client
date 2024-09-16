import { gql } from '@apollo/client';

export const LoadAuthorsQuery = gql`
    query AuthorsQuery {
        authors {
            id
            name
            age
            books {
                id
                name
                posterUrl
                author {
                    id
                    name
                }
                genre
            }
        }
    }
`;
