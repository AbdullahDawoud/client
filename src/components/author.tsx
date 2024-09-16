import { useQuery } from '@apollo/client';
import React, { FC, useEffect, useState } from 'react';
import { LoadSingleAuthorQuery } from '../graphql/queries/get-author';
import BooksList from './books-list';

type Props = {
    id: string;
};
const Author: FC<Props> = ({ id }) => {
    const { error, loading, data } = useQuery(LoadSingleAuthorQuery, { variables: { id } });
    const [author, setAuthor] = useState<any>();

    useEffect(() => {
        if (data) setAuthor(data.author);
    }, [data]);

    if (loading) return <div>Loading...</div>;
    if (error) return <pre>error: {error}</pre>;
    if (!author) return <div>Author not found</div>;

    return (
        <div className="author-row">
            <div className="flex flex-btw">
                <div>
                    <strong>{author.name}</strong>
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
