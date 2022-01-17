import './App.css';
import {Route, Routes} from "react-router-dom";
import Listing from "../routes/Listing";
import NotFoundPage from "../routes/NotFoundPage";
import Books from "../routes/Books";
import Home from "../routes/Home";
import Book from "../routes/Book";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'books'} element={<Books/>}>
        <Route index element={<Listing/>}/>
        <Route path={':bookId'} element={<Book/>}/>
      </Route>
      <Route path={'*'} element={<NotFoundPage/>}/>
    </Routes>
  );
}

export default App;



// TODO: module styles, SCSS
// TODO: react trunk. dont make api call on first page load. or make an index page
// TODO: multifilter category select
// TODO: При клике на карточку происходит переход на детальную страницу книги, на которой выводятся ее данные: изображение обложки, название, все категории, все авторы, описание.
// TODO: h1 doubles on book page. make separate header
// TODO: full sizes book cover => make additional api request
// TODO: html tag semantic + aria labels

//TODO: listing: изображения обложки книги, названия книги, названия категории и имен авторов. Если для книги приходит несколько категорий, то отображается только первая. Авторы отображаются все. Если не приходит какой-либо части данных, то вместо нее просто пустое место.
// TODO: Над блоком с карточками отображается количество найденных по запросу книг.
// TODO: Пагинация реализована по принципу 'load more'. Ниже блока с карточками находится кнопка 'Load more', по клику на нее к уже загруженным книгам подгружаются еще. Шаг пагинации - 30.


// https://github.com/fugr-ru/frontend-javascript-test-2