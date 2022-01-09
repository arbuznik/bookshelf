import './Book.css';

export function Book({book: {
  volumeInfo: {
    title,
    authors,
    categories,
    imageLinks: {
      thumbnail
    }
  }}}) {

  const category = categories ? categories[0] : '';
  const author = authors ? authors[0] : '';
  console.log(title)
  return (
    <li className="book">
      <img className="book__cover" src={thumbnail} alt={title}/>
      <div className="book__content">
        <p className="book__title">{title}</p>
        <p className="book__author">{author}</p>
        <p className="book__category">{category}</p>
      </div>
    </li>
  )
}

// изображения обложки книги, названия книги, названия категории и имен авторов. Если для книги приходит несколько категорий, то отображается только первая. Авторы отображаются все. Если не приходит какой-либо части данных, то вместо нее просто пустое место.