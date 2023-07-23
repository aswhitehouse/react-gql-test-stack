import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000';

export const getBooks = async () => {
  const response = await axios.post(`${API_BASE_URL}/graphql`, {
    query: `
      query {
        books {
          id
          title
          author
        }
      }
    `,
  });
  return response.data.data.books;
};
