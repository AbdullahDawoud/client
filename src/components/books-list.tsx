import { navigate } from 'gatsby';
import React from 'react';
import { useGetBooks } from '../data-hooks';
import './books-list.scss';

type Props = {
    authorId?: string;
};

const BooksList = ({ authorId }: Props) => {
    const { data, isLoading, error } = useGetBooks(authorId);
    const books = data?.books;

    if (isLoading) return <div>Loading...</div>;
    if (error) return <pre>error: {error}</pre>;
    if (!books) return <div>No books</div>;

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
