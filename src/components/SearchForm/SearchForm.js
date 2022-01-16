import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectSearchQuery, setSearchQuery} from "./searchFormSlice";
import {useLocation, useNavigate} from "react-router-dom";

function SearchForm() {
  const [query, setQuery] = useState('');
  const currentQuery = useSelector(selectSearchQuery);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUrl = useLocation();

  useEffect(() => {
    if (currentUrl.pathname !== '/') {
      setQuery(currentQuery);
    }
  }, []);

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(setSearchQuery(query));
    navigate(`/books`);
  }

  function handleInputChange(value) {
    setQuery(value);
  }

  return <form className="app__search" onSubmit={handleSubmit}>
    <Input placeholder={"Search for books"} value={query} onChange={handleInputChange}/>
    <Button buttonText={"Search"}/>
  </form>;
}

export default SearchForm;