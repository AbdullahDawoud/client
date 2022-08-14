import { navigate } from 'gatsby';
import React from 'react';
import './books-list.scss';

type Props = {
  books: any[];
  path?: string;
};

const BooksList = ({ books }: Props) => {
  return (
    <div className="books-wrapper">
      {books.map((book: any) => (
        <div className="book" key={book.name} onClick={() => navigate(`/book/${book.id}`)}>
          <div>
            <img src={book.posterUrl} />
          </div>
          <div className="name">{book.name}</div>
          <div className="author">{book.author?.name}</div>
          <button>Buy</button>
        </div>
      ))}
    </div>
  );
};

export default BooksList;
