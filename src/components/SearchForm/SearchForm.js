import styles from "./SearchForm.module.scss"

import {createRef, useEffect, useState} from "react"
import {useLocation, useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"

import {selectSearchQuery, updateSearchQuery} from "./searchParamsSlice"

import {Input} from "../Input/Input"
import {Button} from "../Button/Button"
import {fetchBooks} from "../../routes/Books/booksSlice";

function SearchForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentUrl = useLocation()

  const inputRef = createRef()

  const [query, setQuery] = useState('')

  const currentQuery = useSelector(selectSearchQuery)

  useEffect(() => {
    if (currentUrl.pathname !== '/') {
      setQuery(currentQuery)
    }
  }, [currentUrl, currentQuery])

  const handleSubmit = evt => {
    evt.preventDefault()
    inputRef.current.blur()

    dispatch(updateSearchQuery(query))
    dispatch(fetchBooks())
    navigate(`/books`)
  }

  const handleInputChange = value => {
    setQuery(value)
  }

  return <form className={styles.searchForm}
               onSubmit={handleSubmit}>
    <Input ref={inputRef}
           placeholder={"Search for books"}
           value={query}
           onChange={handleInputChange}/>
    <Button buttonText={"Search"}
            hideOnMobile={true}/>
  </form>
}

export default SearchForm