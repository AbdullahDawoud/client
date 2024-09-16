import { useQuery } from '@apollo/client';
import React, { FC, useEffect, useState } from 'react';
import { LoadAuthorsQuery } from '../graphql/queries/get-authors';
import Author from './Author';
import './authors-list.scss';

const AuthorsList: FC = () => {
    const { error, loading, data } = useQuery(LoadAuthorsQuery);
    const [author, setAuthor] = useState<any>();

    useEffect(() => {
        if (data) setAuthor(data.author);
    }, [data]);

    if (loading) return <div>Loading...</div>;
    if (error) return <pre>error: {error}</pre>;

    return (
        <div className="authors-wrapper">
            {data?.authors?.map((author: any) => (
                <Author key={author.id} id={author.id}></Author>
            ))}
        </div>
    );
};

export default AuthorsList;
