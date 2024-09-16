/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AuthorQuery
// ====================================================

export interface AuthorQuery_author_books_author {
  __typename: "Author";
  id: string | null;
  name: string | null;
}

export interface AuthorQuery_author_books {
  __typename: "Book";
  id: string | null;
  name: string | null;
  posterUrl: string | null;
  author: AuthorQuery_author_books_author | null;
  genre: string | null;
}

export interface AuthorQuery_author {
  __typename: "Author";
  id: string | null;
  name: string | null;
  age: number | null;
  books: (AuthorQuery_author_books | null)[] | null;
}

export interface AuthorQuery {
  author: AuthorQuery_author | null;
}

export interface AuthorQueryVariables {
  id?: string | null;
}
