import styles from './BookSnippet.module.scss'
import {Link} from "react-router-dom"

export function BookSnippet({book}) {
  const bookId = book.id
  const {
    title,
    authors,
    categories,
    imageLinks: {
      thumbnail,
    } = {},
  } = book.volumeInfo

  return (
    <li className={styles.bookSnippet}>
      <Link className={styles.link}
            to={`/books/${bookId}`}>
        {thumbnail && <img className={styles.cover}
                           src={thumbnail}
                           alt={title}/>}
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          {authors && <p className={styles.author}>{authors[0]}</p>}
          {categories && <p className={styles.category}>{categories[0]}</p>}
        </div>
      </Link>
    </li>
  )
}