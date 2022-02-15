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