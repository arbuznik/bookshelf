import {useDispatch, useSelector} from "react-redux"

import {selectSearchCategory, updateSearchCategory} from "../SearchForm/searchParamsSlice"
import {fetchBooks, selectCategories} from "../../routes/Books/booksSlice"

import {Select} from "../Select/Select"

export function CategorySelect() {
  const dispatch = useDispatch()

  const bookCategories = useSelector(selectCategories)
  const currentCategory = useSelector(selectSearchCategory)

  const handleSelectCategory = category => {
    dispatch(updateSearchCategory(category))
    dispatch(fetchBooks())
  }

  return (
    <Select options={bookCategories}
            name={'categorySelect'}
            text={'Category'}
            onChange={handleSelectCategory}
            selected={currentCategory}/>
  )
}