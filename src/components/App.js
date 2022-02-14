import {Route, Routes} from "react-router-dom"

import Home from "../routes/Home/Home"
import Layout from "../routes/Layout/Layout"
import Books from "../routes/Books/Books"
import Book from "../routes/Book/Book"
import NotFoundPage from "../routes/NotFoundPage/NotFoundPage"

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'books'} element={<Layout/>}>
        <Route index element={<Books/>}/>
        <Route path={':bookId'} element={<Book/>}/>
      </Route>
      <Route path={'*'} element={<Layout/>}>
        <Route path={'*'} element={<NotFoundPage/>}/>
      </Route>
    </Routes>
  )
}

export default App


// TODO: add animation on LoadMore button. also disable while loading to prevent more presses
// TODO: dont show "load more" if there is nothing more to load
// TODO: error page
// TODO: html tag semantic + aria labels
// TODO: loading animations for snippets // books
// TODO: select max results on listing
// TODO: mobile. book page opens in scrolled down state

// https://github.com/fugr-ru/frontend-javascript-test-2