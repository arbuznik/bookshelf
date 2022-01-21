import axios from "axios";

export function api(path) {
  const baseURL = 'https://www.googleapis.com/books/v1/volumes';
  const endpoint = baseURL + path;

  console.log(endpoint);

  return axios.get(endpoint);
}

api.getBooks = ({query, category, order, maxResults, page}) => {
  const searchQuery = query.replace(/\s+/g, '+')
  const searchCategory = category && category !== 'All' ? `+subject:'${category}'` : '';
  const startIndex = (page * maxResults) - maxResults;
  const searchParams = `&startIndex=${startIndex}&maxResults=${maxResults}&orderBy=${order}`

  const path = `?q=` + searchQuery + searchCategory + searchParams;

  return api(path);
}

api.getBook = (bookId) => {
  const path = `/` + bookId;

  return api(path);
}

// TODO: make promises with wrappers




