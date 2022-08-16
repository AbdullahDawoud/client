import { gql } from '@apollo/client';

export const LoadSingleBookQuery = gql`
    query BookQuery($id: ID) {
        book(id: $id) {
            id
            name
            posterUrl
            genre
            author {
                id
                name
            }
        }
    }
`;
