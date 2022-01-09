import './App.css';
import {Book} from "./Book/Book";
import {Input} from "./Input/Input";
import {Button} from "./Button/Button";
import {Select} from "./Select/Select";
import {mockData} from "./mockData";


function App() {
  const booksList = mockData.items;

  return (
    <div className="app">
      <header className="app__header">Google books</header>
      <main className="app__content">
        <div className="app__search-container">
          <div className="app__search">
            <Input placeholder={'Search for books'}/>
            <Button buttonText={'Search'}/>
          </div>
          <div className="app__search-options">
            <Select options={['art', 'science', 'culture']} name={'categoryFilter'} text={'Search category'}/>
            <Select options={['relevance', 'newest']} name={'sortOrder'} text={'Sort by'}/>
          </div>
        </div>
        <ul className="app__books">
          {booksList.map(book => {
            return <Book key={book.id} book={book}/>
          })}
        </ul>
        <Button buttonText={'Load more'}/>
      </main>
      <footer className="app__footer"/>
    </div>
  );
}

export default App;
