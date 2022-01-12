import React from 'react';
import {Select} from "../components/Select/Select";
import {BookSnippet} from "../components/BookSnippet/BookSnippet";
import {Button} from "../components/Button/Button";
import {mockData} from "../components/mockData";

function ListingBooks() {
  const booksList = mockData.items;
  const bookCategories = ['Animals', 'Fiction', 'Nature'];
  const sortOptions = ['Relevance', 'Newest'];


  return (
    <>
      <div className="app__search-options">
        <Select options={bookCategories} name={'categoryFilter'} text={'Search category'}/>
        <Select options={sortOptions} name={'sortOrder'} text={'Sort by'}/>
      </div>
      <ul className="app__book-snippets">
        {booksList.map(book => {
          return <BookSnippet key={book.id} book={book}/>
        })}
      </ul>
      <Button buttonText={'Load more'}/>
    </>
  );
}

export default ListingBooks;