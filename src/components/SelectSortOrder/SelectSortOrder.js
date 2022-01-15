import {Select} from "../Select/Select";
import {useDispatch} from "react-redux";
import {setOrder} from '../../routes/listingBooksSlice'

export function SelectSortOrder() {
  const sortOptions = ['Relevance', 'Newest'];
  const dispatch = useDispatch();

  function handleChange(order) {
    dispatch(setOrder(order));
  }

  return (
    <Select options={sortOptions} name={'sortOrder'} text={'Sort by'} onChange={handleChange}/>
  )
}