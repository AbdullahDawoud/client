import { graphql } from "gatsby";
import React, { useEffect } from "react";
import "./authors-list.scss";
import BooksList from "./books-list";

type Props = {
  data: any;
};

const AuthorsList = ({ data }: Props) => {
  return (
    <div className="authors-wrapper">
      {data?.booksStore?.authors?.map((author: any) => (
        <div className="author-row" key={author.name}>
          <div className="flex flex-btw">
            <div>
              <strong>{author.name}</strong>
              <span> {author.age} years old</span>
            </div>
          </div>

          <h4>Books ({author.books?.length || 0}):</h4>
          <div className="books">
            <BooksList books={author.books} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuthorsList;
