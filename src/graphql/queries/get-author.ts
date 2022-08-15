import { gql } from '@apollo/client';

export const LoadSingleAuthorQuery = gql`
    query ($id: ID) {
        author(id: $id) {
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
