import { graphql } from "gatsby";
import * as React from "react";
import BooksList from "../components/books-list";
import Layout from "../components/layout";
import "./index.scss";

export const query = graphql`
  query booksQuery {
    booksStore {
      books {
        name
        posterUrl
        author {
          name
        }
        genre
      }
    }
  }
`;

type Props = {
  data: any;
};

const IndexPage = ({ data }: Props) => {
  return (
    <Layout>
      <h3>Recent Books: </h3>
      <BooksList books={data.booksStore.books} />
    </Layout>
  );
};

export default IndexPage;
