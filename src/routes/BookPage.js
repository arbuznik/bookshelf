import {Link} from "react-router-dom";
import {Book} from "../components/Book/Book";

function BookPage() {
  return (
    <>
      <Link to={'/'} className="app__link">Back to search results</Link>
      <Book/>
    </>
  );
}

export default BookPage;