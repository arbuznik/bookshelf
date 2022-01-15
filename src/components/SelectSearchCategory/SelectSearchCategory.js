import {Select} from "../Select/Select";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectSearchCategory, setSearchCategory} from "../SearchForm/searchFormSlice";
import {selectCategories} from "../../routes/listingBooksSlice";

export function SelectSearchCategory() {
  const bookCategories = useSelector(selectCategories);
  const value = useSelector(selectSearchCategory);
  const dispatch = useDispatch();

  function handleSelectCategory(category) {
    dispatch(setSearchCategory(category));
  }

  return (
    <Select options={bookCategories} name={'categoryFilter'} text={'Search category'} selected={value} onChange={handleSelectCategory}/>
  )
}