import * as React from "react";
import AuthorsList from "../components/authors-list";
import { useGetAuthors } from "../data-hooks";

const AuthorsPage = () => {
  const { data, isLoading, error } = useGetAuthors();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <pre>error: {error}</pre>;

  return (
    <>
      <h3>Authors: </h3>
      <AuthorsList data={data} />
    </>
  );
};

export default AuthorsPage;
