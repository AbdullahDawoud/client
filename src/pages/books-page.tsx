import * as React from "react";
import BooksList from "../components/books-list";
import useGetBooks from "../data-hooks";

export const BooksPage = () => {
  const { data, isLoading, error } = useGetBooks();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <pre>error: {error}</pre>;

  return (
    <>
      <h3>Recent Books: </h3>
      <BooksList books={data.books} />
    </>
  );
};
