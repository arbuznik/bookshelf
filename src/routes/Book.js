import './Book.css'
import {useParams} from "react-router-dom"
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import Spinner from "../components/Spinner/Spinner"
import {fetchBook, selectItem} from "./booksSlice"

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
        <p className="book__reviews">
          {Array.from(Array(averageRating).keys()).map((val, i) => {
            return <span key={i} className="book__star">⭐</span>
          })} based on {ratingsCount} reviews</p>
      )
    }
  }

  return (
    false ? // TODO: dont forget this
      <Spinner/>
      :
      <div className="book">
        <h1 className="book__title">{title}</h1>
        <img src={large ? large : thumbnail} alt={title} className="book__cover"/>
        <div className="book__content">
          {authors && <ul className="book__authors">{authors.map((author, index) =>
            <p key={index} className="book__author">{author}</p>)}</ul>}
          {description && <p dangerouslySetInnerHTML={{__html: description}} className="book__description"/>}
          <Rating/>
          {categories && <ul className="book__categories">{categories.map((category, index) =>
            <p key={index} className="book__category">{category}</p>)}</ul>}
        </div>
      </div>
  )
}

export default Book