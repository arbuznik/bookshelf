import './Book.css';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import googleBooksApi from "../app/googleBookApi";

function Book() {
  const {bookId} = useParams();
  const [book, setBook] = useState({})

  useEffect(() => {
    googleBooksApi.getBook(bookId)
      .then(response => {
        console.log(response.data);
        setBook(response.data);
      })
      .catch(err => console.log(err))
      .then() //finally
  }, [bookId])

  const {
    volumeInfo: {
      title,
      authors,
      categories,
      description,
      imageLinks: {
        large
      } = {},
    } = {},
  } = book;

  return (
    <div className="book">
      <h1 className="book__title">{title}</h1>
      <img src={large} alt={title} className="book__cover"/>
      <div className="book__content">
        {authors && <ul className="book__authors">{authors.map((author, index) =>
          <p key={index} className="book__author">{author}</p>)}</ul>}
        {description && <p className="book__description">{description}</p>}
        {categories && <ul className="book__categories">{categories.map((category, index) =>
          <p key={index} className="book__category">{category}</p>)}</ul>}
      </div>
    </div>
  )
}

export default Book;