import axios from "axios";

class GoogleBooksApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://www.googleapis.com/books/v1/volumes',
    })
    this.maxResults = 30; // max possible === 40
  }

  getBooks({query, category, order = 'Relevance', page = 1}) {
    const searchQuery = query.replace(/\s+/g, '+')
    //
    // if (searchQuery === this.previousSearchQuery) {
    //   this.currentPage += 1;
    // } else {
    //   this.currentPage = 1;
    //    this.previousSearchQuery = searchQuery;
    // }

    const searchCategory = category && category !== 'All' ? `+subject:'${category}'` : '';
    const startIndex = (page * this.maxResults) - this.maxResults;
    const searchParams = `&startIndex=${startIndex}&maxResults=${this.maxResults}&orderBy=${order}`

    const url = `?q=` + searchQuery + searchCategory + searchParams;

    console.log('https://www.googleapis.com/books/v1/volumes' + url);
    return this.api.get(url)
  }

  getBook(bookId) {
    const url = `/` + bookId;
    console.log(url);
    return this.api.get(url);
  }
}
//
// class Api {
//   constructor() {
//     this.api = axios.create({
//       baseURL: 'https://www.googleapis.com/books/v1/volumes',
//     })
//   }
//
//   getBooksList(query='harry', category) {
//     const startIndex = 0;
//     const maxResults = 30; // max possible === 40
//     const orderBy = 'relevance'; // relevance, newest
//
//     const searchQuery = query.replace(/\s+/g, '+');
//     const searchCategory = category && category !== 'All' ? `+subject:'${category}'` : '';
//     const params = `&startIndex=${startIndex}&maxResults=${maxResults}&orderBy=${orderBy}`
//
//     const url = `?q=` + searchQuery + searchCategory + params;
//
//     console.log(url);
//     return this.api.get(url)
//
//   }
// }

const googleBooksApi = new GoogleBooksApi();

export default googleBooksApi;

// TODO: error page
// TODO: add loader