import React from 'react';
import Layout from './components/layout';
import 'normalize.css';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => {
            alert(`Graphql error ${message}`);
        });
    }
});

const link = from([errorLink, new HttpLink({ uri: 'http://localhost:4000/graphql' })]);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
});

type Props = {
    children: Node;
};
const RootLayout = ({ children }: Props) => {
    return (
        <ApolloProvider client={client}>
            <Layout>{children}</Layout>
        </ApolloProvider>
    );
};

export default RootLayout;
