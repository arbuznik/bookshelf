import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://www.googleapis.com/books/v1/volumes',
    })
  }

  getBooksList(query='harry', category) {
    const startIndex = 0;
    const maxResults = 30; // max possible === 40
    const orderBy = 'relevance'; // relevance, newest

    const searchQuery = query.replace(/\s+/g, '+');
    const searchCategory = category && category !== 'All' ? `+subject:'${category}'` : '';
    const params = `&startIndex=${startIndex}&maxResults=${maxResults}&orderBy=${orderBy}`

    const url = `?q=` + searchQuery + searchCategory + params;

    console.log(url);
    return this.api.get(url)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))
    //   .then() // finally
  }

  // getBook(bookId = 'zyTCAlFPjgYC') {
  //   this.googleBooksApi.get(`/${bookId})
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  //     .then() // finally
  // }
}

const googleBooksApi = new Api();

export default googleBooksApi;

// TODO: error page
// TODO: add loader