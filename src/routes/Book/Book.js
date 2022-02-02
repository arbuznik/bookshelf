import styles from './Book.module.scss'

import {useParams} from "react-router-dom"
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

import {fetchBook, selectItem} from "../Books/booksSlice"

import Spinner from "../../components/Spinner/Spinner"

function Book() {
  const dispatch = useDispatch()

  let {bookId} = useParams()
  // remove hash
  bookId = bookId.slice(0, -21)

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

  useEffect(() => {
    dispatch(fetchBook({bookId}))
  }, [bookId])
// TODO: empty page for direct books/id url with incorrect id

  const Rating = averageRating => {
    if (averageRating) {
      return (
        <p className={styles.reviews}>
          {Array.from(Array(averageRating).keys()).map((val, i) => {
            return <span key={i}
                         className={styles.star}>⭐</span>
          })} based on {ratingsCount} reviews</p>
      )
    }
  }

  return (
    false ? // TODO: dont forget this
      <Spinner/>
      :
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
  )
}

export default Book