import './App.css';
import {Input} from "./Input/Input";
import {Button} from "./Button/Button";
import {Routes, Route} from "react-router-dom";
import ListingBooks from "../routes/ListingBooks";
import BookPage from "../routes/BookPage";
import NotFoundPage from "../routes/NotFoundPage";


function App() {



  // states needed
  // 1. user search query
  // 2. selected category filter value
  // 3. selected sort order value
  // 4. total numbers of books in listing
  // 5. books in listing

  return (
    <div className="app">
      <header className="app__header">
        <h3 className="app__title">Bookshelf</h3>
        <div className="app__search">
          <Input placeholder={'Search for books'}/>
          <Button buttonText={'Search'}/>
        </div>
      </header>
      <main className="app__content">
        <Routes>
          <Route path={'/'} element={<ListingBooks />}/>
          <Route path={'/book-:bookId'} element={<BookPage/>}/>
          <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
      </main>
      <footer className="app__footer"/>
    </div>
  );
}

export default App;
