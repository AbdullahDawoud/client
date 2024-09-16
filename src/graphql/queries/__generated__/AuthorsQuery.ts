/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AuthorsQuery
// ====================================================

export interface AuthorsQuery_authors_books_author {
  __typename: "Author";
  id: string | null;
  name: string | null;
}

export interface AuthorsQuery_authors_books {
  __typename: "Book";
  id: string | null;
  name: string | null;
  posterUrl: string | null;
  author: AuthorsQuery_authors_books_author | null;
  genre: string | null;
}

export interface AuthorsQuery_authors {
  __typename: "Author";
  id: string | null;
  name: string | null;
  age: number | null;
  books: (AuthorsQuery_authors_books | null)[] | null;
}

export interface AuthorsQuery {
  authors: (AuthorsQuery_authors | null)[] | null;
}
