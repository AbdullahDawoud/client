/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BookQuery
// ====================================================

export interface BookQuery_book_author {
  __typename: "Author";
  id: string | null;
  name: string | null;
}

export interface BookQuery_book {
  __typename: "Book";
  id: string | null;
  name: string | null;
  posterUrl: string | null;
  genre: string | null;
  author: BookQuery_book_author | null;
}

export interface BookQuery {
  book: BookQuery_book | null;
}

export interface BookQueryVariables {
  id?: string | null;
}
