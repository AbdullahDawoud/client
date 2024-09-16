import { useQuery } from '@apollo/client';
import { navigate } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { LoadBooksQuery } from '../graphql/queries/get-books';
import './books-list.scss';

type Props = {
    authorId?: string;
};

const BooksList = ({ authorId }: Props) => {
    const { error, loading, data } = useQuery(LoadBooksQuery, {
        variables: { authorId: authorId || '' }
    });
    const [books, setBooks] = useState([]);

    useEffect(() => {
        if (data) setBooks(data.books);
    }, [data]);

    if (loading) return <div>Loading...</div>;
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
