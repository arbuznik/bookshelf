import './App.css';
import {Route, Routes} from "react-router-dom";
import Books from "../routes/Books";
import NotFoundPage from "../routes/NotFoundPage";
import Layout from "../routes/Layout";
import Home from "../routes/Home";
import Book from "../routes/Book";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'books'} element={<Layout/>}>
        <Route index element={<Books/>}/>
        <Route path={':bookId'} element={<Book/>}/>
      </Route>
      <Route path={'*'} element={<NotFoundPage/>}/>
    </Routes>
  );
}

export default App;

// TODO: reducers actions naming like something already happened (postAdded)

// TODO: add animation on LoadMore button
// TODO: dont show "load more" if there is nothing more to load
// TODO: switching sorting to newest causes duplicate books in listings
// TODO: Пагинация реализована по принципу 'load more'. Ниже блока с карточками находится кнопка 'Load more', по клику на нее к уже загруженным книгам подгружаются еще. Шаг пагинации - 30.
// TODO: from book page link back to search results
// TODO: error page
// TODO: react trunk. dont make api call on first page load. or make an index page
// TODO: module styles, SCSS
// TODO: multifilter category select (check if api allows that)
// TODO: html tag semantic + aria labels
// TODO: loading animations for snippets // books
// TODO: select max results on listing

// https://github.com/fugr-ru/frontend-javascript-test-2