import './Book.css';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import googleBooksApi from "../app/googleBookApi";
import {selectIsLoading, setIsLoading} from "../app/statusSlice";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../components/Spinner/Spinner";

function Book() {
  const {bookId} = useParams();
  const [book, setBook] = useState({})
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const {
    volumeInfo: {
      title,
      authors,
      categories,
      description,
      imageLinks: {
        large,
        thumbnail,
      } = {},
    } = {},
  } = book;

  useEffect(() => {
    dispatch(setIsLoading(true));
    googleBooksApi.getBook(bookId)
      .then(response => {
        console.log(response.data);
        setBook(response.data);
      })
      .catch(err => console.log(err))
      .then(() => dispatch(setIsLoading(false)))
  }, [bookId])

  return (
    isLoading ?
      <Spinner/>
      :
      <div className="book">
        <h1 className="book__title">{title}</h1>
        <img src={large ? large : thumbnail} alt={title} className="book__cover"/>
        <div className="book__content">
          {authors && <ul className="book__authors">{authors.map((author, index) =>
            <p key={index} className="book__author">{author}</p>)}</ul>}
          {description && <p dangerouslySetInnerHTML={{__html: description}} className="book__description"></p>}
          {categories && <ul className="book__categories">{categories.map((category, index) =>
            <p key={index} className="book__category">{category}</p>)}</ul>}
        </div>
      </div>
  )
}

export default Book;