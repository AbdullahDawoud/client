import { useQuery } from 'react-query';
import axios from 'axios';

const endpoint = 'http://localhost:4000/graphql/';

export const useGetAllBooks = () => {
    const booksQuery = `
  {
    books {
      id
      name
      posterUrl
      author {
        id
        name
      }
      genre
    }
  }
`;
    return useQuery(['books'], () => {
        return axios({
            url: endpoint,
            method: 'POST',
            withCredentials: false,

            data: {
                query: booksQuery
            }
        }).then((response) => {
            console.log('rrr', response);

            return response.data.data;
        });
    });
};
export const useGetAuthors = () => {
    const query = `
    {
        authors {
          id
          name
          age
          books {
              id
              name
              posterUrl
              author {
                id
                name
              }
              genre
          }
        }
    }
  `;
    return useQuery(['authors'], () => {
        return axios({
            url: endpoint,
            method: 'POST',
            withCredentials: false,

            data: {
                query: query
            }
        }).then((response) => response.data.data);
    });
};

export const useGetBook = (id: string) => {
    const query = `
      {
        book(id: "${id}") {
          id
          name
          posterUrl
          genre
          author {
            id
            name
          }
        }
      }
    `;
    return useQuery(['book'], () => {
        return axios({
            url: endpoint,
            method: 'POST',
            withCredentials: false,

            data: {
                query: query
            }
        }).then((response) => response.data.data.book);
    });
};

export const useGetAuthor = (id: string) => {
    const query = `
      {
        author(id: "${id}") {
            id
            name
            age
            books {
                id
                name
                posterUrl
                author {
                  id
                  name
                }
                genre
            }
        }
      }
    `;
    return useQuery(['author'], () => {
        return axios({
            url: endpoint,
            method: 'POST',
            withCredentials: false,

            data: {
                query: query
            }
        }).then((response) => response.data.data.author);
    });
};

export const useGetBooks = (authorId?: string) => {
    if (!authorId) return useGetAllBooks();

    const query = `
    {
      author(id: "${authorId}") {
          id
          name
          age
          books {
              id
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
    return useQuery(['author'], () => {
        return axios({
            url: endpoint,
            method: 'POST',
            withCredentials: false,

            data: {
                query: query
            }
        }).then((response) => response.data.data.author);
    });
};
