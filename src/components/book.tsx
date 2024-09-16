import { useQuery } from '@apollo/client';
import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { LoadSingleBookQuery } from '../graphql/queries/get-book';
import { BookQuery, BookQuery_book } from '../graphql/queries/__generated__/BookQuery';
import { BooksQuery } from '../graphql/queries/__generated__/BooksQuery';
import './book.scss';
type Props = {
    id?: string;
    path?: string;
};
const Book = ({ id }: Props) => {
    const { error, loading, data } = useQuery<BookQuery>(LoadSingleBookQuery, {
        variables: { id }
    });
    const [book, setBook] = useState<BookQuery_book | null>();

    useEffect(() => {
        if (data) setBook(data.book);
    }, [data]);

    if (loading) return <div>Loading...</div>;
    if (error) return <pre>error: {error}</pre>;
    if (!book) return <div>Book not found</div>;

    return (
        <div className="book-wrapper">
            <img src={book.posterUrl} />
            <div className="book-details">
                <div className="title">{book.name}</div>
                <div className="label">{book.genre}</div>
                <div>
                    by:
                    <Link to={`/author/${book?.author?.id}`}>{book.author?.name}</Link>
                </div>
                <br />
                <div className="description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam quidem
                    deleniti quam delectus voluptates, non laudantium culpa quibusdam accusantium
                    molestiae soluta ducimus nisi a voluptas possimus sit nesciunt, ab modi, impedit
                    voluptatum laborum perferendis? Corporis molestiae mollitia nulla saepe ut
                    deserunt eligendi minima ipsam deleniti architecto? Voluptatibus, qui rem.
                    Voluptatibus!
                </div>
            </div>
        </div>
    );
};

export default Book;
