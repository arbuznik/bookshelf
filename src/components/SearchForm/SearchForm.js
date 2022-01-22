import {Input} from "../Input/Input"
import {Button} from "../Button/Button"
import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {selectSearchQuery, updateSearchQuery} from "./searchParamsSlice"
import {useLocation, useNavigate} from "react-router-dom"

function SearchForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentUrl = useLocation()

  const [query, setQuery] = useState('')

  const currentQuery = useSelector(selectSearchQuery)

  useEffect(() => {
    if (currentUrl.pathname !== '/') {
      setQuery(currentQuery)
    }
  }, [])

  const handleSubmit = evt => {
    evt.preventDefault()

    dispatch(updateSearchQuery(query))
    navigate(`/books`)
  }

  const handleInputChange = value => {
    setQuery(value)
  }

  return <form className="app__search"
               onSubmit={handleSubmit}>
    <Input placeholder={"Search for books"}
           value={query}
           onChange={handleInputChange}/>
    <Button buttonText={"Search"}/>
  </form>
}

export default SearchForm