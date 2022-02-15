import styles from "./Books.module.scss"

import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"

import {fetchBooks, selectError, selectItems, selectStatus, selectTotalItems} from "./booksSlice"
import {incrementPage, selectSearchQuery} from "../../components/SearchForm/searchParamsSlice"

import {BookSnippet} from "../../components/BookSnippet/BookSnippet"
import {CategorySelect} from "../../components/CategorySelect/CategorySelect"
import {Button} from "../../components/Button/Button"
import {SortOrderSelect} from "../../components/SortOrderSelect/SortOrderSelect"
import Spinner from "../../components/Spinner/Spinner"
import {useNavigate} from "react-router-dom";

function Books() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const booksList = useSelector(selectItems)
  const booksCount = useSelector(selectTotalItems)

  const query = useSelector(selectSearchQuery)

  const pageStatus = useSelector(selectStatus)
  const errorMessage = useSelector(selectError)

  useEffect(() => {
    if (query === '') {
      navigate('/')
    }
  }, [query, navigate])

  const handleLoadMoreClick = () => {
    dispatch(incrementPage())
    dispatch(fetchBooks())
  }

  if (pageStatus === 'loading' || pageStatus ==='idle') {
    return <Spinner/>
  } else if (pageStatus === 'failed') {
    return <p>{errorMessage}</p>
  } else if (pageStatus === 'succeeded') {
    return (
      <>
        <div className={styles.searchOptions}>
          <CategorySelect/>
          <SortOrderSelect/>
        </div>
        <p className={styles.booksCount}>Showing {booksList.length} out of {booksCount} books</p>
        <ul className={styles.bookSnippets}>
          {booksList && booksList.map(book => {
            return <BookSnippet key={book.id}
                                book={book}/>
          })}
        </ul>
        {booksList.length < booksCount && <Button buttonText={'Load more'}
                                                  onClick={handleLoadMoreClick}/>}
      </>
    )
  }
}

export default Books