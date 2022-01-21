import '../components/App.css';
import {Link, Outlet} from "react-router-dom";
import SearchForm from "../components/SearchForm/SearchForm";


function Layout() {
  return (
    <div className="app">
      <header className="app__header">
        <Link className='app__link' to={'/'}>
          <h3 className="app__title">Bookshelf</h3>
        </Link>
        <SearchForm/>
      </header>
      <main className="app__content">
        <Outlet/>
      </main>
      <footer className="app__footer"/>
    </div>
  );
}

export default Layout;
