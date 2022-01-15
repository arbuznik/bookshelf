import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import ListingBooks from "../routes/ListingBooks";
import BookPage from "../routes/BookPage";
import NotFoundPage from "../routes/NotFoundPage";
import SearchForm from "./SearchForm/SearchForm";

function App() {
  // const [searchCategory, setSearchCategory] = useState('');


  // states needed
  // 1. user search query
  // 2. selected   category filter value
  // 3. selected sort order value
  // 4. total numbers of books in listing
  // 5. books in listing

  return (
    <div className="app">
      <header className="app__header">
        <Link className='app__link' to={'/'}>
          <h3 className="app__title">Bookshelf</h3>
        </Link>
        <SearchForm/>
      </header>
      <main className="app__content">
        <Routes>
          <Route path={'/'} element={<ListingBooks/>}/>
          <Route path={'/:bookId'} element={<BookPage/>}/>
          <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
      </main>
      <footer className="app__footer"/>
    </div>
  );
}

export default App;



// TODO: module styles, SCC