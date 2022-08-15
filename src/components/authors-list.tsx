import React from 'react';
import { useGetAuthors } from '../data-hooks';
import Author from './Author';
import './authors-list.scss';

const AuthorsList = () => {
    const { data, isLoading, error } = useGetAuthors();

    if (isLoading) return <div>Loading...</div>;
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
