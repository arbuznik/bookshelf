import React, {useEffect} from 'react';
import {BookSnippet} from "../components/BookSnippet/BookSnippet";
import {Button} from "../components/Button/Button";
import {SelectSearchCategory} from "../components/SelectSearchCategory/SelectSearchCategory";
import {useDispatch, useSelector} from "react-redux";
import googleBooksApi from "../app/googleBookApi";
import {selectBooks, selectOrder, selectTotalBooksAmount, setBooks} from "./listingSlice";
import {selectSearchCategory, selectSearchQuery} from "../components/SearchForm/searchFormSlice";
import {SelectSortOrder} from "../components/SelectSortOrder/SelectSortOrder";

function Listing() {
  const dispatch = useDispatch();
  const booksList = useSelector(selectBooks);
  const searchQuery = useSelector(selectSearchQuery);
  const booksCount = useSelector(selectTotalBooksAmount);
  const searchCategory = useSelector(selectSearchCategory);
  const order = useSelector(selectOrder);

  useEffect(() => {
    googleBooksApi.getBooks({
      query: searchQuery,
      category: searchCategory,
      order: order,
    })
      .then(response => {
        dispatch(setBooks(response.data))
      })
      .catch(err => console.log(err))
      .then() // finally
  }, [searchQuery, searchCategory, order])

  return (
    <>
      <div className="app__search-options">
        <SelectSearchCategory/>
        <SelectSortOrder/>
      </div>
      <p className="app__books-count">Showing {booksList.length} out of {booksCount} books</p>
      <ul className="app__book-snippets">
        {booksList && booksList.map(book => {
          return <BookSnippet key={book.id} book={book}/>
        })}
      </ul>
      <Button buttonText={'Load more'}/>
    </>
  );
}

export default Listing;