import './BookSnippet.css';
import {Link} from "react-router-dom";

export function BookSnippet({book}) {
  const bookId = book.id;
  const {title, authors, categories, imageLinks: {thumbnail}} = book.volumeInfo;


  return (
    <li className="bookSnippet">
      <Link to={`/book-${bookId}`}>
        <img className="bookSnippet__cover" src={thumbnail} alt={title}/>
      </Link>
        <div className="bookSnippet__content">
          <Link to={`/book-${bookId}`} className="app__link" >
            <h2 className="bookSnippet__title">{title}</h2>
          </Link>
          {authors && <p className="bookSnippet__author">{authors[0]}</p>}
          {categories && <p className="bookSnippet__category">{categories[0]}</p>}
      </div>
    </li>
  )
}

//TODO: listing: изображения обложки книги, названия книги, названия категории и имен авторов. Если для книги приходит несколько категорий, то отображается только первая. Авторы отображаются все. Если не приходит какой-либо части данных, то вместо нее просто пустое место.
// TODO: Над блоком с карточками отображается количество найденных по запросу книг.
// TODO: Пагинация реализована по принципу 'load more'. Ниже блока с карточками находится кнопка 'Load more', по клику на нее к уже загруженным книгам подгружаются еще. Шаг пагинации - 30.


// https://github.com/fugr-ru/frontend-javascript-test-2