import { graphql } from "gatsby";
import * as React from "react";
import AuthorsList from "../components/authors-list";
import Layout from "../components/layout";

export const query = graphql`
  query AuthorsQuery {
    booksStore {
      authors {
        name
        age
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
  }
`;

type Props = {
  data: any;
};

const AuthorsPage = ({ data }: Props) => {
  console.log(data);

  return (
    <Layout>
      <h3>Authors: </h3>
      <AuthorsList data={data} />
    </Layout>
  );
};

export default AuthorsPage;
