import { Link, navigate } from 'gatsby';
import React from 'react';
import { useGetBook } from '../data-hooks';
import './book.scss';
type Props = {
    id?: string;
    path?: string;
};
const Book = ({ id }: Props) => {
    if (!id) return <>No id!!</>;
    const { data: book, isLoading, error } = useGetBook(id);

    if (isLoading) return <div>Loading...</div>;
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
                    <a onClick={() => open(`/author/${book?.author?.id}`, '_self')}>
                        {' '}
                        {book.author?.name}
                    </a>
                    <Link to={`/author/${book?.author?.id}`} state={{ author: null }}>
                        Open author
                    </Link>
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
