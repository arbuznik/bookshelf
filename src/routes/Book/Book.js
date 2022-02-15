import styles from './Book.module.scss'

import {useNavigate, useParams} from "react-router-dom"
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

import {fetchBook, selectError, selectItem, selectStatus} from "../Books/booksSlice"

import Spinner from "../../components/Spinner/Spinner"

function Book() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let {bookId} = useParams()
  bookId = bookId.slice(0, -21) // remove added hash

  const pageStatus = useSelector(selectStatus)
  const errorMessage = useSelector(selectError)

  const {
    volumeInfo: {
      title,
      authors,
      categories,
      description,
      averageRating,
      ratingsCount,
      imageLinks: {
        large,
        thumbnail,
      } = {},
    } = {},
  } = useSelector(selectItem)

  const BackToResultsButton = () => {
    return <button onClick={() => navigate(-1)} className={styles.backButton}>&#8592; Back to search results</button>
  }

  useEffect(() => {
    dispatch(fetchBook({bookId}))
  }, [bookId, dispatch])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (pageStatus === 'loading' || pageStatus ==='idle') {
    return (
      <>
        <BackToResultsButton/>
        <Spinner/>
      </>
    )
  } else if (pageStatus === 'failed') {
    return (
      <>
        <BackToResultsButton/>
        <p>{errorMessage}</p>
      </>
    )
  } else if (pageStatus === 'succeeded') {
    const Rating = () => {
      if (averageRating) {
        return (
          <p className={styles.reviews}>
            {Array.from(Array(parseInt(averageRating)).keys()).map((val, i) => {
              return <span key={i}
                           className={styles.star}>⭐</span>
            })} based on {ratingsCount} {ratingsCount === 1 ? 'review' : 'reviews'}</p>
        )
      } else {
        return null
      }
    }

    return (
      <>
        <BackToResultsButton/>
        <div className={styles.book}>
          <h1 className={styles.title}>{title}</h1>
          <img src={large ? large : thumbnail}
               alt={title}
               className={styles.cover}/>
          <div className={styles.content}>
            {authors && <ul>{authors.map((author, index) =>
              <p key={index}
                 className={styles.author}>{author}</p>)}</ul>}
            {description && <p dangerouslySetInnerHTML={{__html: description}}
                               className={styles.description}/>}
            <Rating/>
            {categories && <ul className={styles.categories}>{categories.map((category, index) =>
              <p key={index}
                 className={styles.category}>{category}</p>)}</ul>}
          </div>
        </div>
      </>
    )
  }
}

export default Book