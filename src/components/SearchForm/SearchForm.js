import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setSearchQuery} from "./searchFormSlice";

function SearchForm() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(setSearchQuery(query));
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