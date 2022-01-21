import {Select} from "../Select/Select";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectSearchCategory, setSearchCategory} from "../SearchForm/searchParamsSlice";
import {selectCategories} from "../../routes/booksSlice";

export function CategorySelect() {
  const dispatch = useDispatch();

  const bookCategories = useSelector(selectCategories);
  const value = useSelector(selectSearchCategory);

  const handleSelectCategory = category => {
    dispatch(setSearchCategory(category));
  };

  return (
    <Select options={bookCategories}
            name={'sortOrder'}
            text={'Sort by'}
            onChange={handleSelectCategory}
            selected={value}/>
  )
}