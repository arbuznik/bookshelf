import '../components/App.css'
import SearchForm from "../components/SearchForm/SearchForm"

function Home() {
  return (
    <div className="app">
      <main className="app__home-header">
        <h1 className="app__title">Bookshelf</h1>
        <SearchForm/>
      </main>
    </div>
  )
}

export default Home