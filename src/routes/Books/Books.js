import styles from "./Books.module.scss"

import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"

import {fetchBooks, selectError, selectItems, selectStatus, selectTotalItems} from "./booksSlice"
import {
  incrementPage,
  selectMaxResults,
  selectOrder, selectPage,
  selectSearchCategory,
  selectSearchQuery
} from "../../components/SearchForm/searchParamsSlice"

import {BookSnippet} from "../../components/BookSnippet/BookSnippet"
import {CategorySelect} from "../../components/CategorySelect/CategorySelect"
import {Button} from "../../components/Button/Button"
import {SortOrderSelect} from "../../components/SortOrderSelect/SortOrderSelect"
import Spinner from "../../components/Spinner/Spinner"

function Books() {
  const dispatch = useDispatch()

  const booksList = useSelector(selectItems)
  const booksCount = useSelector(selectTotalItems)

  const query = useSelector(selectSearchQuery)
  const category = useSelector(selectSearchCategory)
  const order = useSelector(selectOrder)
  const maxResults = useSelector(selectMaxResults)
  const page = useSelector(selectPage)

  const pageStatus = useSelector(selectStatus)
  const errorMessage = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchBooks({query, category, order, maxResults, page}))
  }, [query, category, order, maxResults, page, dispatch])

  const handleLoadMoreClick = () => {
    dispatch(incrementPage())
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
        <Button buttonText={'Load more'}
                onClick={handleLoadMoreClick}/>
        <p className={styles.booksCount}>Showing {booksList.length} out of {booksCount} books</p>
        <ul className={styles.bookSnippets}>
          {booksList && booksList.map(book => {
            return <BookSnippet key={book.id}
                                book={book}/>
          })}
        </ul>
        <Button buttonText={'Load more'}
                onClick={handleLoadMoreClick}/>
      </>
    )
  }
}

export default Books