import './Book.css';
import {useParams} from "react-router-dom";
import {mockData} from "../mockData";
import {useEffect} from "react";
import googleBooksApi from "../../app/Api";

export function Book() {
  const {bookId} = useParams();

  useEffect(() => {
    // api.getBook();
    googleBooksApi.getBooksList();
  })

  const book = mockData.items.find(book => book.id === bookId);
  const {title, authors, categories, description, imageLinks: {thumbnail}} = book.volumeInfo;

  return (
    <div className="book">
      <h1 className="book__title">{title}</h1>
      <img src={thumbnail} alt={title} className="book__cover"/>
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

// TODO: При клике на карточку происходит переход на детальную страницу книги, на которой выводятся ее данные: изображение обложки, название, все категории, все авторы, описание.

// TODO: h1 doubles on book page. make separate header

// TODO: full sizes book cover => make additional api request

// TODO: html tag semantic + aria labels