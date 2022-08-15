import React, { FC, useEffect } from 'react';
import { useGetAuthor } from '../data-hooks';
import BooksList from './books-list';

type Props = {
    id: string;
};
const Author: FC<Props> = ({ id }) => {
    console.log('>>Author id:', id);

    const { isLoading, error, data: author } = useGetAuthor(id);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <pre>error: {error}</pre>;
    if (!author) return <div>Author not found</div>;

    // useEffect(() => {

    // }, [id])

    return (
        <div className="author-row">
            <div className="flex flex-btw">
                <div>
                    <strong>
                        {id} - {author.name}
                    </strong>
                    <span> {author.age} years old</span>
                </div>
            </div>

            <h4>Books ({author.books?.length || 0}):</h4>
            <div className="books">
                <BooksList authorId={author.id} />
            </div>
        </div>
    );
};

export default Author;
