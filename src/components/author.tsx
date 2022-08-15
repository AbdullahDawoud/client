import React, { useEffect } from 'react';
import { useGetAuthor } from '../data-hooks';
import BooksList from './books-list';

type Props = {
    id: string;
};
const Author = ({ id }: Props) => {
    const { isLoading, error, data: author } = useGetAuthor(id);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <pre>error: {error}</pre>;
    if (!author) return <div>Author not found</div>;

    console.log('>>Author:', author);

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
