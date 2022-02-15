import {useDispatch, useSelector} from "react-redux"

import {selectOrder, updateOrder} from "../SearchForm/searchParamsSlice"

import {Select} from "../Select/Select"
import {fetchBooks} from "../../routes/Books/booksSlice";

export function SortOrderSelect() {
  const dispatch = useDispatch()

  const sortOptions = ['Relevance', 'Newest']
  const currentOption = useSelector(selectOrder)

  const handleChange = option => {
    dispatch(updateOrder(option))
    dispatch(fetchBooks())
  }

  return (
    <Select options={sortOptions}
            name={'sortOrder'}
            text={'Sort by'}
            onChange={handleChange}
            selected={currentOption}/>
  )
}