/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BooksQuery
// ====================================================

export interface BooksQuery_books_author {
  __typename: "Author";
  id: string | null;
  name: string | null;
}

export interface BooksQuery_books {
  __typename: "Book";
  id: string | null;
  name: string | null;
  posterUrl: string | null;
  author: BooksQuery_books_author | null;
  genre: string | null;
}

export interface BooksQuery {
  books: (BooksQuery_books | null)[] | null;
}

export interface BooksQueryVariables {
  authorId: string;
}
