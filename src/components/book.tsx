import React from "react";
import { useGetBook } from "../data-hooks";
import "./book.scss";
type Props = {
  id: string;
};
const Book = ({ id }: Props) => {
  const { data: book, isLoading, error } = useGetBook(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <pre>error: {error}</pre>;

  return (
    <div className="book-wrapper">
      <img src={book.posterUrl} />
      <div className="book-details">
        <div className="title">{book.name}</div>
        <div className="label">{book.genre}</div>
        <div>
          by:
          <a href="#"> {book.author.name}</a>
        </div>
        <br />
        <div className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
          quidem deleniti quam delectus voluptates, non laudantium culpa
          quibusdam accusantium molestiae soluta ducimus nisi a voluptas
          possimus sit nesciunt, ab modi, impedit voluptatum laborum
          perferendis? Corporis molestiae mollitia nulla saepe ut deserunt
          eligendi minima ipsam deleniti architecto? Voluptatibus, qui rem.
          Voluptatibus!
        </div>
      </div>
    </div>
  );
};

export default Book;
