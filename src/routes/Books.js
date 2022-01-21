import React, {useEffect} from 'react';
import {BookSnippet} from "../components/BookSnippet/BookSnippet";
import {Button} from "../components/Button/Button";
import {CategorySelect} from "../components/CategorySelect/CategorySelect";
import {useDispatch, useSelector} from "react-redux";
import {fetchBooks, selectItems, selectTotalItems} from "./booksSlice";
import {
  incrementPage,
  selectMaxResults,
  selectOrder, selectPage,
  selectSearchCategory,
  selectSearchQuery
} from "../components/SearchForm/searchParamsSlice";
import {SortOrderSelect} from "../components/SortOrderSelect/SortOrderSelect";
import Spinner from "../components/Spinner/Spinner";

function Books() {
  const dispatch = useDispatch();

  const booksList = useSelector(selectItems);
  const booksCount = useSelector(selectTotalItems);

  const query = useSelector(selectSearchQuery);
  const category = useSelector(selectSearchCategory);
  const order = useSelector(selectOrder);
  const maxResults = useSelector(selectMaxResults);
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchBooks({query, category, order, maxResults, page}));
  }, [query, category, order, maxResults, page])

  const handleLoadMoreClick = () => {
    dispatch(incrementPage());
  };

  return (
    false ? // TODO: remove
      <Spinner/>
      :
      <>
        <div className="app__search-options">
          <CategorySelect/>
          <SortOrderSelect/>
        </div>
        <Button buttonText={'Load more'}
                onClick={handleLoadMoreClick}/>
        <p className="app__books-count">Showing {booksList.length} out of {booksCount} books</p>
        <ul className="app__book-snippets">
          {booksList && booksList.map(book => {
            return <BookSnippet key={book.id}
                                book={book}/>
          })}
        </ul>
        <Button buttonText={'Load more'}
                onClick={handleLoadMoreClick}/>
      </>
  );
}

export default Books;