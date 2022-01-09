class Api {
  constructor(key) {
    this.key = key;
  }

  getBooks(query, category) {
    const subject = category ? `+subject:${category}` : '';
    console.log('https://www.googleapis.com/books/v1/volumes?q=' + query + subject + `&key=${this.key}`)
    return fetch('https://www.googleapis.com/books/v1/volumes?q=' + query + subject + `&key=${this.key}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`Ошибка: ${response.status}`);
      })
  }

  handleError(err) {
    console.log(err);
  }
}

export const api = new Api('AIzaSyDXWUH7o0qX6TZ8922Cr-9CFDNL6LX0J04');

  // GET https://www.googleapis.com/books/v1/volumes?q=flowers+subject:keyes&key=yourAPIKey

  // https://www.googleapis.com/books/v1/volumes?q=harry+subject:keyes&key=AIzaSyDXWUH7o0qX6TZ8922Cr-9CFDNL6LX0J04
  //
  // {
  //   "kind": "books#volumes",
  //   "totalItems": 558,
  //   "items": [
  //   {
  //     "kind": "books#volume",
  //     "id": "K15bswEACAAJ",
  //     "etag": "UqZ0bOdJn5w",
  //     "selfLink": "https://www.googleapis.com/books/v1/volumes/K15bswEACAAJ",
  //     "volumeInfo": {
  //       "title": "Фантастические твари и где они обитают",
  //       "authors": [
  //         "Дж. К Роулинг"
  //       ],
  //       "publishedDate": "2017",
  //       "industryIdentifiers": [
  //         {
  //           "type": "ISBN_10",
  //           "identifier": "538912961X"
  //         },
  //         {
  //           "type": "ISBN_13",
  //           "identifier": "9785389129610"
  //         }
  //       ],
  //       "readingModes": {
  //         "text": false,
  //         "image": false
  //       },
  //       "pageCount": 148,
  //       "printType": "BOOK",
  //       "categories": [
  //         "Animals, Mythical"
  //       ],
  //       "maturityRating": "NOT_MATURE",
  //       "allowAnonLogging": false,
  //       "contentVersion": "preview-1.0.0",
  //       "panelizationSummary": {
  //         "containsEpubBubbles": false,
  //         "containsImageBubbles": false
  //       },
  //       "language": "ru",
  //       "previewLink": "http://books.google.ru/books?id=K15bswEACAAJ&dq=potter&hl=&cd=1&source=gbs_api",
  //       "infoLink": "http://books.google.ru/books?id=K15bswEACAAJ&dq=potter&hl=&source=gbs_api",
  //       "canonicalVolumeLink": "https://books.google.com/books/about/%D0%A4%D0%B0%D0%BD%D1%82%D0%B0%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D1%82%D0%B2%D0%B0%D1%80%D0%B8.html?hl=&id=K15bswEACAAJ"
  //     },
  //     "saleInfo": {
  //       "country": "RU",
  //       "saleability": "NOT_FOR_SALE",
  //       "isEbook": false
  //     },
  //     "accessInfo": {
  //       "country": "RU",
  //       "viewability": "NO_PAGES",
  //       "embeddable": false,
  //       "publicDomain": false,
  //       "textToSpeechPermission": "ALLOWED",
  //       "epub": {
  //         "isAvailable": false
  //       },
  //       "pdf": {
  //         "isAvailable": false
  //       },
  //       "webReaderLink": "http://play.google.com/books/reader?id=K15bswEACAAJ&hl=&printsec=frontcover&source=gbs_api",
  //       "accessViewStatus": "NONE",
  //       "quoteSharingAllowed": false
  //     }
  //   },