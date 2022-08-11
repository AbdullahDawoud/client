import { useQuery } from "react-query";
import axios from "axios";

const endpoint = "http://localhost:4000/graphql/";

const useGetBooks = () => {
  const booksQuery = `
  {
    books {
      name
      posterUrl
      author {
        name
      }
      genre
    }
  }
`;
  return useQuery(["books"], () => {
    return axios({
      url: endpoint,
      method: "POST",
      withCredentials: false,

      data: {
        query: booksQuery,
      },
    }).then((response) => {
      console.log("rrr", response);

      return response.data.data;
    });
  });
};
export default useGetBooks;

export const useGetAuthors = () => {
  const query = `
    {
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
  `;
  return useQuery(["authors"], () => {
    return axios({
      url: endpoint,
      method: "POST",
      withCredentials: false,

      data: {
        query: query,
      },
    }).then((response) => response.data.data);
  });
};

export const useGetBook = (id: string) => {
  const query = `
      {
        book(id: "${id}") {
            name
            posterUrl
            id
            genre
            author {
              name
            }
          }
      }
    `;
  return useQuery(["authors"], () => {
    return axios({
      url: endpoint,
      method: "POST",
      withCredentials: false,

      data: {
        query: query,
      },
    }).then((response) => response.data.data.book);
  });
};
