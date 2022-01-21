import './BookSnippet.css';
import {Link} from "react-router-dom";

export function BookSnippet({book}) {
  const bookId = book.id;
  const {
    title,
    authors,
    categories,
    imageLinks: {
      thumbnail,
    } = {},
  } = book.volumeInfo;

  return (
    <li className="bookSnippet">
      <Link className="bookSnippet__link"
            to={`/books/${bookId}`}>
        {thumbnail && <img className="bookSnippet__cover"
                           src={thumbnail}
                           alt={title}/>}
        <div className="bookSnippet__content">
          <h2 className="bookSnippet__title">{title}</h2>
          {authors && <p className="bookSnippet__author">{authors[0]}</p>}
          {categories && <p className="bookSnippet__category">{categories[0]}</p>}
        </div>
      </Link>
    </li>
  )
}